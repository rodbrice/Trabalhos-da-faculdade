// Tela de Detalhes do Projeto
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Section from '../components/Section';

export default function ProjectDetailScreen({ route }) {
  const { isDarkMode } = useTheme();
  const { project } = route.params;

  const openInBrowser = () => {
    Linking.openURL(project.html_url);
  };

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

  return (
    <ScrollView 
      style={[styles.container, isDarkMode && styles.containerDark]}
      contentContainerStyle={styles.content}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.projectIcon}>🚀</Text>
        <Text style={[styles.projectName, isDarkMode && styles.textDark]}>
          {project.name}
        </Text>
        {project.language && (
          <Badge label={project.language} variant="info" />
        )}
      </View>

      {/* Descrição */}
      <Card>
        <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
          Descrição
        </Text>
        <Text style={[styles.description, isDarkMode && styles.textSecondaryDark]}>
          {project.description || project.fullDescription || 'Sem descrição disponível'}
        </Text>
      </Card>

      {/* Estatísticas */}
      <Card>
        <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
          Estatísticas
        </Text>
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statIcon}>⭐</Text>
            <Text style={[styles.statValue, isDarkMode && styles.textDark]}>
              {project.stargazers_count || project.stars || 0}
            </Text>
            <Text style={[styles.statLabel, isDarkMode && styles.textSecondaryDark]}>
              Stars
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statIcon}>🔱</Text>
            <Text style={[styles.statValue, isDarkMode && styles.textDark]}>
              {project.forks_count || project.forks || 0}
            </Text>
            <Text style={[styles.statLabel, isDarkMode && styles.textSecondaryDark]}>
              Forks
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statIcon}>👁️</Text>
            <Text style={[styles.statValue, isDarkMode && styles.textDark]}>
              {project.watchers_count || project.watchers || 0}
            </Text>
            <Text style={[styles.statLabel, isDarkMode && styles.textSecondaryDark]}>
              Watchers
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statIcon}>⚠️</Text>
            <Text style={[styles.statValue, isDarkMode && styles.textDark]}>
              {project.open_issues_count || project.issues || 0}
            </Text>
            <Text style={[styles.statLabel, isDarkMode && styles.textSecondaryDark]}>
              Issues
            </Text>
          </View>
        </View>
      </Card>

      {/* Tags/Topics */}
      {(project.topics || project.tags) && (project.topics?.length > 0 || project.tags?.length > 0) && (
        <Card>
          <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
            Tecnologias
          </Text>
          <View style={styles.tagsContainer}>
            {(project.topics || project.tags || []).map((topic, index) => (
              <Badge key={index} label={topic} variant="secondary" size="sm" />
            ))}
          </View>
        </Card>
      )}

      {/* Informações adicionais */}
      <Card>
        <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
          Informações
        </Text>
        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, isDarkMode && styles.textSecondaryDark]}>
            Última atualização:
          </Text>
          <Text style={[styles.infoValue, isDarkMode && styles.textDark]}>
            {formatDate(project.updated_at)}
          </Text>
        </View>
        {project.created_at && (
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, isDarkMode && styles.textSecondaryDark]}>
              Criado em:
            </Text>
            <Text style={[styles.infoValue, isDarkMode && styles.textDark]}>
              {formatDate(project.created_at)}
            </Text>
          </View>
        )}
        {project.license && (
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, isDarkMode && styles.textSecondaryDark]}>
              Licença:
            </Text>
            <Text style={[styles.infoValue, isDarkMode && styles.textDark]}>
              {project.license.name}
            </Text>
          </View>
        )}
      </Card>

      {/* Botão para abrir no GitHub */}
      <TouchableOpacity style={styles.openButton} onPress={openInBrowser}>
        <Text style={styles.openButtonText}>
          🐙 Abrir no GitHub
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
  projectIcon: {
    fontSize: 64,
    marginBottom: theme.spacing.md,
  },
  projectName: {
    fontSize: theme.fontSize.xxxl,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statBox: {
    width: '48%',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.sm,
  },
  statIcon: {
    fontSize: 24,
    marginBottom: theme.spacing.xs,
  },
  statValue: {
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  statLabel: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
  },
  infoLabel: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  infoValue: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    fontWeight: '600',
  },
  openButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  openButtonText: {
    color: '#ffffff',
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
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

