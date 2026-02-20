import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Task11Screen() {
  const galleryImages = [
    { id: 1, uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400', caption: 'Montanhas majestosas' },
    { id: 2, uri: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400', caption: 'Floresta encantada' },
    { id: 3, uri: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400', caption: 'Campo verdejante' },
    { id: 4, uri: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&h=400', caption: 'Lago tranquilo' },
    { id: 5, uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400', caption: 'Praia paradisíaca' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📸 Galeria de Imagens</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {galleryImages.map((image) => (
          <View key={image.id} style={styles.imageContainer}>
            <Image source={{ uri: image.uri }} style={styles.image} resizeMode="cover" />
            <Text style={styles.caption}>{image.caption}</Text>
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
    paddingVertical: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  scrollView: {
    paddingLeft: 20,
  },
  imageContainer: {
    marginRight: 20,
    width: 300,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  caption: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

