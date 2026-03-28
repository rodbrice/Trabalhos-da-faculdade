// Exercício 14: Settings Screen
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

  const handleSave = async () => {
    const success = await updateProfile({ name, title, bio, email });
    if (success) {
      Alert.alert('Sucesso', 'Perfil atualizado!');
      navigation.goBack();
    }
  };

  const handleLogout = () => {
    Alert.alert('Sair', 'Tem certeza?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', style: 'destructive', onPress: async () => { await logout(); navigation.navigate('Home'); } },
    ]);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>👤 Editar Perfil</Text>
          
          <Text style={[styles.label, isDarkMode && styles.labelDark]}>Nome</Text>
          <TextInput style={[styles.input, isDarkMode && styles.inputDark]} value={name} onChangeText={setName} placeholder="Seu nome" placeholderTextColor={colors.light.textSecondary} />
          
          <Text style={[styles.label, isDarkMode && styles.labelDark]}>Título/Cargo</Text>
          <TextInput style={[styles.input, isDarkMode && styles.inputDark]} value={title} onChangeText={setTitle} placeholder="Seu cargo" placeholderTextColor={colors.light.textSecondary} />
          
          <Text style={[styles.label, isDarkMode && styles.labelDark]}>Bio</Text>
          <TextInput style={[styles.input, styles.textArea, isDarkMode && styles.inputDark]} value={bio} onChangeText={setBio} placeholder="Sua bio" placeholderTextColor={colors.light.textSecondary} multiline numberOfLines={4} />
          
          <Text style={[styles.label, isDarkMode && styles.labelDark]}>Email</Text>
          <TextInput style={[styles.input, isDarkMode && styles.inputDark]} value={email} onChangeText={setEmail} placeholder="seu@email.com" placeholderTextColor={colors.light.textSecondary} keyboardType="email-address" />
          
          <Button label="Salvar Alterações" variant="success" onPress={handleSave} style={styles.btn} />
        </View>

        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>🎨 Preferências</Text>
          <View style={styles.row}>
            <View style={styles.info}>
              <Text style={[styles.settingLabel, isDarkMode && styles.settingLabelDark]}>Modo Escuro</Text>
              <Text style={[styles.settingHint, isDarkMode && styles.settingHintDark]}>Tema escuro para melhor visualização</Text>
            </View>
            <Switch value={isDarkMode} onValueChange={toggleTheme} trackColor={{ false: colors.light.border, true: colors.primary }} />
          </View>
        </View>

        {isAuth && (
          <View style={[styles.section, isDarkMode && styles.sectionDark]}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>🔐 Sessão</Text>
            <Button label="Sair da Conta" variant="danger" onPress={handleLogout} />
          </View>
        )}

        <View style={styles.footer}>
          <Text style={[styles.footerText, isDarkMode && styles.footerTextDark]}>Bio de Desenvolvedor v1.0.0</Text>
          <Text style={[styles.footerText, isDarkMode && styles.footerTextDark]}>© 2026 Brice Roduit</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  content: { padding: 16 },
  section: { backgroundColor: colors.light.surface, borderRadius: 10, padding: 20, marginBottom: 16, shadowColor: colors.light.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1, shadowRadius: 4, elevation: 2, borderWidth: 1, borderColor: colors.light.border },
  sectionDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: colors.light.text, marginBottom: 16 },
  sectionTitleDark: { color: colors.dark.text },
  label: { fontSize: 14, fontWeight: '600', color: colors.light.text, marginBottom: 8, marginTop: 12 },
  labelDark: { color: colors.dark.text },
  input: { backgroundColor: colors.light.background, borderWidth: 2, borderColor: colors.light.border, borderRadius: 8, padding: 12, fontSize: 16, color: colors.light.text },
  inputDark: { backgroundColor: colors.dark.background, borderColor: colors.dark.border, color: colors.dark.text },
  textArea: { height: 100, textAlignVertical: 'top' },
  btn: { marginTop: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  info: { flex: 1, marginRight: 16 },
  settingLabel: { fontSize: 16, fontWeight: '600', color: colors.light.text, marginBottom: 4 },
  settingLabelDark: { color: colors.dark.text },
  settingHint: { fontSize: 13, color: colors.light.textSecondary },
  settingHintDark: { color: colors.dark.textSecondary },
  footer: { marginTop: 32, alignItems: 'center' },
  footerText: { fontSize: 12, color: colors.light.textSecondary, marginBottom: 4 },
  footerTextDark: { color: colors.dark.textSecondary },
});

export default SettingsScreen;

