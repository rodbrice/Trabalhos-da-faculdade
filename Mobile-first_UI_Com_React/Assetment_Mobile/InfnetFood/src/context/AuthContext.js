// Exercício 2 e 11: Context de Autenticação - InfnetFood
import React, { createContext, useState, useContext, useEffect } from 'react';
import { saveAuth, getAuth, clearAuth, saveUser, getUser } from '../services/storage';
import initialUserData from '../data/userData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAuthState();
  }, []);

  const loadAuthState = async () => {
    const token = await getAuth();
    if (token) {
      setIsAuth(true);
      const savedUser = await getUser();
      setUser(savedUser || initialUserData);
    }
    setLoading(false);
  };

  /**
   * Login mockado — aceita email/senha válidos
   * Retorna { success, error }
   */
  const login = async (email, password) => {
    // Validação de email com regex: usuario@dominio.com
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email.trim())) {
      return { success: false, error: 'E-mail inválido. Use o formato: usuario@dominio.com' };
    }
    if (!password || password.length < 3) {
      return { success: false, error: 'Senha deve ter pelo menos 3 caracteres.' };
    }

    const token = 'mock-token-' + Date.now();
    const loggedUser = { ...initialUserData, email: email.trim() };
    await saveAuth(token);
    await saveUser(loggedUser);
    setUser(loggedUser);
    setIsAuth(true);
    return { success: true, error: null };
  };

  const logout = async () => {
    await clearAuth();
    setUser(null);
    setIsAuth(false);
    return true;
  };

  const updateUser = async (updated) => {
    const newUser = { ...user, ...updated };
    setUser(newUser);
    await saveUser(newUser);
    return true;
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, loading, login, logout, updateUser }}>
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

