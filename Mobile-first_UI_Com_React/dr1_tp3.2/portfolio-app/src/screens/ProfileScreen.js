// Tela de Perfil Completo
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import Card from '../components/Card';
import Section from '../components/Section';

export default function ProfileScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const { userProfile } = useUser();

  return (
    <ScrollView 
      style={[styles.container, isDarkMode && styles.containerDark]}
      contentContainerStyle={styles.content}
    >
      {/* Header */}
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

      {/* Sobre */}
      <Section title="Sobre" icon="👤">
        <Card>
          <Text style={[styles.bio, isDarkMode && styles.textSecondaryDark]}>
            {userProfile.bio}
          </Text>
        </Card>
      </Section>

      {/* Informações de Contato */}
      <Section title="Contato" icon="📬">
        <Card>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📧</Text>
            <View style={styles.infoContent}>
              <Text style={[styles.infoLabel, isDarkMode && styles.textSecondaryDark]}>
                Email
              </Text>
              <Text style={[styles.infoValue, isDarkMode && styles.textDark]}>
                {userProfile.email}
              </Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>💼</Text>
            <View style={styles.infoContent}>
              <Text style={[styles.infoLabel, isDarkMode && styles.textSecondaryDark]}>
                LinkedIn
              </Text>
              <Text style={[styles.infoValue, isDarkMode && styles.textDark]}>
                linkedin.com/in/{userProfile.linkedin}
              </Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>🐙</Text>
            <View style={styles.infoContent}>
              <Text style={[styles.infoLabel, isDarkMode && styles.textSecondaryDark]}>
                GitHub
              </Text>
              <Text style={[styles.infoValue, isDarkMode && styles.textDark]}>
                github.com/{userProfile.github}
              </Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>✍️</Text>
            <View style={styles.infoContent}>
              <Text style={[styles.infoLabel, isDarkMode && styles.textSecondaryDark]}>
                Dev.to
              </Text>
              <Text style={[styles.infoValue, isDarkMode && styles.textDark]}>
                dev.to/{userProfile.devto}
              </Text>
            </View>
          </View>
        </Card>
      </Section>

      {/* Botão de Editar Perfil */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('Configurações')}
      >
        <Text style={styles.editButtonText}>
          ⚙️ Editar Perfil
        </Text>
      </TouchableOpacity>
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
    marginBottom: theme.spacing.xl,
    paddingTop: theme.spacing.lg,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    ...theme.shadow.large,
  },
  avatarContainerDark: {
    backgroundColor: theme.colors.darkSurface,
  },
  avatar: {
    fontSize: 60,
  },
  name: {
    fontSize: theme.fontSize.huge,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  title: {
    fontSize: theme.fontSize.xl,
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
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  infoIcon: {
    fontSize: theme.fontSize.xxl,
    marginRight: theme.spacing.md,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textLight,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    fontWeight: '500',
  },
  editButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
  },
  quickNavTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  quickNav: {
    marginTop: theme.spacing.lg,
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
    fontSize: 36,
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

