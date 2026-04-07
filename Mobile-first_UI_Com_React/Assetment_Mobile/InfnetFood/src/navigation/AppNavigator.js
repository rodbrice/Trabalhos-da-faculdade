// Exercício 1 e 11: App Navigator com fluxo de autenticação - InfnetFood
import React from 'react';
import { Text, ActivityIndicator, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import colors from '../styles/colors';

// Screens
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrdersScreen from '../screens/OrdersScreen';
import MapScreen from '../screens/MapScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ─── Header padrão reutilizável ───
const useHeaderStyle = () => {
  const { isDarkMode } = useTheme();
  return {
    headerStyle: { backgroundColor: isDarkMode ? colors.dark.surface : colors.light.surface },
    headerTintColor: isDarkMode ? colors.dark.text : colors.light.text,
    headerTitleStyle: { fontWeight: '600' },
  };
};

// ─── Auth Stack (público) ───
const AuthStack = () => {
  const headerStyle = useHeaderStyle();
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// ─── Home Stack: Home → Products → ProductDetail ───
const HomeStack = () => {
  const headerStyle = useHeaderStyle();
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: '🍔 InfnetFood' }} />
      <Stack.Screen name="Products" component={ProductsScreen} options={({ route }) => ({ title: route.params?.category?.name || 'Produtos' })} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Detalhes do Produto' }} />
    </Stack.Navigator>
  );
};

// ─── Cart Stack: Cart → Checkout ───
const CartStack = () => {
  const headerStyle = useHeaderStyle();
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="CartList" component={CartScreen} options={{ title: '🛒 Carrinho' }} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: '📋 Checkout' }} />
    </Stack.Navigator>
  );
};

// ─── Map Stack: Map → RestaurantDetail ───
const MapStack = () => {
  const headerStyle = useHeaderStyle();
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="MapView" component={MapScreen} options={{ title: '🗺️ Mapa' }} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} options={{ title: 'Restaurante' }} />
    </Stack.Navigator>
  );
};

// ─── Profile Stack: Profile ───
const ProfileStack = () => {
  const headerStyle = useHeaderStyle();
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="ProfileView" component={ProfileScreen} options={{ title: '👤 Perfil' }} />
    </Stack.Navigator>
  );
};

// ─── Bottom Tabs (área logada) ───
const TabNavigator = () => {
  const { isDarkMode } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDarkMode ? colors.dark.surface : colors.light.surface,
          borderTopColor: isDarkMode ? colors.dark.border : colors.light.border,
          paddingBottom: 8,
          paddingTop: 8,
          height: 62,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: isDarkMode ? colors.dark.textSecondary : colors.light.textSecondary,
        headerShown: false,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ title: 'Início', tabBarIcon: () => <Text style={{ fontSize: 22 }}>🏠</Text> }}
      />
      <Tab.Screen
        name="MapTab"
        component={MapStack}
        options={{ title: 'Mapa', tabBarIcon: () => <Text style={{ fontSize: 22 }}>🗺️</Text> }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartStack}
        options={{ title: 'Carrinho', tabBarIcon: () => <Text style={{ fontSize: 22 }}>🛒</Text> }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrdersScreen}
        options={{
          title: 'Pedidos',
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>📋</Text>,
          headerShown: true,
          headerTitle: '📋 Meus Pedidos',
          headerStyle: { backgroundColor: isDarkMode ? colors.dark.surface : colors.light.surface },
          headerTintColor: isDarkMode ? colors.dark.text : colors.light.text,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{ title: 'Perfil', tabBarIcon: () => <Text style={{ fontSize: 22 }}>👤</Text> }}
      />
    </Tab.Navigator>
  );
};

// ─── Navigator Principal (controla auth) ───
const AppNavigator = () => {
  const { isAuth, loading } = useAuth();
  const headerStyle = useHeaderStyle();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.light.background }}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{ marginTop: 12, color: colors.light.textSecondary, fontSize: 16 }}>Carregando...</Text>
      </View>
    );
  }

  if (!isAuth) {
    return <AuthStack />;
  }

  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: '⚙️ Configurações', presentation: 'modal' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

