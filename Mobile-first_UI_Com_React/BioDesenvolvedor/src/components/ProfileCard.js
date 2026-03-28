// Card de Perfil para Home
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const ProfileCard = ({ profile }) => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.card, isDarkMode && styles.cardDark]}>
      <Image source={{ uri: profile.avatar }} style={styles.avatar} />
      <Text style={[styles.name, isDarkMode && styles.textDark]}>{profile.name}</Text>
      <Text style={styles.title}>{profile.title}</Text>
      <Text style={[styles.bio, isDarkMode && styles.bioDark]} numberOfLines={3}>{profile.bio}</Text>
      
      <View style={styles.stats}>
        {Object.entries(profile.summary).map(([key, value]) => (
          <View key={key} style={styles.stat}>
            <Text style={styles.statValue}>{value}</Text>
            <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>
              {key === 'experience' ? 'Experiência' : key === 'projects' ? 'Projetos' : key === 'articles' ? 'Artigos' : 'Certificações'}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: colors.light.surface, borderRadius: 10, padding: 20, alignItems: 'center', shadowColor: colors.light.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1, shadowRadius: 4, elevation: 3, borderWidth: 1, borderColor: colors.light.border, marginBottom: 16 },
  cardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 16, borderWidth: 3, borderColor: colors.primary },
  name: { fontSize: 24, fontWeight: 'bold', color: colors.light.text, marginBottom: 4 },
  textDark: { color: colors.dark.text },
  title: { fontSize: 16, color: colors.primary, marginBottom: 12 },
  bio: { fontSize: 14, color: colors.light.textSecondary, textAlign: 'center', marginBottom: 16, lineHeight: 20 },
  bioDark: { color: colors.dark.textSecondary },
  stats: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 16, paddingTop: 16, borderTopWidth: 1, borderTopColor: colors.light.border },
  stat: { alignItems: 'center' },
  statValue: { fontSize: 20, fontWeight: 'bold', color: colors.primary, marginBottom: 4 },
  statLabel: { fontSize: 12, color: colors.light.textSecondary },
  statLabelDark: { color: colors.dark.textSecondary },
});

export default ProfileCard;

