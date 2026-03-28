// Exercício 10 e 12: Tela de artigos (integrada com Dev.to API)
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
  const [error, setError] = useState(null);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      // Usando artigos populares como fallback
      const fetchedArticles = await fetchPopularArticles();
      setArticles(fetchedArticles);
    } catch (err) {
      setError('Não foi possível carregar os artigos. Verifique sua conexão.');
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

  const handleArticlePress = (article) => {
    navigation.navigate('ArticleWebView', { article });
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent, isDarkMode && styles.containerDark]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.loadingText, isDarkMode && styles.loadingTextDark]}>
          Carregando artigos do Dev.to...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centerContent, isDarkMode && styles.containerDark]}>
        <Text style={[styles.errorText, isDarkMode && styles.errorTextDark]}>
          {error}
        </Text>
        <Text style={[styles.errorHint, isDarkMode && styles.errorHintDark]}>
          Puxe para baixo para tentar novamente
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} colors={[colors.primary]} />
        }
      >
        <View style={styles.header}>
          <Text style={[styles.headerText, isDarkMode && styles.headerTextDark]}>
            📰 Artigos Técnicos
          </Text>
          <Text style={[styles.headerSubtext, isDarkMode && styles.headerSubtextDark]}>
            {articles.length} {articles.length === 1 ? 'artigo' : 'artigos'} encontrados
          </Text>
        </View>

        {articles.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, isDarkMode && styles.emptyTextDark]}>
              Nenhum artigo encontrado
            </Text>
          </View>
        ) : (
          articles.map(article => (
            <ArticleCard
              key={article.id}
              article={article}
              onPress={() => handleArticlePress(article)}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
  },
  
  containerDark: {
    backgroundColor: colors.dark.background,
  },
  
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    padding: 16,
  },
  
  header: {
    marginBottom: 16,
  },
  
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.light.text,
    marginBottom: 4,
  },
  
  headerTextDark: {
    color: colors.dark.text,
  },
  
  headerSubtext: {
    fontSize: 14,
    color: colors.light.textSecondary,
  },
  
  headerSubtextDark: {
    color: colors.dark.textSecondary,
  },
  
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: colors.light.textSecondary,
  },
  
  loadingTextDark: {
    color: colors.dark.textSecondary,
  },
  
  errorText: {
    fontSize: 16,
    color: colors.danger,
    textAlign: 'center',
    marginBottom: 8,
  },
  
  errorTextDark: {
    color: colors.danger,
  },
  
  errorHint: {
    fontSize: 14,
    color: colors.light.textSecondary,
    textAlign: 'center',
  },
  
  errorHintDark: {
    color: colors.dark.textSecondary,
  },
  
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
  },
  
  emptyText: {
    fontSize: 16,
    color: colors.light.textSecondary,
  },
  
  emptyTextDark: {
    color: colors.dark.textSecondary,
  },
});

export default ArticlesScreen;

