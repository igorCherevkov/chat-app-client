import { AxiosResponse } from "axios";
import { $host } from "./";
import { DataWithToken } from "../types/redux/authTypes";

export const fetchRegistration = async (
  login: string,
  password: string
): Promise<AxiosResponse<DataWithToken>> => {
  return await $host.post("/auth/registration", {
    login,
    password,
  });
};

export const fetchLogin = async (
  login: string,
  password: string
): Promise<AxiosResponse<DataWithToken>> => {
  return await $host.post("/auth/login", {
    login,
    password,
  });
};

export const fetchCheckAuth = async (): Promise<
  AxiosResponse<DataWithToken>
> => {
  return await $host.get("/auth/profile");
};
