// Exercício 10: Article WebView Screen
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/Button';
import colors from '../styles/colors';

const ArticleWebViewScreen = ({ route, navigation }) => {
  const { isDarkMode } = useTheme();
  const { article } = route.params;

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <WebView source={{ uri: article.url }} style={styles.webview} startInLoadingState />
      <View style={styles.footer}>
        <Button label="← Voltar" variant="primary" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  containerDark: { backgroundColor: colors.dark.background },
  webview: { flex: 1 },
  footer: { padding: 16, backgroundColor: colors.light.surface, borderTopWidth: 1, borderTopColor: colors.light.border },
});

export default ArticleWebViewScreen;

