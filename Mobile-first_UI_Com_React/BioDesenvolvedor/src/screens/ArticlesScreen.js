// Exercício 10 e 12: Articles Screen
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import ArticleCard from '../components/ArticleCard';
import { fetchPopularArticles } from '../services/devtoAPI';
import colors from '../styles/colors';

const ArticlesScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const data = await fetchPopularArticles();
      setArticles(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadArticles();
    setRefreshing(false);
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.center, isDarkMode && styles.containerDark]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.loadingText, isDarkMode && styles.loadingTextDark]}>Carregando artigos do Dev.to...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} colors={[colors.primary]} />}
      >
        <Text style={[styles.header, isDarkMode && styles.headerDark]}>📰 Artigos Técnicos</Text>
        <Text style={[styles.subheader, isDarkMode && styles.subheaderDark]}>{articles.length} artigos populares</Text>
        
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} onPress={() => navigation.navigate('ArticleWebView', { article })} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  center: { justifyContent: 'center', alignItems: 'center' },
  content: { padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', color: colors.light.text, marginBottom: 4 },
  headerDark: { color: colors.dark.text },
  subheader: { fontSize: 14, color: colors.light.textSecondary, marginBottom: 16 },
  subheaderDark: { color: colors.dark.textSecondary },
  loadingText: { marginTop: 16, fontSize: 16, color: colors.light.textSecondary },
  loadingTextDark: { color: colors.dark.textSecondary },
});

export default ArticlesScreen;

