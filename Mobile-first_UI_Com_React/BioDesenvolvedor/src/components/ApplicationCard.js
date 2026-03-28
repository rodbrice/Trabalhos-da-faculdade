// Card de Candidatura
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';
import colors from '../styles/colors';

const ApplicationCard = ({ application, onDelete }) => {
  const { isDarkMode } = useTheme();
  const statusColors = { confirmed: colors.success, pending: colors.warning, cancelled: colors.danger };
  const statusLabels = { confirmed: 'Confirmada', pending: 'Pendente', cancelled: 'Cancelada' };

  return (
    <View style={[styles.card, isDarkMode && styles.cardDark]}>
      <View style={styles.header}>
        <Text style={[styles.company, isDarkMode && styles.textDark]}>{application.company}</Text>
        <View style={[styles.status, { backgroundColor: statusColors[application.status] }]}>
          <Text style={styles.statusText}>{statusLabels[application.status]}</Text>
        </View>
      </View>
      <Text style={[styles.position, isDarkMode && styles.positionDark]}>{application.position}</Text>
      <Text style={[styles.info, isDarkMode && styles.infoDark]}>💰 {application.salary} • 📍 {application.location}</Text>
      <Text style={[styles.date, isDarkMode && styles.dateDark]}>Aplicada em: {new Date(application.appliedDate).toLocaleDateString('pt-BR')}</Text>
      <Button label="Cancelar" variant="danger" onPress={() => onDelete(application.id)} style={styles.btn} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: colors.light.surface, borderRadius: 10, padding: 16, marginBottom: 12, shadowColor: colors.light.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1, shadowRadius: 4, elevation: 2, borderWidth: 1, borderColor: colors.light.border },
  cardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  company: { fontSize: 18, fontWeight: 'bold', color: colors.light.text, flex: 1 },
  textDark: { color: colors.dark.text },
  status: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginLeft: 8 },
  statusText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  position: { fontSize: 16, color: colors.primary, marginBottom: 8, fontWeight: '500' },
  positionDark: { color: colors.primary },
  info: { fontSize: 14, color: colors.light.textSecondary, marginBottom: 6 },
  infoDark: { color: colors.dark.textSecondary },
  date: { fontSize: 12, color: colors.light.textSecondary, marginBottom: 12 },
  dateDark: { color: colors.dark.textSecondary },
  btn: { marginTop: 8 },
});

export default ApplicationCard;

