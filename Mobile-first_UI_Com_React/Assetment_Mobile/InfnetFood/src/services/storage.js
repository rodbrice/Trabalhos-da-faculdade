// Exercício 11 e 13: AsyncStorage para persistência - InfnetFood
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  AUTH: '@infnetfood:auth',
  THEME: '@infnetfood:theme',
  CART: '@infnetfood:cart',
  ORDERS: '@infnetfood:orders',
  USER: '@infnetfood:user',
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

// Auth
export const saveAuth = (token) => saveData(KEYS.AUTH, token);
export const getAuth = () => getData(KEYS.AUTH);
export const clearAuth = () => removeData(KEYS.AUTH);

// Theme
export const saveTheme = (theme) => saveData(KEYS.THEME, theme);
export const getTheme = () => getData(KEYS.THEME);

// Cart
export const saveCart = (cart) => saveData(KEYS.CART, cart);
export const getCart = () => getData(KEYS.CART);
export const clearCartStorage = () => removeData(KEYS.CART);

// Orders
export const saveOrders = (orders) => saveData(KEYS.ORDERS, orders);
export const getOrders = () => getData(KEYS.ORDERS);

// User
export const saveUser = (user) => saveData(KEYS.USER, user);
export const getUser = () => getData(KEYS.USER);

