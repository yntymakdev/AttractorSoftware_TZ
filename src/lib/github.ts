import axios from "axios";
import { useAuthStore } from "@/store/auth";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

githubApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default githubApi;
