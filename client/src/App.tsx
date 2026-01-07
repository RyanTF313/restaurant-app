import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dahsboard';
import Menu from './components/Menu';
import { useAuthStore } from './store/auth.store';
import { useEffect } from 'react';



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
      </Routes>
    </BrowserRouter>
    </>
  );
}
