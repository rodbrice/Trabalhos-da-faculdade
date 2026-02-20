import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Task10Screen() {
  const shoppingList = [
    { id: '1', name: 'Leite' },
    { id: '2', name: 'Pão' },
    { id: '3', name: 'Ovos' },
    { id: '4', name: 'Queijo' },
    { id: '5', name: 'Frutas' },
    { id: '6', name: 'Vegetais' },
    { id: '7', name: 'Arroz' },
    { id: '8', name: 'Feijão' },
    { id: '9', name: 'Café' },
    { id: '10', name: 'Açúcar' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.checkmark}>✓</Text>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Lista de Compras</Text>
      <FlatList
        data={shoppingList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkmark: {
    fontSize: 20,
    marginRight: 15,
    color: '#4CAF50',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

