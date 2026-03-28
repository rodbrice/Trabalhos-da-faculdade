// Tela de Candidaturas
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../styles/theme';
import { useTheme } from '../contexts/ThemeContext';
import { useApplications } from '../contexts/ApplicationContext';
import Card from '../components/Card';
import Badge from '../components/Badge';

export default function ApplicationsScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const { applications, updateApplicationStatus, deleteApplication } = useApplications();

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Aprovado':
        return 'success';
      case 'Entrevista agendada':
        return 'info';
      case 'Em análise':
        return 'warning';
      case 'Rejeitado':
        return 'error';
      default:
        return 'secondary';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  const handleLongPress = (item) => {
    Alert.alert(
      'Ações',
      `O que deseja fazer com a vaga "${item.jobTitle}"?`,
      [
        {
          text: 'Alterar Status',
          onPress: () => showStatusOptions(item),
        },
        {
          text: 'Excluir',
          onPress: () => confirmDelete(item),
          style: 'destructive',
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ]
    );
  };

  const showStatusOptions = (item) => {
    const statuses = ['Em análise', 'Entrevista agendada', 'Aprovado', 'Rejeitado'];
    Alert.alert(
      'Alterar Status',
      'Escolha o novo status:',
      statuses.map(status => ({
        text: status,
        onPress: () => updateApplicationStatus(item.id, status),
      })).concat([{ text: 'Cancelar', style: 'cancel' }])
    );
  };

  const confirmDelete = (item) => {
    Alert.alert(
      'Confirmar Exclusão',
      `Tem certeza que deseja excluir a candidatura para "${item.jobTitle}"?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => deleteApplication(item.id),
          style: 'destructive',
        },
      ]
    );
  };

  const renderApplication = ({ item }) => (
    <Card onPress={() => handleLongPress(item)}>
      <View style={styles.applicationHeader}>
        <Text style={styles.companyIcon}>🏢</Text>
        <View style={styles.applicationInfo}>
          <Text style={[styles.jobTitle, isDarkMode && styles.textDark]}>
            {item.jobTitle}
          </Text>
          <Text style={[styles.company, isDarkMode && styles.textSecondaryDark]}>
            {item.company}
          </Text>
        </View>
        <Badge label={item.status} variant={getStatusVariant(item.status)} size="sm" />
      </View>

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>💰</Text>
          <Text style={[styles.detailText, isDarkMode && styles.textSecondaryDark]}>
            {item.salary}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>📍</Text>
          <Text style={[styles.detailText, isDarkMode && styles.textSecondaryDark]}>
            {item.location}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>📅</Text>
          <Text style={[styles.detailText, isDarkMode && styles.textSecondaryDark]}>
            Candidatura em {formatDate(item.appliedDate)}
          </Text>
        </View>
      </View>

      <Text style={[styles.hint, isDarkMode && styles.textSecondaryDark]}>
        Toque e segure para mais opções
      </Text>
    </Card>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <FlatList
        data={applications}
        renderItem={renderApplication}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📋</Text>
            <Text style={[styles.emptyText, isDarkMode && styles.textSecondaryDark]}>
              Nenhuma candidatura registrada
            </Text>
          </View>
        }
      />
    </View>
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
  list: {
    padding: theme.spacing.md,
  },
  applicationHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  companyIcon: {
    fontSize: 32,
    marginRight: theme.spacing.md,
  },
  applicationInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  company: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  details: {
    marginTop: theme.spacing.sm,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  detailIcon: {
    fontSize: theme.fontSize.md,
    marginRight: theme.spacing.sm,
  },
  detailText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  hint: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.textLight,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: theme.spacing.sm,
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
    marginTop: theme.spacing.xxl,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: theme.spacing.md,
  },
  emptyText: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  textDark: {
    color: theme.colors.darkText,
  },
  textSecondaryDark: {
    color: theme.colors.darkTextSecondary,
  },
});

