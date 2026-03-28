// Exercício 13: Funções para persistência com AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  APPLICATIONS: '@bio-dev:applications',
  THEME: '@bio-dev:theme',
  PROFILE: '@bio-dev:profile',
  AUTH_TOKEN: '@bio-dev:auth',
};

/**
 * Salva dados no AsyncStorage
 * @param {string} key - Chave de armazenamento
 * @param {any} value - Valor a ser salvo
 */
export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    return false;
  }
};

/**
 * Recupera dados do AsyncStorage
 * @param {string} key - Chave de armazenamento
 * @returns {Promise<any>} Dados recuperados
 */
export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Erro ao recuperar dados:', error);
    return null;
  }
};

/**
 * Remove dados do AsyncStorage
 * @param {string} key - Chave de armazenamento
 */
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Erro ao remover dados:', error);
    return false;
  }
};

// Funções específicas para candidaturas
export const saveApplications = (applications) => saveData(STORAGE_KEYS.APPLICATIONS, applications);
export const getApplications = () => getData(STORAGE_KEYS.APPLICATIONS);

// Funções específicas para tema
export const saveTheme = (theme) => saveData(STORAGE_KEYS.THEME, theme);
export const getTheme = () => getData(STORAGE_KEYS.THEME);

// Funções específicas para perfil
export const saveProfile = (profile) => saveData(STORAGE_KEYS.PROFILE, profile);
export const getProfile = () => getData(STORAGE_KEYS.PROFILE);

// Funções específicas para autenticação
export const saveAuthToken = (token) => saveData(STORAGE_KEYS.AUTH_TOKEN, token);
export const getAuthToken = () => getData(STORAGE_KEYS.AUTH_TOKEN);
export const clearAuthToken = () => removeData(STORAGE_KEYS.AUTH_TOKEN);

export default {
  saveData,
  getData,
  removeData,
  saveApplications,
  getApplications,
  saveTheme,
  getTheme,
  saveProfile,
  getProfile,
  saveAuthToken,
  getAuthToken,
  clearAuthToken,
  STORAGE_KEYS,
};

