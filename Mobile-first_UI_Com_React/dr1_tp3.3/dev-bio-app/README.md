# 👨‍💻 DevBio - Portfólio de Desenvolvedor

Aplicativo de bio e portfólio profissional desenvolvido para o TP3 de Mobile-first UI com React Native.

## 👤 Sobre o Desenvolvedor

**Nome:** Brice Roduit  
**LinkedIn:** https://www.linkedin.com/in/brice-roduit/  
**GitHub:** https://github.com/rodbrice  
**Email:** brice.roduit@gmail.com

## 📱 Sobre o Projeto

Este é um aplicativo completo de portfólio profissional desenvolvido com React Native, Expo e React Navigation. O app demonstra habilidades em desenvolvimento mobile através de uma aplicação funcional e profissional.

## ✨ Funcionalidades

### 🏠 Home & Perfil
- Tela inicial com resumo do perfil
- Perfil completo com informações detalhadas
- Foto, nome, cargo e redes sociais

### 🎓 Qualificações
- Lista de habilidades técnicas
- Certificações e cursos
- Nível de proficiência em cada skill

### 💼 Projetos
- Integração com API do GitHub
- Lista dinâmica de repositórios
- Detalhes completos de cada projeto
- Estatísticas (stars, forks, linguagem)

### 📝 Artigos
- Integração com API do Dev.to
- Lista de artigos publicados
- Visualização em WebView
- Links externos funcionais

### 🎯 Candidaturas
- Gerenciamento de vagas favoritas
- Status de candidaturas
- Persistência com AsyncStorage
- Histórico mantido após fechar o app

### ⚙️ Configurações
- Edição de perfil
- Modo escuro/claro
- Preferências do usuário
- Tema persistido

## 🏗️ Arquitetura

```
dev-bio-app/
├── App.js                          # Entry point com providers
├── package.json                    # Dependências
├── app.json                        # Configurações Expo
│
└── src/
    ├── navigation/
    │   ├── AppNavigator.js        # Navegação principal
    │   └── TabNavigator.js        # Bottom tabs
    │
    ├── screens/
    │   ├── HomeScreen.js          # Tela inicial
    │   ├── ProfileScreen.js       # Perfil completo
    │   ├── QualificationsScreen.js # Qualificações
    │   ├── ProjectsScreen.js      # Lista de projetos
    │   ├── ProjectDetailScreen.js # Detalhes do projeto
    │   ├── ArticlesScreen.js      # Lista de artigos
    │   ├── ArticleWebViewScreen.js # Visualizador de artigos
    │   ├── ApplicationsScreen.js  # Candidaturas
    │   └── SettingsScreen.js      # Configurações
    │
    ├── components/
    │   ├── ProfileHeader.js       # Header de perfil
    │   ├── InfoCard.js            # Card de informação
    │   ├── SkillCard.js           # Card de habilidade
    │   ├── ProjectCard.js         # Card de projeto
    │   ├── ArticleCard.js         # Card de artigo
    │   ├── ApplicationCard.js     # Card de candidatura
    │   └── ThemeToggle.js         # Toggle de tema
    │
    ├── context/
    │   ├── ThemeContext.js        # Gerenciamento de tema
    │   └── ProfileContext.js      # Dados do perfil
    │
    ├── services/
    │   ├── githubApi.js           # API GitHub
    │   ├── devToApi.js            # API Dev.to
    │   └── storage.js             # AsyncStorage
    │
    ├── data/
    │   ├── profileData.js         # Dados do perfil
    │   ├── qualifications.js      # Skills e certificações
    │   └── mockApplications.js    # Candidaturas mock
    │
    ├── styles/
    │   └── theme.js               # Cores e temas
    │
    └── utils/
        └── helpers.js             # Funções auxiliares
```

## 🎨 Características

- ✅ Navegação Stack + Bottom Tabs
- ✅ Context API para estado global
- ✅ Consumo de APIs (GitHub + Dev.to)
- ✅ AsyncStorage para persistência
- ✅ Tema claro/escuro
- ✅ WebView para artigos
- ✅ Design moderno e responsivo
- ✅ Componentes reutilizáveis

## 🚀 Como Testar

### Opção 1: Expo Snack (Recomendado)
1. Acesse https://snack.expo.dev
2. Importe via GitHub ou copie os arquivos
3. Teste no simulador ou escaneie o QR Code com Expo Go

### Opção 2: Localmente
```bash
# 1. Navegue até a pasta
cd D:\Projetos_e_Codigos\Mobile-first_UI_Com_React\dr1_tp3.3\dev-bio-app

# 2. Instale as dependências
npm install

# 3. Inicie o projeto
npx expo start
```

## 📚 Tecnologias

- **React Native** 0.74.1
- **Expo** ~51.0.0
- **React Navigation** v6
  - Native Stack Navigator
  - Bottom Tabs Navigator
- **AsyncStorage** 1.23.1
- **React Native WebView** 13.8.6
- **Context API** (gerenciamento de estado)

## 🎯 APIs Integradas

### GitHub API
- Endpoint: `https://api.github.com/users/rodbrice/repos`
- Lista repositórios públicos
- Mostra estatísticas e linguagens

### Dev.to API
- Endpoint: `https://dev.to/api/articles?username={username}`
- Lista artigos publicados
- Informações de publicação

## 📋 Exercícios Implementados

✅ **Ex. 1** - Planejamento e arquitetura  
✅ **Ex. 2** - Configuração do projeto  
✅ **Ex. 3** - Navegação Stack  
✅ **Ex. 4** - Home e Tela de Perfil  
✅ **Ex. 5** - Bottom Tabs  
✅ **Ex. 6** - Página de Qualificações  
✅ **Ex. 7** - Context API  
✅ **Ex. 8** - Tela de Candidaturas  
✅ **Ex. 9** - Projetos com Detalhes  
✅ **Ex. 10** - Artigos e WebView  
✅ **Ex. 11** - API GitHub  
✅ **Ex. 12** - API Dev.to  
✅ **Ex. 13** - AsyncStorage  
✅ **Ex. 14** - Configurações  
✅ **Ex. 15** - Tema customizado  
✅ **Ex. 16** - Testes finais  

## 💡 Destaques

- Design profissional e limpo
- Código organizado e documentado
- Boas práticas de React Native
- Componentização adequada
- Navegação fluida
- Integração real com APIs
- Persistência de dados

## 📝 Desenvolvimento

Este projeto foi desenvolvido como trabalho prático da disciplina Mobile-first UI com React, demonstrando domínio completo de React Native e suas ferramentas.

### Conceitos aplicados:
- Hooks (useState, useEffect, useContext, useCallback)
- Context API para estado global
- Navegação híbrida (Stack + Tabs)
- Consumo de APIs REST
- Armazenamento local
- Componentização
- Estilização com StyleSheet
- Temas dinâmicos

---

**Desenvolvido por:** Brice Roduit  
**Data:** Março de 2026  
**Disciplina:** Mobile-first UI com React - TP3

