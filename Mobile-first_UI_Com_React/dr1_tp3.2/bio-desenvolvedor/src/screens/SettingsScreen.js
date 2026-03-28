// Exercício 14: Tela de configurações
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Switch, Alert } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import colors from '../styles/colors';

const SettingsScreen = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { profile, updateProfile } = useData();
  const { isAuth, logout } = useAuth();

  const [name, setName] = useState(profile.name);
  const [title, setTitle] = useState(profile.title);
  const [bio, setBio] = useState(profile.bio);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [location, setLocation] = useState(profile.location);

  const handleSave = async () => {
    const updatedProfile = {
      ...profile,
      name,
      title,
      bio,
      email,
      phone,
      location,
    };

    const success = await updateProfile(updatedProfile);
    
    if (success) {
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
      navigation.goBack();
    } else {
      Alert.alert('Erro', 'Não foi possível atualizar o perfil.');
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Sair', 
          style: 'destructive',
          onPress: async () => {
            await logout();
            navigation.navigate('Home');
          }
        },
      ]
    );
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
            👤 Editar Perfil
          </Text>

          <Text style={[styles.label, isDarkMode && styles.labelDark]}>Nome</Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={name}
            onChangeText={setName}
            placeholder="Seu nome completo"
            placeholderTextColor={isDarkMode ? colors.dark.textSecondary : colors.light.textSecondary}
          />

          <Text style={[styles.label, isDarkMode && styles.labelDark]}>Cargo/Título</Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={title}
            onChangeText={setTitle}
            placeholder="Seu cargo ou título profissional"
            placeholderTextColor={isDarkMode ? colors.dark.textSecondary : colors.light.textSecondary}
          />

          <Text style={[styles.label, isDarkMode && styles.labelDark]}>Bio</Text>
          <TextInput
            style={[styles.input, styles.textArea, isDarkMode && styles.inputDark]}
            value={bio}
            onChangeText={setBio}
            placeholder="Conte um pouco sobre você"
            placeholderTextColor={isDarkMode ? colors.dark.textSecondary : colors.light.textSecondary}
            multiline
            numberOfLines={4}
          />

          <Text style={[styles.label, isDarkMode && styles.labelDark]}>Email</Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            placeholderTextColor={isDarkMode ? colors.dark.textSecondary : colors.light.textSecondary}
            keyboardType="email-address"
          />

          <Text style={[styles.label, isDarkMode && styles.labelDark]}>Telefone</Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={phone}
            onChangeText={setPhone}
            placeholder="+55 11 99999-9999"
            placeholderTextColor={isDarkMode ? colors.dark.textSecondary : colors.light.textSecondary}
            keyboardType="phone-pad"
          />

          <Text style={[styles.label, isDarkMode && styles.labelDark]}>Localização</Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            value={location}
            onChangeText={setLocation}
            placeholder="Cidade, Estado"
            placeholderTextColor={isDarkMode ? colors.dark.textSecondary : colors.light.textSecondary}
          />

          <Button
            label="Salvar Alterações"
            variant="success"
            onPress={handleSave}
            style={styles.button}
          />
        </View>

        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
            🎨 Preferências
          </Text>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={[styles.settingLabel, isDarkMode && styles.settingLabelDark]}>
                Modo Escuro
              </Text>
              <Text style={[styles.settingHint, isDarkMode && styles.settingHintDark]}>
                Ativar tema escuro para melhor visualização noturna
              </Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: colors.light.border, true: colors.primary }}
              thumbColor={isDarkMode ? colors.primaryDark : '#f4f3f4'}
            />
          </View>
        </View>

        {isAuth && (
          <View style={[styles.section, isDarkMode && styles.sectionDark]}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
              🔐 Sessão
            </Text>
            <Button
              label="Sair da Conta"
              variant="danger"
              onPress={handleLogout}
            />
          </View>
        )}

        <View style={styles.footer}>
          <Text style={[styles.footerText, isDarkMode && styles.footerTextDark]}>
            Bio de Desenvolvedor v1.0.0
          </Text>
          <Text style={[styles.footerText, isDarkMode && styles.footerTextDark]}>
            © 2026 - Todos os direitos reservados
          </Text>
        </View>
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
  
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    padding: 16,
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
  
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.light.text,
    marginBottom: 8,
    marginTop: 12,
  },
  
  labelDark: {
    color: colors.dark.text,
  },
  
  input: {
    backgroundColor: colors.light.background,
    borderWidth: 2,
    borderColor: colors.light.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: colors.light.text,
  },
  
  inputDark: {
    backgroundColor: colors.dark.background,
    borderColor: colors.dark.border,
    color: colors.dark.text,
  },
  
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  
  button: {
    marginTop: 20,
  },
  
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.light.text,
    marginBottom: 4,
  },
  
  settingLabelDark: {
    color: colors.dark.text,
  },
  
  settingHint: {
    fontSize: 13,
    color: colors.light.textSecondary,
  },
  
  settingHintDark: {
    color: colors.dark.textSecondary,
  },
  
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: colors.light.textSecondary,
  },
  
  loadingTextDark: {
    color: colors.dark.textSecondary,
  },
  
  errorText: {
    fontSize: 16,
    color: colors.danger,
    textAlign: 'center',
  },
  
  errorTextDark: {
    color: colors.danger,
  },
  
  errorHint: {
    fontSize: 14,
    color: colors.light.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },
  
  errorHintDark: {
    color: colors.dark.textSecondary,
  },
  
  footer: {
    marginTop: 32,
    marginBottom: 16,
    alignItems: 'center',
  },
  
  footerText: {
    fontSize: 12,
    color: colors.light.textSecondary,
    marginBottom: 4,
  },
  
  footerTextDark: {
    color: colors.dark.textSecondary,
  },
});

export default SettingsScreen;

