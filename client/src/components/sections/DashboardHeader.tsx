import { User } from "../../types/User";

type DashboardHeaderProps = {
  user: User | null;
};

function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <h3>ID: {user?.id}</h3>
      <p>Role: {user?.role}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default DashboardHeader;
