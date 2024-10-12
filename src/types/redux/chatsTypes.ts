import { Chat, Message } from "../";
import {
  CREATE_CHAT,
  CREATE_CHAT_FAILURE,
  CREATE_CHAT_SUCCESS,
  FETCH_CHATS,
  FETCH_CHATS_FAILURE,
  FETCH_CHATS_SUCCESS,
  UPDATE_CHAT_MESSAGE,
} from "../../redux/actions/chatsActions";

export type FetchChats = {
  type: typeof FETCH_CHATS;
};

export type FetchChatsSuccess = {
  type: typeof FETCH_CHATS_SUCCESS;
  payload: Chat[];
};

export type FetchChatsFailure = {
  type: typeof FETCH_CHATS_FAILURE;
  payload: string;
};

export type CreateChat = {
  type: typeof CREATE_CHAT;
  payload: {
    id: number;
    otherLogin: string | string[];
  };
};

export type CreateChatSuccess = {
  type: typeof CREATE_CHAT_SUCCESS;
  payload: Chat;
};

export type CreateChatFailure = {
  type: typeof CREATE_CHAT_FAILURE;
  payload: string;
};

export type UpdateChatMessage = {
  type: typeof UPDATE_CHAT_MESSAGE;
  payload: {
    chatId: number;
    message: Message;
  };
};

export type ChatsActions =
  | FetchChats
  | FetchChatsSuccess
  | FetchChatsFailure
  | CreateChat
  | CreateChatSuccess
  | CreateChatFailure
  | UpdateChatMessage;
