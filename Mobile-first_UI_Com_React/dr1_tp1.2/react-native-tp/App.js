import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#667eea' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'React Native TP1.2' }}
        />
        <Stack.Screen name="Task1" component={Task1Screen} options={{ title: 'Tarefa 1' }} />
        <Stack.Screen name="Task2" component={Task2Screen} options={{ title: 'Tarefa 2' }} />
        <Stack.Screen name="Task3" component={Task3Screen} options={{ title: 'Tarefa 3' }} />
        <Stack.Screen name="Task4" component={Task4Screen} options={{ title: 'Tarefa 4' }} />
        <Stack.Screen name="Task5" component={Task5Screen} options={{ title: 'Tarefa 5' }} />
        <Stack.Screen name="Task6" component={Task6Screen} options={{ title: 'Tarefa 6' }} />
        <Stack.Screen name="Task7" component={Task7Screen} options={{ title: 'Tarefa 7' }} />
        <Stack.Screen name="Task8" component={Task8Screen} options={{ title: 'Tarefa 8' }} />
        <Stack.Screen name="Task9" component={Task9Screen} options={{ title: 'Tarefa 9' }} />
        <Stack.Screen name="Task10" component={Task10Screen} options={{ title: 'Tarefa 10' }} />
        <Stack.Screen name="Task11" component={Task11Screen} options={{ title: 'Tarefa 11' }} />
        <Stack.Screen name="Task12" component={Task12Screen} options={{ title: 'Tarefa 12' }} />
        <Stack.Screen name="Task13" component={Task13Screen} options={{ title: 'Tarefa 13' }} />
        <Stack.Screen name="Task14" component={Task14Screen} options={{ title: 'Tarefa 14' }} />
        <Stack.Screen name="Task15" component={Task15Screen} options={{ title: 'Tarefa 15' }} />
        <Stack.Screen name="Task16" component={Task16Screen} options={{ title: 'Tarefa 16' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

