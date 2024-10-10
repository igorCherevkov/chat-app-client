import { User } from "../../types";

export const CHANGE_PROFILE_REQUEST = "CHANGE_PROFILE_REQUEST";
export const CHANGE_PROFILE_SUCCESS = "CHANGE_PROFILE_SUCCESS";
export const CHANGE_PROFILE_FAILURE = "CHANGE_PROFILE_FAILURE";
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const changeProfileRequest = (payload: {
  id: number | undefined;
  formData: FormData;
}) => ({
  type: CHANGE_PROFILE_REQUEST,
  payload,
});

export const changeProfileSuccess = (payload: User) => ({
  type: CHANGE_PROFILE_SUCCESS,
  payload,
});

export const changeProfileFailure = (error: string) => ({
  type: CHANGE_PROFILE_FAILURE,
  payload: error,
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const fetchUsersSuccess = (payload: User[]) => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailure = (payload: string) => ({
  type: FETCH_USERS_FAILURE,
  payload,
});
