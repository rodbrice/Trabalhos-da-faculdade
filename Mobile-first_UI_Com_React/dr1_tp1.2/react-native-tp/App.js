import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Task1Screen from './screens/Task1Screen';
import Task2Screen from './screens/Task2Screen';
import Task3Screen from './screens/Task3Screen';
import Task4Screen from './screens/Task4Screen';
import Task5Screen from './screens/Task5Screen';
import Task6Screen from './screens/Task6Screen';
import Task7Screen from './screens/Task7Screen';
import Task8Screen from './screens/Task8Screen';
import Task9Screen from './screens/Task9Screen';
import Task10Screen from './screens/Task10Screen';
import Task11Screen from './screens/Task11Screen';
import Task12Screen from './screens/Task12Screen';
import Task13Screen from './screens/Task13Screen';
import Task14Screen from './screens/Task14Screen';
import Task15Screen from './screens/Task15Screen';
import Task16Screen from './screens/Task16Screen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  const goBack = () => {
    setCurrentScreen('Home');
  };

  const renderScreen = () => {
    const screenMap = {
      'Home': <HomeScreen navigation={{ navigate }} />,
      'Task1': <Task1Screen navigation={{ goBack }} />,
      'Task2': <Task2Screen navigation={{ goBack }} />,
      'Task3': <Task3Screen navigation={{ goBack }} />,
      'Task4': <Task4Screen navigation={{ goBack }} />,
      'Task5': <Task5Screen navigation={{ goBack }} />,
      'Task6': <Task6Screen navigation={{ goBack }} />,
      'Task7': <Task7Screen navigation={{ goBack }} />,
      'Task8': <Task8Screen navigation={{ goBack }} />,
      'Task9': <Task9Screen navigation={{ goBack }} />,
      'Task10': <Task10Screen navigation={{ goBack }} />,
      'Task11': <Task11Screen navigation={{ goBack }} />,
      'Task12': <Task12Screen navigation={{ goBack }} />,
      'Task13': <Task13Screen navigation={{ goBack }} />,
      'Task14': <Task14Screen navigation={{ goBack }} />,
      'Task15': <Task15Screen navigation={{ goBack }} />,
      'Task16': <Task16Screen navigation={{ goBack }} />,
    };

    return screenMap[currentScreen] || screenMap['Home'];
  };

  const getTitle = () => {
    if (currentScreen === 'Home') return 'React Native TP1.2';
    return `Tarefa ${currentScreen.replace('Task', '')}`;
  };

  return (
    <View style={styles.container}>
      {currentScreen !== 'Home' && (
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{getTitle()}</Text>
          <View style={styles.placeholder} />
        </View>
      )}
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#667eea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 50,
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 60,
  },
});

