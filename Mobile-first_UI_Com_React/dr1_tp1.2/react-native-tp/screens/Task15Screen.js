import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Task15Screen() {
  const news = [
    {
      id: 1,
      title: 'Nova versão do React Native lançada',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400',
      description: 'A equipe do React Native anunciou uma nova versão com melhorias significativas de performance e novas funcionalidades.'
    },
    {
      id: 2,
      title: 'JavaScript continua sendo a linguagem mais popular',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400',
      description: 'Segundo pesquisa recente, JavaScript mantém sua posição como a linguagem de programação mais utilizada no mundo.'
    },
    {
      id: 3,
      title: 'Tendências de UX/UI Design para 2026',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400',
      description: 'Designers compartilham as principais tendências de interface e experiência do usuário para 2026.'
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>📰 Últimas Notícias</Text>
        {news.map((article) => (
          <View key={article.id} style={styles.card}>
            <Image source={{ uri: article.image }} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

