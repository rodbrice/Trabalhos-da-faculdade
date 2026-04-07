// Exercício 4: Card de Produto - InfnetFood
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const ProductCard = ({ product, onPress }) => {
  const { isDarkMode } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, isDarkMode && styles.cardDark]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.name, isDarkMode && styles.nameDark]} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={[styles.description, isDarkMode && styles.descriptionDark]} numberOfLines={2}>
          {product.description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.star}>⭐</Text>
            <Text style={[styles.rating, isDarkMode && styles.ratingDark]}>{product.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.surface,
    borderRadius: 14,
    marginBottom: 14,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  cardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  image: { width: 110, height: 110 },
  info: { flex: 1, padding: 12, justifyContent: 'space-between' },
  name: { fontSize: 16, fontWeight: 'bold', color: colors.light.text },
  nameDark: { color: colors.dark.text },
  description: { fontSize: 12, color: colors.light.textSecondary, marginTop: 4, lineHeight: 16 },
  descriptionDark: { color: colors.dark.textSecondary },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  price: { fontSize: 16, fontWeight: 'bold', color: colors.primary },
  ratingContainer: { flexDirection: 'row', alignItems: 'center' },
  star: { fontSize: 14, marginRight: 2 },
  rating: { fontSize: 13, color: colors.light.textSecondary, fontWeight: '600' },
  ratingDark: { color: colors.dark.textSecondary },
});

export default ProductCard;

