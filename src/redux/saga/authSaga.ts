import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { AxiosError } from "axios";

import { UNKNOWN_ERROR } from "../../consts/http";
import {
  AUTH,
  authFailure,
  authSuccess,
  CHECK_AUTH,
} from "../actions/authActions";
import { Auth, DataWithToken } from "../../types/redux/authTypes";
import { fetchCheckAuth, fetchLogin, fetchRegistration } from "../../http/auth";

function* authSaga(action: Auth) {
  try {
    const { login, password, isRegistration } = action.payload;

    const res: { data: DataWithToken } = yield call(
      isRegistration ? fetchRegistration : fetchLogin,
      login,
      password
    );

    localStorage.setItem("token", res.data.token);
    yield put(authSuccess(res.data));
  } catch (error) {
    const payload = error instanceof AxiosError ? error.message : UNKNOWN_ERROR;
    yield put(authFailure(payload));
  }
}

function* checkAuthSaga() {
  const token = localStorage.getItem("token");

  try {
    if (token) {
      const res: { data: DataWithToken } = yield call(fetchCheckAuth);

      yield put(authSuccess(res.data));
    }
  } catch (error) {
    const payload = error instanceof AxiosError ? error.message : UNKNOWN_ERROR;
    yield put(authFailure(payload));
  }
}

export function* watchAuthSaga() {
  yield all([
    fork(function* () {
      yield takeLatest(AUTH, authSaga);
    }),
    fork(function* () {
      yield takeLatest(CHECK_AUTH, checkAuthSaga);
    }),
  ]);
}
