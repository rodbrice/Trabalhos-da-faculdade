// Navegação Bottom Tabs
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../contexts/ThemeContext';
import { theme } from '../styles/theme';
import QualificationsScreen from '../screens/QualificationsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ApplicationsScreen from '../screens/ApplicationsScreen';
import ArticlesScreen from '../screens/ArticlesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { isDarkMode } = useTheme();

  const screenOptions = {
    headerStyle: {
      backgroundColor: isDarkMode ? theme.colors.darkSurface : theme.colors.primary,
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    tabBarStyle: {
      backgroundColor: isDarkMode ? theme.colors.darkSurface : theme.colors.surface,
      borderTopColor: isDarkMode ? theme.colors.borderDark : theme.colors.border,
      height: 60,
      paddingBottom: 8,
      paddingTop: 8,
    },
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: isDarkMode ? theme.colors.darkTextSecondary : theme.colors.textLight,
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: '600',
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Qualificações"
        component={QualificationsScreen}
        options={{
          title: '💪 Qualificações',
          tabBarIcon: ({ color }) => <TabIcon icon="💪" color={color} />,
        }}
      />
      <Tab.Screen
        name="Projetos"
        component={ProjectsScreen}
        options={{
          title: '🚀 Projetos',
          tabBarIcon: ({ color }) => <TabIcon icon="🚀" color={color} />,
        }}
      />
      <Tab.Screen
        name="Candidaturas"
        component={ApplicationsScreen}
        options={{
          title: '💼 Candidaturas',
          tabBarIcon: ({ color }) => <TabIcon icon="💼" color={color} />,
        }}
      />
      <Tab.Screen
        name="Artigos"
        component={ArticlesScreen}
        options={{
          title: '📝 Artigos',
          tabBarIcon: ({ color }) => <TabIcon icon="📝" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// Componente helper para ícones das tabs
const TabIcon = ({ icon }) => {
  return <text style={{ fontSize: 24 }}>{icon}</text>;
};

