// Exercício 10 e 15: Tela de Checkout - InfnetFood
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Animated } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { fetchAddressByCep } from '../services/api';
import InputField from '../components/InputField';
import Button from '../components/Button';
import colors from '../styles/colors';

const PAYMENT_METHODS = ['Cartão de Crédito', 'Cartão de Débito', 'Pix', 'Dinheiro'];

const CheckoutScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const { items, total, clearCart } = useCart();
  const { addOrder } = useOrders();

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [errors, setErrors] = useState({});
  const [loadingCep, setLoadingCep] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Exercício 12: Animação de confirmação
  const confirmAnim = useRef(new Animated.Value(0)).current;

  // Exercício 15: Busca endereço via API ViaCEP
  const handleCepSearch = async () => {
    if (cep.replace(/\D/g, '').length !== 8) {
      setErrors(prev => ({ ...prev, cep: 'CEP deve ter 8 dígitos' }));
      return;
    }
    setLoadingCep(true);
    setErrors(prev => ({ ...prev, cep: '' }));
    try {
      const address = await fetchAddressByCep(cep);
      setStreet(address.street || '');
      setNeighborhood(address.neighborhood || '');
      setCity(`${address.city} - ${address.state}`);
    } catch (error) {
      setErrors(prev => ({ ...prev, cep: 'CEP não encontrado. Verifique e tente novamente.' }));
    }
    setLoadingCep(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!cep.trim()) newErrors.cep = 'Informe o CEP';
    if (!street.trim()) newErrors.street = 'Informe a rua';
    if (!number.trim()) newErrors.number = 'Informe o número';
    if (!neighborhood.trim()) newErrors.neighborhood = 'Informe o bairro';
    if (!city.trim()) newErrors.city = 'Informe a cidade';
    if (!selectedPayment) newErrors.payment = 'Selecione o pagamento';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmOrder = async () => {
    if (!validate()) return;

    setSubmitting(true);
    const deliveryInfo = { cep, street, number, complement, neighborhood, city };
    await addOrder(items, total, deliveryInfo, selectedPayment);

    // Animação de sucesso
    Animated.timing(confirmAnim, { toValue: 1, duration: 400, useNativeDriver: true }).start(async () => {
      await clearCart();
      setSubmitting(false);
      Alert.alert(
        '🎉 Pedido Confirmado!',
        'Seu pedido foi enviado com sucesso. Acompanhe em "Meus Pedidos".',
        [{ text: 'Ver Pedidos', onPress: () => navigation.getParent()?.navigate('OrdersTab') || navigation.navigate('OrdersTab') }]
      );
    });
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Resumo do Pedido */}
        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>📦 Resumo do Pedido</Text>
          {items.map(item => (
            <View key={item.id} style={styles.summaryRow}>
              <Text style={[styles.summaryItem, isDarkMode && styles.summaryItemDark]}>
                {item.quantity}x {item.name}
              </Text>
              <Text style={styles.summaryPrice}>R$ {(item.price * item.quantity).toFixed(2)}</Text>
            </View>
          ))}
          <View style={styles.totalRow}>
            <Text style={[styles.totalLabel, isDarkMode && styles.totalLabelDark]}>Total:</Text>
            <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
          </View>
        </View>

        {/* Endereço de Entrega */}
        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>📍 Endereço de Entrega</Text>

          <View style={styles.cepRow}>
            <View style={{ flex: 1 }}>
              <InputField label="CEP" value={cep} onChangeText={setCep} placeholder="00000-000" keyboardType="numeric" error={errors.cep} />
            </View>
            <Button label="Buscar" onPress={handleCepSearch} loading={loadingCep} variant="info" style={styles.cepBtn} />
          </View>

          <InputField label="Rua" value={street} onChangeText={setStreet} placeholder="Rua / Avenida" error={errors.street} />

          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <InputField label="Número" value={number} onChangeText={setNumber} placeholder="Nº" keyboardType="numeric" error={errors.number} />
            </View>
            <View style={{ flex: 2 }}>
              <InputField label="Complemento" value={complement} onChangeText={setComplement} placeholder="Apto, bloco..." />
            </View>
          </View>

          <InputField label="Bairro" value={neighborhood} onChangeText={setNeighborhood} placeholder="Bairro" error={errors.neighborhood} />
          <InputField label="Cidade" value={city} onChangeText={setCity} placeholder="Cidade - UF" error={errors.city} />
        </View>

        {/* Método de Pagamento */}
        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>💳 Pagamento</Text>
          {errors.payment && <Text style={styles.errorText}>{errors.payment}</Text>}
          {PAYMENT_METHODS.map(method => (
            <Button
              key={method}
              label={method}
              variant={selectedPayment === method ? 'primary' : 'outline'}
              onPress={() => { setSelectedPayment(method); setErrors(prev => ({ ...prev, payment: '' })); }}
              style={styles.paymentBtn}
            />
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <Animated.View style={[styles.footer, isDarkMode && styles.footerDark, { transform: [{ scale: confirmAnim.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 1.05, 1] }) }] }]}>
        <Button
          label={`Confirmar Pedido  •  R$ ${total.toFixed(2)}`}
          onPress={handleConfirmOrder}
          loading={submitting}
          variant="success"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  content: { padding: 16, paddingBottom: 24 },
  section: { backgroundColor: colors.light.surface, borderRadius: 14, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: colors.light.border },
  sectionDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: colors.light.text, marginBottom: 14 },
  sectionTitleDark: { color: colors.dark.text },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  summaryItem: { fontSize: 14, color: colors.light.text, flex: 1 },
  summaryItemDark: { color: colors.dark.text },
  summaryPrice: { fontSize: 14, color: colors.primary, fontWeight: '600' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: colors.light.border, paddingTop: 12, marginTop: 8 },
  totalLabel: { fontSize: 17, fontWeight: 'bold', color: colors.light.text },
  totalLabelDark: { color: colors.dark.text },
  totalValue: { fontSize: 20, fontWeight: 'bold', color: colors.primary },
  cepRow: { flexDirection: 'row', alignItems: 'flex-end' },
  cepBtn: { marginLeft: 8, marginBottom: 14, minHeight: 48 },
  row: { flexDirection: 'row' },
  paymentBtn: { marginBottom: 8 },
  errorText: { color: colors.danger, fontSize: 13, marginBottom: 8 },
  footer: { padding: 16, backgroundColor: colors.light.surface, borderTopWidth: 1, borderTopColor: colors.light.border },
  footerDark: { backgroundColor: colors.dark.surface, borderTopColor: colors.dark.border },
});

export default CheckoutScreen;

