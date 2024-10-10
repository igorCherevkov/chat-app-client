import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";

import { RootState } from "../../redux/reducers/rootReducer";
import { Header } from "../../components/Header/Header";
import { AppDispatch } from "../../redux/store";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { changeProfileRequest } from "../../redux/actions/usersActions";
import { HOME_ROUTE } from "../../consts/routes";
import styles from "./ProfilePage.module.css";

export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();

      const formData = new FormData(event.target as HTMLFormElement);

      const payload = {
        id: user.user?.id,
        formData,
      };

      try {
        dispatch(changeProfileRequest(payload));
        navigate(HOME_ROUTE);
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, user.user?.id, navigate]
  );

  return (
    <>
      {!user.isLoading && !user.isAuth && <ErrorPage />}
      {!user.isLoading && user.isAuth && (
        <div className={styles.profileContainer}>
          <Header />
          <div className={styles.profileSection}>
            <form
              onSubmit={handleSubmitForm}
              className={styles.changeProfileForm}
            >
              <h1 className={styles.changeProfileTitle}>Change profile</h1>
              <div className={styles.formInputContainer}>
                <input
                  type="password"
                  className={styles.inputContainerInput}
                  placeholder="Old password"
                  name="oldPassword"
                />
                <RiLockPasswordFill className={styles.inputContainerImg} />
              </div>
              <div className={styles.formInputContainer}>
                <input
                  type="password"
                  className={styles.inputContainerInput}
                  placeholder="New password"
                  name="newPassword"
                />
                <RiLockPasswordFill className={styles.inputContainerImg} />
              </div>
              <label className={styles.fileInput}>
                <input type="file" name="avatar" />
                <span>Загрузить аватар</span>
              </label>
              <button type="submit" className={styles.formButton}>
                Сохранить
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
