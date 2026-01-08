import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store';

type Props = {
  children: JSX.Element;
  allowedRoles: Array<'OWNER' | 'EMPLOYEE' | 'USER'>;
};

export default function RoleProtectedRoute({
  children,
  allowedRoles,
}: Props) {
  const { user, loading } = useAuthStore();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
