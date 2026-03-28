// Exercício 6: Qualifications Screen
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import SkillCard from '../components/SkillCard';
import qualifications from '../data/qualifications';
import colors from '../styles/colors';

const QualificationsScreen = () => {
  const { isDarkMode } = useTheme();
  const [tab, setTab] = useState('skills');

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, tab === 'skills' && styles.tabActive]} onPress={() => setTab('skills')}>
          <Text style={[styles.tabText, tab === 'skills' && styles.tabTextActive]}>🛠️ Habilidades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, tab === 'certs' && styles.tabActive]} onPress={() => setTab('certs')}>
          <Text style={[styles.tabText, tab === 'certs' && styles.tabTextActive]}>🏆 Certificações</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {tab === 'skills' ? (
          <>
            <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>Minhas principais habilidades técnicas</Text>
            {qualifications.skills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
          </>
        ) : (
          <>
            <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>Certificações obtidas</Text>
            {qualifications.certifications.map(cert => (
              <View key={cert.id} style={[styles.certCard, isDarkMode && styles.certCardDark]}>
                <Text style={[styles.certName, isDarkMode && styles.certNameDark]}>🎓 {cert.name}</Text>
                <Text style={styles.certInst}>{cert.institution}</Text>
                <View style={styles.certFooter}>
                  <Text style={[styles.certYear, isDarkMode && styles.certYearDark]}>Ano: {cert.year}</Text>
                  <Text style={[styles.certCred, isDarkMode && styles.certCredDark]}>ID: {cert.credential}</Text>
                </View>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  tabs: { flexDirection: 'row', backgroundColor: colors.light.surface, borderBottomWidth: 1, borderBottomColor: colors.light.border },
  tab: { flex: 1, paddingVertical: 16, alignItems: 'center', borderBottomWidth: 3, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: colors.primary },
  tabText: { fontSize: 16, color: colors.light.textSecondary },
  tabTextActive: { color: colors.primary, fontWeight: '600' },
  content: { padding: 16 },
  subtitle: { fontSize: 16, color: colors.light.textSecondary, marginBottom: 16, textAlign: 'center' },
  subtitleDark: { color: colors.dark.textSecondary },
  certCard: { backgroundColor: colors.light.surface, borderRadius: 10, padding: 16, marginBottom: 12, shadowColor: colors.light.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1, shadowRadius: 4, elevation: 2, borderWidth: 1, borderColor: colors.light.border },
  certCardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  certName: { fontSize: 18, fontWeight: '600', color: colors.light.text, marginBottom: 8 },
  certNameDark: { color: colors.dark.text },
  certInst: { fontSize: 16, color: colors.primary, marginBottom: 12 },
  certFooter: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, borderTopWidth: 1, borderTopColor: colors.light.border },
  certYear: { fontSize: 14, color: colors.light.textSecondary },
  certYearDark: { color: colors.dark.textSecondary },
  certCred: { fontSize: 12, color: colors.light.textSecondary, fontStyle: 'italic' },
  certCredDark: { color: colors.dark.textSecondary },
});

export default QualificationsScreen;

