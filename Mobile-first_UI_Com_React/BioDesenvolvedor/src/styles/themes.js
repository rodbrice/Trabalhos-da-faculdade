// Exercício 14: Temas claro e escuro
import colors from './colors';

export const lightTheme = {
  background: colors.light.background,
  surface: colors.light.surface,
  text: colors.light.text,
  textSecondary: colors.light.textSecondary,
  border: colors.light.border,
  primary: colors.primary,
  primaryDark: colors.primaryDark,
  success: colors.success,
  warning: colors.warning,
  danger: colors.danger,
  info: colors.info,
};

export const darkTheme = {
  background: colors.dark.background,
  surface: colors.dark.surface,
  text: colors.dark.text,
  textSecondary: colors.dark.textSecondary,
  border: colors.dark.border,
  primary: colors.primary,
  primaryDark: colors.primaryDark,
  success: colors.success,
  warning: colors.warning,
  danger: colors.danger,
  info: colors.info,
};

export const themes = { light: lightTheme, dark: darkTheme };
export default themes;

