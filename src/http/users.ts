import { AxiosResponse } from "axios";

import { $host } from "./";
import { User } from "../types";

export const fetchChangeProfile = async (
  id: number,
  formData: FormData
): Promise<AxiosResponse<User>> => {
  return await $host.patch(`/users/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAllUsers = async (): Promise<AxiosResponse<User[]>> => {
  return await $host.get("/users");
};
