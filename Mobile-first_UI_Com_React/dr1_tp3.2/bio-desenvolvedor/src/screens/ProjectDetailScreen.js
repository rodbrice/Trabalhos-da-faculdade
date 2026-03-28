// Exercício 9: Tela de detalhes do projeto
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/Button';
import colors from '../styles/colors';

const ProjectDetailScreen = ({ route, navigation }) => {
  const { isDarkMode } = useTheme();
  const { project } = route.params;

  const handleOpenGitHub = () => {
    Linking.openURL(project.url);
  };

  const handleOpenHomepage = () => {
    if (project.homepage) {
      Linking.openURL(project.homepage);
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.header, isDarkMode && styles.headerDark]}>
          <Text style={[styles.name, isDarkMode && styles.nameDark]}>
            {project.name}
          </Text>
          {project.language && (
            <View style={styles.languageBadge}>
              <Text style={styles.languageText}>{project.language}</Text>
            </View>
          )}
        </View>

        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
            📝 Descrição
          </Text>
          <Text style={[styles.description, isDarkMode && styles.descriptionDark]}>
            {project.description}
          </Text>
        </View>

        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
            📊 Estatísticas
          </Text>
          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statIcon}>⭐</Text>
              <Text style={[styles.statValue, isDarkMode && styles.statValueDark]}>
                {project.stars}
              </Text>
              <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>
                Stars
              </Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statIcon}>🔱</Text>
              <Text style={[styles.statValue, isDarkMode && styles.statValueDark]}>
                {project.forks}
              </Text>
              <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>
                Forks
              </Text>
            </View>
          </View>
        </View>

        {project.topics && project.topics.length > 0 && (
          <View style={[styles.section, isDarkMode && styles.sectionDark]}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
              🏷️ Topics
            </Text>
            <View style={styles.topicsContainer}>
              {project.topics.map((topic, index) => (
                <View key={index} style={styles.topicTag}>
                  <Text style={styles.topicText}>{topic}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
            📅 Datas
          </Text>
          <Text style={[styles.dateText, isDarkMode && styles.dateTextDark]}>
            Criado em: {new Date(project.createdAt).toLocaleDateString('pt-BR')}
          </Text>
          <Text style={[styles.dateText, isDarkMode && styles.dateTextDark]}>
            Última atualização: {new Date(project.updatedAt).toLocaleDateString('pt-BR')}
          </Text>
        </View>

        <Button
          label="Abrir no GitHub"
          variant="primary"
          onPress={handleOpenGitHub}
          style={styles.button}
        />

        {project.homepage && (
          <Button
            label="Visitar Website"
            variant="info"
            onPress={handleOpenHomepage}
            style={styles.button}
          />
        )}

        {/* Exercício 14: Botão de voltar */}
        <Button
          label="← Voltar"
          variant="warning"
          onPress={() => navigation.goBack()}
          style={styles.button}
        />
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
  
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    padding: 16,
  },
  
  header: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  
  headerDark: {
    backgroundColor: colors.dark.surface,
    borderColor: colors.dark.border,
  },
  
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.light.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  
  nameDark: {
    color: colors.dark.text,
  },
  
  languageBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  
  languageText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  
  section: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  
  sectionDark: {
    backgroundColor: colors.dark.surface,
    borderColor: colors.dark.border,
  },
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.light.text,
    marginBottom: 12,
  },
  
  sectionTitleDark: {
    color: colors.dark.text,
  },
  
  description: {
    fontSize: 16,
    color: colors.light.text,
    lineHeight: 24,
  },
  
  descriptionDark: {
    color: colors.dark.text,
  },
  
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  
  statBox: {
    alignItems: 'center',
  },
  
  statIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  
  statValueDark: {
    color: colors.primary,
  },
  
  statLabel: {
    fontSize: 14,
    color: colors.light.textSecondary,
  },
  
  statLabelDark: {
    color: colors.dark.textSecondary,
  },
  
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  
  topicTag: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  
  topicText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  
  dateText: {
    fontSize: 16,
    color: colors.light.text,
    marginBottom: 8,
  },
  
  dateTextDark: {
    color: colors.dark.text,
  },
  
  button: {
    marginBottom: 12,
  },
});

export default ProjectDetailScreen;

