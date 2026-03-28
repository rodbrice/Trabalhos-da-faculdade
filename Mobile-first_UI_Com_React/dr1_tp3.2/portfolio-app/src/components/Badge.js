// Componente Badge reutilizável
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export default function Badge({ label, variant = 'primary', size = 'md' }) {
  const getVariantStyle = () => {
    switch (variant) {
      case 'success':
        return styles.badgeSuccess;
      case 'warning':
        return styles.badgeWarning;
      case 'error':
        return styles.badgeError;
      case 'info':
        return styles.badgeInfo;
      case 'secondary':
        return styles.badgeSecondary;
      default:
        return styles.badgePrimary;
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'sm':
        return styles.badgeSm;
      case 'lg':
        return styles.badgeLg;
      default:
        return styles.badgeMd;
    }
  };

  return (
    <View style={[styles.badge, getVariantStyle(), getSizeStyle()]}>
      <Text style={[styles.badgeText, size === 'sm' && styles.badgeTextSm]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    alignSelf: 'flex-start',
  },
  badgeSm: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeMd: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  badgeLg: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  badgePrimary: {
    backgroundColor: theme.colors.primary,
  },
  badgeSecondary: {
    backgroundColor: theme.colors.textSecondary,
  },
  badgeSuccess: {
    backgroundColor: theme.colors.success,
  },
  badgeWarning: {
    backgroundColor: theme.colors.warning,
  },
  badgeError: {
    backgroundColor: theme.colors.error,
  },
  badgeInfo: {
    backgroundColor: theme.colors.info,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: theme.fontSize.xs,
    fontWeight: 'bold',
  },
  badgeTextSm: {
    fontSize: 9,
  },
});

