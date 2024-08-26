import { post } from "../src/api.js";
import { clearUserData, setUserData } from "../src/storage.js";

const endpoints = {
  login: "/login",
  register: "/users",
  logout: "/logout"
};

export async function login(username, password) {
  const result = await post(endpoints.login, {username, password});

 return setUserData(result);
}
export async function register(username, password) {
  const result = await post(endpoints.register, { username, password });


  return setUserData(result);
}

export async function logout() {
  const response = post(endpoints.logout);
  clearUserData();
  await response;
}
