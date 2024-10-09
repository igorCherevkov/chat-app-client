import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  LOGOUT,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
} from "./consts/routes";
import { HomePage } from "./pages/HomePage/HomePage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { LoginPage } from "./pages/LoginPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage />}></Route>
        <Route path={REGISTRATION_ROUTE} element={<RegistrationPage />}></Route>
        <Route path={LOGIN_ROUTE} element={<LoginPage />}></Route>
        <Route path={PROFILE_ROUTE}></Route>
        <Route path={LOGOUT} element={<Outlet />} />
      </Routes>
    </Router>
  );
};
