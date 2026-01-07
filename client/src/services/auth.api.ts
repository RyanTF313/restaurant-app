import { api } from "./api";

export interface LoginResponse {
  id: string;
  name: string;
  role: "OWNER" | "EMPLOYEE" | "USER";
  email: string;
}

export const login = async (email: string, password: string) => {
  const { data } = await api.post<LoginResponse>("/auth/login", {
    email,
    password,
  });

  return data;
};

export const me = async () => {
  const { data } = await api.get("/auth/me");
  return data;
};
