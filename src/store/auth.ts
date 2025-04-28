import { create } from "zustand";

interface User {
  login: string;
  name: string;
  email: string;
  avatar_url: string;
  company: string;
  location: string;
  bio: string;
  html_url: string;
}

interface AuthStore {
  accessToken: string | null;
  user: User | null;
  setAccessToken: (token: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  accessToken: null,
  user: null,
  setAccessToken: (token) => set({ accessToken: token }),
  setUser: (user) => set({ user }),
  logout: () => set({ accessToken: null, user: null }),
}));
