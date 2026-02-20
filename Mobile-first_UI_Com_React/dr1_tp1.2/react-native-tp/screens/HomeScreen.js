import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const tasks = [
  { id: 1, title: 'Tela de boas-vindas' },
  { id: 2, title: 'Login básico' },
  { id: 3, title: 'Image com descrição' },
  { id: 4, title: 'ScrollView com lista' },
  { id: 5, title: 'Duas imagens lado a lado' },
  { id: 6, title: 'Personalização de botões' },
  { id: 7, title: 'Botões com Alert' },
  { id: 8, title: 'TouchableOpacity' },
  { id: 9, title: 'Tela de perfil' },
  { id: 10, title: 'Lista com FlatList' },
  { id: 11, title: 'Galeria horizontal' },
  { id: 12, title: 'Contador' },
  { id: 13, title: 'Contador V2' },
  { id: 14, title: 'Pressable cor aleatória' },
  { id: 15, title: 'Página de notícias' },
  { id: 16, title: 'Campo de feedback' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>🚀 React Native TP1.2</Text>
          <Text style={styles.subtitle}>16 Tarefas de React Native</Text>
        </View>

        <View style={styles.tasksContainer}>
          {tasks.map((task) => (
            <TouchableOpacity
              key={task.id}
              style={styles.taskCard}
              onPress={() => navigation.navigate(`Task${task.id}`)}
            >
              <View style={styles.taskNumber}>
                <Text style={styles.taskNumberText}>Tarefa {task.id}</Text>
              </View>
              <Text style={styles.taskTitle}>{task.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  tasksContainer: {
    padding: 15,
  },
  taskCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskNumber: {
    backgroundColor: '#667eea',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginBottom: 10,
  },
  taskNumberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3748',
  },
});

