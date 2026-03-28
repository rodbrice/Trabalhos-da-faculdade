// ProjectDetailScreen - Detalhes de um projeto
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getTimeSince } from '../utils/helpers';

export default function ProjectDetailScreen({ route }) {
  const { theme } = useTheme();
  const { project } = route.params;

  const openGitHub = () => {
    Linking.openURL(project.url);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={styles.headerIcon}>📦</Text>
        <Text style={styles.headerTitle}>{project.name}</Text>
        <Text style={styles.headerSubtitle}>
          Atualizado {getTimeSince(project.updatedAt)}
        </Text>
      </View>

      {/* Descrição */}
      <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          📝 Descrição
        </Text>
        <Text style={[styles.text, { color: theme.textSecondary }]}>
          {project.description}
        </Text>
      </View>

      {/* Estatísticas */}
      <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          📊 Estatísticas
        </Text>
        
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statIcon}>⭐</Text>
            <Text style={[styles.statValue, { color: theme.primary }]}>
              {project.stars}
            </Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>
              Stars
            </Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statIcon}>🔱</Text>
            <Text style={[styles.statValue, { color: theme.primary }]}>
              {project.forks}
            </Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>
              Forks
            </Text>
          </View>
        </View>
      </View>

      {/* Informações Técnicas */}
      <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          🔧 Informações Técnicas
        </Text>
        
        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: theme.textSecondary }]}>
            Linguagem:
          </Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>
            {project.language || 'Não especificada'}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: theme.textSecondary }]}>
            Branch:
          </Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>
            {project.defaultBranch}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: theme.textSecondary }]}>
            Criado:
          </Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>
            {getTimeSince(project.createdAt)}
          </Text>
        </View>
      </View>

      {/* Topics/Tags */}
      {project.topics.length > 0 && (
        <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            🏷️ Topics
          </Text>
          <View style={styles.topics}>
            {project.topics.map((topic, index) => (
              <View 
                key={index} 
                style={[styles.topic, { backgroundColor: theme.primary + '20' }]}
              >
                <Text style={[styles.topicText, { color: theme.primary }]}>
                  {topic}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Botão GitHub */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={openGitHub}
      >
        <Text style={styles.buttonText}>🐙 Ver no GitHub</Text>
      </TouchableOpacity>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerIcon: {
    fontSize: 60,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  card: {
    borderRadius: 12,
    padding: 20,
    margin: 15,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    width: 100,
  },
  infoValue: {
    fontSize: 14,
    flex: 1,
    fontWeight: '600',
  },
  topics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  topic: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  topicText: {
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    marginHorizontal: 15,
    marginTop: 15,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

