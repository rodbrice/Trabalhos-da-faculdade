// InfoCard - Card genérico de informação
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function InfoCard({ title, children, icon, onPress }) {
  const { theme } = useTheme();

  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container 
      style={[styles.card, { backgroundColor: theme.card }, theme.shadow]} 
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      {icon && (
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{icon}</Text>
        </View>
      )}
      
      {title && (
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      )}
      
      <View style={styles.content}>
        {children}
      </View>
      
      {onPress && (
        <Text style={[styles.arrow, { color: theme.primary }]}>›</Text>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 20,
    margin: 15,
    marginTop: 0,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  content: {
    // Wrapper para o conteúdo
  },
  arrow: {
    position: 'absolute',
    right: 20,
    top: '50%',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

