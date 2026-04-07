// Exercício 4: Tela de Produtos por Categoria - InfnetFood
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import ProductCard from '../components/ProductCard';
import allProducts from '../data/products';
import colors from '../styles/colors';

const ProductsScreen = ({ route, navigation }) => {
  const { isDarkMode } = useTheme();
  const { category } = route.params;

  // Rubrica 3: simulação de carregamento (progresso)
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(allProducts.filter(p => p.categoryId === category.id));
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [category.id]);

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      {/* Cabeçalho da categoria */}
      <View style={[styles.header, isDarkMode && styles.headerDark]}>
        <Text style={styles.icon}>{category.icon}</Text>
        <View>
          <Text style={[styles.title, isDarkMode && styles.titleDark]}>{category.name}</Text>
          <Text style={[styles.count, isDarkMode && styles.countDark]}>
            {loading ? 'Carregando...' : `${products.length} produtos disponíveis`}
          </Text>
        </View>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={[styles.loadingText, isDarkMode && styles.loadingTextDark]}>Carregando produtos...</Text>
        </View>
      ) : products.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>🍽️</Text>
          <Text style={[styles.emptyText, isDarkMode && styles.emptyTextDark]}>Nenhum produto nesta categoria.</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => navigation.navigate('ProductDetail', { product: item })}
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
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: colors.light.surface, borderBottomWidth: 1, borderBottomColor: colors.light.border },
  headerDark: { backgroundColor: colors.dark.surface, borderBottomColor: colors.dark.border },
  icon: { fontSize: 40, marginRight: 14 },
  title: { fontSize: 22, fontWeight: 'bold', color: colors.light.text },
  titleDark: { color: colors.dark.text },
  count: { fontSize: 14, color: colors.light.textSecondary, marginTop: 2 },
  countDark: { color: colors.dark.textSecondary },
  list: { padding: 16, paddingBottom: 100 }, // Espaço para tab bar
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 12, fontSize: 14, color: colors.light.textSecondary },
  loadingTextDark: { color: colors.dark.textSecondary },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyIcon: { fontSize: 48, marginBottom: 12 },
  emptyText: { fontSize: 16, color: colors.light.textSecondary },
  emptyTextDark: { color: colors.dark.textSecondary },
});

export default ProductsScreen;
