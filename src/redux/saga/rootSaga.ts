import { all } from "redux-saga/effects";

import { watchAuthSaga } from "./authSaga";
import { watchUsersSagas } from "./usersSaga";
import { watchChatsSagas } from "./chatsSaga";

export function* rootSaga() {
  yield all([watchAuthSaga(), watchUsersSagas(), watchChatsSagas()]);
}
