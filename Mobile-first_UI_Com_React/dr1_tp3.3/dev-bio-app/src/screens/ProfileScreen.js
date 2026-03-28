// ProfileScreen - Perfil completo do desenvolvedor
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useProfile } from '../context/ProfileContext';
import ProfileHeader from '../components/ProfileHeader';

export default function ProfileScreen() {
  const { theme } = useTheme();
  const { profile } = useProfile();

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <ProfileHeader profile={profile} />

      {/* Bio Completa */}
      <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          📖 Biografia
        </Text>
        <Text style={[styles.text, { color: theme.textSecondary }]}>
          {profile.bio}
        </Text>
      </View>

      {/* Informações de Contato */}
      <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          📞 Contato
        </Text>
        
        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>✉️</Text>
          <Text style={[styles.contactText, { color: theme.textSecondary }]}>
            {profile.email}
          </Text>
        </View>

        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>📱</Text>
          <Text style={[styles.contactText, { color: theme.textSecondary }]}>
            {profile.phone}
          </Text>
        </View>

        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>📍</Text>
          <Text style={[styles.contactText, { color: theme.textSecondary }]}>
            {profile.location}
          </Text>
        </View>
      </View>

      {/* Redes Sociais */}
      <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          🌐 Redes Sociais
        </Text>

        <TouchableOpacity 
          style={styles.socialButton}
          onPress={() => openLink(profile.social.github)}
        >
          <Text style={styles.socialIcon}>🐙</Text>
          <Text style={[styles.socialText, { color: theme.text }]}>GitHub</Text>
          <Text style={[styles.arrow, { color: theme.primary }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.socialButton}
          onPress={() => openLink(profile.social.linkedin)}
        >
          <Text style={styles.socialIcon}>💼</Text>
          <Text style={[styles.socialText, { color: theme.text }]}>LinkedIn</Text>
          <Text style={[styles.arrow, { color: theme.primary }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.socialButton}
          onPress={() => openLink(profile.social.website)}
        >
          <Text style={styles.socialIcon}>🌍</Text>
          <Text style={[styles.socialText, { color: theme.text }]}>Website</Text>
          <Text style={[styles.arrow, { color: theme.primary }]}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Disponibilidade */}
      <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          💼 Disponibilidade
        </Text>
        
        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: theme.textSecondary }]}>
            Status:
          </Text>
          <View style={[styles.badge, { backgroundColor: theme.success + '20' }]}>
            <Text style={[styles.badgeText, { color: theme.success }]}>
              ✓ {profile.summary.availability}
            </Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: theme.textSecondary }]}>
            Modelo:
          </Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>
            {profile.summary.workMode}
          </Text>
        </View>
      </View>

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
  text: {
    fontSize: 15,
    lineHeight: 22,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  contactText: {
    fontSize: 15,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  socialIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  socialText: {
    fontSize: 16,
    flex: 1,
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    width: 80,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

