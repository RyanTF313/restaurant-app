import { useAuthStore } from "../store/auth.store";
import EmployeeDashboard from "./dashboards/EmployeeDashboard";
import OwnerDashboard from "./dashboards/OwnerDashboard";
import UserDashboard from "./dashboards/UserDashboard";

// type UserRole = "OWNER" | "EMPLOYEE" | "USER";

const Dashboard: React.FC = () => {
    const user = useAuthStore((s) => s.user);

    return (
        <>
        <div>
            <h1>Welcome, {user?.name}</h1>
            <p>Role: {user?.role}</p>
        </div>
        {user?.role === "OWNER" && <OwnerDashboard />}
        {user?.role === "EMPLOYEE" && <EmployeeDashboard />}
        {user?.role === "USER" && <UserDashboard />}
        </>
    );
};

export default Dashboard;