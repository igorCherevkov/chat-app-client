import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { AxiosError } from "axios";

import {
  CREATE_CHAT,
  createChatFailure,
  createChatSuccess,
  FETCH_CHATS,
  fetchChatsFailure,
  fetchChatsSuccess,
} from "../actions/chatsActions";
import { UNKNOWN_ERROR } from "../../consts/http";
import { Chat } from "../../types";
import { createChat, createGroupChat, fetchUserChats } from "../../http/chats";
import { CreateChat } from "../../types/redux/chatsTypes";

function* fetchChats(action: { type: string; payload: number }) {
  try {
    const res: { data: Chat[] } = yield call(fetchUserChats, action.payload);

    yield put(fetchChatsSuccess(res.data));
  } catch (error) {
    const payload = error instanceof AxiosError ? error.message : UNKNOWN_ERROR;
    yield put(fetchChatsFailure(payload));
  }
}

function* createChatSaga(action: CreateChat) {
  try {
    const { id, otherLogin } = action.payload;

    let res: { data: Chat };

    if (Array.isArray(otherLogin)) {
      res = yield call(createGroupChat, id, otherLogin);
    } else {
      res = yield call(createChat, id, otherLogin);
    }

    yield put(createChatSuccess(res.data));
  } catch (error) {
    const payload = error instanceof AxiosError ? error.message : UNKNOWN_ERROR;
    yield put(createChatFailure(payload));
  }
}

export function* watchChatsSagas() {
  yield all([
    fork(function* () {
      yield takeLatest(FETCH_CHATS, fetchChats);
    }),
    fork(function* () {
      yield takeLatest(CREATE_CHAT, createChatSaga);
    }),
  ]);
}
