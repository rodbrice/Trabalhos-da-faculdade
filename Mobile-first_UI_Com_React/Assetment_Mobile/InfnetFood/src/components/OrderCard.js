// Exercício 7: Card de Pedido - InfnetFood
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const getStatusColor = (status) => {
  switch (status) {
    case 'Confirmado': return colors.info;
    case 'Em Preparo': return colors.warning;
    case 'Saiu para Entrega': return colors.primary;
    case 'Entregue': return colors.success;
    default: return colors.light.textSecondary;
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'Confirmado': return '✅';
    case 'Em Preparo': return '👨‍🍳';
    case 'Saiu para Entrega': return '🛵';
    case 'Entregue': return '🎉';
    default: return '📦';
  }
};

const OrderCard = ({ order }) => {
  const { isDarkMode } = useTheme();
  const statusColor = getStatusColor(order.status);
  const date = new Date(order.createdAt);
  const formattedDate = `${date.toLocaleDateString('pt-BR')} às ${date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;

  return (
    <View style={[styles.card, isDarkMode && styles.cardDark]}>
      <View style={styles.header}>
        <Text style={[styles.orderId, isDarkMode && styles.orderIdDark]}>
          Pedido #{String(order.id).slice(-4)}
        </Text>
        <View style={[styles.statusBadge, { backgroundColor: statusColor + '20' }]}>
          <Text style={{ color: statusColor, fontWeight: '600', fontSize: 13 }}>
            {getStatusIcon(order.status)} {order.status}
          </Text>
        </View>
      </View>
      <Text style={[styles.date, isDarkMode && styles.dateDark]}>{formattedDate}</Text>
      <View style={styles.itemsList}>
        {order.items.map((item, index) => (
          <Text key={index} style={[styles.itemText, isDarkMode && styles.itemTextDark]}>
            {item.quantity}x {item.name}
          </Text>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={[styles.paymentText, isDarkMode && styles.paymentTextDark]}>
          💳 {order.paymentMethod}
        </Text>
        <Text style={styles.total}>R$ {order.total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.surface,
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.light.border,
    elevation: 2,
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  cardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  orderId: { fontSize: 16, fontWeight: 'bold', color: colors.light.text },
  orderIdDark: { color: colors.dark.text },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  date: { fontSize: 12, color: colors.light.textSecondary, marginBottom: 10 },
  dateDark: { color: colors.dark.textSecondary },
  itemsList: { borderTopWidth: 1, borderTopColor: colors.light.border, paddingTop: 10, marginBottom: 10 },
  itemText: { fontSize: 14, color: colors.light.text, marginBottom: 3 },
  itemTextDark: { color: colors.dark.text },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: colors.light.border, paddingTop: 10 },
  paymentText: { fontSize: 13, color: colors.light.textSecondary },
  paymentTextDark: { color: colors.dark.textSecondary },
  total: { fontSize: 18, fontWeight: 'bold', color: colors.primary },
});

export default OrderCard;

