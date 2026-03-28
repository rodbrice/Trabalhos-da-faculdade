// Exercício 4: Card de resumo do perfil para a Home
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const ProfileCard = ({ profile, onPress }) => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.card, isDarkMode && styles.cardDark]}>
      <Image 
        source={{ uri: profile.avatar }} 
        style={styles.avatar}
      />
      <Text style={[styles.name, isDarkMode && styles.nameDark]}>
        {profile.name}
      </Text>
      <Text style={[styles.title, isDarkMode && styles.titleDark]}>
        {profile.title}
      </Text>
      <Text style={[styles.bio, isDarkMode && styles.bioDark]} numberOfLines={3}>
        {profile.bio}
      </Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={[styles.statValue, isDarkMode && styles.statValueDark]}>
            {profile.summary.experience}
          </Text>
          <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>
            Experiência
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statValue, isDarkMode && styles.statValueDark]}>
            {profile.summary.projects}
          </Text>
          <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>
            Projetos
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statValue, isDarkMode && styles.statValueDark]}>
            {profile.summary.articles}
          </Text>
          <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>
            Artigos
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  
  cardDark: {
    backgroundColor: colors.dark.surface,
    borderColor: colors.dark.border,
  },
  
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.light.text,
    marginBottom: 4,
  },
  
  nameDark: {
    color: colors.dark.text,
  },
  
  title: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 12,
  },
  
  titleDark: {
    color: colors.primary,
  },
  
  bio: {
    fontSize: 14,
    color: colors.light.textSecondary,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  
  bioDark: {
    color: colors.dark.textSecondary,
  },
  
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.light.border,
  },
  
  stat: {
    alignItems: 'center',
  },
  
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  
  statValueDark: {
    color: colors.primary,
  },
  
  statLabel: {
    fontSize: 12,
    color: colors.light.textSecondary,
  },
  
  statLabelDark: {
    color: colors.dark.textSecondary,
  },
});

export default ProfileCard;

