# 🚀 COMO INICIAR O PROJETO

## Opção 1: Expo Snack (Recomendado para Entrega)

### Passo a Passo:

1. **Acesse o Expo Snack:**
   - URL: https://snack.expo.dev

2. **Import do GitHub:**
   - Clique em "Import git repository" (canto superior esquerdo)
   - Preencha os campos:
     ```
     Repository URL: https://github.com/rodbrice/Trabalhos-da-faculdade
     Folder path: Mobile-first_UI_Com_React/dr1_tp2.2/catalogo-app
     Branch: master
     ```
   - Clique em "Import"

3. **Aguarde o carregamento:**
   - O Snack vai instalar automaticamente todas as dependências
   - Pode levar 1-2 minutos

4. **Teste o app:**
   - **No navegador:** Use o simulador Android/iOS do próprio Snack
   - **No celular:** 
     - Instale o app "Expo Go" na Play Store/App Store
     - Escaneie o QR Code que aparece no Snack
     - O app abrirá automaticamente

---

## Opção 2: Testar Localmente (Opcional)

Se quiser rodar no seu computador:

### Requisitos:
- Node.js instalado (você já tem v24.14.0 ✅)

### Comandos:

```bash
# 1. Navegue até a pasta do projeto
cd D:\Projetos_e_Codigos\Mobile-first_UI_Com_React\dr1_tp2.2\catalogo-app

# 2. Instale as dependências
npm install

# 3. Inicie o projeto
npx expo start
```

### Como testar:
- Pressione `w` para abrir no navegador
- OU escaneie o QR Code com o Expo Go no celular

---

## 🎯 O que você vai ver:

### Tela de Lista:
- 6 produtos eletrônicos
- Cards clicáveis com foto (emoji), título, preço
- Status de estoque (disponível/esgotado)
- Avaliação e categoria

### Tela de Detalhes:
- Informações completas do produto
- Especificações técnicas
- Preço destacado
- Seções organizadas

### Navegação:
- Clique em qualquer produto → Abre detalhes
- Botão voltar (←) → Retorna para lista

---

## 📋 Estrutura do Projeto:

```
catalogo-app/
├── App.js                          # Entry point
├── package.json                    # Dependências
├── app.json                        # Config Expo
│
└── src/
    ├── navigation/
    │   └── AppNavigator.js        # Rotas Stack
    │
    ├── screens/
    │   ├── ListScreen.js          # Lista de produtos
    │   └── DetailScreen.js        # Detalhes
    │
    ├── components/
    │   ├── ProductCard.js         # Card de produto
    │   ├── InfoSection.js         # Seção de info
    │   └── Badge.js               # Badge colorido
    │
    └── data/
        └── items.js               # 6 produtos mockados
```

---

## ✅ Checklist de Teste:

- [ ] Snack carregou sem erros
- [ ] Lista de produtos aparece
- [ ] Consegue clicar em um produto
- [ ] Tela de detalhes abre
- [ ] Botão voltar funciona
- [ ] Todas as informações aparecem
- [ ] Design está bonito e profissional

---

## 🔗 Links Importantes:

**GitHub:**
https://github.com/rodbrice/Trabalhos-da-faculdade/tree/master/Mobile-first_UI_Com_React/dr1_tp2.2/catalogo-app

**Expo Snack:**
https://snack.expo.dev (para fazer import)

---

## 💡 Dicas:

1. **Se o Snack der erro de versão:**
   - Ignore os warnings sobre SDK 54.0.0
   - O projeto usa SDK 51.0.0 que é estável
   - Vai funcionar normalmente

2. **Se o simulador não carregar:**
   - Clique em "Reload" no Snack
   - Ou teste no celular com Expo Go

3. **Para entregar:**
   - Copie o link do Snack após fazer o import
   - Cole no documento Word
   - Converta para PDF
   - Entregue!

---

## 🎓 Informações para Entrega:

### Funcionalidades Implementadas:
✅ Stack Navigator com 2 telas
✅ 6 produtos mockados (mínimo 5)
✅ Navegação List → Detail
✅ Passagem de parâmetros via route.params
✅ Componentes reutilizáveis (ProductCard, InfoSection, Badge)
✅ Interface moderna e profissional
✅ Código limpo e organizado

### Tecnologias:
- React Native 0.74.1
- Expo SDK 51.0.0
- React Navigation v6

### Estrutura:
- ✅ /src/screens (telas)
- ✅ /src/navigation (rotas)
- ✅ /src/data (dados mockados)
- ✅ /src/components (componentes reutilizáveis)

---

**Projeto pronto para teste e entrega!** 🎉

Qualquer problema, consulte a documentação no README.md ou entre em contato.

---

**Data:** 2026-03-09
**Status:** ✅ COMPLETO E FUNCIONAL

