# 🎯 EXERCÍCIO 1 - Arquitetura do Projeto

## 📐 Arquitetura Definida

Este documento apresenta a arquitetura completa do aplicativo DevBio - Bio de Desenvolvedor.

---

## 🏗️ Estrutura de Pastas

```
dev-bio-app/
│
├── App.js                              # Entry point com NavigationContainer e Providers
├── package.json                        # Dependências do projeto
├── app.json                           # Configurações do Expo
├── babel.config.js                    # Configurações do Babel
├── .gitignore                         # Arquivos ignorados
│
├── assets/                            # Recursos estáticos
│   ├── icon.png
│   ├── splash.png
│   └── adaptive-icon.png
│
└── src/
    │
    ├── navigation/                    # Configuração de rotas
    │   ├── AppNavigator.js           # Stack Navigator principal
    │   └── TabNavigator.js           # Bottom Tabs Navigator
    │
    ├── screens/                       # Telas do aplicativo
    │   ├── HomeScreen.js             # Tela inicial com resumo
    │   ├── ProfileScreen.js          # Perfil completo
    │   ├── QualificationsScreen.js   # Lista de habilidades
    │   ├── ProjectsScreen.js         # Lista de projetos (GitHub API)
    │   ├── ProjectDetailScreen.js    # Detalhes de um projeto
    │   ├── ArticlesScreen.js         # Lista de artigos (Dev.to API)
    │   ├── ArticleWebViewScreen.js   # Visualizador de artigo
    │   ├── ApplicationsScreen.js     # Candidaturas (com AsyncStorage)
    │   └── SettingsScreen.js         # Configurações e tema
    │
    ├── components/                    # Componentes reutilizáveis
    │   ├── ProfileHeader.js          # Header de perfil com avatar
    │   ├── InfoCard.js               # Card genérico de informação
    │   ├── SkillCard.js              # Card de habilidade/skill
    │   ├── ProjectCard.js            # Card de projeto
    │   ├── ArticleCard.js            # Card de artigo
    │   ├── ApplicationCard.js        # Card de candidatura
    │   └── ThemeToggle.js            # Toggle para modo escuro
    │
    ├── context/                       # Context API (estado global)
    │   ├── ThemeContext.js           # Gerenciamento de tema
    │   └── ProfileContext.js         # Dados do perfil global
    │
    ├── services/                      # Serviços e APIs
    │   ├── githubApi.js              # Integração GitHub
    │   ├── devToApi.js               # Integração Dev.to
    │   └── storage.js                # AsyncStorage (candidaturas)
    │
    ├── data/                          # Dados mockados
    │   ├── profileData.js            # Informações do desenvolvedor
    │   ├── qualifications.js         # Habilidades e certificações
    │   └── mockApplications.js       # Candidaturas iniciais
    │
    ├── styles/                        # Estilos globais
    │   └── theme.js                  # Cores, temas claro/escuro
    │
    └── utils/                         # Utilitários
        └── helpers.js                # Funções auxiliares
```

---

## 🗺️ Esquema de Navegação

### Estrutura Hierárquica:

```
App (NavigationContainer)
│
└── Stack Navigator (AppNavigator)
    │
    ├── HomeStack
    │   ├── Home (inicial)
    │   └── Profile (ao clicar "Ver Perfil Completo")
    │
    └── MainTabs (TabNavigator - Bottom Tabs)
        │
        ├── Tab 1: Qualificações
        │   └── QualificationsScreen
        │
        ├── Tab 2: Projetos
        │   ├── ProjectsScreen (lista)
        │   └── ProjectDetailScreen (ao clicar em projeto)
        │
        ├── Tab 3: Candidaturas
        │   └── ApplicationsScreen
        │
        ├── Tab 4: Artigos
        │   ├── ArticlesScreen (lista)
        │   └── ArticleWebViewScreen (ao clicar em artigo)
        │
        └── Tab 5: Configurações
            └── SettingsScreen
```

### Fluxo de Navegação:

1. **Home → Profile:** Stack Navigation
2. **Home → Tabs:** Acesso às abas inferiores
3. **Projetos → Detalhes:** Stack Navigation
4. **Artigos → WebView:** Stack Navigation com WebView
5. **Configurações → Edição:** Modais ou formulários inline

---

## 🧩 Componentes Principais

### Telas (Screens)
| Componente | Responsabilidade | Exercício |
|------------|------------------|-----------|
| HomeScreen | Apresentação inicial e resumo | Ex. 4 |
| ProfileScreen | Perfil completo do desenvolvedor | Ex. 4 |
| QualificationsScreen | Lista de skills e certificações | Ex. 6 |
| ProjectsScreen | Lista de projetos do GitHub | Ex. 9, 11 |
| ProjectDetailScreen | Detalhes de um projeto | Ex. 9 |
| ArticlesScreen | Lista de artigos do Dev.to | Ex. 10, 12 |
| ArticleWebViewScreen | Visualizar artigo completo | Ex. 10 |
| ApplicationsScreen | Gerenciar candidaturas | Ex. 8, 13 |
| SettingsScreen | Preferências e tema | Ex. 14 |

### Componentes Reutilizáveis
| Componente | Uso | Onde é usado |
|------------|-----|--------------|
| ProfileHeader | Header com avatar e info básica | Home, Profile |
| InfoCard | Card genérico de informação | Várias telas |
| SkillCard | Exibir habilidade com nível | Qualificações |
| ProjectCard | Card de projeto GitHub | Projetos |
| ArticleCard | Card de artigo Dev.to | Artigos |
| ApplicationCard | Card de vaga/candidatura | Candidaturas |
| ThemeToggle | Switch de tema claro/escuro | Configurações |

### Context (Estado Global)
| Context | Responsabilidade |
|---------|------------------|
| ThemeContext | Gerencia tema (claro/escuro) |
| ProfileContext | Dados do perfil disponíveis globalmente |

### Services (APIs e Storage)
| Service | Função |
|---------|--------|
| githubApi.js | Fetch de repositórios do GitHub |
| devToApi.js | Fetch de artigos do Dev.to |
| storage.js | Salvar/carregar candidaturas (AsyncStorage) |

---

## 🎨 Design System

### Paleta de Cores
- **Primary:** #667eea (roxo)
- **Secondary:** #764ba2 (roxo escuro)
- **Success:** #4CAF50 (verde)
- **Warning:** #FFC107 (amarelo)
- **Error:** #f44336 (vermelho)
- **Background Light:** #f5f5f5
- **Background Dark:** #1a1a1a

### Tema Claro vs Escuro
- Background, texto e cards adaptados
- Persistência da preferência no AsyncStorage
- Toggle visual na tela de configurações

---

## 📦 Dependências Principais

```json
{
  "@react-navigation/native": "^6.1.9",
  "@react-navigation/native-stack": "^6.9.17",
  "@react-navigation/bottom-tabs": "^6.5.11",
  "@react-native-async-storage/async-storage": "1.23.1",
  "react-native-webview": "13.8.6",
  "expo": "~51.0.0"
}
```

---

## 🔄 Fluxo de Dados

### 1. Dados Estáticos (Mock)
- Perfil: `src/data/profileData.js`
- Qualificações: `src/data/qualifications.js`
- Candidaturas iniciais: `src/data/mockApplications.js`

### 2. Dados Dinâmicos (APIs)
- **Projetos:** Fetch da API GitHub ao montar ProjectsScreen
- **Artigos:** Fetch da API Dev.to ao montar ArticlesScreen
- Uso de `useState` e `useEffect` para gerenciar loading e dados

### 3. Dados Persistidos (AsyncStorage)
- **Candidaturas:** Salvar lista atualizada
- **Tema:** Salvar preferência claro/escuro
- **Perfil editado:** Salvar alterações do usuário

### 4. Estado Global (Context)
- **ThemeContext:** Tema atual e função para alternar
- **ProfileContext:** Dados do perfil acessíveis em qualquer tela

---

## 🎬 Ciclo de Vida do App

1. **Inicialização:**
   - App.js carrega Providers (Theme + Profile)
   - NavigationContainer monta AppNavigator
   - Tema é carregado do AsyncStorage

2. **Navegação:**
   - HomeScreen como tela inicial
   - Bottom tabs acessíveis de qualquer lugar
   - Stack navigation para detalhes

3. **Interações:**
   - Clicar em projeto → Navega para detalhes
   - Clicar em artigo → Abre WebView
   - Adicionar candidatura → Salva no AsyncStorage
   - Alternar tema → Atualiza Context e salva

4. **Persistência:**
   - Candidaturas salvas ao modificar
   - Tema salvo ao alternar
   - Dados carregados na próxima abertura

---

## ✅ Entregável do Exercício 1

✔️ **Documento de arquitetura completo**  
✔️ **Estrutura de pastas definida**  
✔️ **Esquema de navegação documentado**  
✔️ **Principais componentes identificados**  
✔️ **Divisão de responsabilidades clara**

---

**Próximo passo:** Exercício 2 - Configuração do projeto e instalação de dependências.

