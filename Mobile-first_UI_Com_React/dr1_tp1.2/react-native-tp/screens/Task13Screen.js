import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Task13Screen() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Cliques - V2</Text>
      <Text style={styles.counter}>{count}</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.decrementButton, count === 0 && styles.disabledButton]} 
          onPress={handleDecrement}
          disabled={count === 0}
        >
          <Text style={styles.buttonText}>- Decrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.incrementButton]} 
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+ Incrementar</Text>
        </TouchableOpacity>
      </View>

      {count === 0 && (
        <Text style={styles.warning}>⚠️ Não é permitido valores negativos</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  counter: {
    color: 'white',
    fontSize: 72,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    minWidth: 150,
    alignItems: 'center',
  },
  decrementButton: {
    backgroundColor: '#FF6B6B',
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  warning: {
    color: 'white',
    fontSize: 14,
    marginTop: 20,
  },
});

