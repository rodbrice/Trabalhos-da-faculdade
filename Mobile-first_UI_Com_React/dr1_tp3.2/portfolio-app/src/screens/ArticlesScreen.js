// Tela de Artigos - Lista de publicações
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { devtoService } from '../services/devtoService';
import { articlesMock } from '../data/articles';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Loading from '../components/Loading';

export default function ArticlesScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const { userProfile } = useUser();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setError(null);
      const data = await devtoService.getArticles(userProfile.devto);
      setArticles(data);
    } catch (err) {
      console.log('Usando dados mockados devido a erro na API');
      setArticles(articlesMock);
      setError('Usando dados de exemplo');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadArticles();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  const renderArticle = ({ item }) => (
    <Card onPress={() => navigation.navigate('ArticleDetail', { article: item })}>
      <View style={styles.articleHeader}>
        <Text style={styles.articleIcon}>📝</Text>
        <View style={styles.articleInfo}>
          <Text 
            style={[styles.articleTitle, isDarkMode && styles.textDark]}
            numberOfLines={2}
          >
            {item.title}
          </Text>
          <Text style={[styles.articleDate, isDarkMode && styles.textSecondaryDark]}>
            {formatDate(item.published_at)}
          </Text>
        </View>
      </View>

      <Text 
        style={[styles.articleDescription, isDarkMode && styles.textSecondaryDark]}
        numberOfLines={3}
      >
        {item.description}
      </Text>

      <View style={styles.articleFooter}>
        <View style={styles.stat}>
          <Text style={styles.statIcon}>❤️</Text>
          <Text style={[styles.statText, isDarkMode && styles.textSecondaryDark]}>
            {item.positive_reactions_count}
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statIcon}>⏱️</Text>
          <Text style={[styles.statText, isDarkMode && styles.textSecondaryDark]}>
            {item.reading_time_minutes} min
          </Text>
        </View>
        {item.tags && item.tags.length > 0 && (
          <Badge label={`#${item.tags[0]}`} variant="secondary" size="sm" />
        )}
      </View>
    </Card>
  );

  if (loading) {
    return <Loading message="Carregando artigos..." />;
  }

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      {error && (
        <View style={styles.errorBanner}>
          <Text style={styles.errorText}>ℹ️ {error}</Text>
        </View>
      )}
      <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh}
            colors={[theme.colors.primary]}
          />
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📚</Text>
            <Text style={[styles.emptyText, isDarkMode && styles.textSecondaryDark]}>
              Nenhum artigo publicado
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  containerDark: {
    backgroundColor: theme.colors.darkBackground,
  },
  errorBanner: {
    backgroundColor: theme.colors.warning,
    padding: theme.spacing.sm,
    alignItems: 'center',
  },
  errorText: {
    color: '#ffffff',
    fontSize: theme.fontSize.sm,
  },
  list: {
    padding: theme.spacing.md,
  },
  articleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  articleIcon: {
    fontSize: 32,
    marginRight: theme.spacing.md,
  },
  articleInfo: {
    flex: 1,
  },
  articleTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  articleDate: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textLight,
  },
  articleDescription: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: theme.spacing.md,
  },
  articleFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  statIcon: {
    fontSize: theme.fontSize.md,
    marginRight: 4,
  },
  statText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    fontWeight: '600',
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
    marginTop: theme.spacing.xxl,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: theme.spacing.md,
  },
  emptyText: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.textSecondary,
  },
  textDark: {
    color: theme.colors.darkText,
  },
  textSecondaryDark: {
    color: theme.colors.darkTextSecondary,
  },
});

