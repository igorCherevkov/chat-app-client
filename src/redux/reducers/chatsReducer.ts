import { Chat } from "../../types";
import { ChatsActions } from "../../types/redux/chatsTypes";
import {
  CREATE_CHAT,
  CREATE_CHAT_FAILURE,
  CREATE_CHAT_SUCCESS,
  FETCH_CHATS,
  FETCH_CHATS_FAILURE,
  FETCH_CHATS_SUCCESS,
  UPDATE_CHAT_MESSAGE,
} from "../actions/chatsActions";

const initialState = {
  isLoading: false,
  chats: [] as Chat[],
  error: null,
};

export const chatsReducer = (state = initialState, action: ChatsActions) => {
  switch (action.type) {
    case FETCH_CHATS:
      return { ...state, isLoading: true };
    case FETCH_CHATS_SUCCESS:
      return { ...state, isLoading: false, chats: action.payload };
    case FETCH_CHATS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case CREATE_CHAT:
      return { ...state, isLoading: true };
    case CREATE_CHAT_SUCCESS:
      return { ...state, chats: [...state.chats, action.payload] };
    case CREATE_CHAT_FAILURE:
      return { ...state, error: action.payload };
    case UPDATE_CHAT_MESSAGE: {
      const { chatId, message } = action.payload;
      return {
        ...state,
        chats: state.chats.map((chat) =>
          chat.id === chatId ? { ...chat, messages: [message] } : chat
        ),
      };
    }

    default:
      return state;
  }
};
