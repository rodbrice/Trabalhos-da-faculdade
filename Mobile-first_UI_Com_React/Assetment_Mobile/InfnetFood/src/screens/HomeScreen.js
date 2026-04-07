// Exercício 3: Página Inicial - Listagem de Categorias - InfnetFood
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import CategoryCard from '../components/CategoryCard';
import categories from '../data/categories';
import colors from '../styles/colors';

const HomeScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const { itemCount } = useCart();

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.welcome, isDarkMode && styles.welcomeDark]}>Olá! 👋</Text>
          <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>O que deseja pedir hoje?</Text>
        </View>
        <TouchableOpacity
          style={styles.cartBadge}
          onPress={() => navigation.navigate('Cart')}
          activeOpacity={0.7}
        >
          <Text style={styles.cartIcon}>🛒</Text>
          {itemCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{itemCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={[styles.banner, isDarkMode && styles.bannerDark]}>
        <Text style={styles.bannerEmoji}>🍕🍔🍣</Text>
        <Text style={styles.bannerTitle}>Frete Grátis</Text>
        <Text style={styles.bannerSub}>Em pedidos acima de R$ 50,00</Text>
      </View>

      {/* Categorias */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>Categorias</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            onPress={() => navigation.navigate('Products', { category: item })}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8 },
  welcome: { fontSize: 26, fontWeight: 'bold', color: colors.light.text },
  welcomeDark: { color: colors.dark.text },
  subtitle: { fontSize: 15, color: colors.light.textSecondary, marginTop: 2 },
  subtitleDark: { color: colors.dark.textSecondary },
  cartBadge: { position: 'relative', padding: 8 },
  cartIcon: { fontSize: 28 },
  badge: { position: 'absolute', top: 2, right: 2, backgroundColor: colors.danger, borderRadius: 10, minWidth: 20, height: 20, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 4 },
  badgeText: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  banner: { backgroundColor: colors.primary, borderRadius: 16, marginHorizontal: 16, marginVertical: 12, padding: 20, alignItems: 'center' },
  bannerDark: { backgroundColor: colors.primaryDark },
  bannerEmoji: { fontSize: 32, marginBottom: 6 },
  bannerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  bannerSub: { fontSize: 14, color: '#ffffffcc', marginTop: 4 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: colors.light.text, marginHorizontal: 16, marginBottom: 12 },
  sectionTitleDark: { color: colors.dark.text },
  list: { paddingHorizontal: 16, paddingBottom: 20 },
});

export default HomeScreen;

