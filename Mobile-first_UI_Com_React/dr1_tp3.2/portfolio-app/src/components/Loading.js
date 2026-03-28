// Componente de Loading reutilizável
import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';

export default function Loading({ message = 'Carregando...' }) {
  const { isDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text style={[styles.text, isDarkMode && styles.textDark]}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  text: {
    marginTop: theme.spacing.md,
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  textDark: {
    color: theme.colors.darkTextSecondary,
  },
});

