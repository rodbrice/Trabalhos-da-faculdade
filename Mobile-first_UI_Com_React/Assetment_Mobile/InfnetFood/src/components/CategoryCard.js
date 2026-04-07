// Exercício 3: Card de Categoria - InfnetFood
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const CategoryCard = ({ category, onPress }) => {
  const { isDarkMode } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, isDarkMode && styles.cardDark]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={{ uri: category.image }} style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.icon}>{category.icon}</Text>
        <Text style={styles.name}>{category.name}</Text>
        <Text style={styles.description}>{category.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginBottom: 16,
    height: 140,
    overflow: 'hidden',
    backgroundColor: colors.light.surface,
    elevation: 3,
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  cardDark: { backgroundColor: colors.dark.surface },
  image: { width: '100%', height: '100%', position: 'absolute' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  icon: { fontSize: 36, marginBottom: 4 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#ffffff', textAlign: 'center' },
  description: { fontSize: 13, color: '#e0e0e0', textAlign: 'center', marginTop: 4 },
});

export default CategoryCard;

