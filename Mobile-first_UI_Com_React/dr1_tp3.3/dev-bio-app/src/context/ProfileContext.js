// ProfileContext - Gerenciamento dos dados do perfil
import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { profileData as initialProfileData } from '../data/profileData';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(initialProfileData);

  // Carregar perfil do AsyncStorage ao iniciar
  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const savedProfile = await AsyncStorage.getItem('@profile');
      if (savedProfile !== null) {
        setProfile(JSON.parse(savedProfile));
      }
    } catch (error) {
      console.log('Erro ao carregar perfil:', error);
    }
  };

  const updateProfile = async (newData) => {
    try {
      const updatedProfile = { ...profile, ...newData };
      setProfile(updatedProfile);
      await AsyncStorage.setItem('@profile', JSON.stringify(updatedProfile));
    } catch (error) {
      console.log('Erro ao salvar perfil:', error);
    }
  };

  const resetProfile = async () => {
    try {
      setProfile(initialProfileData);
      await AsyncStorage.setItem('@profile', JSON.stringify(initialProfileData));
    } catch (error) {
      console.log('Erro ao resetar perfil:', error);
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, resetProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile deve ser usado dentro de ProfileProvider');
  }
  return context;
};

