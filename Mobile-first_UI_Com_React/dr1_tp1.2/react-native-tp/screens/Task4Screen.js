import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Task4Screen() {
  const items = [
    'Comprar leite e ovos no supermercado',
    'Estudar React Native para a prova',
    'Fazer exercícios físicos pela manhã',
    'Ler um capítulo do livro de JavaScript',
    'Preparar apresentação para reunião',
    'Organizar a mesa de trabalho',
    'Ligar para a família no final de semana',
    'Revisar código do projeto pessoal',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <ScrollView style={styles.scrollView}>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemNumber}>{index + 1}.</Text>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
  },
  itemNumber: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 16,
  },
  itemText: {
    color: 'white',
    flex: 1,
    fontSize: 16,
  },
});

