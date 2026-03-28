// Componente de botão customizado reutilizável
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../styles/colors';

const Button = ({ 
  label, 
  onPress, 
  variant = 'primary', 
  disabled = false,
  loading = false,
  style,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'success':
        return styles.buttonSuccess;
      case 'danger':
        return styles.buttonDanger;
      case 'warning':
        return styles.buttonWarning;
      case 'info':
        return styles.buttonInfo;
      default:
        return styles.buttonPrimary;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        disabled && styles.buttonDisabled,
        style,
      ]}
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
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  
  buttonSuccess: {
    backgroundColor: colors.success,
  },
  
  buttonDanger: {
    backgroundColor: colors.danger,
  },
  
  buttonWarning: {
    backgroundColor: colors.warning,
  },
  
  buttonInfo: {
    backgroundColor: colors.info,
  },
  
  buttonDisabled: {
    opacity: 0.5,
  },
  
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;

