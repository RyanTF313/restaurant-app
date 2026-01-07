import { create } from "zustand";
import { persist } from "zustand/middleware";
import { login as loginApi, me as checkAuth } from "../services/auth.api";

type User = {
  id: string;
  role: "OWNER" | "EMPLOYEE" | "USER";
  email: string;
  name: string;
};

interface AuthState {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuthentication: () => Promise<{ user: User | null; loading: boolean }>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,

      login: async (email, password) => {
        set({ loading: true });
        const user = await loginApi(email, password);
        set({ user, loading: false });
      },

      logout: () => {
        set({ user: null, loading: false });
      },

      checkAuthentication: async () => {
        try {
          set({ loading: true });
          const res = await checkAuth();
          set({ user: res.user, loading: false });
          return { user: res.user, loading: false };
        } catch {
          set({ user: null, loading: false });
          return { user: null, loading: false };
        }
      },
    }),
    {
      name: "auth-store", // localStorage key
      partialize: (state) => ({ user: state.user }), // 👈 persist ONLY user
    }
  )
);
