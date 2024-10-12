import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { usersReducer } from "./usersReducer";
import { chatsReducer } from "./chatsReducer";

export const rootReducer = combineReducers({
  authReducer,
  usersReducer,
  chatsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
