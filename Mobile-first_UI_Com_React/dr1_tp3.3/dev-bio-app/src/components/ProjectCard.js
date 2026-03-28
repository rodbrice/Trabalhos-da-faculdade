// ProjectCard - Card de projeto do GitHub
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ProjectCard({ project, onPress }) {
  const { theme } = useTheme();

  // Cores para diferentes linguagens
  const languageColors = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    Python: '#3776ab',
    Java: '#007396',
    HTML: '#e34c26',
    CSS: '#1572b6',
  };

  const languageColor = languageColors[project.language] || theme.primary;

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={styles.icon}>📦</Text>
        <View style={styles.headerInfo}>
          <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
            {project.name}
          </Text>
          {project.language && (
            <View style={styles.languageTag}>
              <View 
                style={[styles.languageDot, { backgroundColor: languageColor }]} 
              />
              <Text style={[styles.language, { color: theme.textSecondary }]}>
                {project.language}
              </Text>
            </View>
          )}
        </View>
      </View>

      <Text 
        style={[styles.description, { color: theme.textSecondary }]}
        numberOfLines={2}
      >
        {project.description}
      </Text>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statIcon}>⭐</Text>
          <Text style={[styles.statText, { color: theme.textSecondary }]}>
            {project.stars}
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statIcon}>🔱</Text>
          <Text style={[styles.statText, { color: theme.textSecondary }]}>
            {project.forks}
          </Text>
        </View>
      </View>

      <Text style={[styles.arrow, { color: theme.primary }]}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 32,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  languageTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  language: {
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  stats: {
    flexDirection: 'row',
    gap: 20,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  statText: {
    fontSize: 13,
  },
  arrow: {
    position: 'absolute',
    right: 15,
    top: '50%',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

