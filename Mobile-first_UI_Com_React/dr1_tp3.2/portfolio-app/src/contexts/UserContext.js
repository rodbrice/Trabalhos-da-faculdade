// Context para gerenciar dados do usuário
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    name: 'Rod Brice',
    title: 'Desenvolvedor Full Stack',
    location: 'Brasil',
    bio: 'Desenvolvedor apaixonado por tecnologia e inovação. Especializado em React, React Native e desenvolvimento web moderno.',
    email: 'contato@rodbrice.dev',
    github: 'rodbrice',
    linkedin: 'rodbrice',
    devto: 'rodbrice',
    avatar: '👨‍💻',
  });

  const updateProfile = (newData) => {
    setUserProfile(prev => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ userProfile, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

