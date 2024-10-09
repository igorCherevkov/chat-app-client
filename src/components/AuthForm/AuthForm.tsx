import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLoginCircleFill } from "react-icons/ri";

import styles from "./AuthForm.module.css";

type AuthProps = {
  title: string;
  button: string;
  link: string;
  linkText: string;
  spanText: string;
};

export const AuthForm = (props: AuthProps) => {
  const handleSubmitForm = () => {};

  return (
    <div className={styles.formWrap}>
      <div className={styles.wrapContainer}>
        <form onSubmit={handleSubmitForm} className={styles.formContainer}>
          <h1 className={styles.formTitle}>{props.title}</h1>
          <div className={styles.formInputContainer}>
            <input
              type="email"
              className={styles.inputContainerInput}
              placeholder="Email"
              name="email"
              required
            />
            <MdEmail className={styles.inputContainerImg} />
          </div>
          <div className={styles.formInputContainer}>
            <input
              type="text"
              className={styles.inputContainerInput}
              placeholder="Login"
              name="login"
              required
            />
            <RiLoginCircleFill className={styles.inputContainerImg} />
          </div>
          <div className={styles.formInputContainer}>
            <input
              type="password"
              className={styles.inputContainerInput}
              placeholder="Password"
              name="password"
              required
            />
            <RiLockPasswordFill className={styles.inputContainerImg} />
          </div>
          <button type="submit" className={styles.inputContainerButton}>
            {props.button}
          </button>
          <div className={styles.inputContainerChangeForm}>
            <span className={styles.changeFormText}>{props.spanText}</span>
            <Link to={props.link} className={styles.changeFormLink}>
              {props.linkText}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
