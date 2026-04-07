// Exercício 4 e 12: Tela de Detalhes do Produto - InfnetFood
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Animated, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
        bounces={true}
      >
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
          </View>
          <Text style={[styles.subtotalText, isDarkMode && styles.subtotalTextDark]}>
            Subtotal: <Text style={styles.subtotalValue}>R$ {subtotal}</Text>
          </Text>
        </View>
      </ScrollView>

      {/* Feedback visual */}
      <Animated.View style={[styles.successMessage, { opacity: fadeAnim }]} pointerEvents="none">
        <Text style={styles.successText}>✅ Adicionado!</Text>
      </Animated.View>

      {/* Footer fixo ACIMA da tab bar */}
      <SafeAreaView edges={['bottom']} style={[styles.footer, isDarkMode && styles.footerDark]}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Button
            label={`🛒 Adicionar  •  R$ ${subtotal}`}
            onPress={handleAddToCart}
          />
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  scrollContent: { paddingBottom: 120 }, // Espaço para o footer
  image: { width: '100%', height: 300, resizeMode: 'cover' },
  content: { padding: 24, paddingBottom: 40 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold', color: colors.light.text, flex: 1, marginRight: 12, lineHeight: 30 },
  nameDark: { color: colors.dark.text },
  ratingBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.accent + '20', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 14, minHeight: 36 },
  ratingStar: { fontSize: 18, marginRight: 5 },
  ratingText: { fontSize: 16, fontWeight: 'bold', color: colors.accent },
  price: { fontSize: 28, fontWeight: 'bold', color: colors.primary, marginTop: 6, marginBottom: 20 },
  descTitle: { fontSize: 18, fontWeight: '600', color: colors.light.text, marginTop: 28, marginBottom: 14 },
  descTitleDark: { color: colors.dark.text },
  description: { fontSize: 16, color: colors.light.textSecondary, lineHeight: 26, marginBottom: 10 },
  descriptionDark: { color: colors.dark.textSecondary },
  quantityRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12, gap: 16 },
  qtyBtn: { width: 56, height: 56, paddingHorizontal: 0, paddingVertical: 0, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  qtyBtnText: { fontSize: 26, fontWeight: 'bold' },
  qtyValue: { fontSize: 26, fontWeight: 'bold', color: colors.light.text, minWidth: 50, textAlign: 'center' },
  qtyValueDark: { color: colors.dark.text },
  subtotalText: { fontSize: 17, color: colors.light.textSecondary, marginTop: 20, fontWeight: '500' },
  subtotalTextDark: { color: colors.dark.textSecondary },
  subtotalValue: { fontWeight: 'bold', color: colors.primary, fontSize: 19 },
  footer: { 
    paddingHorizontal: 24, 
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: colors.light.surface, 
    borderTopWidth: 1, 
    borderTopColor: colors.light.border, 
    elevation: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: -4 }, 
    shadowOpacity: 0.15, 
    shadowRadius: 10 
  },
  footerDark: { backgroundColor: colors.dark.surface, borderTopColor: colors.dark.border },
  successMessage: { position: 'absolute', top: 310, alignSelf: 'center', backgroundColor: colors.success, paddingHorizontal: 28, paddingVertical: 14, borderRadius: 28, elevation: 6, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.3, shadowRadius: 6 },
  successText: { color: '#fff', fontSize: 17, fontWeight: '600' },
});

export default ProductDetailScreen;

