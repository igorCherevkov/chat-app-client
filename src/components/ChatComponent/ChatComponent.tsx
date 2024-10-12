import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/reducers/rootReducer";
import { AppDispatch } from "../../redux/store";
import { fetchChats } from "../../redux/actions/chatsActions";
import { ChatItem } from "../ChatItem/ChatItem";
import { GroupChatModal } from "../Modals/GroupChatModal";
import { PersonalChatModal } from "../Modals/PersonalChatModal";
import { ChatWindow } from "../ChatWindow/ChatWindow";
import styles from "./ChatComponent.module.css";

export const ChatComponent = ({
  isChat,
  chatId,
}: {
  isChat: boolean;
  chatId?: string;
}) => {
  const user = useSelector((state: RootState) => state.authReducer);
  const chats = useSelector((state: RootState) => state.chatsReducer);
  const dispatch = useDispatch<AppDispatch>();

  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const [activeChatId, setActiveChatId] = useState<number | null>(null);

  useEffect(() => {
    if (user.user?.id) {
      dispatch(fetchChats(user.user.id));
    }
  }, [dispatch, user.user?.id]);

  useEffect(() => {
    if (chatId) {
      setActiveChatId(Number(chatId));
    }
  }, [chatId]);

  const handleGroupModalOpen = () => {
    setIsGroupModalOpen(true);
  };

  const handleModalOpen = () => {
    setIsChatModalOpen(true);
  };

  const handleCloseModals = () => {
    setIsChatModalOpen(false);
    setIsGroupModalOpen(false);
  };

  const handleChatItemClick = (id: number) => {
    setActiveChatId(id);
  };

  return (
    <>
      {user.isAuth ? (
        <div className={styles.chatContainer}>
          <div className={styles.chatSidebar}>
            <div className={styles.chatsSidebar}>
              {chats.chats &&
                chats.chats.map((chat) => (
                  <ChatItem
                    key={chat.id}
                    chat={chat}
                    isActive={activeChatId === chat.id}
                    onClick={handleChatItemClick}
                  />
                ))}
            </div>
            <div className={styles.buttonsSidebar}>
              <button
                className={`${styles.buttonSidebar} ${styles.buttonSidebarBlack}`}
                onClick={handleGroupModalOpen}
              >
                Create group
              </button>
              <button
                className={styles.buttonSidebar}
                onClick={handleModalOpen}
              >
                Write
              </button>
            </div>

            {isGroupModalOpen && (
              <GroupChatModal
                userId={user.user?.id}
                onClose={handleCloseModals}
              />
            )}

            {isChatModalOpen && (
              <PersonalChatModal
                userId={user.user?.id}
                onClose={handleCloseModals}
              />
            )}
          </div>
          {isChat && <ChatWindow chatId={chatId} />}
          {!isChat && <div className={styles.selectChat}>select chat</div>}
        </div>
      ) : (
        <span className={styles.mainContainerJoin}>
          Join our site to use chat
        </span>
      )}
    </>
  );
};
