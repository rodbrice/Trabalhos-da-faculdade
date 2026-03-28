// Exercício 9 e 11: Tela de projetos (integrada com GitHub API)
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import ProjectCard from '../components/ProjectCard';
import { fetchUserRepositories } from '../services/githubAPI';
import colors from '../styles/colors';

const ProjectsScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const { profile } = useData();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const repos = await fetchUserRepositories(profile.github);
      setProjects(repos);
    } catch (err) {
      setError('Não foi possível carregar os projetos. Verifique sua conexão.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadProjects();
    setRefreshing(false);
  };

  const handleProjectPress = (project) => {
    navigation.navigate('ProjectDetail', { project });
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent, isDarkMode && styles.containerDark]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.loadingText, isDarkMode && styles.loadingTextDark]}>
          Carregando projetos do GitHub...
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
            💻 Repositórios do GitHub
          </Text>
          <Text style={[styles.headerSubtext, isDarkMode && styles.headerSubtextDark]}>
            {projects.length} {projects.length === 1 ? 'projeto' : 'projetos'} encontrados
          </Text>
        </View>

        {projects.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, isDarkMode && styles.emptyTextDark]}>
              Nenhum projeto encontrado
            </Text>
          </View>
        ) : (
          projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onPress={() => handleProjectPress(project)}
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

export default ProjectsScreen;

