import { useParams } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { ChatComponent } from "../../components/ChatComponent/ChatComponent";
import styles from "./ChatPage.module.css";

export const ChatPage = () => {
  const { id } = useParams();

  return (
    <div className={styles.chatPageContainer}>
      <Header />
      <section className={styles.mainContainer}>
        <ChatComponent isChat={true} chatId={id} />
      </section>
    </div>
  );
};
