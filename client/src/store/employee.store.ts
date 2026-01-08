import { create } from "zustand";
import { api } from "../services/api";

type Employee = {
  // _id: string;
  id: string;
  name: string;
  email: string;
  isActive: boolean;
};

type EmployeeState = {
  employees: Employee[];
  fetchEmployees: () => Promise<void>;
  createEmployee: (data: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
};

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: [],

  fetchEmployees: async () => {
    const res = await api.get("/employees");
    console.log(res.data.employees);
    set({ employees: res.data.employees, ...{ id: res.data.employees._id } });
  },

  createEmployee: async (data) => {
    await api.post("/employees", data);
    await useEmployeeStore.getState().fetchEmployees();
  },
}));
