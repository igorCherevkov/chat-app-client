import { UsersAction } from "../../types/redux/usersTypes";
import {
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from "../actions/usersActions";

const initialState = {
  isLoading: false,
  users: [],
  error: null,
};

export const usersReducer = (state = initialState, action: UsersAction) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, isLoading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, isLoading: false, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
