import { Link } from "react-router-dom";

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../consts/routes";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerLogo}>ChatApp</h1>
      <div className={styles.headerButtons}>
        <Link to={REGISTRATION_ROUTE} className={styles.headerButton}>
          Registration
        </Link>
        <Link to={LOGIN_ROUTE} className={styles.headerButton}>
          Login
        </Link>
      </div>
    </div>
  );
};
