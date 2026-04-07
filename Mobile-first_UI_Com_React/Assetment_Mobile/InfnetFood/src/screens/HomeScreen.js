// Exercício 3: Página Inicial - Listagem de Categorias - InfnetFood
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import CategoryCard from '../components/CategoryCard';
import categoriesData from '../data/categories';
import colors from '../styles/colors';

const HomeScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const { itemCount } = useCart();

  // Exercício 3: Simulação de loading ao carregar categorias (rubrica: progresso)
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCategories(categoriesData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

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
          onPress={() => navigation.getParent()?.navigate('CartTab')}
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

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={[styles.loadingText, isDarkMode && styles.loadingTextDark]}>Carregando categorias...</Text>
        </View>
      ) : (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 12 },
  welcome: { fontSize: 28, fontWeight: 'bold', color: colors.light.text, letterSpacing: 0.5 },
  welcomeDark: { color: colors.dark.text },
  subtitle: { fontSize: 16, color: colors.light.textSecondary, marginTop: 4, lineHeight: 22 },
  subtitleDark: { color: colors.dark.textSecondary },
  cartBadge: { position: 'relative', padding: 10, minWidth: 52, minHeight: 52, justifyContent: 'center', alignItems: 'center' },
  cartIcon: { fontSize: 32 },
  badge: { position: 'absolute', top: 4, right: 4, backgroundColor: colors.danger, borderRadius: 12, minWidth: 22, height: 22, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5 },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  banner: { backgroundColor: colors.primary, borderRadius: 18, marginHorizontal: 20, marginVertical: 16, padding: 24, alignItems: 'center' },
  bannerDark: { backgroundColor: colors.primaryDark },
  bannerEmoji: { fontSize: 36, marginBottom: 8 },
  bannerTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  bannerSub: { fontSize: 15, color: '#ffffffcc', marginTop: 6 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: colors.light.text, marginHorizontal: 20, marginBottom: 14, marginTop: 4 },
  sectionTitleDark: { color: colors.dark.text },
  list: { paddingHorizontal: 20, paddingBottom: 160 }, // Espaço para tab bar dobrada (120px + margem)
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 40 },
  loadingText: { marginTop: 12, fontSize: 14, color: colors.light.textSecondary },
  loadingTextDark: { color: colors.dark.textSecondary },
});

export default HomeScreen;

