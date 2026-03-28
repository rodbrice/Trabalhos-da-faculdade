// Tela de Configurações
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Switch, Alert } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import Card from '../components/Card';
import Section from '../components/Section';

export default function SettingsScreen({ navigation }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const { userProfile, updateProfile } = useUser();

  // Estados locais para edição
  const [name, setName] = useState(userProfile.name);
  const [title, setTitle] = useState(userProfile.title);
  const [location, setLocation] = useState(userProfile.location);
  const [bio, setBio] = useState(userProfile.bio);
  const [email, setEmail] = useState(userProfile.email);
  const [github, setGithub] = useState(userProfile.github);
  const [linkedin, setLinkedin] = useState(userProfile.linkedin);
  const [devto, setDevto] = useState(userProfile.devto);

  const handleSave = () => {
    updateProfile({
      name,
      title,
      location,
      bio,
      email,
      github,
      linkedin,
      devto,
    });
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView 
      style={[styles.container, isDarkMode && styles.containerDark]}
      contentContainerStyle={styles.content}
    >
      {/* Seção de Tema */}
      <Section title="Aparência" icon="🎨">
        <Card>
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={[styles.settingLabel, isDarkMode && styles.textDark]}>
                Modo Escuro
              </Text>
              <Text style={[styles.settingDescription, isDarkMode && styles.textSecondaryDark]}>
                Alterna entre tema claro e escuro
              </Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: '#767577', true: theme.colors.primary }}
              thumbColor={isDarkMode ? '#ffffff' : '#f4f3f4'}
            />
          </View>
        </Card>
      </Section>

      {/* Seção de Edição de Perfil */}
      <Section title="Informações Pessoais" icon="👤">
        <Card>
          <Text style={[styles.inputLabel, isDarkMode && styles.textDark]}>
            Nome Completo
          </Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={name}
            onChangeText={setName}
            placeholder="Seu nome"
            placeholderTextColor={isDarkMode ? theme.colors.darkTextSecondary : theme.colors.textLight}
          />

          <Text style={[styles.inputLabel, isDarkMode && styles.textDark]}>
            Título Profissional
          </Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={title}
            onChangeText={setTitle}
            placeholder="Ex: Desenvolvedor Full Stack"
            placeholderTextColor={isDarkMode ? theme.colors.darkTextSecondary : theme.colors.textLight}
          />

          <Text style={[styles.inputLabel, isDarkMode && styles.textDark]}>
            Localização
          </Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={location}
            onChangeText={setLocation}
            placeholder="Cidade, Estado/País"
            placeholderTextColor={isDarkMode ? theme.colors.darkTextSecondary : theme.colors.textLight}
          />

          <Text style={[styles.inputLabel, isDarkMode && styles.textDark]}>
            Bio
          </Text>
          <TextInput
            style={[styles.input, styles.textArea, isDarkMode && styles.inputDark]}
            value={bio}
            onChangeText={setBio}
            placeholder="Conte um pouco sobre você"
            placeholderTextColor={isDarkMode ? theme.colors.darkTextSecondary : theme.colors.textLight}
            multiline
            numberOfLines={4}
          />
        </Card>
      </Section>

      {/* Seção de Contato */}
      <Section title="Contato & Redes Sociais" icon="🔗">
        <Card>
          <Text style={[styles.inputLabel, isDarkMode && styles.textDark]}>
            Email
          </Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={email}
            onChangeText={setEmail}
            placeholder="seu.email@exemplo.com"
            placeholderTextColor={isDarkMode ? theme.colors.darkTextSecondary : theme.colors.textLight}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={[styles.inputLabel, isDarkMode && styles.textDark]}>
            Username GitHub
          </Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={github}
            onChangeText={setGithub}
            placeholder="seu-username"
            placeholderTextColor={isDarkMode ? theme.colors.darkTextSecondary : theme.colors.textLight}
            autoCapitalize="none"
          />

          <Text style={[styles.inputLabel, isDarkMode && styles.textDark]}>
            Username LinkedIn
          </Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={linkedin}
            onChangeText={setLinkedin}
            placeholder="seu-username"
            placeholderTextColor={isDarkMode ? theme.colors.darkTextSecondary : theme.colors.textLight}
            autoCapitalize="none"
          />

          <Text style={[styles.inputLabel, isDarkMode && styles.textDark]}>
            Username Dev.to
          </Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={devto}
            onChangeText={setDevto}
            placeholder="seu-username"
            placeholderTextColor={isDarkMode ? theme.colors.darkTextSecondary : theme.colors.textLight}
            autoCapitalize="none"
          />
        </Card>
      </Section>

      {/* Botão Salvar */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>
          💾 Salvar Alterações
        </Text>
      </TouchableOpacity>

      {/* Informações */}
      <Text style={[styles.infoText, isDarkMode && styles.textSecondaryDark]}>
        ℹ️ As alterações serão aplicadas imediatamente em todo o aplicativo.
      </Text>
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
    paddingBottom: theme.spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    paddingTop: theme.spacing.md,
  },
  articleIcon: {
    fontSize: 64,
    marginBottom: theme.spacing.md,
  },
  articleTitle: {
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingInfo: {
    flex: 1,
    marginRight: theme.spacing.md,
  },
  settingLabel: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  settingDescription: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  inputLabel: {
    fontSize: theme.fontSize.md,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
    marginTop: theme.spacing.sm,
  },
  input: {
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  inputDark: {
    backgroundColor: theme.colors.darkBackground,
    borderColor: theme.colors.borderDark,
    color: theme.colors.darkText,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  metaIcon: {
    fontSize: theme.fontSize.lg,
    marginRight: theme.spacing.sm,
  },
  metaText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  sectionTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  description: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  browserButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  browserButtonDark: {
    backgroundColor: theme.colors.darkSurface,
  },
  browserButtonText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
  },
  webViewContainer: {
    flex: 1,
  },
  closeWebView: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    paddingTop: theme.spacing.xl,
  },
  closeWebViewText: {
    color: '#ffffff',
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
  },
  webView: {
    flex: 1,
  },
  textDark: {
    color: theme.colors.darkText,
  },
  textSecondaryDark: {
    color: theme.colors.darkTextSecondary,
  },
});

