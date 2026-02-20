import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Task14Screen() {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
    '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B88B', '#FAD7A0',
    '#52BE80', '#5DADE2', '#AF7AC5', '#EC7063', '#48C9B0'
  ];

  const [backgroundColor, setBackgroundColor] = useState('#667eea');

  const handlePress = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>🎨 Pressable - Mudança de Cor</Text>
      <Text style={styles.subtitle}>
        Pressione o botão para mudar a cor de fundo aleatoriamente
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>🎲 Mudar Cor</Text>
      </Pressable>

      <View style={styles.colorInfo}>
        <Text style={styles.colorText}>Cor atual: {backgroundColor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 50,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  buttonText: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  colorInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginTop: 30,
  },
  colorText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'monospace',
  },
});

