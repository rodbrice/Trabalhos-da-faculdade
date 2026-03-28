// Tela de Qualificações
import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';
import { qualifications, qualificationCategories } from '../data/qualifications';
import Card from '../components/Card';
import Badge from '../components/Badge';

export default function QualificationsScreen() {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredQualifications = selectedCategory === 'all'
    ? qualifications
    : qualifications.filter(q => q.type === selectedCategory);

  const renderQualification = ({ item }) => (
    <Card>
      <View style={styles.qualificationHeader}>
        <Text style={styles.icon}>{item.icon}</Text>
        <View style={styles.qualificationInfo}>
          <Text style={[styles.qualificationName, isDarkMode && styles.textDark]}>
            {item.name}
          </Text>
          {item.type === 'skill' && (
            <Badge 
              label={item.level} 
              variant={
                item.level === 'Avançado' ? 'success' : 
                item.level === 'Intermediário' ? 'info' : 'secondary'
              }
              size="sm"
            />
          )}
          {item.type === 'certification' && (
            <Text style={[styles.issuer, isDarkMode && styles.textSecondaryDark]}>
              {item.issuer} • {item.year}
            </Text>
          )}
        </View>
      </View>
      <Text style={[styles.description, isDarkMode && styles.textSecondaryDark]}>
        {item.description}
      </Text>
    </Card>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      {/* Filtros de categoria */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        {qualificationCategories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.filterButton,
              selectedCategory === category.id && styles.filterButtonActive,
              isDarkMode && styles.filterButtonDark,
              selectedCategory === category.id && styles.filterButtonActiveDark,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text style={styles.filterIcon}>{category.icon}</Text>
            <Text
              style={[
                styles.filterText,
                selectedCategory === category.id && styles.filterTextActive,
                isDarkMode && styles.textDark,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de qualificações */}
      <FlatList
        data={filteredQualifications}
        renderItem={renderQualification}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
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
  filterContainer: {
    maxHeight: 60,
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  filterContent: {
    padding: theme.spacing.md,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    marginRight: theme.spacing.sm,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  filterButtonDark: {
    backgroundColor: theme.colors.darkSurface,
    borderColor: theme.colors.borderDark,
  },
  filterButtonActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  filterButtonActiveDark: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  filterIcon: {
    fontSize: theme.fontSize.lg,
    marginRight: theme.spacing.xs,
  },
  filterText: {
    fontSize: theme.fontSize.md,
    fontWeight: '600',
    color: theme.colors.text,
  },
  filterTextActive: {
    color: '#ffffff',
  },
  list: {
    padding: theme.spacing.md,
  },
  qualificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  icon: {
    fontSize: 40,
    marginRight: theme.spacing.md,
  },
  qualificationInfo: {
    flex: 1,
  },
  qualificationName: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  issuer: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    fontStyle: 'italic',
  },
  description: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginTop: theme.spacing.sm,
  },
  textDark: {
    color: theme.colors.darkText,
  },
  textSecondaryDark: {
    color: theme.colors.darkTextSecondary,
  },
});

