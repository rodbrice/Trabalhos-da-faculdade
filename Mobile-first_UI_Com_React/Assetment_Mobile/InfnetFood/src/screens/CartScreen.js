// Exercício 5: Tela do Carrinho de Compras - InfnetFood
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import colors from '../styles/colors';

const CartScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const { items, updateQuantity, removeItem, clearCart, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <View style={[styles.container, styles.empty, isDarkMode && styles.containerDark]}>
        <Text style={styles.emptyIcon}>🛒</Text>
        <Text style={[styles.emptyTitle, isDarkMode && styles.emptyTitleDark]}>Carrinho Vazio</Text>
        <Text style={[styles.emptyText, isDarkMode && styles.emptyTextDark]}>
          Adicione itens do cardápio para começar!
        </Text>
        <Button
          label="Ver Cardápio"
          onPress={() => navigation.navigate('HomeTab')}
          variant="outline"
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={styles.headerRow}>
        <Text style={[styles.headerTitle, isDarkMode && styles.headerTitleDark]}>
          {itemCount} {itemCount === 1 ? 'item' : 'itens'} no carrinho
        </Text>
        <Button label="Limpar" variant="danger" onPress={clearCart} style={styles.clearBtn} textStyle={{ fontSize: 13 }} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
            onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
            onRemove={() => removeItem(item.id)}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {/* Footer com total e botão */}
      <View style={[styles.footer, isDarkMode && styles.footerDark]}>
        <View style={styles.totalRow}>
          <Text style={[styles.totalLabel, isDarkMode && styles.totalLabelDark]}>Total:</Text>
          <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
        </View>
        <Button
          label="Finalizar Pedido"
          onPress={() => navigation.navigate('Checkout')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  empty: { justifyContent: 'center', alignItems: 'center', padding: 24 },
  emptyIcon: { fontSize: 64, marginBottom: 16 },
  emptyTitle: { fontSize: 22, fontWeight: 'bold', color: colors.light.text },
  emptyTitleDark: { color: colors.dark.text },
  emptyText: { fontSize: 15, color: colors.light.textSecondary, textAlign: 'center', marginTop: 4 },
  emptyTextDark: { color: colors.dark.textSecondary },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, paddingBottom: 8 },
  headerTitle: { fontSize: 17, fontWeight: '600', color: colors.light.text },
  headerTitleDark: { color: colors.dark.text },
  clearBtn: { paddingVertical: 8, paddingHorizontal: 14, minHeight: 36 },
  list: { paddingHorizontal: 16, paddingBottom: 8 },
  footer: { padding: 16, backgroundColor: colors.light.surface, borderTopWidth: 1, borderTopColor: colors.light.border },
  footerDark: { backgroundColor: colors.dark.surface, borderTopColor: colors.dark.border },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  totalLabel: { fontSize: 18, fontWeight: '600', color: colors.light.text },
  totalLabelDark: { color: colors.dark.text },
  totalValue: { fontSize: 24, fontWeight: 'bold', color: colors.primary },
});

export default CartScreen;

