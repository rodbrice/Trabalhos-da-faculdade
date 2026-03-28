// Exercício 4: Tela inicial (Home) com resumo do perfil
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

  const quickActions = [
    { id: 1, label: 'Ver Perfil Completo', icon: '👤', action: () => navigation.navigate('Profile') },
    { id: 2, label: 'Minhas Qualificações', icon: '🎓', action: () => navigation.navigate('Qualifications') },
    { id: 3, label: 'Meus Projetos', icon: '💻', action: () => navigation.navigate('Projects') },
    { id: 4, label: 'Candidaturas', icon: '📝', action: () => navigation.navigate('Applications') },
    { id: 5, label: 'Artigos', icon: '📰', action: () => navigation.navigate('Articles') },
  ];

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.welcomeSection}>
          <Text style={[styles.welcomeText, isDarkMode && styles.welcomeTextDark]}>
            Bem-vindo ao meu portfólio! 👋
          </Text>
          <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>
            Explore minhas qualificações, projetos e artigos
          </Text>
        </View>

        <ProfileCard profile={profile} />

        {!isAuth && (
          <View style={styles.authSection}>
            <Text style={[styles.authText, isDarkMode && styles.authTextDark]}>
              Faça login para acessar recursos exclusivos
            </Text>
            <Button
              label="Fazer Login"
              variant="success"
              onPress={login}
            />
          </View>
        )}

        <View style={styles.actionsSection}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
            Acesso Rápido
          </Text>
          
          {quickActions.map(action => (
            <TouchableOpacity
              key={action.id}
              style={[styles.actionCard, isDarkMode && styles.actionCardDark]}
              onPress={action.action}
              activeOpacity={0.7}
            >
              <Text style={styles.actionIcon}>{action.icon}</Text>
              <Text style={[styles.actionLabel, isDarkMode && styles.actionLabelDark]}>
                {action.label}
              </Text>
              <Text style={[styles.arrow, isDarkMode && styles.arrowDark]}>›</Text>
            </TouchableOpacity>
          ))}
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
  
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    padding: 16,
  },
  
  welcomeSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.light.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  
  welcomeTextDark: {
    color: colors.dark.text,
  },
  
  subtitle: {
    fontSize: 16,
    color: colors.light.textSecondary,
    textAlign: 'center',
  },
  
  subtitleDark: {
    color: colors.dark.textSecondary,
  },
  
  authSection: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    padding: 20,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: colors.light.border,
    alignItems: 'center',
  },
  
  authText: {
    fontSize: 16,
    color: colors.light.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  
  authTextDark: {
    color: colors.dark.text,
  },
  
  actionsSection: {
    marginTop: 8,
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
  
  actionCard: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  
  actionCardDark: {
    backgroundColor: colors.dark.surface,
    borderColor: colors.dark.border,
  },
  
  actionIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  
  actionLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.light.text,
  },
  
  actionLabelDark: {
    color: colors.dark.text,
  },
  
  arrow: {
    fontSize: 24,
    color: colors.light.textSecondary,
  },
  
  arrowDark: {
    color: colors.dark.textSecondary,
  },
});

export default HomeScreen;

