import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  authReducer,
  usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
