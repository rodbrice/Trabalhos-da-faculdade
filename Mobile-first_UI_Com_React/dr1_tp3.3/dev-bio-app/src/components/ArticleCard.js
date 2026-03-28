// ArticleCard - Card de artigo do Dev.to
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { getTimeSince } from '../utils/helpers';

export default function ArticleCard({ article, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={styles.icon}>📝</Text>
        <View style={styles.headerInfo}>
          <Text style={[styles.title, { color: theme.text }]} numberOfLines={2}>
            {article.title}
          </Text>
          <Text style={[styles.date, { color: theme.textSecondary }]}>
            {getTimeSince(article.publishedAt)}
          </Text>
        </View>
      </View>

      <Text 
        style={[styles.description, { color: theme.textSecondary }]}
        numberOfLines={2}
      >
        {article.description}
      </Text>

      <View style={styles.tags}>
        {article.tags.slice(0, 3).map((tag, index) => (
          <View key={index} style={[styles.tag, { backgroundColor: theme.primary + '20' }]}>
            <Text style={[styles.tagText, { color: theme.primary }]}>
              #{tag}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statIcon}>❤️</Text>
          <Text style={[styles.statText, { color: theme.textSecondary }]}>
            {article.reactions}
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statIcon}>💬</Text>
          <Text style={[styles.statText, { color: theme.textSecondary }]}>
            {article.comments}
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statIcon}>⏱️</Text>
          <Text style={[styles.statText, { color: theme.textSecondary }]}>
            {article.readingTime} min
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
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  icon: {
    fontSize: 28,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    lineHeight: 22,
  },
  date: {
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
  },
  stats: {
    flexDirection: 'row',
    gap: 15,
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

