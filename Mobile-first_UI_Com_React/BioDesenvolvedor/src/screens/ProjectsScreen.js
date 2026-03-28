// Exercício 9 e 11: Projects Screen
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

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const repos = await fetchUserRepositories(profile.github);
      setProjects(repos);
    } catch (err) {
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

  if (loading) {
    return (
      <View style={[styles.container, styles.center, isDarkMode && styles.containerDark]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.loadingText, isDarkMode && styles.loadingTextDark]}>Carregando projetos do GitHub...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} colors={[colors.primary]} />}
      >
        <Text style={[styles.header, isDarkMode && styles.headerDark]}>💻 Meus Repositórios</Text>
        <Text style={[styles.subheader, isDarkMode && styles.subheaderDark]}>{projects.length} projetos encontrados</Text>
        
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} onPress={() => navigation.navigate('ProjectDetail', { project })} />
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

export default ProjectsScreen;

