// Componente de seção com título
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';

export default function Section({ title, icon, children, style }) {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.section, style]}>
      {title && (
        <View style={styles.header}>
          {icon && <Text style={styles.icon}>{icon}</Text>}
          <Text style={[styles.title, isDarkMode && styles.titleDark]}>
            {title}
          </Text>
        </View>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  icon: {
    fontSize: theme.fontSize.xl,
    marginRight: theme.spacing.sm,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  titleDark: {
    color: theme.colors.darkText,
  },
});

