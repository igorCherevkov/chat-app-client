import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch } from "../../redux/store";
import { createChat } from "../../redux/actions/chatsActions";
import { HOME_ROUTE } from "../../consts/routes";
import styles from "./Modals.module.css";

type GroupChatModalProps = { userId?: number; onClose: () => void };

export const GroupChatModal = ({ userId, onClose }: GroupChatModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleCreate: React.FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();

      if (!userId) {
        console.error("not user id");
        return;
      }

      const formData = new FormData(event.target as HTMLFormElement);
      const { logins } = Object.fromEntries(formData) as Record<string, string>;

      const payload = {
        id: userId,
        otherLogin: logins.split(", "),
      };

      try {
        dispatch(createChat(payload));
        onClose();
        navigate(HOME_ROUTE);
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, userId, navigate, onClose]
  );

  return (
    <div className={styles.modalContainer}>
      <h1>Create group chat</h1>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Enter the logins"
          name="logins"
          required
        />
        <button type="submit">Create</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};
