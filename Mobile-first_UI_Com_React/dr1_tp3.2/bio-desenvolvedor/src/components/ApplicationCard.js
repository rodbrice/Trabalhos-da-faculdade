// Exercício 8: Card de candidatura
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';
import colors from '../styles/colors';

const ApplicationCard = ({ application, onDelete }) => {
  const { isDarkMode } = useTheme();

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return colors.success;
      case 'pending':
        return colors.warning;
      case 'cancelled':
        return colors.danger;
      default:
        return colors.info;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmada';
      case 'pending':
        return 'Pendente';
      case 'cancelled':
        return 'Cancelada';
      default:
        return status;
    }
  };

  return (
    <View style={[styles.card, isDarkMode && styles.cardDark]}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={[styles.company, isDarkMode && styles.companyDark]}>
            {application.company}
          </Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(application.status) }]}>
            <Text style={styles.statusText}>{getStatusLabel(application.status)}</Text>
          </View>
        </View>
      </View>
      
      <Text style={[styles.position, isDarkMode && styles.positionDark]}>
        {application.position}
      </Text>
      
      <View style={styles.infoRow}>
        <Text style={[styles.info, isDarkMode && styles.infoDark]}>
          💰 {application.salary}
        </Text>
        <Text style={[styles.info, isDarkMode && styles.infoDark]}>
          📍 {application.location}
        </Text>
      </View>
      
      <Text style={[styles.date, isDarkMode && styles.dateDark]}>
        Candidatura: {new Date(application.appliedDate).toLocaleDateString('pt-BR')}
      </Text>
      
      <Text style={[styles.description, isDarkMode && styles.descriptionDark]} numberOfLines={2}>
        {application.description}
      </Text>
      
      <Button
        label="Cancelar Candidatura"
        variant="danger"
        onPress={() => onDelete(application.id)}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  
  cardDark: {
    backgroundColor: colors.dark.surface,
    borderColor: colors.dark.border,
  },
  
  header: {
    marginBottom: 12,
  },
  
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  company: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.light.text,
    flex: 1,
  },
  
  companyDark: {
    color: colors.dark.text,
  },
  
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  
  statusText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  
  position: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 12,
    fontWeight: '500',
  },
  
  positionDark: {
    color: colors.primary,
  },
  
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  
  info: {
    fontSize: 14,
    color: colors.light.textSecondary,
  },
  
  infoDark: {
    color: colors.dark.textSecondary,
  },
  
  date: {
    fontSize: 12,
    color: colors.light.textSecondary,
    marginBottom: 8,
  },
  
  dateDark: {
    color: colors.dark.textSecondary,
  },
  
  description: {
    fontSize: 14,
    color: colors.light.text,
    marginBottom: 16,
    lineHeight: 20,
  },
  
  descriptionDark: {
    color: colors.dark.text,
  },
  
  button: {
    marginTop: 8,
  },
});

export default ApplicationCard;

