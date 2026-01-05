import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Menu from './components/Menu';

function Dashboard() {
  return <div className="p-6">Owner Dashboard</div>;
}

export default function App() {
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
