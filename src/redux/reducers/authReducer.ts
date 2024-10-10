import { AuthActions } from "../../types/redux/authTypes";
import {
  AUTH_FAILURE,
  AUTH_SUCCESS,
  CHECK_AUTH,
  LOGOUT,
} from "../actions/authActions";
import {
  CHANGE_PROFILE_FAILURE,
  CHANGE_PROFILE_REQUEST,
  CHANGE_PROFILE_SUCCESS,
} from "../actions/usersActions";

const initialState = {
  isAuth: false,
  isLoading: false,
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, isAuth: true, user: action.payload, isLoading: false };
    case AUTH_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        user: null,
        error: null,
        isLoading: false,
      };
    case CHECK_AUTH:
      return { ...state, isLoading: true };
    case CHANGE_PROFILE_REQUEST:
      return { ...state, isLoading: true };
    case CHANGE_PROFILE_SUCCESS:
      return { ...state, user: action.payload, isLoading: false };
    case CHANGE_PROFILE_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
