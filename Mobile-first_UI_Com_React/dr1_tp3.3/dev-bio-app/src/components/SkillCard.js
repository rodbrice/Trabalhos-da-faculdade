// SkillCard - Card de habilidade com barra de nível
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function SkillCard({ skill }) {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.card }, theme.shadow]}>
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>{skill.icon}</Text>
        </View>
        <View style={styles.info}>
          <Text style={[styles.name, { color: theme.text }]}>{skill.name}</Text>
          <Text style={[styles.category, { color: theme.textSecondary }]}>
            {skill.category}
          </Text>
        </View>
        <Text style={[styles.level, { color: theme.primary }]}>
          {skill.level}%
        </Text>
      </View>
      
      <Text style={[styles.description, { color: theme.textSecondary }]}>
        {skill.description}
      </Text>
      
      <View style={[styles.progressBar, { backgroundColor: theme.border }]}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${skill.level}%`, backgroundColor: theme.primary }
          ]} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 22,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  category: {
    fontSize: 12,
  },
  level: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 13,
    marginBottom: 12,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
});

