// Serviço de armazenamento local com AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const APPLICATIONS_KEY = '@applications';

/**
 * Salvar candidaturas no AsyncStorage
 * @param {Array} applications - Lista de candidaturas
 */
export const saveApplications = async (applications) => {
  try {
    await AsyncStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
    return true;
  } catch (error) {
    console.error('Erro ao salvar candidaturas:', error);
    return false;
  }
};

/**
 * Carregar candidaturas do AsyncStorage
 * @returns {Promise<Array>} Lista de candidaturas
 */
export const loadApplications = async () => {
  try {
    const data = await AsyncStorage.getItem(APPLICATIONS_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Erro ao carregar candidaturas:', error);
    return null;
  }
};

/**
 * Adicionar nova candidatura
 * @param {Array} currentApplications - Lista atual
 * @param {Object} newApplication - Nova candidatura
 */
export const addApplication = async (currentApplications, newApplication) => {
  try {
    const updatedList = [...currentApplications, newApplication];
    await saveApplications(updatedList);
    return updatedList;
  } catch (error) {
    console.error('Erro ao adicionar candidatura:', error);
    return currentApplications;
  }
};

/**
 * Atualizar status de uma candidatura
 * @param {Array} applications - Lista de candidaturas
 * @param {string} id - ID da candidatura
 * @param {string} newStatus - Novo status
 */
export const updateApplicationStatus = async (applications, id, newStatus) => {
  try {
    const updatedList = applications.map(app =>
      app.id === id ? { ...app, status: newStatus } : app
    );
    await saveApplications(updatedList);
    return updatedList;
  } catch (error) {
    console.error('Erro ao atualizar status:', error);
    return applications;
  }
};

/**
 * Remover candidatura
 * @param {Array} applications - Lista de candidaturas
 * @param {string} id - ID da candidatura
 */
export const removeApplication = async (applications, id) => {
  try {
    const updatedList = applications.filter(app => app.id !== id);
    await saveApplications(updatedList);
    return updatedList;
  } catch (error) {
    console.error('Erro ao remover candidatura:', error);
    return applications;
  }
};

/**
 * Limpar todas as candidaturas
 */
export const clearApplications = async () => {
  try {
    await AsyncStorage.removeItem(APPLICATIONS_KEY);
    return true;
  } catch (error) {
    console.error('Erro ao limpar candidaturas:', error);
    return false;
  }
};

