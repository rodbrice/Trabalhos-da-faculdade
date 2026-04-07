// Exercício 13: Tela de Configurações - InfnetFood
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, Alert } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import colors from '../styles/colors';

const SettingsScreen = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Sair da conta',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            await logout();
          },
        },
      ]
    );
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Tema */}
        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>🎨 Aparência</Text>
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={[styles.settingLabel, isDarkMode && styles.settingLabelDark]}>Tema Escuro</Text>
              <Text style={[styles.settingDesc, isDarkMode && styles.settingDescDark]}>
                {isDarkMode ? 'Modo escuro ativado' : 'Modo claro ativado'}
              </Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: colors.light.border, true: colors.primary + '80' }}
              thumbColor={isDarkMode ? colors.primary : '#f4f4f4'}
            />
          </View>
        </View>

        {/* Informações da Conta */}
        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>👤 Conta</Text>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, isDarkMode && styles.infoLabelDark]}>Nome:</Text>
            <Text style={[styles.infoValue, isDarkMode && styles.infoValueDark]}>{user?.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, isDarkMode && styles.infoLabelDark]}>E-mail:</Text>
            <Text style={[styles.infoValue, isDarkMode && styles.infoValueDark]}>{user?.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, isDarkMode && styles.infoLabelDark]}>Telefone:</Text>
            <Text style={[styles.infoValue, isDarkMode && styles.infoValueDark]}>{user?.phone}</Text>
          </View>
        </View>

        {/* Sobre */}
        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>ℹ️ Sobre</Text>
          <Text style={[styles.aboutText, isDarkMode && styles.aboutTextDark]}>
            InfnetFood v1.0.0
          </Text>
          <Text style={[styles.aboutText, isDarkMode && styles.aboutTextDark]}>
            Aplicativo de pedidos e delivery desenvolvido como projeto integrado da disciplina de Desenvolvimento Mobile com React Native — Instituto Infnet.
          </Text>
        </View>

        {/* Logout */}
        <Button
          label="🚪 Sair da Conta"
          onPress={handleLogout}
          variant="danger"
          style={{ marginTop: 8 }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  content: { padding: 16, paddingBottom: 32 },
  section: { backgroundColor: colors.light.surface, borderRadius: 14, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: colors.light.border },
  sectionDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: colors.light.text, marginBottom: 14 },
  sectionTitleDark: { color: colors.dark.text },
  settingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  settingInfo: { flex: 1 },
  settingLabel: { fontSize: 16, fontWeight: '500', color: colors.light.text },
  settingLabelDark: { color: colors.dark.text },
  settingDesc: { fontSize: 13, color: colors.light.textSecondary, marginTop: 2 },
  settingDescDark: { color: colors.dark.textSecondary },
  infoRow: { flexDirection: 'row', marginBottom: 10, alignItems: 'center' },
  infoLabel: { fontSize: 14, fontWeight: '600', color: colors.light.textSecondary, width: 80 },
  infoLabelDark: { color: colors.dark.textSecondary },
  infoValue: { fontSize: 14, color: colors.light.text, flex: 1 },
  infoValueDark: { color: colors.dark.text },
  aboutText: { fontSize: 14, color: colors.light.textSecondary, lineHeight: 20, marginBottom: 6 },
  aboutTextDark: { color: colors.dark.textSecondary },
});

export default SettingsScreen;

