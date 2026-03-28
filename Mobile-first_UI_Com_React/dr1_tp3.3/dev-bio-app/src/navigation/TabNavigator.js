// TabNavigator - Bottom Tabs para navegação principal
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../context/ThemeContext';
import QualificationsScreen from '../screens/QualificationsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ApplicationsScreen from '../screens/ApplicationsScreen';
import ArticlesScreen from '../screens/ArticlesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.card,
          borderTopColor: theme.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Qualifications"
        component={QualificationsScreen}
        options={{
          title: '🎓 Qualificações',
          tabBarLabel: 'Qualificações',
          tabBarIcon: () => '🎓',
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{
          title: '💼 Projetos',
          tabBarLabel: 'Projetos',
          tabBarIcon: () => '💼',
        }}
      />
      <Tab.Screen
        name="Applications"
        component={ApplicationsScreen}
        options={{
          title: '🎯 Candidaturas',
          tabBarLabel: 'Candidaturas',
          tabBarIcon: () => '🎯',
        }}
      />
      <Tab.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{
          title: '📝 Artigos',
          tabBarLabel: 'Artigos',
          tabBarIcon: () => '📝',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: '⚙️ Configurações',
          tabBarLabel: 'Config',
          tabBarIcon: () => '⚙️',
        }}
      />
    </Tab.Navigator>
  );
}

