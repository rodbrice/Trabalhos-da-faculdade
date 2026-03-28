// ApplicationsScreen - Tela de candidaturas com AsyncStorage
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { mockApplications, statusConfig } from '../data/mockApplications';
import { loadApplications, saveApplications, updateApplicationStatus } from '../services/storage';
import ApplicationCard from '../components/ApplicationCard';

export default function ApplicationsScreen() {
  const { theme } = useTheme();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const savedApps = await loadApplications();
      if (savedApps) {
        setApplications(savedApps);
      } else {
        // Primeira vez: usar dados mockados
        setApplications(mockApplications);
        await saveApplications(mockApplications);
      }
    } catch (error) {
      console.error('Erro ao carregar candidaturas:', error);
      setApplications(mockApplications);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (appId) => {
    const statusKeys = Object.keys(statusConfig);
    const app = applications.find(a => a.id === appId);
    const currentIndex = statusKeys.indexOf(app.status);
    const nextIndex = (currentIndex + 1) % statusKeys.length;
    const newStatus = statusKeys[nextIndex];

    const updatedList = applications.map(a =>
      a.id === appId ? { ...a, status: newStatus } : a
    );

    setApplications(updatedList);
    await saveApplications(updatedList);
  };

  const handleCardPress = (application) => {
    Alert.alert(
      application.position,
      application.description + '\n\n' + 
      'Requisitos:\n' + application.requirements.join('\n• '),
      [
        { text: 'Alterar Status', onPress: () => handleStatusChange(application.id) },
        { text: 'Fechar', style: 'cancel' }
      ]
    );
  };

  const renderApplication = ({ item }) => (
    <ApplicationCard
      application={item}
      onPress={() => handleCardPress(item)}
      onStatusChange={() => handleStatusChange(item.id)}
    />
  );

  // Estatísticas
  const stats = {
    total: applications.length,
    applied: applications.filter(a => a.status === 'applied').length,
    interview: applications.filter(a => a.status === 'interview').length,
    offer: applications.filter(a => a.status === 'offer').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  };

  if (loading) {
    return (
      <View style={[styles.centerContainer, { backgroundColor: theme.background }]}>
        <Text style={styles.loadingIcon}>⏳</Text>
        <Text style={[styles.loadingText, { color: theme.textSecondary }]}>
          Carregando candidaturas...
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header com estatísticas */}
      <View style={[styles.statsCard, { backgroundColor: theme.card }, theme.shadow]}>
        <Text style={[styles.statsTitle, { color: theme.text }]}>
          📊 Resumo das Candidaturas
        </Text>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={[styles.statNum, { color: theme.info }]}>{stats.applied}</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Enviadas</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statNum, { color: theme.warning }]}>{stats.interview}</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Processo</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statNum, { color: theme.success }]}>{stats.offer}</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Propostas</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statNum, { color: theme.error }]}>{stats.rejected}</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Recusadas</Text>
          </View>
        </View>
      </View>

      {/* Lista de candidaturas */}
      <FlatList
        data={applications}
        renderItem={renderApplication}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📭</Text>
            <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
              Nenhuma candidatura registrada
            </Text>
          </View>
        )}
      />

      {/* Nota sobre AsyncStorage */}
      <View style={[styles.infoBox, { backgroundColor: theme.info + '20' }]}>
        <Text style={[styles.infoText, { color: theme.info }]}>
          💾 Dados salvos localmente com AsyncStorage
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingIcon: {
    fontSize: 50,
    marginBottom: 15,
  },
  loadingText: {
    fontSize: 14,
  },
  statsCard: {
    margin: 15,
    padding: 15,
    borderRadius: 12,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  statNum: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
  },
  list: {
    paddingBottom: 80,
  },
  empty: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 16,
  },
  infoBox: {
    margin: 15,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 12,
    fontWeight: '600',
  },
});

