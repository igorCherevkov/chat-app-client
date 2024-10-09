import { $host } from "./";

const fetchRegistration = async () => {
  return await $host.post("/auth/registration");
};

const fetchLogin = async () => {
  return await $host.post("auth/login");
};
