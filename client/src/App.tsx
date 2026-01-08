import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import RoleProtectedRoute from "./components/auth/RoleProtectedRoute";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import { useAuthStore } from "./store/auth.store";
import { useEffect } from "react";
import EmployeeDashboard from "./components/dashboards/EmployeeDashboard";
import OwnerDashboard from "./components/dashboards/OwnerDashboard";
import UserDashboard from "./components/dashboards/UserDashboard";

export default function App() {
  const checkAuth = useAuthStore((s) => s.checkAuthentication);

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/owner"
            element={
              <RoleProtectedRoute allowedRoles={["OWNER"]}>
                <OwnerDashboard />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/employee"
            element={
              <RoleProtectedRoute allowedRoles={["OWNER", "EMPLOYEE"]}>
                <EmployeeDashboard />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <RoleProtectedRoute allowedRoles={["USER", "EMPLOYEE", "OWNER"]}>
                <UserDashboard />
              </RoleProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
