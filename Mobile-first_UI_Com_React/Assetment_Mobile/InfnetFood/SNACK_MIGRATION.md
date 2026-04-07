# 🚀 Migração para Snack Expo - InfnetFood

## Passos para rodar no Snack Expo (snack.expo.dev)

### 1. Preparação dos Arquivos

**IMPORTANTE**: O Snack Expo tem limitações e não suporta todas as dependências do projeto local.

#### Dependências Removidas no Snack:
- ❌ `babel-preset-expo` - não necessário no Snack
- ❌ `@lottiefiles/dotlottie-react` - não suportado
- ❌ `lottie-react-native` - causa problemas no Snack

### 2. Como Fazer Upload no Snack

#### Opção A: Upload Manual (Recomendado)
1. Acesse: https://snack.expo.dev
2. Clique em "New Snack"
3. Use o `package.snack.json` (renomeie para `package.json`)
4. Faça upload dos arquivos na seguinte ordem:
   - `App.js` (raiz)
   - `src/` (toda a pasta)
   - `assets/` (toda a pasta)

#### Opção B: GitHub Import
1. Suba o projeto no GitHub (já feito ✅)
2. No Snack, clique em "Import" → "GitHub"
3. Cole o URL do repositório

### 3. Ajustes Necessários

#### A. Remover referências ao Lottie
Como o `lottie-react-native` não funciona no Snack, você precisa comentar/remover:

**Em `ProductDetailScreen.js`** (linha ~12):
```javascript
// Remova ou comente as animações Lottie se houver
```

**EM `CheckoutScreen.js`** (caso use Lottie):
```javascript
// Remova ou comente as animações Lottie se houver
```

#### B. Notifications - Usar try-catch
O arquivo `src/services/notifications.js` já está protegido com try-catch, mas pode mostrar warnings no Snack (é normal).

### 4. Versões Compatíveis com Snack (SDK 54.0.0)

⚠️ **IMPORTANTE**: O Snack **NÃO aceita** a key `"main"` no package.json. Remova-a!

```json
{
  "expo": "~54.0.0",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "@react-navigation/native": "^7.0.16",
  "@react-navigation/native-stack": "^7.2.3",
  "@react-navigation/bottom-tabs": "^7.2.3",
  "@react-native-async-storage/async-storage": "2.2.0",
  "expo-constants": "~18.0.13",
  "expo-notifications": "~0.32.16",
  "expo-status-bar": "~3.0.9",
  "react-native-safe-area-context": "~5.6.0",
  "react-native-screens": "~4.16.0",
  "react-native-webview": "13.15.0"
}
```

**Use o arquivo `package.snack.json` fornecido** — ele já tem as versões corretas!

### 5. Estrutura de Arquivos no Snack

```
InfnetFood/
├── App.js
├── package.json (use o package.snack.json renomeado)
├── assets/
└── src/
    ├── components/
    ├── context/
    ├── data/
    ├── navigation/
    ├── screens/
    ├── services/
    └── styles/
```

### 6. Problemas Comuns

#### "Resolving dependencies..."
- **Causa**: Dependência não suportada no Snack
- **Solução**: Use o `package.snack.json` fornecido

#### "Module not found: expo-notifications"
- **Causa**: Expo Notifications tem limitações no Snack
- **Solução**: Os warnings são normais, o app funcionará

#### "Cannot find module 'lottie-react-native'"
- **Causa**: Lottie não suportado no Snack
- **Solução**: Remova as animações Lottie ou comente o código

### 7. Funcionalidades Limitadas no Snack

❌ **Não funcionam 100%**:
- Push notifications remotas (já limitado no Expo Go SDK 54+)
- Animações Lottie
- Algumas funcionalidades de WebView podem ter limitações

✅ **Funcionam normalmente**:
- Navegação (Stack + Bottom Tabs)
- Context API (Auth, Cart, Orders, Theme)
- AsyncStorage
- Formulários e validações
- Tema claro/escuro
- Listagens (FlatList)
- Imagens remotas
- API calls (axios + ViaCEP)

### 8. Alternativa: Expo Dev Client

Para ter **todas as funcionalidades**, use um **Development Build** em vez do Snack:

```bash
cd InfnetFood
npx expo install expo-dev-client
eas build --profile development --platform android
```

Isso gera um APK com todas as funcionalidades nativas.

### 9. Checklist para Envio

- [ ] Arquivo `package.json` atualizado (sem babel-preset-expo, lottie, dotlottie-react)
- [ ] Código sem referências ao Lottie (ou comentadas)
- [ ] App.js na raiz
- [ ] Estrutura `src/` completa
- [ ] README.md atualizado

---

## 📝 Observações para o Professor

O app foi desenvolvido localmente com **todas as funcionalidades** dos 16 exercícios. No Snack Expo, algumas animações Lottie podem não funcionar devido às limitações da plataforma, mas **toda a lógica e funcionalidade principal está implementada e funcional**.

Para avaliar o app **completo com todas as features**, recomendo:
1. Clone do repositório GitHub
2. `npm install`
3. `npx expo start`
4. Testar no Expo Go ou dispositivo físico

GitHub: https://github.com/rodbrice/Trabalhos-da-faculdade

