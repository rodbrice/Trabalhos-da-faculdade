// Exercício 8 e 13: Tela de candidaturas (com AsyncStorage)
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import ApplicationCard from '../components/ApplicationCard';
import colors from '../styles/colors';

const ApplicationsScreen = () => {
  const { isDarkMode } = useTheme();
  const { applications, removeApplication } = useData();

  const handleDelete = (id) => {
    Alert.alert(
      'Cancelar Candidatura',
      'Tem certeza que deseja cancelar esta candidatura?',
      [
        { text: 'Não', style: 'cancel' },
        { 
          text: 'Sim', 
          style: 'destructive',
          onPress: () => removeApplication(id)
        },
      ]
    );
  };

  const getPendingCount = () => applications.filter(app => app.status === 'pending').length;
  const getConfirmedCount = () => applications.filter(app => app.status === 'confirmed').length;

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={[styles.statsBar, isDarkMode && styles.statsBarDark]}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{applications.length}</Text>
          <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>Total</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: colors.warning }]}>{getPendingCount()}</Text>
          <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>Pendentes</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: colors.success }]}>{getConfirmedCount()}</Text>
          <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>Confirmadas</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {applications.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📭</Text>
            <Text style={[styles.emptyText, isDarkMode && styles.emptyTextDark]}>
              Você ainda não tem candidaturas
            </Text>
            <Text style={[styles.emptyHint, isDarkMode && styles.emptyHintDark]}>
              Comece a se candidatar para vagas!
            </Text>
          </View>
        ) : (
          applications.map(application => (
            <ApplicationCard
              key={application.id}
              application={application}
              onDelete={handleDelete}
            />
          ))
        )}
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
  
  statsBar: {
    backgroundColor: colors.light.surface,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.light.border,
  },
  
  statsBarDark: {
    backgroundColor: colors.dark.surface,
    borderBottomColor: colors.dark.border,
  },
  
  statItem: {
    alignItems: 'center',
  },
  
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  
  statLabel: {
    fontSize: 12,
    color: colors.light.textSecondary,
  },
  
  statLabelDark: {
    color: colors.dark.textSecondary,
  },
  
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    padding: 16,
  },
  
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
  },
  
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.light.text,
    marginBottom: 8,
  },
  
  emptyTextDark: {
    color: colors.dark.text,
  },
  
  emptyHint: {
    fontSize: 14,
    color: colors.light.textSecondary,
  },
  
  emptyHintDark: {
    color: colors.dark.textSecondary,
  },
});

export default ApplicationsScreen;

