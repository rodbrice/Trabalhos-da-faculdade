// Exercício 8: Card de Restaurante - InfnetFood
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const RestaurantCard = ({ restaurant, onPress }) => {
  const { isDarkMode } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, isDarkMode && styles.cardDark]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.name, isDarkMode && styles.nameDark]} numberOfLines={1}>{restaurant.name}</Text>
        <Text style={[styles.cuisine, isDarkMode && styles.cuisineDark]}>{restaurant.cuisine}</Text>
        <View style={styles.details}>
          <Text style={styles.rating}>⭐ {restaurant.rating}</Text>
          <Text style={[styles.time, isDarkMode && styles.timeDark]}>🕐 {restaurant.deliveryTime}</Text>
          <Text style={styles.fee}>🛵 R$ {restaurant.deliveryFee.toFixed(2)}</Text>
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
  image: { width: '100%', height: 120 },
  info: { padding: 12 },
  name: { fontSize: 16, fontWeight: 'bold', color: colors.light.text },
  nameDark: { color: colors.dark.text },
  cuisine: { fontSize: 13, color: colors.primary, fontWeight: '500', marginTop: 2 },
  cuisineDark: { color: colors.primary },
  details: { flexDirection: 'row', alignItems: 'center', marginTop: 8, gap: 12 },
  rating: { fontSize: 13, fontWeight: '600', color: colors.accent },
  time: { fontSize: 12, color: colors.light.textSecondary },
  timeDark: { color: colors.dark.textSecondary },
  fee: { fontSize: 12, color: colors.primary, fontWeight: '500' },
});

export default RestaurantCard;

