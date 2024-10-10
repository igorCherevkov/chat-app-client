import { User } from "../";
import {
  CHANGE_PROFILE_FAILURE,
  CHANGE_PROFILE_REQUEST,
  CHANGE_PROFILE_SUCCESS,
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from "../../redux/actions/usersActions";

export type ChangeProfileRequest = {
  type: typeof CHANGE_PROFILE_REQUEST;
  payload: {
    id: number;
    formData: FormData;
  };
};

export type ChangeProfileSuccess = {
  type: typeof CHANGE_PROFILE_SUCCESS;
  payload: User;
};

export type ChangeProfileFailure = {
  type: typeof CHANGE_PROFILE_FAILURE;
  payload: string;
};

export type FetchUsers = {
  type: typeof FETCH_USERS;
};

export type FetchUsersSuccess = {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
};

export type FetchUsersFailure = {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
};

export type UsersAction = FetchUsers | FetchUsersSuccess | FetchUsersFailure;
