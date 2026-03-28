// Card de Habilidade
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const SkillCard = ({ skill }) => {
  const { isDarkMode } = useTheme();
  const levelColors = { 'Avançado': colors.success, 'Intermediário': colors.warning, 'Básico': colors.info };

  return (
    <View style={[styles.card, isDarkMode && styles.cardDark]}>
      <Text style={styles.icon}>{skill.icon}</Text>
      <View style={styles.content}>
        <Text style={[styles.name, isDarkMode && styles.nameDark]}>{skill.name}</Text>
        <Text style={[styles.exp, isDarkMode && styles.expDark]}>{skill.experience} de experiência</Text>
        <View style={[styles.badge, { backgroundColor: levelColors[skill.level] }]}>
          <Text style={styles.badgeText}>{skill.level}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: colors.light.surface, borderRadius: 10, padding: 16, marginBottom: 12, flexDirection: 'row', alignItems: 'center', shadowColor: colors.light.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1, shadowRadius: 4, elevation: 2, borderWidth: 1, borderColor: colors.light.border },
  cardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  icon: { fontSize: 40, marginRight: 16 },
  content: { flex: 1 },
  name: { fontSize: 18, fontWeight: '600', color: colors.light.text, marginBottom: 4 },
  nameDark: { color: colors.dark.text },
  exp: { fontSize: 14, color: colors.light.textSecondary, marginBottom: 8 },
  expDark: { color: colors.dark.textSecondary },
  badge: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  badgeText: { color: '#ffffff', fontSize: 12, fontWeight: '600' },
});

export default SkillCard;

