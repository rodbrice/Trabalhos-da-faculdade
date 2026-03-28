// Tela de Projetos
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { githubService } from '../services/githubService';
import { projectsMock } from '../data/projects';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Loading from '../components/Loading';

export default function ProjectsScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const { userProfile } = useUser();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setError(null);
      const data = await githubService.getRepositories(userProfile.github);
      setProjects(data);
    } catch (err) {
      console.log('Usando dados mockados devido a erro na API');
      setProjects(projectsMock);
      setError('Usando dados de exemplo');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadProjects();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  const renderProject = ({ item }) => (
    <Card onPress={() => navigation.navigate('ProjectDetail', { project: item })}>
      <View style={styles.projectHeader}>
        <Text style={styles.projectIcon}>🚀</Text>
        <View style={styles.projectInfo}>
          <Text style={[styles.projectName, isDarkMode && styles.textDark]}>
            {item.name}
          </Text>
          {item.language && (
            <Badge label={item.language} variant="info" size="sm" />
          )}
        </View>
      </View>

      <Text 
        style={[styles.projectDescription, isDarkMode && styles.textSecondaryDark]}
        numberOfLines={2}
      >
        {item.description || 'Sem descrição'}
      </Text>

      <View style={styles.projectStats}>
        <View style={styles.stat}>
          <Text style={styles.statIcon}>⭐</Text>
          <Text style={[styles.statText, isDarkMode && styles.textSecondaryDark]}>
            {item.stargazers_count || item.stars || 0}
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statIcon}>🔱</Text>
          <Text style={[styles.statText, isDarkMode && styles.textSecondaryDark]}>
            {item.forks_count || item.forks || 0}
          </Text>
        </View>
        <Text style={[styles.updatedDate, isDarkMode && styles.textSecondaryDark]}>
          Atualizado em {formatDate(item.updated_at)}
        </Text>
      </View>
    </Card>
  );

  if (loading) {
    return <Loading message="Carregando projetos..." />;
  }

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      {error && (
        <View style={styles.errorBanner}>
          <Text style={styles.errorText}>ℹ️ {error}</Text>
        </View>
      )}
      <FlatList
        data={projects}
        renderItem={renderProject}
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
            <Text style={styles.emptyIcon}>📦</Text>
            <Text style={[styles.emptyText, isDarkMode && styles.textSecondaryDark]}>
              Nenhum projeto encontrado
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
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  projectIcon: {
    fontSize: 32,
    marginRight: theme.spacing.md,
  },
  projectInfo: {
    flex: 1,
  },
  projectName: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  projectDescription: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: theme.spacing.md,
  },
  projectStats: {
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
  updatedDate: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.textLight,
    marginLeft: 'auto',
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

