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
    borderRadius: 18,
    marginBottom: 18,
    height: 160,
    overflow: 'hidden',
    backgroundColor: colors.light.surface,
    elevation: 4,
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  cardDark: { backgroundColor: colors.dark.surface },
  image: { width: '100%', height: '100%', position: 'absolute', resizeMode: 'cover' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: { fontSize: 42, marginBottom: 8 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', letterSpacing: 0.5 },
  description: { fontSize: 14, color: '#e8e8e8', textAlign: 'center', marginTop: 6, lineHeight: 18 },
});

export default CategoryCard;

