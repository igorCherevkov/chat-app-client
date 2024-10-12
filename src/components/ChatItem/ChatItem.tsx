import { useNavigate } from "react-router-dom";

import { Chat } from "../../types";
import styles from "./ChatItem.module.css";

export const ChatItem = ({
  chat,
  isActive,
  onClick,
}: {
  chat: Chat;
  isActive: boolean;
  onClick: (id: number) => void;
}) => {
  const navigate = useNavigate();

  const isEmpty = !chat.messages || chat.messages.length === 0;

  const onItemClick = () => {
    onClick(chat.id);
    navigate(`/chat/${chat.id}`);
  };

  return (
    <div
      className={`${styles.chatItemContainer} ${isActive ? styles.active : ""}`}
      onClick={onItemClick}
    >
      {!chat.isGroup && chat.users[0].avatar ? (
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${chat.users[0].avatar}`}
          className={styles.chatContainerImg}
          alt="user avatar"
        />
      ) : (
        <div className={styles.chatContainerImg}>{chat.id}</div>
      )}
      <div className={styles.chatContainerMeta}>
        <div className={styles.metaName}>
          {chat.isGroup ? <>Group chat with: </> : <></>}

          {chat.users.map((user, index) => (
            <span className={styles.metaName} key={user.id}>
              {user?.login}
              {chat.users.length - 1 > index && ", "}
            </span>
          ))}
        </div>
        <div className={styles.metaMessage}>
          {isEmpty ? (
            <>There are no messages yet</>
          ) : (
            <>{chat.messages?.[0].message}</>
          )}
        </div>
      </div>
    </div>
  );
};
