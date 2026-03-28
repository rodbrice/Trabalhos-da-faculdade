// Exercício 8 e 13: Applications Screen
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
    Alert.alert('Cancelar Candidatura', 'Tem certeza?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', style: 'destructive', onPress: () => removeApplication(id) },
    ]);
  };

  const pending = applications.filter(a => a.status === 'pending').length;
  const confirmed = applications.filter(a => a.status === 'confirmed').length;

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={[styles.statsBar, isDarkMode && styles.statsBarDark]}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{applications.length}</Text>
          <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>Total</Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statValue, { color: colors.warning }]}>{pending}</Text>
          <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>Pendentes</Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statValue, { color: colors.success }]}>{confirmed}</Text>
          <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>Confirmadas</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {applications.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📭</Text>
            <Text style={[styles.emptyText, isDarkMode && styles.emptyTextDark]}>Nenhuma candidatura</Text>
          </View>
        ) : (
          applications.map(app => <ApplicationCard key={app.id} application={app} onDelete={handleDelete} />)
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  statsBar: { backgroundColor: colors.light.surface, flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: colors.light.border },
  statsBarDark: { backgroundColor: colors.dark.surface, borderBottomColor: colors.dark.border },
  stat: { alignItems: 'center' },
  statValue: { fontSize: 24, fontWeight: 'bold', color: colors.primary, marginBottom: 4 },
  statLabel: { fontSize: 12, color: colors.light.textSecondary },
  statLabelDark: { color: colors.dark.textSecondary },
  content: { padding: 16 },
  empty: { alignItems: 'center', paddingVertical: 64 },
  emptyIcon: { fontSize: 64, marginBottom: 16 },
  emptyText: { fontSize: 18, fontWeight: '600', color: colors.light.text },
  emptyTextDark: { color: colors.dark.text },
});

export default ApplicationsScreen;

