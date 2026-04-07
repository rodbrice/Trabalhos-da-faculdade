// Exercício 9: Tela de Detalhes do Restaurante - InfnetFood
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/Button';
import colors from '../styles/colors';

const RestaurantDetailScreen = ({ route }) => {
  const { isDarkMode } = useTheme();
  const { restaurant } = route.params;

  const openMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${restaurant.latitude},${restaurant.longitude}`;
    Linking.openURL(url);
  };

  const menuItems = restaurant.menuSample.split(', ');

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: restaurant.image }} style={styles.image} />

        <View style={styles.content}>
          {/* Nome e Avaliação */}
          <View style={styles.titleRow}>
            <Text style={[styles.name, isDarkMode && styles.nameDark]}>{restaurant.name}</Text>
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>⭐ {restaurant.rating}</Text>
            </View>
          </View>

          <Text style={[styles.cuisine, isDarkMode && styles.cuisineDark]}>{restaurant.cuisine}</Text>

          {/* Informações */}
          <View style={[styles.infoCard, isDarkMode && styles.infoCardDark]}>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>📍</Text>
              <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>{restaurant.address}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>📞</Text>
              <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>{restaurant.phone}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>🕐</Text>
              <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>Entrega: {restaurant.deliveryTime}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>🛵</Text>
              <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>Taxa: R$ {restaurant.deliveryFee.toFixed(2)}</Text>
            </View>
          </View>

          {/* Cardápio Exemplo */}
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>🍽️ Cardápio Destaque</Text>
          <View style={[styles.menuCard, isDarkMode && styles.menuCardDark]}>
            {menuItems.map((item, index) => (
              <View key={index} style={[styles.menuItem, index < menuItems.length - 1 && styles.menuItemBorder]}>
                <Text style={styles.menuBullet}>•</Text>
                <Text style={[styles.menuText, isDarkMode && styles.menuTextDark]}>{item}</Text>
              </View>
            ))}
          </View>

          {/* Botão para abrir no Maps */}
          <Button
            label="📍 Ver no Google Maps"
            onPress={openMaps}
            variant="info"
            style={{ marginTop: 20 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  image: { width: '100%', height: 200 },
  content: { padding: 20 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 24, fontWeight: 'bold', color: colors.light.text, flex: 1, marginRight: 12 },
  nameDark: { color: colors.dark.text },
  ratingBadge: { backgroundColor: colors.accent + '20', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  ratingText: { fontSize: 15, fontWeight: 'bold', color: colors.accent },
  cuisine: { fontSize: 16, color: colors.primary, fontWeight: '600', marginTop: 4 },
  cuisineDark: { color: colors.primary },
  infoCard: { backgroundColor: colors.light.surface, borderRadius: 14, padding: 16, marginTop: 16, borderWidth: 1, borderColor: colors.light.border },
  infoCardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  infoIcon: { fontSize: 18, marginRight: 12 },
  infoText: { fontSize: 14, color: colors.light.text, flex: 1 },
  infoTextDark: { color: colors.dark.text },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: colors.light.text, marginTop: 20, marginBottom: 10 },
  sectionTitleDark: { color: colors.dark.text },
  menuCard: { backgroundColor: colors.light.surface, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: colors.light.border },
  menuCardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  menuItemBorder: { borderBottomWidth: 1, borderBottomColor: colors.light.border },
  menuBullet: { fontSize: 18, color: colors.primary, marginRight: 10, fontWeight: 'bold' },
  menuText: { fontSize: 15, color: colors.light.text },
  menuTextDark: { color: colors.dark.text },
});

export default RestaurantDetailScreen;

