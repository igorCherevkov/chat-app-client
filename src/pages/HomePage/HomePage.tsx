import { useSelector } from "react-redux";

import { Header } from "../../components/Header/Header";
import { RootState } from "../../redux/reducers/rootReducer";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const user = useSelector((state: RootState) => state.authReducer);

  return (
    <div className={styles.homePageContainer}>
      <Header />
      <section className={styles.mainContainer}>
        {user.isAuth ? (
          <div className={styles.chatContainer}>Чат</div>
        ) : (
          <span className={styles.mainContainerJoin}>
            Join our site to use chat
          </span>
        )}
      </section>
    </div>
  );
};
