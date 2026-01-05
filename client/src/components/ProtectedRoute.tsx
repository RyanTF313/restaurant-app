import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const checkAuthentication = useAuthStore((s) => s.checkAuthentication);
  const [authUser, setAuthUser] = useState<any | null>(null);
  const user = useAuthStore((s) => s.user);
  const loading = useAuthStore((s) => s.loading);

  useEffect(() => {
    isAuthenticated();
    console.log("ProtectedRoute mounted", user);
  }, []);

  const isAuthenticated = async () => {
    const auth = await checkAuthentication();
    // const results = useAuthStore((s) => s.user);
    console.log({ auth });
    setAuthUser(auth.user);
  };

  console.log({ user, loading });

  if (loading) return <div>Loading...</div>;

  if (!user && !authUser) return <Navigate to="/login" replace />;

  return children;
}
