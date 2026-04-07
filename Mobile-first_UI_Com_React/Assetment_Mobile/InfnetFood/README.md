# 🍔 InfnetFood — App de Pedidos e Delivery

Projeto integrado (Assessment) da disciplina **Desenvolvimento Mobile com React Native** — Bloco de Desenvolvimento Front-end com Frameworks, Instituto Infnet.

---

## 📋 Sobre o Projeto

Aplicativo completo de pedidos e delivery de lanches e refeições, desenvolvido em **React Native** com **Expo**. Inclui fluxo de autenticação, listagem de categorias e produtos, carrinho de compras, checkout com integração à API ViaCEP, mapa interativo com restaurantes, perfil do usuário, sistema de pedidos com notificações locais, tema claro/escuro e muito mais.

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v18+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- Aplicativo **Expo Go** no celular (iOS / Android)

### Instalação

```bash
cd InfnetFood
npm install
npx expo start
```

Escaneie o QR Code com o Expo Go ou execute em emulador.

### 📱 Snack Expo (Versão Online)

Para rodar no **Snack Expo** (navegador), consulte o guia completo: [SNACK_MIGRATION.md](./SNACK_MIGRATION.md)

**Resumo rápido**:
1. Use o arquivo `package.snack.json` (renomeie para `package.json`)
2. Remova as dependências: `babel-preset-expo`, `lottie-react-native`, `@lottiefiles/dotlottie-react`
3. Faça upload no https://snack.expo.dev

⚠️ **Nota**: Algumas funcionalidades (Lottie animations) têm limitações no Snack. Para experiência completa, rode localmente.

---

## 🏗️ Estrutura do Projeto

```
InfnetFood/
├── App.js                          # Ponto de entrada com providers
├── app.json                        # Configuração Expo
├── package.json                    # Dependências
├── babel.config.js
├── assets/                         # Recursos estáticos
└── src/
    ├── components/                 # Componentes reutilizáveis
    │   ├── Button.js
    │   ├── CartItem.js
    │   ├── CategoryCard.js
    │   ├── InputField.js
    │   ├── OrderCard.js
    │   ├── ProductCard.js
    │   └── RestaurantCard.js
    ├── context/                    # Gerenciamento de estado (Context API)
    │   ├── AuthContext.js
    │   ├── CartContext.js
    │   ├── OrderContext.js
    │   └── ThemeContext.js
    ├── data/                       # Dados mockados
    │   ├── categories.js
    │   ├── products.js
    │   ├── restaurants.js
    │   └── userData.js
    ├── navigation/                 # Navegação (react-navigation)
    │   └── AppNavigator.js
    ├── screens/                    # Telas do aplicativo
    │   ├── LoginScreen.js
    │   ├── HomeScreen.js
    │   ├── ProductsScreen.js
    │   ├── ProductDetailScreen.js
    │   ├── CartScreen.js
    │   ├── CheckoutScreen.js
    │   ├── OrdersScreen.js
    │   ├── ProfileScreen.js
    │   ├── MapScreen.js
    │   ├── RestaurantDetailScreen.js
    │   └── SettingsScreen.js
    ├── services/                   # Serviços e APIs
    │   ├── api.js
    │   ├── notifications.js
    │   └── storage.js
    └── styles/                     # Estilos e temas
        ├── colors.js
        └── themes.js
```

---

## 📝 Exercícios Implementados

| # | Exercício | Arquivo(s) Principal(is) |
|---|-----------|--------------------------|
| 1 | Configuração do Ambiente | `App.js`, `AppNavigator.js` |
| 2 | Tela de Login | `LoginScreen.js`, `AuthContext.js` |
| 3 | Página Inicial e Categorias | `HomeScreen.js`, `CategoryCard.js` |
| 4 | Produtos e Detalhes | `ProductsScreen.js`, `ProductDetailScreen.js` |
| 5 | Carrinho de Compras | `CartScreen.js`, `CartContext.js` |
| 6 | Tela de Perfil | `ProfileScreen.js` |
| 7 | Tela de Pedidos | `OrdersScreen.js`, `OrderContext.js` |
| 8 | Mapa Simulado | `MapScreen.js` (WebView + Leaflet) |
| 9 | Detalhes do Restaurante | `RestaurantDetailScreen.js` |
| 10 | Tela de Checkout | `CheckoutScreen.js` |
| 11 | Fluxo de Autenticação | `AppNavigator.js`, `AuthContext.js` |
| 12 | Feedback Visual | `ProductDetailScreen.js`, `LoginScreen.js` |
| 13 | Configurações (Tema) | `SettingsScreen.js`, `ThemeContext.js` |
| 14 | Notificações Simuladas | `notifications.js`, `OrderContext.js` |
| 15 | Integração com API (ViaCEP) | `api.js`, `CheckoutScreen.js` |
| 16 | Publicação | Este `README.md` |

---

## 🛠️ Tecnologias Utilizadas

- **React Native** (0.76.5) com **Expo** (~54.0.0)
- **React Navigation** v7 (Stack + Bottom Tabs)
- **Context API** para gerenciamento de estado
- **AsyncStorage** para persistência local
- **Expo Notifications** para notificações locais
- **WebView + Leaflet** para mapa interativo
- **Axios** + **ViaCEP API** para integração externa
- **Animated API** para feedback visual e animações

---

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Primary | `#FF6B35` | Botões, destaques, preços |
| Secondary | `#2EC4B6` | Sucesso, confirmações |
| Accent | `#FFBA08` | Avaliações, badges |
| Danger | `#E71D36` | Erros, remoções |
| Info | `#3A86FF` | Links, informações |

---

## 👨‍💻 Autor

Desenvolvido como projeto da disciplina de Desenvolvimento Mobile com React Native — Instituto Infnet.

---

## 📄 Licença

Projeto acadêmico — uso educacional.

