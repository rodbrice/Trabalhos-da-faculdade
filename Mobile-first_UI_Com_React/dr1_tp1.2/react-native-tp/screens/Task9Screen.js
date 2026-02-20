import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Task9Screen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Ana Silva</Text>
        <Text style={styles.bio}>
          Desenvolvedora Full Stack apaixonada por tecnologia e inovação. 
          Especialista em React Native, Node.js e UX/UI Design. 
          Sempre em busca de novos desafios e aprendizados.
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>150</Text>
            <Text style={styles.statLabel}>Projetos</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>2.5k</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>500</Text>
            <Text style={styles.statLabel}>Seguindo</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#667eea',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

