import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Task3Screen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop' }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.description}>
          Uma bela paisagem montanhosa com picos cobertos de neve ao fundo e um vale verdejante à frente, 
          capturando a majestade da natureza.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    marginBottom: 15,
  },
  description: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

