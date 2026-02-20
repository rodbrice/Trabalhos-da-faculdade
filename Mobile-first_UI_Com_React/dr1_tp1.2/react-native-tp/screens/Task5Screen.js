import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Task5Screen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.caption}>
              Floresta tranquila com luz solar
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.caption}>
              Campo verde com montanhas
            </Text>
          </View>
        </View>
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
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '48%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  caption: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

