// Navegação Stack Principal
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../contexts/ThemeContext';
import { theme } from '../styles/theme';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProjectDetailScreen from '../screens/ProjectDetailScreen';
import ArticleDetailScreen from '../screens/ArticleDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { isDarkMode } = useTheme();

  const screenOptions = {
    headerStyle: {
      backgroundColor: isDarkMode ? theme.colors.darkSurface : theme.colors.primary,
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerShadowVisible: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '🏠 Início' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: '👤 Perfil Completo' }}
      />
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProjectDetail"
        component={ProjectDetailScreen}
        options={{ title: '🚀 Detalhes do Projeto' }}
      />
      <Stack.Screen
        name="ArticleDetail"
        component={ArticleDetailScreen}
        options={{ title: '📝 Artigo' }}
      />
      <Stack.Screen
        name="Configurações"
        component={SettingsScreen}
        options={{ title: '⚙️ Configurações' }}
      />
    </Stack.Navigator>
  );
}

