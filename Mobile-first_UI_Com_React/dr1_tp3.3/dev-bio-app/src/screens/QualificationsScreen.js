// QualificationsScreen - Tela de qualificações, habilidades e certificações
import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { skills, certifications, education } from '../data/qualifications';
import SkillCard from '../components/SkillCard';

export default function QualificationsScreen() {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Habilidades */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          💻 Habilidades Técnicas
        </Text>
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </View>

      {/* Certificações */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          🏆 Certificações
        </Text>
        {certifications.map((cert) => (
          <View 
            key={cert.id} 
            style={[styles.certCard, { backgroundColor: theme.card }, theme.shadow]}
          >
            <View style={styles.certHeader}>
              <Text style={styles.certIcon}>{cert.icon}</Text>
              <View style={styles.certInfo}>
                <Text style={[styles.certTitle, { color: theme.text }]}>
                  {cert.title}
                </Text>
                <Text style={[styles.certInstitution, { color: theme.textSecondary }]}>
                  {cert.institution}
                </Text>
              </View>
              <Text style={[styles.certDate, { color: theme.primary }]}>
                {cert.date}
              </Text>
            </View>
            <Text style={[styles.credential, { color: theme.textSecondary }]}>
              Credencial: {cert.credential}
            </Text>
          </View>
        ))}
      </View>

      {/* Educação */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          🎓 Educação
        </Text>
        {education.map((edu) => (
          <View 
            key={edu.id} 
            style={[styles.eduCard, { backgroundColor: theme.card }, theme.shadow]}
          >
            <Text style={styles.eduIcon}>{edu.icon}</Text>
            <Text style={[styles.eduDegree, { color: theme.text }]}>
              {edu.degree}
            </Text>
            <Text style={[styles.eduInstitution, { color: theme.textSecondary }]}>
              {edu.institution}
            </Text>
            <Text style={[styles.eduPeriod, { color: theme.primary }]}>
              📅 {edu.period}
            </Text>
          </View>
        ))}
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  certCard: {
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  certHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  certIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  certInfo: {
    flex: 1,
  },
  certTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  certInstitution: {
    fontSize: 13,
  },
  certDate: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  credential: {
    fontSize: 11,
    marginTop: 5,
  },
  eduCard: {
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  eduIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  eduDegree: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eduInstitution: {
    fontSize: 14,
    marginBottom: 5,
  },
  eduPeriod: {
    fontSize: 13,
  },
});

