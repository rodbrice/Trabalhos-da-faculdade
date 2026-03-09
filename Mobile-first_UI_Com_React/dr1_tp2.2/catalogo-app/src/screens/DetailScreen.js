// DetailScreen - Tela de detalhes do produto
// Recebe o item via route.params e exibe todas as informações

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconLarge}>{item.emoji}</Text>
        </View>
        
        <Text style={styles.title}>{item.title}</Text>
        
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Preço</Text>
        <Text style={styles.price}>{item.price}</Text>
        
        <View style={[styles.status, !item.inStock && styles.statusOut]}>
          <Text style={styles.statusText}>
            {item.inStock ? '✓ Disponível em estoque' : '✗ Produto esgotado'}
          </Text>
        </View>
      </View>

      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Categoria</Text>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>

      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.text}>{item.description}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Especificações</Text>
        {item.specifications.map((spec, index) => (
          <View key={index} style={styles.specRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.specText}>{spec}</Text>
          </View>
        ))}
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          💡 Garantia de 12 meses e frete grátis para compras acima de R$ 299,90
        </Text>
      </View>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#667eea',
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconLarge: {
    fontSize: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  box: {
    backgroundColor: 'white',
    margin: 15,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 15,
  },
  status: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
  },
  statusOut: {
    backgroundColor: '#f44336',
  },
  statusText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  categoryBadge: {
    backgroundColor: '#667eea',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  specRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    color: '#667eea',
    marginRight: 10,
    fontWeight: 'bold',
  },
  specText: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  infoBox: {
    backgroundColor: '#FFF9C4',
    margin: 15,
    marginTop: 0,
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FBC02D',
  },
  infoText: {
    fontSize: 13,
    color: '#666',
  },
});

