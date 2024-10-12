import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { IoIosAddCircleOutline } from "react-icons/io";

import { RootState } from "../../redux/reducers/rootReducer";
import { getChatMessages } from "../../http/chats";
import { Message } from "../../types";
import { AppDispatch } from "../../redux/store";
import { updateChatMessage } from "../../redux/actions/chatsActions";
import styles from "./ChatWindow.module.css";

export const ChatWindow = ({ chatId }: { chatId?: string }) => {
  const user = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch<AppDispatch>();

  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const socketRef = useRef<Socket | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isEmpty = messages.length === 0;

  useEffect(() => {
    const fetchMessages = async () => {
      if (!chatId) return;

      try {
        const response = await getChatMessages(Number(chatId));
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [chatId]);

  useEffect(() => {
    socketRef.current = io(import.meta.env.VITE_BACKEND_URL);

    socketRef.current.emit("joinChat", chatId);

    socketRef.current.on("message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);

      dispatch(updateChatMessage(Number(chatId), message));
    });

    return () => {
      socketRef.current?.off("message");
      socketRef.current?.disconnect();
    };
  }, [chatId, dispatch]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() && chatId) {
      const messageData = {
        chatId,
        userId: user.user?.id,
        message: newMessage,
      };

      socketRef.current?.emit("sendMessage", messageData);
      setNewMessage("");
      setImage(null);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const sendImage = async () => {
    if (image && chatId) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;

        const messageData = {
          chatId,
          userId: user.user?.id,
          image: base64String.split(",")[1],
          fileName: image.name,
        };

        socketRef.current?.emit("sendImage", messageData);

        setNewMessage("");
        setImage(null);
      };

      reader.readAsDataURL(image);
    }
  };

  return (
    <div className={styles.chatWindowContainer}>
      <div className={styles.chatMessages} ref={chatContainerRef}>
        {!isEmpty &&
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.messageContainer} ${
                msg.userId === user.user?.id
                  ? styles.myMessageContainer
                  : styles.contactMessageContainer
              }`}
            >
              {msg.user?.avatar ? (
                <img
                  className={styles.messageUserImg}
                  src={`${import.meta.env.VITE_BACKEND_URL}/${
                    msg.user?.avatar
                  }`}
                  alt="user img"
                />
              ) : (
                <div className={styles.messageUserImg}>{msg.user?.id}</div>
              )}
              <div
                className={`${styles.message} ${
                  msg.userId === user.user?.id
                    ? styles.myMessage
                    : styles.contactMessage
                }`}
              >
                {msg.imageUrl ? (
                  <img
                    className={styles.msgImg}
                    src={msg.imageUrl}
                    alt="chat"
                  />
                ) : (
                  msg.message
                )}
              </div>
            </div>
          ))}
        {isEmpty && (
          <div className={styles.noMessages}>There are no messages yet</div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.chatInput}>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        <button
          className={styles.addImageButton}
          onClick={() => fileInputRef.current?.click()}
        >
          <IoIosAddCircleOutline size={24} />
        </button>
        <input
          type="text"
          className={styles.inputMessage}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          className={styles.sendButton}
          onClick={image ? sendImage : sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};
