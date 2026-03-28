// Tela Home - Resumo do perfil
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import Card from '../components/Card';
import Badge from '../components/Badge';

export default function HomeScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const { userProfile } = useUser();

  return (
    <ScrollView 
      style={[styles.container, isDarkMode && styles.containerDark]}
      contentContainerStyle={styles.content}
    >
      {/* Header com Avatar */}
      <View style={styles.header}>
        <View style={[styles.avatarContainer, isDarkMode && styles.avatarContainerDark]}>
          <Text style={styles.avatar}>{userProfile.avatar}</Text>
        </View>
        <Text style={[styles.name, isDarkMode && styles.textDark]}>
          {userProfile.name}
        </Text>
        <Text style={[styles.title, isDarkMode && styles.textSecondaryDark]}>
          {userProfile.title}
        </Text>
        <Text style={[styles.location, isDarkMode && styles.textSecondaryDark]}>
          📍 {userProfile.location}
        </Text>
      </View>

      {/* Bio */}
      <Card>
        <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
          Sobre Mim
        </Text>
        <Text style={[styles.bio, isDarkMode && styles.textSecondaryDark]}>
          {userProfile.bio}
        </Text>
      </Card>

      {/* Links rápidos */}
      <Card>
        <Text style={[styles.sectionTitle, isDarkMode && styles.textDark]}>
          Contato
        </Text>
        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>📧</Text>
          <Text style={[styles.contactText, isDarkMode && styles.textSecondaryDark]}>
            {userProfile.email}
          </Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>💼</Text>
          <Text style={[styles.contactText, isDarkMode && styles.textSecondaryDark]}>
            linkedin.com/in/{userProfile.linkedin}
          </Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>🐙</Text>
          <Text style={[styles.contactText, isDarkMode && styles.textSecondaryDark]}>
            github.com/{userProfile.github}
          </Text>
        </View>
      </Card>

      {/* Navegação para perfil completo */}
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.profileButtonText}>
          Ver Perfil Completo
        </Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>

      {/* Cards de navegação rápida */}
      <View style={styles.quickNav}>
        <Text style={[styles.quickNavTitle, isDarkMode && styles.textDark]}>
          Acesso Rápido
        </Text>
        <View style={styles.quickNavGrid}>
          <TouchableOpacity
            style={[styles.quickNavCard, isDarkMode && styles.quickNavCardDark]}
            onPress={() => navigation.navigate('MainTabs', { screen: 'Qualificações' })}
          >
            <Text style={styles.quickNavIcon}>💪</Text>
            <Text style={[styles.quickNavLabel, isDarkMode && styles.textDark]}>
              Qualificações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickNavCard, isDarkMode && styles.quickNavCardDark]}
            onPress={() => navigation.navigate('MainTabs', { screen: 'Projetos' })}
          >
            <Text style={styles.quickNavIcon}>🚀</Text>
            <Text style={[styles.quickNavLabel, isDarkMode && styles.textDark]}>
              Projetos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickNavCard, isDarkMode && styles.quickNavCardDark]}
            onPress={() => navigation.navigate('MainTabs', { screen: 'Candidaturas' })}
          >
            <Text style={styles.quickNavIcon}>💼</Text>
            <Text style={[styles.quickNavLabel, isDarkMode && styles.textDark]}>
              Candidaturas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickNavCard, isDarkMode && styles.quickNavCardDark]}
            onPress={() => navigation.navigate('MainTabs', { screen: 'Artigos' })}
          >
            <Text style={styles.quickNavIcon}>📝</Text>
            <Text style={[styles.quickNavLabel, isDarkMode && styles.textDark]}>
              Artigos
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  content: {
    padding: theme.spacing.md,
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    ...theme.shadow.medium,
  },
  avatarContainerDark: {
    backgroundColor: theme.colors.darkSurface,
  },
  avatar: {
    fontSize: 50,
  },
  name: {
    fontSize: theme.fontSize.xxxl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  title: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  location: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textLight,
  },
  sectionTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  bio: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  contactIcon: {
    fontSize: theme.fontSize.lg,
    marginRight: theme.spacing.sm,
  },
  contactText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  profileButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  profileButtonText: {
    color: '#ffffff',
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    marginRight: theme.spacing.sm,
  },
  arrow: {
    color: '#ffffff',
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
  },
  quickNav: {
    marginBottom: theme.spacing.lg,
  },
  quickNavTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  quickNavGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickNavCard: {
    width: '48%',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    ...theme.shadow.small,
  },
  quickNavCardDark: {
    backgroundColor: theme.colors.darkSurface,
  },
  quickNavIcon: {
    fontSize: 40,
    marginBottom: theme.spacing.sm,
  },
  quickNavLabel: {
    fontSize: theme.fontSize.md,
    fontWeight: '600',
    color: theme.colors.text,
    textAlign: 'center',
  },
  textDark: {
    color: theme.colors.darkText,
  },
  textSecondaryDark: {
    color: theme.colors.darkTextSecondary,
  },
});

