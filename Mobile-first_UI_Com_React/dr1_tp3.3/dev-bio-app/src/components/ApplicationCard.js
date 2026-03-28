// ApplicationCard - Card de candidatura
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { statusConfig } from '../data/mockApplications';
import { formatDate } from '../utils/helpers';

export default function ApplicationCard({ application, onPress, onStatusChange }) {
  const { theme } = useTheme();
  const status = statusConfig[application.status];

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={styles.icon}>{application.icon}</Text>
        <View style={styles.headerInfo}>
          <Text style={[styles.position, { color: theme.text }]} numberOfLines={1}>
            {application.position}
          </Text>
          <Text style={[styles.company, { color: theme.textSecondary }]}>
            {application.company}
          </Text>
        </View>
      </View>

      <Text style={[styles.location, { color: theme.textSecondary }]}>
        📍 {application.location}
      </Text>

      <Text style={[styles.salary, { color: theme.primary }]}>
        💰 {application.salary}
      </Text>

      <View style={[styles.statusBadge, { backgroundColor: status.color + '20' }]}>
        <Text style={styles.statusIcon}>{status.icon}</Text>
        <Text style={[styles.statusText, { color: status.color }]}>
          {status.label}
        </Text>
      </View>

      <Text style={[styles.date, { color: theme.textSecondary }]}>
        Candidatura: {formatDate(application.appliedDate)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 32,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  position: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  company: {
    fontSize: 14,
  },
  location: {
    fontSize: 13,
    marginBottom: 5,
  },
  salary: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 8,
  },
  statusIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 11,
  },
});

