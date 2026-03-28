// HomeScreen - Tela inicial com resumo do perfil
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useProfile } from '../context/ProfileContext';
import ProfileHeader from '../components/ProfileHeader';

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme();
  const { profile } = useProfile();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <ProfileHeader profile={profile} />

      {/* Card de Resumo */}
      <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Sobre Mim
        </Text>
        <Text style={[styles.bio, { color: theme.textSecondary }]}>
          {profile.summary.about}
        </Text>
      </View>

      {/* Estatísticas */}
      <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          📊 Estatísticas
        </Text>
        <View style={styles.statsGrid}>
          {Object.entries(profile.stats).map(([key, value], index) => (
            <View key={index} style={styles.statItem}>
              <Text style={[styles.statValue, { color: theme.primary }]}>
                {value}
              </Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>
                {key === 'experience' ? 'Experiência' : 
                 key === 'projects' ? 'Projetos' : 
                 key === 'certifications' ? 'Certificações' : 'Artigos'}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Especialidades */}
      <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          💡 Especialidades
        </Text>
        <View style={styles.specialties}>
          {profile.summary.specialties.map((specialty, index) => (
            <View 
              key={index} 
              style={[styles.specialtyBadge, { backgroundColor: theme.primary + '20' }]}
            >
              <Text style={[styles.specialtyText, { color: theme.primary }]}>
                {specialty}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Botão Ver Perfil Completo */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Ver Perfil Completo</Text>
      </TouchableOpacity>

      {/* Botão Explorar Portfolio */}
      <TouchableOpacity
        style={[styles.buttonOutline, { borderColor: theme.primary }]}
        onPress={() => navigation.navigate('MainTabs')}
      >
        <Text style={[styles.buttonOutlineText, { color: theme.primary }]}>
          Explorar Portfólio 🚀
        </Text>
      </TouchableOpacity>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 12,
    padding: 20,
    margin: 15,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  bio: {
    fontSize: 15,
    lineHeight: 22,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 15,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 13,
    textAlign: 'center',
  },
  specialties: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  specialtyBadge: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  specialtyText: {
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    marginHorizontal: 15,
    marginTop: 15,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonOutline: {
    marginHorizontal: 15,
    marginTop: 15,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
  },
  buttonOutlineText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

