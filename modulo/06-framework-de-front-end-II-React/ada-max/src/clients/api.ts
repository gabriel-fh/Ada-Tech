import { Avatar } from "../types";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://ada-max-be.vercel.app",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiPostSignIn = (email: string, password: string) => {
  return api.post<{ token: string }>("/api/signIn", {
    email,
    password,
  });
};

export const getAvatars = () => {
  return api.get<Avatar[]>("/api/avatar");
};
