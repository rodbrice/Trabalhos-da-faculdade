// Exercício 2: Tela de Login - InfnetFood
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Animated } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import InputField from '../components/InputField';
import Button from '../components/Button';
import colors from '../styles/colors';

const LoginScreen = () => {
  const { isDarkMode } = useTheme();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [shakeAnim] = useState(new Animated.Value(0));

  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);

    if (!result.success) {
      setError(result.error);
      shake();
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, isDarkMode && styles.containerDark]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        {/* Logo / Header */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoEmoji}>🍔</Text>
          <Text style={styles.logoText}>InfnetFood</Text>
          <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>
            Peça seus pratos favoritos!
          </Text>
        </View>

        {/* Formulário */}
        <Animated.View style={[styles.form, isDarkMode && styles.formDark, { transform: [{ translateX: shakeAnim }] }]}>
          <Text style={[styles.formTitle, isDarkMode && styles.formTitleDark]}>Entrar na sua conta</Text>

          <InputField
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            keyboardType="email-address"
          />

          <InputField
            label="Senha"
            value={password}
            onChangeText={setPassword}
            placeholder="Sua senha"
            secureTextEntry
          />

          {error ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>⚠️ {error}</Text>
            </View>
          ) : null}

          <Button
            label="Entrar"
            onPress={handleLogin}
            loading={loading}
            style={{ marginTop: 8 }}
          />

          <Text style={[styles.hint, isDarkMode && styles.hintDark]}>
            Dica: use qualquer e-mail válido e senha com 3+ caracteres
          </Text>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  content: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  logoContainer: { alignItems: 'center', marginBottom: 32 },
  logoEmoji: { fontSize: 64 },
  logoText: { fontSize: 32, fontWeight: 'bold', color: colors.primary, marginTop: 8 },
  subtitle: { fontSize: 16, color: colors.light.textSecondary, marginTop: 4 },
  subtitleDark: { color: colors.dark.textSecondary },
  form: { backgroundColor: colors.light.surface, borderRadius: 16, padding: 24, elevation: 3, shadowColor: colors.light.shadow, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1, shadowRadius: 8, borderWidth: 1, borderColor: colors.light.border },
  formDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  formTitle: { fontSize: 20, fontWeight: 'bold', color: colors.light.text, textAlign: 'center', marginBottom: 20 },
  formTitleDark: { color: colors.dark.text },
  errorBox: { backgroundColor: colors.danger + '15', borderRadius: 8, padding: 12, marginBottom: 8, borderLeftWidth: 3, borderLeftColor: colors.danger },
  errorText: { color: colors.danger, fontSize: 14 },
  hint: { fontSize: 12, color: colors.light.textSecondary, textAlign: 'center', marginTop: 16, fontStyle: 'italic' },
  hintDark: { color: colors.dark.textSecondary },
});

export default LoginScreen;

