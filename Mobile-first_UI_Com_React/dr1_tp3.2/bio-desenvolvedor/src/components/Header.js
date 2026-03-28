// Componente de cabeçalho
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const Header = ({ title, subtitle }) => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.header, isDarkMode && styles.headerDark]}>
      <Text style={[styles.title, isDarkMode && styles.titleDark]}>{title}</Text>
      {subtitle && (
        <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  
  headerDark: {
    backgroundColor: colors.primaryDark,
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  
  titleDark: {
    color: '#ffffff',
  },
  
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
  },
  
  subtitleDark: {
    opacity: 0.9,
  },
});

export default Header;

