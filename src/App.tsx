import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  CHAT_ROUTE,
  ERROR_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
} from "./consts/routes";
import { HomePage } from "./pages/HomePage/HomePage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { LoginPage } from "./pages/LoginPage";
import { AppDispatch } from "./redux/store";
import { checkAuth } from "./redux/actions/authActions";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { fetchUsers } from "./redux/actions/usersActions";
import { RootState } from "./redux/reducers/rootReducer";
import { Roles } from "./types";
import { ChatPage } from "./pages/ChatPage/ChatPage";

export const App = () => {
  const user = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkAuth());
    if (user.user?.role === Roles.admin) {
      dispatch(fetchUsers());
    }
  }, [dispatch, user.user?.role]);

  return (
    <Router>
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage />}></Route>
        <Route path={REGISTRATION_ROUTE} element={<RegistrationPage />}></Route>
        <Route path={LOGIN_ROUTE} element={<LoginPage />}></Route>
        <Route path={PROFILE_ROUTE} element={<ProfilePage />}></Route>
        <Route path={CHAT_ROUTE} element={<ChatPage />}></Route>
        <Route path={ERROR_ROUTE} element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};
