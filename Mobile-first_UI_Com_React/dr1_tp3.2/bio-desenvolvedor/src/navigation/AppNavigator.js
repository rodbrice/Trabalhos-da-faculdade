// Exercício 3 e 5: Navegação principal combinando Stack e Bottom Tabs
import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

// Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import QualificationsScreen from '../screens/QualificationsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ProjectDetailScreen from '../screens/ProjectDetailScreen';
import ApplicationsScreen from '../screens/ApplicationsScreen';
import ArticlesScreen from '../screens/ArticlesScreen';
import ArticleWebViewScreen from '../screens/ArticleWebViewScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Exercício 3: Stack para Home + Profile
const HomeStack = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? colors.dark.surface : colors.light.surface,
        },
        headerTintColor: isDarkMode ? colors.dark.text : colors.light.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
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
    </Stack.Navigator>
  );
};

// Exercício 9: Stack para Projetos + Detalhes
const ProjectsStack = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? colors.dark.surface : colors.light.surface,
        },
        headerTintColor: isDarkMode ? colors.dark.text : colors.light.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="ProjectsList" 
        component={ProjectsScreen}
        options={{ title: '💻 Projetos' }}
      />
      <Stack.Screen 
        name="ProjectDetail" 
        component={ProjectDetailScreen}
        options={{ title: '📦 Detalhes do Projeto' }}
      />
    </Stack.Navigator>
  );
};

// Exercício 10: Stack para Artigos + WebView
const ArticlesStack = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? colors.dark.surface : colors.light.surface,
        },
        headerTintColor: isDarkMode ? colors.dark.text : colors.light.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="ArticlesList" 
        component={ArticlesScreen}
        options={{ title: '📰 Artigos' }}
      />
      <Stack.Screen 
        name="ArticleWebView" 
        component={ArticleWebViewScreen}
        options={{ title: '📄 Artigo' }}
      />
    </Stack.Navigator>
  );
};

// Exercício 5: Bottom Tabs Navigator
const TabNavigator = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDarkMode ? colors.dark.surface : colors.light.surface,
          borderTopColor: isDarkMode ? colors.dark.border : colors.light.border,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: isDarkMode ? colors.dark.textSecondary : colors.light.textSecondary,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStack}
        options={{
          title: 'Início',
          tabBarIcon: () => <Text style={{ fontSize: 24 }}>🏠</Text>,
        }}
      />
      <Tab.Screen 
        name="Qualifications" 
        component={QualificationsScreen}
        options={{
          title: 'Qualificações',
          tabBarIcon: () => <Text style={{ fontSize: 24 }}>🎓</Text>,
          headerShown: true,
          headerTitle: '🎓 Qualificações',
          headerStyle: {
            backgroundColor: isDarkMode ? colors.dark.surface : colors.light.surface,
          },
          headerTintColor: isDarkMode ? colors.dark.text : colors.light.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen 
        name="Projects" 
        component={ProjectsStack}
        options={{
          title: 'Projetos',
          tabBarIcon: () => <Text style={{ fontSize: 24 }}>💻</Text>,
        }}
      />
      <Tab.Screen 
        name="Applications" 
        component={ApplicationsScreen}
        options={{
          title: 'Candidaturas',
          tabBarIcon: () => <Text style={{ fontSize: 24 }}>📝</Text>,
          headerShown: true,
          headerTitle: '📝 Minhas Candidaturas',
          headerStyle: {
            backgroundColor: isDarkMode ? colors.dark.surface : colors.light.surface,
          },
          headerTintColor: isDarkMode ? colors.dark.text : colors.light.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen 
        name="Articles" 
        component={ArticlesStack}
        options={{
          title: 'Artigos',
          tabBarIcon: () => <Text style={{ fontSize: 24 }}>📰</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

// Navegador principal do app
const AppNavigator = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? colors.dark.surface : colors.light.surface,
        },
        headerTintColor: isDarkMode ? colors.dark.text : colors.light.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Main" 
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{ 
          title: '⚙️ Configurações',
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

