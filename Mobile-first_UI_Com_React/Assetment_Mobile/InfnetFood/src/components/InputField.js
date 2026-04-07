// Componente InputField reutilizável - InfnetFood
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import colors from '../styles/colors';

const InputField = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType, error, multiline, editable = true }) => {
  const { isDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, isDarkMode && styles.labelDark]}>{label}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          isDarkMode && styles.inputDark,
          multiline && styles.textArea,
          error && styles.inputError,
          !editable && styles.inputDisabled,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={isDarkMode ? colors.dark.textSecondary : colors.light.textSecondary}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        editable={editable}
        numberOfLines={multiline ? 3 : 1}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 14 },
  label: { fontSize: 14, fontWeight: '600', color: colors.light.text, marginBottom: 6 },
  labelDark: { color: colors.dark.text },
  input: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.light.text,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  inputDark: {
    backgroundColor: colors.dark.surface,
    color: colors.dark.text,
    borderColor: colors.dark.border,
  },
  textArea: { minHeight: 80, textAlignVertical: 'top' },
  inputError: { borderColor: colors.danger },
  inputDisabled: { opacity: 0.6 },
  errorText: { color: colors.danger, fontSize: 12, marginTop: 4, marginLeft: 4 },
});

export default InputField;

