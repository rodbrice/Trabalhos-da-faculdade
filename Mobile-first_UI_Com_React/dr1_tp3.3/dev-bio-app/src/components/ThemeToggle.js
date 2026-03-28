// ThemeToggle - Toggle para alternar tema
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.card }, theme.shadow]}>
      <View style={styles.info}>
        <Text style={[styles.label, { color: theme.text }]}>
          {isDark ? '🌙' : '☀️'} Modo {isDark ? 'Escuro' : 'Claro'}
        </Text>
        <Text style={[styles.description, { color: theme.textSecondary }]}>
          {isDark ? 'Ativado' : 'Desativado'}
        </Text>
      </View>
      
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        trackColor={{ false: '#ccc', true: theme.primary }}
        thumbColor={isDark ? '#fff' : '#f4f3f4'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
  },
  info: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  description: {
    fontSize: 13,
  },
});

