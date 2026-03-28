// App.js - Ponto de entrada principal
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import { UserProvider } from './src/contexts/UserContext';
import { ApplicationProvider } from './src/contexts/ApplicationContext';
import StackNavigator from './src/navigation/StackNavigator';

// Componente wrapper para aplicar tema ao NavigationContainer
function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <StackNavigator />
      </NavigationContainer>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </>
  );
}

// Temas para NavigationContainer
const DefaultTheme = {
  dark: false,
  colors: {
    primary: '#667eea',
    background: '#f5f7fa',
    card: '#ffffff',
    text: '#333333',
    border: '#e0e0e0',
    notification: '#667eea',
  },
};

const DarkTheme = {
  dark: true,
  colors: {
    primary: '#667eea',
    background: '#121212',
    card: '#1e1e1e',
    text: '#ffffff',
    border: '#333333',
    notification: '#667eea',
  },
};

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <ApplicationProvider>
          <AppContent />
        </ApplicationProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

