import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Task8Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TouchableOpacity</Text>

      <TouchableOpacity 
        style={[styles.button, styles.button1]}
        onPress={() => Alert.alert('Touchable 1', '👆 Você tocou no primeiro botão!')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Toque Aqui (Roxo)</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.button2]}
        onPress={() => Alert.alert('Touchable 2', '✨ Você tocou no segundo botão!')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Toque Aqui (Verde)</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.button3]}
        onPress={() => Alert.alert('Touchable 3', '🎉 Você tocou no terceiro botão!')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Toque Aqui (Rosa)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginBottom: 20,
    minWidth: 200,
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#6C5CE7',
  },
  button2: {
    backgroundColor: '#00B894',
  },
  button3: {
    backgroundColor: '#FD79A8',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

