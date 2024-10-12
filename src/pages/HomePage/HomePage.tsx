import { Header } from "../../components/Header/Header";
import { ChatComponent } from "../../components/ChatComponent/ChatComponent";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <Header />
      <section className={styles.mainContainer}>
        <ChatComponent isChat={false} />
      </section>
    </div>
  );
};
