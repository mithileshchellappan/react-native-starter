import client from "./client";

const login = (email, password) => client.post("/auth", { email, password });

const register = (name, email, password) =>
  client.post("/users", { name, email, password });

const registerToken = (pushToken) =>
  client.post("/expoPushTokens", { token: pushToken });

export default { login, register, registerToken };
