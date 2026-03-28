// Exercício 15: Estilos globais compartilhados
import { StyleSheet } from 'react-native';
import colors from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
  },
  
  containerDark: {
    flex: 1,
    backgroundColor: colors.dark.background,
  },
  
  card: {
    backgroundColor: colors.light.surface,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  
  cardDark: {
    backgroundColor: colors.dark.surface,
    borderColor: colors.dark.border,
    shadowColor: colors.dark.shadow,
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.light.text,
    marginBottom: 8,
  },
  
  titleDark: {
    color: colors.dark.text,
  },
  
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.light.text,
    marginBottom: 8,
  },
  
  subtitleDark: {
    color: colors.dark.text,
  },
  
  text: {
    fontSize: 16,
    color: colors.light.text,
    lineHeight: 24,
  },
  
  textDark: {
    color: colors.dark.text,
  },
  
  textSecondary: {
    fontSize: 14,
    color: colors.light.textSecondary,
  },
  
  textSecondaryDark: {
    color: colors.dark.textSecondary,
  },
  
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
  
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  
  input: {
    backgroundColor: colors.light.surface,
    borderWidth: 2,
    borderColor: colors.light.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: colors.light.text,
  },
  
  inputDark: {
    backgroundColor: colors.dark.surface,
    borderColor: colors.dark.border,
    color: colors.dark.text,
  },
  
  inputFocused: {
    borderColor: colors.primary,
  },
  
  scrollContent: {
    padding: 16,
  },
  
  listEmpty: {
    textAlign: 'center',
    color: colors.light.textSecondary,
    padding: 32,
    fontSize: 16,
  },
  
  listEmptyDark: {
    color: colors.dark.textSecondary,
  },
});

export default globalStyles;

