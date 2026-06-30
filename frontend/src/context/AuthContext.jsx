/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import client from '../api/client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  // Validate session token on app load
  useEffect(() => {
    const initializeAuth = async () => {
      if (token) {
        try {
          const response = await client.get('/api/auth/me/');
          setUser(response.data);
        } catch (error) {
          console.error("Token verification failed", error);
          logout();
        }
      }
      setLoading(false);
    };
    initializeAuth();
  }, [token]);

  const login = async (username, password) => {
    const response = await client.post('/api/auth/login/', { username, password });
    const { access } = response.data;
    localStorage.setItem('token', access);
    setToken(access);
    
    // Fetch profile of logged-in user
    const profileResponse = await client.get('/api/auth/me/');
    setUser(profileResponse.data);
    return profileResponse.data;
  };


  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
