// Componente Button reutilizável
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../styles/colors';

const Button = ({ label, onPress, variant = 'primary', disabled = false, loading = false, style }) => {
  const getButtonStyle = () => {
    const variants = {
      success: styles.buttonSuccess,
      danger: styles.buttonDanger,
      warning: styles.buttonWarning,
      info: styles.buttonInfo,
      primary: styles.buttonPrimary,
    };
    return variants[variant] || styles.buttonPrimary;
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), (disabled || loading) && styles.buttonDisabled, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text style={styles.buttonText}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { paddingVertical: 14, paddingHorizontal: 24, borderRadius: 8, alignItems: 'center', minHeight: 48 },
  buttonPrimary: { backgroundColor: colors.primary },
  buttonSuccess: { backgroundColor: colors.success },
  buttonDanger: { backgroundColor: colors.danger },
  buttonWarning: { backgroundColor: colors.warning },
  buttonInfo: { backgroundColor: colors.info },
  buttonDisabled: { opacity: 0.5 },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
});

export default Button;

