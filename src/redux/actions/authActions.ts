import { Auth, DataWithToken } from "../../types/redux/authTypes";

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const CHECK_AUTH = "CHECK_AUTH";
export const LOGOUT = "LOGOUT";
export const AUTH = "AUTH";
export const FETCH_AUTH = "FETCH_AUTH";

export const auth = (
  login: string,
  password: string,
  isRegistration: boolean
): Auth => ({
  type: AUTH,
  payload: {
    login,
    password,
    isRegistration,
  },
});

export const authSuccess = (payload: DataWithToken) => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authFailure = (payload: string) => ({
  type: AUTH_FAILURE,
  payload,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const logout = () => ({
  type: LOGOUT,
});
