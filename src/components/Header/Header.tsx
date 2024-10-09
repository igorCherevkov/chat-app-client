import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LOGIN_ROUTE, LOGOUT, REGISTRATION_ROUTE } from "../../consts/routes";
import styles from "./Header.module.css";
import { RootState } from "../../redux/reducers/rootReducer";
import { AppDispatch } from "../../redux/store";
import { logout } from "../../redux/actions/authActions";

export const Header = () => {
  const user = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    dispatch(logout());
    window.location.reload();
  }, [dispatch]);

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerLogo}>ChatApp</h1>
      <div className={styles.headerButtons}>
        {user.isAuth ? (
          <>
            <Link
              to={LOGOUT}
              className={styles.headerButton}
              onClick={handleLogout}
            >
              Выйти
            </Link>
          </>
        ) : (
          <>
            <Link to={REGISTRATION_ROUTE} className={styles.headerButton}>
              Registration
            </Link>
            <Link to={LOGIN_ROUTE} className={styles.headerButton}>
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
