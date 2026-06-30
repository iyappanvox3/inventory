import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#16171d', color: '#fff' }}>
        <h3>Loading authentication...</h3>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
