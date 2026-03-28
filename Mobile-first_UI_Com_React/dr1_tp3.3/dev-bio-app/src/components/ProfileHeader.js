// ProfileHeader - Header de perfil reutilizável
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ProfileHeader({ profile }) {
  const { theme } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: theme.primary }]}>
      <View style={styles.avatarCircle}>
        <Text style={styles.avatar}>{profile.avatar}</Text>
      </View>
      
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.title}>{profile.title}</Text>
      <Text style={styles.location}>{profile.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    fontSize: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
});

