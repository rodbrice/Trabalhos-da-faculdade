// Exercício 14: Context API para gerenciamento de tema
import React, { createContext, useState, useContext, useEffect } from 'react';
import { saveTheme, getTheme } from '../services/storage';
import { lightTheme, darkTheme } from '../styles/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  // Carregar tema salvo ao iniciar
  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await getTheme();
      if (savedTheme !== null) {
        setIsDarkMode(savedTheme);
        setTheme(savedTheme ? darkTheme : lightTheme);
      }
    } catch (error) {
      console.error('Erro ao carregar tema:', error);
    }
  };

  // Exercício 14: Alternar entre tema claro e escuro
  const toggleTheme = async () => {
    try {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      setTheme(newMode ? darkTheme : lightTheme);
      await saveTheme(newMode);
    } catch (error) {
      console.error('Erro ao salvar tema:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
};

export default ThemeContext;

