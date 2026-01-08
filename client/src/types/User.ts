export type User = {
  id: string;
  role: "OWNER" | "EMPLOYEE" | "USER";
  email: string;
  name: string;
};