// Exercício 9: Card de projeto
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const ProjectCard = ({ project, onPress }) => {
  const { isDarkMode } = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.card, isDarkMode && styles.cardDark]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.name, isDarkMode && styles.nameDark]}>
        {project.name}
      </Text>
      <Text style={[styles.description, isDarkMode && styles.descriptionDark]} numberOfLines={2}>
        {project.description}
      </Text>
      
      <View style={styles.footer}>
        <View style={styles.metaContainer}>
          {project.language && (
            <View style={styles.languageTag}>
              <Text style={styles.languageText}>{project.language}</Text>
            </View>
          )}
          <View style={styles.stats}>
            <Text style={[styles.stat, isDarkMode && styles.statDark]}>
              ⭐ {project.stars}
            </Text>
            <Text style={[styles.stat, isDarkMode && styles.statDark]}>
              🔱 {project.forks}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  
  cardDark: {
    backgroundColor: colors.dark.surface,
    borderColor: colors.dark.border,
  },
  
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.light.text,
    marginBottom: 8,
  },
  
  nameDark: {
    color: colors.dark.text,
  },
  
  description: {
    fontSize: 14,
    color: colors.light.textSecondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  
  descriptionDark: {
    color: colors.dark.textSecondary,
  },
  
  footer: {
    marginTop: 8,
  },
  
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  languageTag: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  
  languageText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  
  stats: {
    flexDirection: 'row',
    gap: 12,
  },
  
  stat: {
    fontSize: 14,
    color: colors.light.textSecondary,
  },
  
  statDark: {
    color: colors.dark.textSecondary,
  },
});

export default ProjectCard;

