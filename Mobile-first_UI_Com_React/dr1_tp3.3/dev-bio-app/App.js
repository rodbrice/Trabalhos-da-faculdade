import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/context/ThemeContext';
import { ProfileProvider } from './src/context/ProfileContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <ProfileProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ProfileProvider>
    </ThemeProvider>
  );
}

