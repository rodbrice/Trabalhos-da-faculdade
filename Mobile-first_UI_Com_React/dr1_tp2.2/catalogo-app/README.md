# TechStore - Catálogo de Eletrônicos

Aplicativo de catálogo desenvolvido para o TP2 de Mobile-first UI com React.

## Sobre o Projeto

Este é um app de catálogo de produtos eletrônicos com navegação entre telas. Foi feito usando React Native com Expo e React Navigation.

## Como Funciona

O app tem 2 telas principais:
- **Lista de Produtos**: Mostra 6 produtos que você pode clicar
- **Detalhes**: Quando clica em um produto, abre essa tela com mais informações

## Testar no Expo Snack

1. Acesse https://snack.expo.dev
2. Crie um novo projeto ou importe este código
3. Teste no simulador ou escaneie o QR Code com o Expo Go no celular

## Estrutura do Projeto

```
catalogo-app/
├── App.js                      # Arquivo principal
├── src/
│   ├── navigation/
│   │   └── AppNavigator.js    # Configuração das rotas
│   ├── screens/
│   │   ├── ListScreen.js      # Tela de lista
│   │   └── DetailScreen.js    # Tela de detalhes
│   └── data/
│       └── items.js           # Dados dos produtos
```

## Produtos no Catálogo

Tem 6 produtos eletrônicos:
1. Smartphone Galaxy X - R$ 2.499,90
2. Notebook Pro 15 - R$ 4.899,90
3. Fone Bluetooth Premium - R$ 899,90
4. Smart TV 55" 4K - R$ 3.299,90
5. Smartwatch Fit - R$ 1.199,90
6. Tablet Ultra 10" - R$ 1.899,90

Cada produto tem: título, descrição, preço, categoria, avaliação, status de estoque e especificações técnicas.

## Tecnologias

- React Native 0.74.1
- Expo ~51.0.0
- React Navigation v6
- React Navigation Native Stack

## Como Funciona a Navegação

Usei o Stack Navigator do React Navigation. Quando você clica num produto na lista, ele passa os dados do produto para a tela de detalhes usando `navigation.navigate('Detail', { item })`.

Na tela de detalhes, pego esses dados com `route.params.item` e exibo tudo.

## Desenvolvimento

Este projeto foi desenvolvido com auxílio de ferramentas de IA (GitHub Copilot) para estruturação e sugestões de código, mas todo o código foi revisado e testado por mim.

### Fontes consultadas:
- Documentação React Navigation: https://reactnavigation.org/
- Documentação React Native: https://reactnative.dev/
- GitHub Copilot (assistente de código)

## Observações

- O App.js ficou bem simples, só renderiza o NavigationContainer
- Os dados estão mockados no arquivo items.js
- A pasta components está vazia mas pode ser usada futuramente
- Uso de emojis para deixar a interface mais visual

---

Projeto desenvolvido para TP2 - 2026

