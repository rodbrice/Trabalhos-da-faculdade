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
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 3,
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: colors.light.border,
    minHeight: 130,
  },
  cardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  image: { width: 130, height: 130, resizeMode: 'cover' },
  info: { flex: 1, padding: 14, justifyContent: 'space-between' },
  name: { fontSize: 17, fontWeight: 'bold', color: colors.light.text, lineHeight: 22 },
  nameDark: { color: colors.dark.text },
  description: { fontSize: 13, color: colors.light.textSecondary, marginTop: 6, lineHeight: 18 },
  descriptionDark: { color: colors.dark.textSecondary },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  price: { fontSize: 18, fontWeight: 'bold', color: colors.primary },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.accent + '15', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  star: { fontSize: 15, marginRight: 3 },
  rating: { fontSize: 14, color: colors.accent, fontWeight: '700' },
  ratingDark: { color: colors.accent },
});

export default ProductCard;

