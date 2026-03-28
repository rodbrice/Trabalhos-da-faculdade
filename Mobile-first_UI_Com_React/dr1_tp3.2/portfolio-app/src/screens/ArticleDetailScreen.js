// Tela de Detalhes do Artigo com WebView
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';
import Card from '../components/Card';
import Badge from '../components/Badge';

export default function ArticleDetailScreen({ route }) {
  const { isDarkMode } = useTheme();
  const { article } = route.params;
  const [showWebView, setShowWebView] = React.useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const openInBrowser = () => {
    Linking.openURL(article.url);
  };

  if (showWebView) {
    return (
      <View style={styles.webViewContainer}>
        <TouchableOpacity 
          style={styles.closeWebView}
          onPress={() => setShowWebView(false)}
        >
          <Text style={styles.closeWebViewText}>← Voltar</Text>
        </TouchableOpacity>
        <WebView 
          source={{ uri: article.url }}
          style={styles.webView}
        />
      </View>
    );
  }

  return (
    <ScrollView 
      style={[styles.container, isDarkMode && styles.containerDark]}
      contentContainerStyle={styles.content}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.articleIcon}>📝</Text>
        <Text style={[styles.articleTitle, isDarkMode && styles.textDark]}>
          {article.title}
        </Text>
      </View>

      {/* Metadados */}
      <Card>
        <View style={styles.metaRow}>
          <Text style={styles.metaIcon}>📅</Text>
          <Text style={[styles.metaText, isDarkMode && styles.textSecondaryDark]}>
            Publicado em {formatDate(article.published_at)}
          </Text>
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.metaIcon}>⏱️</Text>
          <Text style={[styles.metaText, isDarkMode && styles.textSecondaryDark]}>
            Tempo de leitura: {article.reading_time_minutes} minutos
          </Text>
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.metaIcon}>❤️</Text>
          <Text style={[styles.metaText, isDarkMode && styles.textSecondaryDark]}>
            {article.positive_reactions_count} reações positivas
          </Text>
        </View>
      </Card>

      {/* Descrição */}
      <Card>
        <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
          Resumo
        </Text>
        <Text style={[styles.description, isDarkMode && styles.textSecondaryDark]}>
          {article.description}
        </Text>
      </Card>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <Card>
          <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
            Tags
          </Text>
          <View style={styles.tagsContainer}>
            {article.tags.map((tag, index) => (
              <Badge key={index} label={`#${tag}`} variant="secondary" size="sm" />
            ))}
          </View>
        </Card>
      )}

      {/* Botões de ação */}
      <TouchableOpacity 
        style={styles.readButton}
        onPress={() => setShowWebView(true)}
      >
        <Text style={styles.readButtonText}>
          📖 Ler no WebView
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.browserButton, isDarkMode && styles.browserButtonDark]}
        onPress={openInBrowser}
      >
        <Text style={[styles.browserButtonText, isDarkMode && styles.textDark]}>
          🌐 Abrir no Navegador
        </Text>
      </TouchableOpacity>
    </ScrollView>
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
  content: {
    padding: theme.spacing.md,
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    paddingTop: theme.spacing.md,
  },
  articleIcon: {
    fontSize: 64,
    marginBottom: theme.spacing.md,
  },
  articleTitle: {
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  metaIcon: {
    fontSize: theme.fontSize.lg,
    marginRight: theme.spacing.sm,
  },
  metaText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  sectionTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  description: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  readButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  readButtonText: {
    color: '#ffffff',
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
  },
  browserButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  browserButtonDark: {
    backgroundColor: theme.colors.darkSurface,
  },
  browserButtonText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
  },
  webViewContainer: {
    flex: 1,
  },
  closeWebView: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    paddingTop: theme.spacing.xl,
  },
  closeWebViewText: {
    color: '#ffffff',
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
  },
  webView: {
    flex: 1,
  },
  textDark: {
    color: theme.colors.darkText,
  },
  textSecondaryDark: {
    color: theme.colors.darkTextSecondary,
  },
});

