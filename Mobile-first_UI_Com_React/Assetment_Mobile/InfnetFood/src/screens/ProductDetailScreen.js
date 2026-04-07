// Exercício 4 e 12: Tela de Detalhes do Produto - InfnetFood
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import colors from '../styles/colors';

const ProductDetailScreen = ({ route, navigation }) => {
  const { isDarkMode } = useTheme();
  const { addItem } = useCart();
  const { product } = route.params;

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  // Exercício 12: Feedback visual ao adicionar ao carrinho
  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);

    // Animação de escala no botão
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.15, duration: 150, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();

    // Animação de fade na mensagem de sucesso
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
      Animated.delay(1500),
      Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
    ]).start(() => setAdded(false));
  };

  const subtotal = (product.price * quantity).toFixed(2);

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={[styles.name, isDarkMode && styles.nameDark]}>{product.name}</Text>
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingStar}>⭐</Text>
              <Text style={styles.ratingText}>{product.rating}</Text>
            </View>
          </View>

          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>

          <Text style={[styles.descTitle, isDarkMode && styles.descTitleDark]}>Descrição</Text>
          <Text style={[styles.description, isDarkMode && styles.descriptionDark]}>{product.description}</Text>

          {/* Seletor de Quantidade */}
          <Text style={[styles.descTitle, isDarkMode && styles.descTitleDark]}>Quantidade</Text>
          <View style={styles.quantityRow}>
            <Button label="−" onPress={decrease} style={styles.qtyBtn} textStyle={styles.qtyBtnText} />
            <Text style={[styles.qtyValue, isDarkMode && styles.qtyValueDark]}>{quantity}</Text>
            <Button label="+" onPress={increase} style={styles.qtyBtn} textStyle={styles.qtyBtnText} />
            <Text style={[styles.subtotalText, isDarkMode && styles.subtotalTextDark]}>
              Subtotal: <Text style={styles.subtotalValue}>R$ {subtotal}</Text>
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Feedback visual */}
      <Animated.View style={[styles.successMessage, { opacity: fadeAnim }]} pointerEvents="none">
        <Text style={styles.successText}>✅ Adicionado ao carrinho!</Text>
      </Animated.View>

      {/* Footer fixo */}
      <View style={[styles.footer, isDarkMode && styles.footerDark]}>
        <Animated.View style={{ flex: 1, transform: [{ scale: scaleAnim }] }}>
          <Button
            label={`🛒 Adicionar  •  R$ ${subtotal}`}
            onPress={handleAddToCart}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  image: { width: '100%', height: 250 },
  content: { padding: 20 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 24, fontWeight: 'bold', color: colors.light.text, flex: 1, marginRight: 12 },
  nameDark: { color: colors.dark.text },
  ratingBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.accent + '20', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  ratingStar: { fontSize: 16, marginRight: 4 },
  ratingText: { fontSize: 15, fontWeight: 'bold', color: colors.accent },
  price: { fontSize: 22, fontWeight: 'bold', color: colors.primary, marginTop: 8 },
  descTitle: { fontSize: 16, fontWeight: '600', color: colors.light.text, marginTop: 20, marginBottom: 8 },
  descTitleDark: { color: colors.dark.text },
  description: { fontSize: 15, color: colors.light.textSecondary, lineHeight: 22 },
  descriptionDark: { color: colors.dark.textSecondary },
  quantityRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
  qtyBtn: { width: 44, height: 44, paddingHorizontal: 0, paddingVertical: 0, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  qtyBtnText: { fontSize: 22, fontWeight: 'bold' },
  qtyValue: { fontSize: 20, fontWeight: 'bold', color: colors.light.text, marginHorizontal: 20 },
  qtyValueDark: { color: colors.dark.text },
  subtotalText: { fontSize: 14, color: colors.light.textSecondary, marginLeft: 'auto' },
  subtotalTextDark: { color: colors.dark.textSecondary },
  subtotalValue: { fontWeight: 'bold', color: colors.primary },
  footer: { padding: 16, backgroundColor: colors.light.surface, borderTopWidth: 1, borderTopColor: colors.light.border },
  footerDark: { backgroundColor: colors.dark.surface, borderTopColor: colors.dark.border },
  successMessage: { position: 'absolute', top: 260, alignSelf: 'center', backgroundColor: colors.success, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 },
  successText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});

export default ProductDetailScreen;

