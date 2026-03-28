// ArticlesScreen - Lista de artigos do Dev.to
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { fetchDevToArticles } from '../services/devToApi';
import ArticleCard from '../components/ArticleCard';

export default function ArticlesScreen({ navigation }) {
  const { theme } = useTheme();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchDevToArticles();
      setArticles(data);
    } catch (err) {
      setError('Erro ao carregar artigos. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderArticle = ({ item }) => (
    <ArticleCard
      article={item}
      onPress={() => navigation.navigate('ArticleWebView', { article: item })}
    />
  );

  if (loading) {
    return (
      <View style={[styles.centerContainer, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.primary} />
        <Text style={[styles.loadingText, { color: theme.textSecondary }]}>
          Carregando artigos do Dev.to...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.centerContainer, { backgroundColor: theme.background }]}>
        <Text style={styles.errorIcon}>⚠️</Text>
        <Text style={[styles.errorText, { color: theme.text }]}>{error}</Text>
        <TouchableOpacity 
          style={[styles.retryButton, { backgroundColor: theme.primary }]}
          onPress={loadArticles}
        >
          <Text style={styles.retryText}>🔄 Tentar Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.card }]}>
        <Text style={[styles.headerText, { color: theme.text }]}>
          📚 {articles.length} Artigos Publicados
        </Text>
        <Text style={[styles.subheader, { color: theme.textSecondary }]}>
          Integrado com Dev.to API
        </Text>
      </View>

      <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 15,
    fontSize: 14,
  },
  errorIcon: {
    fontSize: 50,
    marginBottom: 15,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
  },
  retryText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  header: {
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  subheader: {
    fontSize: 12,
  },
  list: {
    paddingTop: 15,
    paddingBottom: 20,
  },
});

