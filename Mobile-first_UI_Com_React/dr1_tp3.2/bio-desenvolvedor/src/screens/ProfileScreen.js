// Exercício 4: Tela de perfil completo
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import Button from '../components/Button';
import colors from '../styles/colors';

const ProfileScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const { profile } = useData();

  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  const contacts = [
    { id: 1, label: 'Email', value: profile.email, icon: '📧', link: `mailto:${profile.email}` },
    { id: 2, label: 'Telefone', value: profile.phone, icon: '📱', link: `tel:${profile.phone}` },
    { id: 3, label: 'Localização', value: profile.location, icon: '📍', link: null },
    { id: 4, label: 'GitHub', value: `@${profile.github}`, icon: '💻', link: `https://github.com/${profile.github}` },
    { id: 5, label: 'LinkedIn', value: profile.linkedin, icon: '💼', link: `https://linkedin.com/in/${profile.linkedin}` },
    { id: 6, label: 'Website', value: profile.website, icon: '🌐', link: profile.website },
  ];

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.profileHeader, isDarkMode && styles.profileHeaderDark]}>
          <Image 
            source={{ uri: profile.avatar }} 
            style={styles.avatar}
          />
          <Text style={[styles.name, isDarkMode && styles.nameDark]}>
            {profile.name}
          </Text>
          <Text style={styles.title}>
            {profile.title}
          </Text>
        </View>

        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
            📖 Sobre Mim
          </Text>
          <Text style={[styles.bio, isDarkMode && styles.bioDark]}>
            {profile.bio}
          </Text>
        </View>

        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
            📊 Estatísticas
          </Text>
          <View style={styles.statsGrid}>
            {Object.entries(profile.summary).map(([key, value]) => (
              <View key={key} style={styles.statBox}>
                <Text style={[styles.statValue, isDarkMode && styles.statValueDark]}>
                  {value}
                </Text>
                <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>
                  {key === 'experience' ? 'Experiência' :
                   key === 'projects' ? 'Projetos' :
                   key === 'articles' ? 'Artigos' : 'Certificações'}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
            📞 Contato
          </Text>
          {contacts.map(contact => (
            <TouchableOpacity
              key={contact.id}
              style={styles.contactItem}
              onPress={() => contact.link && handleOpenLink(contact.link)}
              disabled={!contact.link}
            >
              <Text style={styles.contactIcon}>{contact.icon}</Text>
              <View style={styles.contactInfo}>
                <Text style={[styles.contactLabel, isDarkMode && styles.contactLabelDark]}>
                  {contact.label}
                </Text>
                <Text style={[styles.contactValue, isDarkMode && styles.contactValueDark]}>
                  {contact.value}
                </Text>
              </View>
              {contact.link && (
                <Text style={[styles.arrow, isDarkMode && styles.arrowDark]}>›</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <Button
          label="Editar Perfil"
          variant="primary"
          onPress={() => navigation.navigate('Settings')}
          style={styles.editButton}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
  },
  
  containerDark: {
    backgroundColor: colors.dark.background,
  },
  
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    padding: 16,
  },
  
  profileHeader: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  
  profileHeaderDark: {
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
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.light.text,
    marginBottom: 4,
  },
  
  nameDark: {
    color: colors.dark.text,
  },
  
  title: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '500',
  },
  
  section: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  
  sectionDark: {
    backgroundColor: colors.dark.surface,
    borderColor: colors.dark.border,
  },
  
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.light.text,
    marginBottom: 16,
  },
  
  sectionTitleDark: {
    color: colors.dark.text,
  },
  
  bio: {
    fontSize: 16,
    color: colors.light.text,
    lineHeight: 24,
  },
  
  bioDark: {
    color: colors.dark.text,
  },
  
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  
  statBox: {
    width: '48%',
    backgroundColor: colors.light.background,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  
  statValueDark: {
    color: colors.primary,
  },
  
  statLabel: {
    fontSize: 14,
    color: colors.light.textSecondary,
  },
  
  statLabelDark: {
    color: colors.dark.textSecondary,
  },
  
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.light.border,
  },
  
  contactIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  
  contactInfo: {
    flex: 1,
  },
  
  contactLabel: {
    fontSize: 12,
    color: colors.light.textSecondary,
    marginBottom: 2,
  },
  
  contactLabelDark: {
    color: colors.dark.textSecondary,
  },
  
  contactValue: {
    fontSize: 16,
    color: colors.light.text,
  },
  
  contactValueDark: {
    color: colors.dark.text,
  },
  
  arrow: {
    fontSize: 24,
    color: colors.light.textSecondary,
  },
  
  arrowDark: {
    color: colors.dark.textSecondary,
  },
  
  editButton: {
    marginTop: 8,
    marginBottom: 32,
  },
});

export default ProfileScreen;

