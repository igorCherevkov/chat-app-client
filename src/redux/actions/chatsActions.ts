import { Chat, Message } from "../../types";

export const FETCH_CHATS = "FETCH_CHATS";
export const FETCH_CHATS_SUCCESS = "FETCH_CHATS_SUCCESS";
export const FETCH_CHATS_FAILURE = "FETCH_CHATS_FAILURE";
export const CREATE_CHAT = "CREATE_CHAT";
export const CREATE_CHAT_SUCCESS = "CREATE_CHAT_SUCCESS";
export const CREATE_CHAT_FAILURE = "CREATE_CHAT_FAILURE";
export const UPDATE_CHAT_MESSAGE = "UPDATE_CHAT_MESSAGE";

export const fetchChats = (payload: number) => ({
  type: FETCH_CHATS,
  payload,
});

export const fetchChatsSuccess = (payload: Chat[]) => ({
  type: FETCH_CHATS_SUCCESS,
  payload,
});

export const fetchChatsFailure = (payload: string) => ({
  type: FETCH_CHATS_FAILURE,
  payload,
});

export const createChat = (payload: {
  id: number;
  otherLogin: string | string[];
}) => ({
  type: CREATE_CHAT,
  payload,
});

export const createChatSuccess = (payload: Chat) => ({
  type: CREATE_CHAT_SUCCESS,
  payload,
});

export const createChatFailure = (payload: string) => ({
  type: CREATE_CHAT_FAILURE,
  payload,
});

export const updateChatMessage = (chatId: number, message: Message) => ({
  type: UPDATE_CHAT_MESSAGE,
  payload: { chatId, message },
});
