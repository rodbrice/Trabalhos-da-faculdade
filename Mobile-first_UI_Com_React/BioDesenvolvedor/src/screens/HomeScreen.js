// Exercício 4: Home Screen
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import ProfileCard from '../components/ProfileCard';
import Button from '../components/Button';
import colors from '../styles/colors';

const HomeScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const { profile } = useData();
  const { isAuth, login } = useAuth();

  const actions = [
    { id: 1, label: 'Ver Perfil Completo', icon: '👤', screen: 'Profile' },
    { id: 2, label: 'Minhas Qualificações', icon: '🎓', screen: 'Qualifications' },
    { id: 3, label: 'Meus Projetos', icon: '💻', screen: 'Projects' },
    { id: 4, label: 'Candidaturas', icon: '📝', screen: 'Applications' },
    { id: 5, label: 'Artigos Técnicos', icon: '📰', screen: 'Articles' },
  ];

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.welcome, isDarkMode && styles.welcomeDark]}>Bem-vindo! 👋</Text>
        <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>Explore meu portfólio profissional</Text>
        
        <ProfileCard profile={profile} />

        {!isAuth && (
          <View style={[styles.authBox, isDarkMode && styles.authBoxDark]}>
            <Text style={[styles.authText, isDarkMode && styles.authTextDark]}>
              Faça login para acessar recursos exclusivos
            </Text>
            <Button label="Fazer Login" variant="success" onPress={login} />
          </View>
        )}

        <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>Acesso Rápido</Text>
        {actions.map(action => (
          <TouchableOpacity
            key={action.id}
            style={[styles.actionCard, isDarkMode && styles.actionCardDark]}
            onPress={() => navigation.navigate(action.screen)}
            activeOpacity={0.7}
          >
            <Text style={styles.actionIcon}>{action.icon}</Text>
            <Text style={[styles.actionLabel, isDarkMode && styles.actionLabelDark]}>{action.label}</Text>
            <Text style={[styles.arrow, isDarkMode && styles.arrowDark]}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  content: { padding: 16 },
  welcome: { fontSize: 26, fontWeight: 'bold', color: colors.light.text, marginBottom: 8, textAlign: 'center' },
  welcomeDark: { color: colors.dark.text },
  subtitle: { fontSize: 16, color: colors.light.textSecondary, textAlign: 'center', marginBottom: 20 },
  subtitleDark: { color: colors.dark.textSecondary },
  authBox: { backgroundColor: colors.light.surface, borderRadius: 10, padding: 20, marginVertical: 16, borderWidth: 1, borderColor: colors.light.border, alignItems: 'center' },
  authBoxDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  authText: { fontSize: 16, color: colors.light.text, marginBottom: 16, textAlign: 'center' },
  authTextDark: { color: colors.dark.text },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: colors.light.text, marginBottom: 16, marginTop: 8 },
  sectionTitleDark: { color: colors.dark.text },
  actionCard: { backgroundColor: colors.light.surface, borderRadius: 10, padding: 16, marginBottom: 12, flexDirection: 'row', alignItems: 'center', shadowColor: colors.light.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1, shadowRadius: 4, elevation: 2, borderWidth: 1, borderColor: colors.light.border },
  actionCardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  actionIcon: { fontSize: 32, marginRight: 16 },
  actionLabel: { flex: 1, fontSize: 16, fontWeight: '500', color: colors.light.text },
  actionLabelDark: { color: colors.dark.text },
  arrow: { fontSize: 24, color: colors.light.textSecondary },
  arrowDark: { color: colors.dark.textSecondary },
});

export default HomeScreen;

