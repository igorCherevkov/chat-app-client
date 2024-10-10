import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { AxiosError } from "axios";

import {
  CHANGE_PROFILE_REQUEST,
  changeProfileFailure,
  changeProfileSuccess,
  FETCH_USERS,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../actions/usersActions";
import { User } from "../../types";
import { fetchChangeProfile, getAllUsers } from "../../http/users";
import { UNKNOWN_ERROR } from "../../consts/http";
import { ChangeProfileRequest } from "../../types/redux/usersTypes";

function* changeProfileSaga(action: ChangeProfileRequest) {
  try {
    const { id, formData } = action.payload;
    const res: { data: User } = yield call(fetchChangeProfile, id, formData);

    yield put(changeProfileSuccess(res.data));
  } catch (error) {
    const payload = error instanceof AxiosError ? error.message : UNKNOWN_ERROR;
    yield put(changeProfileFailure(payload));
  }
}

function* fetchUsers() {
  try {
    const res: { data: User[] } = yield call(getAllUsers);

    yield put(fetchUsersSuccess(res.data));
  } catch (error) {
    const payload = error instanceof AxiosError ? error.message : UNKNOWN_ERROR;
    yield put(fetchUsersFailure(payload));
  }
}

export function* watchUsersSagas() {
  yield all([
    fork(function* () {
      yield takeLatest(CHANGE_PROFILE_REQUEST, changeProfileSaga);
    }),
    fork(function* () {
      yield takeLatest(FETCH_USERS, fetchUsers);
    }),
  ]);
}
