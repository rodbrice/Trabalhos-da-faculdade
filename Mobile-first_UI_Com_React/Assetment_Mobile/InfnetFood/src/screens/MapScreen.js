// Exercício 8: Tela de Mapa com Restaurantes - InfnetFood
// Usa WebView com Leaflet para exibir 10 restaurantes no Centro do Rio de Janeiro
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from '../context/ThemeContext';
import RestaurantCard from '../components/RestaurantCard';
import restaurants from '../data/restaurants';
import colors from '../styles/colors';

const MapScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();

  // Gera os marcadores do Leaflet dinamicamente
  const markers = restaurants.map(r =>
    `L.marker([${r.latitude}, ${r.longitude}]).addTo(map).bindPopup('<b>${r.name}</b><br>${r.cuisine}<br>⭐ ${r.rating}');`
  ).join('\n');

  const leafletHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <style>
        html, body, #map { margin: 0; padding: 0; width: 100%; height: 100%; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        var map = L.map('map').setView([-22.9045, -43.1768], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap'
        }).addTo(map);
        ${markers}
      </script>
    </body>
    </html>
  `;

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      {/* Mapa */}
      <View style={styles.mapContainer}>
        <WebView
          originWhitelist={['*']}
          source={{ html: leafletHTML }}
          style={styles.map}
          javaScriptEnabled
        />
      </View>

      {/* Lista de Restaurantes */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
        🍽️ Restaurantes Próximos ({restaurants.length})
      </Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <RestaurantCard
            restaurant={item}
            onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  mapContainer: { height: 250, borderBottomWidth: 1, borderBottomColor: colors.light.border },
  map: { flex: 1 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: colors.light.text, marginHorizontal: 16, marginTop: 14, marginBottom: 10 },
  sectionTitleDark: { color: colors.dark.text },
  list: { paddingHorizontal: 16, paddingBottom: 160 }, // Espaço para tab bar dobrada
});

export default MapScreen;

