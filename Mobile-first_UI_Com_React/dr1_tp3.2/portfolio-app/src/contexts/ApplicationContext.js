// Context para gerenciar candidaturas
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicationContext = createContext();

export const useApplications = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplications deve ser usado dentro de ApplicationProvider');
  }
  return context;
};

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  // Carregar candidaturas do AsyncStorage ao iniciar
  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const saved = await AsyncStorage.getItem('@applications');
      if (saved !== null) {
        setApplications(JSON.parse(saved));
      } else {
        // Dados iniciais mockados
        const initialData = [
          {
            id: '1',
            jobTitle: 'Desenvolvedor React Native',
            company: 'Tech Solutions',
            status: 'Em análise',
            appliedDate: '2026-03-15',
            salary: 'R$ 8.000 - R$ 12.000',
            location: 'Remoto',
          },
          {
            id: '2',
            jobTitle: 'Full Stack Developer',
            company: 'StartupXYZ',
            status: 'Entrevista agendada',
            appliedDate: '2026-03-20',
            salary: 'R$ 10.000 - R$ 15.000',
            location: 'São Paulo, SP',
          },
          {
            id: '3',
            jobTitle: 'Front-end Developer',
            company: 'Digital Agency',
            status: 'Rejeitado',
            appliedDate: '2026-03-10',
            salary: 'R$ 6.000 - R$ 9.000',
            location: 'Rio de Janeiro, RJ',
          },
        ];
        setApplications(initialData);
        await AsyncStorage.setItem('@applications', JSON.stringify(initialData));
      }
    } catch (error) {
      console.log('Erro ao carregar candidaturas:', error);
    }
  };

  const addApplication = async (application) => {
    try {
      const newApplication = {
        ...application,
        id: Date.now().toString(),
        appliedDate: new Date().toISOString().split('T')[0],
        status: 'Em análise',
      };
      const updated = [...applications, newApplication];
      setApplications(updated);
      await AsyncStorage.setItem('@applications', JSON.stringify(updated));
    } catch (error) {
      console.log('Erro ao adicionar candidatura:', error);
    }
  };

  const updateApplicationStatus = async (id, newStatus) => {
    try {
      const updated = applications.map(app =>
        app.id === id ? { ...app, status: newStatus } : app
      );
      setApplications(updated);
      await AsyncStorage.setItem('@applications', JSON.stringify(updated));
    } catch (error) {
      console.log('Erro ao atualizar status:', error);
    }
  };

  const deleteApplication = async (id) => {
    try {
      const updated = applications.filter(app => app.id !== id);
      setApplications(updated);
      await AsyncStorage.setItem('@applications', JSON.stringify(updated));
    } catch (error) {
      console.log('Erro ao deletar candidatura:', error);
    }
  };

  return (
    <ApplicationContext.Provider value={{ 
      applications, 
      addApplication, 
      updateApplicationStatus,
      deleteApplication,
    }}>
      {children}
    </ApplicationContext.Provider>
  );
};

