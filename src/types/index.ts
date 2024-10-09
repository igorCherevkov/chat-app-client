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
