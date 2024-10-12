import { $host } from "./";

export const fetchUserChats = async (id: number) => {
  return await $host.get(`/chats/${id}`);
};

export const createChat = async (id: number, otherUserLogin: string) => {
  return await $host.post(`/chats/${id}/create-chat`, {
    otherUserLogin,
  });
};

export const createGroupChat = async (
  id: number,
  otherUsersLogins: string[]
) => {
  return await $host.post(`/chats/${id}/create-group-chat`, {
    otherUsersLogins,
  });
};

export const getChatMessages = async(chatId: number) => {
     return await $host.get(`/chats/messages/${chatId}`);
}
