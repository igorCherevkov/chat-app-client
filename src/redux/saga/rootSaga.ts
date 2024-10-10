import { all } from "redux-saga/effects";

import { watchAuthSaga } from "./authSaga";
import { watchUsersSagas } from "./usersSaga";

export function* rootSaga() {
  yield all([watchAuthSaga(), watchUsersSagas()]);
}
