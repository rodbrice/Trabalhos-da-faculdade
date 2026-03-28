// Exercício 7 e 12: Context API para autenticação
import React, { createContext, useState, useContext, useEffect } from 'react';
import { saveAuthToken, getAuthToken, clearAuthToken } from '../services/storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Carregar estado de autenticação ao iniciar
  useEffect(() => {
    loadAuthState();
  }, []);

  const loadAuthState = async () => {
    try {
      const token = await getAuthToken();
      setIsAuth(!!token);
    } catch (error) {
      console.error('Erro ao carregar estado de autenticação:', error);
    } finally {
      setLoading(false);
    }
  };

  // Exercício 12: Simula login
  const login = async () => {
    try {
      // Simulando token de autenticação
      const mockToken = 'mock-auth-token-' + Date.now();
      await saveAuthToken(mockToken);
      setIsAuth(true);
      return true;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    }
  };

  // Exercício 12: Simula logout
  const logout = async () => {
    try {
      await clearAuthToken();
      setIsAuth(false);
      return true;
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};

export default AuthContext;

