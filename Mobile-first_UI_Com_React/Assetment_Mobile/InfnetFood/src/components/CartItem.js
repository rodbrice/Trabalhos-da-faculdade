// Exercício 5: Item do Carrinho - InfnetFood
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.card, isDarkMode && styles.cardDark]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.name, isDarkMode && styles.nameDark]} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlBtn} onPress={onDecrease} activeOpacity={0.7}>
            <Text style={styles.controlText}>−</Text>
          </TouchableOpacity>
          <Text style={[styles.quantity, isDarkMode && styles.quantityDark]}>{item.quantity}</Text>
          <TouchableOpacity style={styles.controlBtn} onPress={onIncrease} activeOpacity={0.7}>
            <Text style={styles.controlText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.removeBtn} onPress={onRemove} activeOpacity={0.7}>
            <Text style={styles.removeText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subtotal}>R$ {(item.price * item.quantity).toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.surface,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.light.border,
    elevation: 1,
  },
  cardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  image: { width: 60, height: 60, borderRadius: 10 },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 14, fontWeight: '600', color: colors.light.text },
  nameDark: { color: colors.dark.text },
  price: { fontSize: 13, color: colors.primary, fontWeight: '500', marginTop: 2 },
  controls: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  controlBtn: {
    width: 30, height: 30, borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: 'center', alignItems: 'center',
  },
  controlText: { color: '#fff', fontSize: 18, fontWeight: 'bold', lineHeight: 20 },
  quantity: { fontSize: 16, fontWeight: 'bold', color: colors.light.text, marginHorizontal: 12 },
  quantityDark: { color: colors.dark.text },
  removeBtn: { marginLeft: 'auto', padding: 4 },
  removeText: { fontSize: 18 },
  subtotal: { fontSize: 15, fontWeight: 'bold', color: colors.primary, marginLeft: 8 },
});

export default CartItem;

