import { all } from "redux-saga/effects";

import { watchAuthSaga } from "./authSaga";

export function* rootSaga() {
  yield all([watchAuthSaga()]);
}
