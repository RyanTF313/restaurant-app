import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

const Dashboard: React.FC = () => {
    const user = useAuthStore((s) => s.user);

    return (
        <>
        <div>
            <h1>Welcome, {user?.name} {user?.id}</h1>
            <p>Role: {user?.role}</p>
            <p>Email: {user?.email}</p>
        </div>
        {user?.role === "OWNER" && <Navigate to="/owner" replace />}
        {user?.role === "EMPLOYEE" && <Navigate to="/employee" replace />}
        {user?.role === "USER" && <Navigate to="/orders" replace />}
        </>
    );
};

export default Dashboard;