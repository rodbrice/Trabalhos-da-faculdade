import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function Task16Screen() {
  const [feedback, setFeedback] = useState('');
  const maxLength = 500;

  const handleSubmit = () => {
    if (feedback.trim() === '') {
      Alert.alert('Atenção', '⚠️ Por favor, escreva seu feedback antes de enviar!');
    } else {
      Alert.alert('Sucesso', '✅ Feedback enviado com sucesso! Obrigado pela sua opinião.');
      setFeedback('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>💬 Deixe seu Feedback</Text>
        
        <Text style={styles.label}>Conte-nos sua opinião sobre o aplicativo:</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Digite seu feedback aqui... (máximo 500 caracteres)"
          placeholderTextColor="#999"
          multiline
          numberOfLines={6}
          maxLength={maxLength}
          value={feedback}
          onChangeText={setFeedback}
        />
        
        <View style={styles.footer}>
          <Text style={[styles.counter, feedback.length >= maxLength && styles.counterLimit]}>
            {feedback.length} / {maxLength} caracteres
          </Text>
          
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar Feedback</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tip}>
          <Text style={styles.tipText}>
            <Text style={styles.tipBold}>Dica:</Text> Este campo aceita múltiplas linhas e é rolável quando o conteúdo excede a altura definida.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
  },
  content: {
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 150,
    maxHeight: 300,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  counter: {
    color: 'white',
    fontSize: 14,
  },
  counterLimit: {
    color: '#FF6B6B',
  },
  button: {
    backgroundColor: '#667eea',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tip: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 8,
  },
  tipText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  tipBold: {
    fontWeight: 'bold',
  },
});

