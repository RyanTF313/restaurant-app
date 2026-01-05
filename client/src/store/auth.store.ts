import { create } from "zustand";
import { login as loginApi, me as checkAuth } from "../services/auth.api";

interface AuthState {
  user: any | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuthentication: () => Promise<{ user: any, loading: boolean }>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,

  login: async (email, password) => {
    set({ loading: true });
    const user = await loginApi(email, password);
    console.log({ user });
    set({ user, loading: false });
  },

  logout: () => {
    set({ user: null, loading: false });
  },

  checkAuthentication: async () => {
    try {
      set({ loading: true });
      const res = await checkAuth();
      console.log('res in auth store', res);
      set({ user: res.user, loading: false });
      return { user: res.user, loading: false }
    } catch {
      set({ user: null, loading: false });
      return { user: null, loading: false }
    }
  },
}));
