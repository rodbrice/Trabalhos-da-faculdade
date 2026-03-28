// SettingsScreen - Tela de configurações e preferências
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useProfile } from '../context/ProfileContext';
import ThemeToggle from '../components/ThemeToggle';

export default function SettingsScreen() {
  const { theme } = useTheme();
  const { profile, updateProfile, resetProfile } = useProfile();
  
  const [name, setName] = useState(profile.name);
  const [title, setTitle] = useState(profile.title);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);

  const handleSave = async () => {
    try {
      await updateProfile({
        name,
        title,
        email,
        phone,
      });
      Alert.alert('✅ Sucesso', 'Perfil atualizado com sucesso!');
    } catch (error) {
      Alert.alert('❌ Erro', 'Não foi possível salvar as alterações.');
    }
  };

  const handleReset = () => {
    Alert.alert(
      '⚠️ Confirmar',
      'Deseja restaurar os dados originais do perfil?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Restaurar',
          style: 'destructive',
          onPress: async () => {
            await resetProfile();
            setName(profile.name);
            setTitle(profile.title);
            setEmail(profile.email);
            setPhone(profile.phone);
            Alert.alert('✅ Restaurado', 'Perfil restaurado com sucesso!');
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Tema */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          🎨 Aparência
        </Text>
        <ThemeToggle />
      </View>

      {/* Editar Perfil */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          ✏️ Editar Perfil
        </Text>

        <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
          <Text style={[styles.label, { color: theme.textSecondary }]}>Nome</Text>
          <TextInput
            style={[styles.input, { 
              backgroundColor: theme.background, 
              color: theme.text,
              borderColor: theme.border,
            }]}
            value={name}
            onChangeText={setName}
            placeholder="Seu nome completo"
            placeholderTextColor={theme.textSecondary}
          />

          <Text style={[styles.label, { color: theme.textSecondary }]}>Cargo</Text>
          <TextInput
            style={[styles.input, { 
              backgroundColor: theme.background, 
              color: theme.text,
              borderColor: theme.border,
            }]}
            value={title}
            onChangeText={setTitle}
            placeholder="Seu cargo atual"
            placeholderTextColor={theme.textSecondary}
          />

          <Text style={[styles.label, { color: theme.textSecondary }]}>Email</Text>
          <TextInput
            style={[styles.input, { 
              backgroundColor: theme.background, 
              color: theme.text,
              borderColor: theme.border,
            }]}
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            keyboardType="email-address"
            placeholderTextColor={theme.textSecondary}
          />

          <Text style={[styles.label, { color: theme.textSecondary }]}>Telefone</Text>
          <TextInput
            style={[styles.input, { 
              backgroundColor: theme.background, 
              color: theme.text,
              borderColor: theme.border,
            }]}
            value={phone}
            onChangeText={setPhone}
            placeholder="+55 (11) 9 9999-9999"
            keyboardType="phone-pad"
            placeholderTextColor={theme.textSecondary}
          />
        </View>
      </View>

      {/* Botões de Ação */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>💾 Salvar Alterações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonOutline, { borderColor: theme.error }]}
        onPress={handleReset}
      >
        <Text style={[styles.buttonOutlineText, { color: theme.error }]}>
          🔄 Restaurar Dados Originais
        </Text>
      </TouchableOpacity>

      {/* Informações */}
      <View style={[styles.infoBox, { backgroundColor: theme.info + '20' }]}>
        <Text style={[styles.infoText, { color: theme.info }]}>
          ℹ️ Suas alterações são salvas localmente usando AsyncStorage
        </Text>
      </View>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  card: {
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
  },
  button: {
    marginHorizontal: 15,
    marginTop: 20,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonOutline: {
    marginHorizontal: 15,
    marginTop: 15,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
  },
  buttonOutlineText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoBox: {
    margin: 15,
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '600',
  },
});

