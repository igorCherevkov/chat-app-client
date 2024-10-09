import { Header } from "../../components/Header/Header";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <Header />
      <section className={styles.mainContainer}>
        <span className={styles.mainContainerJoin}>
          Join our site to use chat
        </span>
      </section>
    </div>
  );
};
