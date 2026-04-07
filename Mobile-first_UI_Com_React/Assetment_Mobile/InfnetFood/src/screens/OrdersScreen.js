// Exercício 7: Tela de Pedidos - InfnetFood
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useOrders } from '../context/OrderContext';
import OrderCard from '../components/OrderCard';
import Button from '../components/Button';
import colors from '../styles/colors';

const OrdersScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <View style={[styles.container, styles.empty, isDarkMode && styles.containerDark]}>
        <Text style={styles.emptyIcon}>📋</Text>
        <Text style={[styles.emptyTitle, isDarkMode && styles.emptyTitleDark]}>Nenhum pedido ainda</Text>
        <Text style={[styles.emptyText, isDarkMode && styles.emptyTextDark]}>
          Faça seu primeiro pedido e ele aparecerá aqui!
        </Text>
        <Button
          label="Explorar Cardápio"
          onPress={() => navigation.navigate('HomeTab')}
          variant="outline"
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <FlatList
        data={orders}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <OrderCard order={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={[styles.header, isDarkMode && styles.headerDark]}>
            {orders.length} {orders.length === 1 ? 'pedido' : 'pedidos'}
          </Text>
        }
      />
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
  list: { padding: 16, paddingBottom: 100 }, // Espaço para tab bar
  header: { fontSize: 15, color: colors.light.textSecondary, marginBottom: 14 },
  headerDark: { color: colors.dark.textSecondary },
});

export default OrdersScreen;

