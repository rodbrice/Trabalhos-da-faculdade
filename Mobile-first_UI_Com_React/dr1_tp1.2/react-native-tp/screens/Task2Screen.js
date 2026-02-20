import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Task2Screen() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (usuario.trim() === '' || senha.trim() === '') {
      Alert.alert('Erro', '❌ Preencha todos os campos!');
    } else {
      Alert.alert('Sucesso', '✅ Login realizado com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Básico</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#999"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Entrar" onPress={handleLogin} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
});

