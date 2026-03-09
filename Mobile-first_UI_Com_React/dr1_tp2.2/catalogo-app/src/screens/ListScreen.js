// ListScreen - Tela de lista de produtos
// Usa o componente ProductCard para exibir cada item

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { products } from '../data/items';
import ProductCard from '../components/ProductCard';

export default function ListScreen({ navigation }) {
  
  const renderProduct = ({ item }) => (
    <ProductCard 
      item={item}
      onPress={() => navigation.navigate('Detail', { item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 15,
  },
});

