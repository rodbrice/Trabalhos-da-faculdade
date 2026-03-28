// Exercício 10: Card de artigo
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const ArticleCard = ({ article, onPress }) => {
  const { isDarkMode } = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.card, isDarkMode && styles.cardDark]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {article.coverImage && (
        <Image 
          source={{ uri: article.coverImage }} 
          style={styles.coverImage}
          resizeMode="cover"
        />
      )}
      
      <View style={styles.content}>
        <Text style={[styles.title, isDarkMode && styles.titleDark]} numberOfLines={2}>
          {article.title}
        </Text>
        
        {article.description && (
          <Text style={[styles.description, isDarkMode && styles.descriptionDark]} numberOfLines={3}>
            {article.description}
          </Text>
        )}
        
        <View style={styles.tagsContainer}>
          {article.tags && article.tags.slice(0, 3).map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>#{tag}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.footer}>
          <Text style={[styles.meta, isDarkMode && styles.metaDark]}>
            ❤️ {article.reactions} • 💬 {article.comments} • ⏱️ {article.readingTime} min
          </Text>
          <Text style={[styles.date, isDarkMode && styles.dateDark]}>
            {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
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
  
  coverImage: {
    width: '100%',
    height: 180,
    backgroundColor: colors.light.border,
  },
  
  content: {
    padding: 16,
  },
  
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.light.text,
    marginBottom: 8,
    lineHeight: 24,
  },
  
  titleDark: {
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
  
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
    gap: 8,
  },
  
  tag: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  
  tagText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.light.border,
  },
  
  meta: {
    fontSize: 12,
    color: colors.light.textSecondary,
  },
  
  metaDark: {
    color: colors.dark.textSecondary,
  },
  
  date: {
    fontSize: 12,
    color: colors.light.textSecondary,
  },
  
  dateDark: {
    color: colors.dark.textSecondary,
  },
});

export default ArticleCard;

