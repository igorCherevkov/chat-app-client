import { Roles, User } from "../";
import {
  AUTH,
  AUTH_FAILURE,
  AUTH_SUCCESS,
  CHECK_AUTH,
  LOGOUT,
} from "../../redux/actions/authActions";
import {
  ChangeProfileFailure,
  ChangeProfileRequest,
  ChangeProfileSuccess,
} from "./usersTypes";

export type DataWithToken = {
  id: number;
  login: string;
  avatar: string | null;
  role: Roles;
  token: string;
};

export type AuthSuccess = {
  type: typeof AUTH_SUCCESS;
  payload: User;
};

export type AuthFailure = {
  type: typeof AUTH_FAILURE;
  payload: string;
};

export type Logout = {
  type: typeof LOGOUT;
};

export type CheckAuth = {
  type: typeof CHECK_AUTH;
};

export type AuthActions =
  | AuthSuccess
  | AuthFailure
  | Logout
  | CheckAuth
  | ChangeProfileRequest
  | ChangeProfileSuccess
  | ChangeProfileFailure;

export type Auth = {
  type: typeof AUTH;
  payload: {
    login: string;
    password: string;
    isRegistration: boolean;
  };
};
