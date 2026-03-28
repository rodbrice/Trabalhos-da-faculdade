// Componente Card reutilizável
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';

export default function Card({ children, onPress, style }) {
  const { isDarkMode } = useTheme();
  
  const cardStyle = [
    styles.card,
    isDarkMode && styles.cardDark,
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity style={cardStyle} onPress={onPress} activeOpacity={0.7}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    ...theme.shadow.medium,
  },
  cardDark: {
    backgroundColor: theme.colors.darkSurface,
  },
});

