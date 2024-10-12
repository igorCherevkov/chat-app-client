export enum Roles {
  user = "user",
  admin = "admin",
}

export type User = {
  id: number;
  login: string;
  avatar: string | null;
  role: Roles;
};

export interface Message {
  id: number;
  chatId: number;
  userId?: number;
  message: string;
  imageUrl?: string;
  user: User;
}

export type Chat = {
  id: number;
  isGroup: boolean;
  users: User[];
  createdAt: string;
  updatedAt: string;
  messages: Message[];
};
