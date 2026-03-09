// Badge - Badge reutilizável para status
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Badge({ text, type = 'default' }) {
  return (
    <View style={[styles.badge, type === 'success' && styles.success, type === 'error' && styles.error]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#667eea',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  success: {
    backgroundColor: '#4CAF50',
  },
  error: {
    backgroundColor: '#f44336',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

