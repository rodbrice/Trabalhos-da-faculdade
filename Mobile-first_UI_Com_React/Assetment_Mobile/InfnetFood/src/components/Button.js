// Componente Button reutilizável - InfnetFood
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../styles/colors';

const Button = ({ label, onPress, variant = 'primary', disabled = false, loading = false, style, textStyle }) => {
  const getButtonStyle = () => {
    const variants = {
      primary: styles.buttonPrimary,
      secondary: styles.buttonSecondary,
      success: styles.buttonSuccess,
      danger: styles.buttonDanger,
      warning: styles.buttonWarning,
      info: styles.buttonInfo,
      outline: styles.buttonOutline,
    };
    return variants[variant] || styles.buttonPrimary;
  };

  const isOutline = variant === 'outline';

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), (disabled || loading) && styles.buttonDisabled, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={isOutline ? colors.primary : '#ffffff'} />
      ) : (
        <Text style={[styles.buttonText, isOutline && styles.buttonTextOutline, textStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { paddingVertical: 16, paddingHorizontal: 28, borderRadius: 12, alignItems: 'center', minHeight: 52 },
  buttonPrimary: { backgroundColor: colors.primary },
  buttonSecondary: { backgroundColor: colors.secondary },
  buttonSuccess: { backgroundColor: colors.success },
  buttonDanger: { backgroundColor: colors.danger },
  buttonWarning: { backgroundColor: colors.warning },
  buttonInfo: { backgroundColor: colors.info },
  buttonOutline: { backgroundColor: 'transparent', borderWidth: 2, borderColor: colors.primary },
  buttonDisabled: { opacity: 0.5 },
  buttonText: { color: '#ffffff', fontSize: 17, fontWeight: '600', letterSpacing: 0.3 },
  buttonTextOutline: { color: colors.primary },
});

export default Button;

