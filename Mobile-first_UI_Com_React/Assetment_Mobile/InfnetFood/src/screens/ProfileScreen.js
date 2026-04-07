// Exercício 6: Tela de Perfil do Usuário - InfnetFood
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import Button from '../components/Button';
import colors from '../styles/colors';

const ProfileScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const { user } = useAuth();
  const { orders } = useOrders();

  const totalSpent = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Avatar e Nome */}
        <View style={[styles.profileCard, isDarkMode && styles.profileCardDark]}>
          <Image source={{ uri: user?.avatar }} style={styles.avatar} />
          <Text style={[styles.name, isDarkMode && styles.nameDark]}>{user?.name}</Text>
          <Text style={[styles.email, isDarkMode && styles.emailDark]}>{user?.email}</Text>
          <Text style={[styles.phone, isDarkMode && styles.phoneDark]}>📱 {user?.phone}</Text>
        </View>

        {/* Estatísticas */}
        <View style={styles.statsRow}>
          <View style={[styles.statCard, isDarkMode && styles.statCardDark]}>
            <Text style={styles.statValue}>{orders.length}</Text>
            <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>Pedidos</Text>
          </View>
          <View style={[styles.statCard, isDarkMode && styles.statCardDark]}>
            <Text style={styles.statValue}>R$ {totalSpent.toFixed(0)}</Text>
            <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>Total Gasto</Text>
          </View>
          <View style={[styles.statCard, isDarkMode && styles.statCardDark]}>
            <Text style={styles.statValue}>⭐</Text>
            <Text style={[styles.statLabel, isDarkMode && styles.statLabelDark]}>VIP</Text>
          </View>
        </View>

        {/* Endereço */}
        <View style={[styles.section, isDarkMode && styles.sectionDark]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>📍 Endereço Principal</Text>
          <Text style={[styles.addressText, isDarkMode && styles.addressTextDark]}>
            {user?.address?.street}, {user?.address?.neighborhood}
          </Text>
          <Text style={[styles.addressText, isDarkMode && styles.addressTextDark]}>
            {user?.address?.city} - {user?.address?.state}
          </Text>
          <Text style={[styles.addressText, isDarkMode && styles.addressTextDark]}>
            CEP: {user?.address?.cep}
          </Text>
        </View>

        {/* Ações */}
        <View style={styles.actions}>
          <Button
            label="⚙️ Configurações"
            onPress={() => navigation.navigate('Settings')}
            variant="outline"
            style={{ marginBottom: 10 }}
          />
          <Button
            label="📋 Meus Pedidos"
            onPress={() => navigation.navigate('OrdersTab')}
            variant="info"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  content: { padding: 16, paddingBottom: 32 },
  profileCard: { backgroundColor: colors.light.surface, borderRadius: 16, padding: 24, alignItems: 'center', borderWidth: 1, borderColor: colors.light.border, elevation: 2, marginBottom: 16 },
  profileCardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  avatar: { width: 96, height: 96, borderRadius: 48, marginBottom: 12, backgroundColor: colors.primary + '20' },
  name: { fontSize: 22, fontWeight: 'bold', color: colors.light.text },
  nameDark: { color: colors.dark.text },
  email: { fontSize: 15, color: colors.primary, marginTop: 4 },
  emailDark: { color: colors.primary },
  phone: { fontSize: 14, color: colors.light.textSecondary, marginTop: 4 },
  phoneDark: { color: colors.dark.textSecondary },
  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  statCard: { flex: 1, backgroundColor: colors.light.surface, borderRadius: 14, padding: 16, alignItems: 'center', borderWidth: 1, borderColor: colors.light.border },
  statCardDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  statValue: { fontSize: 20, fontWeight: 'bold', color: colors.primary },
  statLabel: { fontSize: 12, color: colors.light.textSecondary, marginTop: 4 },
  statLabelDark: { color: colors.dark.textSecondary },
  section: { backgroundColor: colors.light.surface, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: colors.light.border, marginBottom: 16 },
  sectionDark: { backgroundColor: colors.dark.surface, borderColor: colors.dark.border },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: colors.light.text, marginBottom: 10 },
  sectionTitleDark: { color: colors.dark.text },
  addressText: { fontSize: 14, color: colors.light.textSecondary, marginBottom: 2 },
  addressTextDark: { color: colors.dark.textSecondary },
  actions: { marginTop: 8 },
});

export default ProfileScreen;

