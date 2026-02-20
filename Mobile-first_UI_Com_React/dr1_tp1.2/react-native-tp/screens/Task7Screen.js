import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Task7Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Botões com Respostas</Text>

      <TouchableOpacity 
        style={[styles.button, styles.button1]}
        onPress={() => Alert.alert('Botão 1', '🔴 Você clicou no Botão Vermelho!')}
      >
        <Text style={styles.buttonText}>Botão Vermelho</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.button2]}
        onPress={() => Alert.alert('Botão 2', '🟢 Você clicou no Botão Turquesa!')}
      >
        <Text style={styles.buttonText}>Botão Turquesa</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.button3]}
        onPress={() => Alert.alert('Botão 3', '🟡 Você clicou no Botão de Largura Total!')}
      >
        <Text style={[styles.buttonText, { color: '#333' }]}>Botão Largura Total</Text>
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
    borderRadius: 25,
    marginBottom: 20,
    minWidth: 200,
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#FF6B6B',
  },
  button2: {
    backgroundColor: '#4ECDC4',
    borderWidth: 3,
    borderColor: '#45B7AF',
    borderRadius: 5,
  },
  button3: {
    backgroundColor: '#FFE66D',
    width: '100%',
    paddingVertical: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

