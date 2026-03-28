// Exercício 7 e 13: Context API para dados do usuário e candidaturas
import React, { createContext, useState, useContext, useEffect } from 'react';
import { saveApplications, getApplications, saveProfile, getProfile } from '../services/storage';
import profileData from '../data/profileData';
import initialApplications from '../data/applications';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [profile, setProfile] = useState(profileData);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Exercício 13: Carregar dados do AsyncStorage ao iniciar
  useEffect(() => {
    loadStoredData();
  }, []);

  // Exercício 13: Salvar candidaturas sempre que mudarem
  useEffect(() => {
    if (!loading) {
      saveApplications(applications);
    }
  }, [applications, loading]);

  const loadStoredData = async () => {
    try {
      // Carregar candidaturas salvas ou usar dados iniciais
      const storedApplications = await getApplications();
      setApplications(storedApplications || initialApplications);
      
      // Carregar perfil salvo ou usar dados padrão
      const storedProfile = await getProfile();
      setProfile(storedProfile || profileData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      setApplications(initialApplications);
      setProfile(profileData);
    } finally {
      setLoading(false);
    }
  };

  // Exercício 8: Adicionar nova candidatura
  const addApplication = (application) => {
    const newApplication = {
      ...application,
      id: Date.now(),
      appliedDate: new Date().toISOString().split('T')[0],
    };
    setApplications(prev => [newApplication, ...prev]);
  };

  // Exercício 8: Remover candidatura
  const removeApplication = (id) => {
    setApplications(prev => prev.filter(app => app.id !== id));
  };

  // Exercício 8: Atualizar candidatura
  const updateApplication = (id, updatedData) => {
    setApplications(prev =>
      prev.map(app => (app.id === id ? { ...app, ...updatedData } : app))
    );
  };

  // Exercício 14: Atualizar perfil
  const updateProfile = async (updatedProfile) => {
    try {
      const newProfile = { ...profile, ...updatedProfile };
      setProfile(newProfile);
      await saveProfile(newProfile);
      return true;
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      return false;
    }
  };

  return (
    <DataContext.Provider
      value={{
        profile,
        applications,
        loading,
        addApplication,
        removeApplication,
        updateApplication,
        updateProfile,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData deve ser usado dentro de DataProvider');
  }
  return context;
};

export default DataContext;

