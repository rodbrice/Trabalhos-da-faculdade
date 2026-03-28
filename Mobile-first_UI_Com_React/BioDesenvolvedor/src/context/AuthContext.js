// Exercício 7: Context de Autenticação
import React, { createContext, useState, useContext, useEffect } from 'react';
import { saveAuth, getAuth, clearAuth } from '../services/storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAuthState();
  }, []);

  const loadAuthState = async () => {
    const token = await getAuth();
    setIsAuth(!!token);
    setLoading(false);
  };

  const login = async () => {
    const token = 'mock-token-' + Date.now();
    await saveAuth(token);
    setIsAuth(true);
    return true;
  };

  const logout = async () => {
    await clearAuth();
    setIsAuth(false);
    return true;
  };

  return (
    <AuthContext.Provider value={{ isAuth, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro de AuthProvider');
  return context;
};

export default AuthContext;

