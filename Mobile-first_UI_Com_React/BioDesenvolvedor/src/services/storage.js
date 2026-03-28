// Exercício 13: AsyncStorage para persistência
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  APPLICATIONS: '@bio:applications',
  THEME: '@bio:theme',
  PROFILE: '@bio:profile',
  AUTH: '@bio:auth',
};

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Erro ao salvar:', error);
    return false;
  }
};

export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Erro ao recuperar:', error);
    return null;
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Erro ao remover:', error);
    return false;
  }
};

export const saveApplications = (apps) => saveData(KEYS.APPLICATIONS, apps);
export const getApplications = () => getData(KEYS.APPLICATIONS);
export const saveTheme = (theme) => saveData(KEYS.THEME, theme);
export const getTheme = () => getData(KEYS.THEME);
export const saveProfile = (profile) => saveData(KEYS.PROFILE, profile);
export const getProfile = () => getData(KEYS.PROFILE);
export const saveAuth = (token) => saveData(KEYS.AUTH, token);
export const getAuth = () => getData(KEYS.AUTH);
export const clearAuth = () => removeData(KEYS.AUTH);

export default {
  saveApplications,
  getApplications,
  saveTheme,
  getTheme,
  saveProfile,
  getProfile,
  saveAuth,
  getAuth,
  clearAuth,
};

