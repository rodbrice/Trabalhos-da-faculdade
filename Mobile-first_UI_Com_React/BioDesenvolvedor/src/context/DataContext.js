// Exercício 7 e 13: Context de Dados
import React, { createContext, useState, useContext, useEffect } from 'react';
import { saveApplications, getApplications, saveProfile, getProfile } from '../services/storage';
import profileData from '../data/profileData';
import initialApplications from '../data/applications';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [profile, setProfile] = useState(profileData);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!loading) saveApplications(applications);
  }, [applications, loading]);

  const loadData = async () => {
    const storedApps = await getApplications();
    setApplications(storedApps || initialApplications);
    const storedProfile = await getProfile();
    setProfile(storedProfile || profileData);
    setLoading(false);
  };

  const addApplication = (app) => {
    setApplications(prev => [{ ...app, id: Date.now(), appliedDate: new Date().toISOString().split('T')[0] }, ...prev]);
  };

  const removeApplication = (id) => {
    setApplications(prev => prev.filter(app => app.id !== id));
  };

  const updateProfile = async (updated) => {
    const newProfile = { ...profile, ...updated };
    setProfile(newProfile);
    await saveProfile(newProfile);
    return true;
  };

  return (
    <DataContext.Provider value={{ profile, applications, loading, addApplication, removeApplication, updateProfile }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData deve ser usado dentro de DataProvider');
  return context;
};

export default DataContext;

