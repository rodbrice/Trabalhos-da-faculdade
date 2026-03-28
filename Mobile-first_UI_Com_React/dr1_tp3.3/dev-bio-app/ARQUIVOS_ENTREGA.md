# 📦 ARQUIVOS PARA ENTREGA - TP3

## ✅ O que o professor precisa ver:

### Arquivos de Código (Essenciais)
```
dev-bio-app/
├── App.js                              ✅ Entry point com Providers
├── package.json                        ✅ Dependências
├── app.json                           ✅ Configurações Expo
├── babel.config.js                    ✅ Config Babel
├── README.md                          ✅ Documentação completa
├── ARQUITETURA.md                     ✅ Exercício 1 - Arquitetura
│
└── src/
    ├── navigation/
    │   ├── AppNavigator.js            ✅ Stack Navigator
    │   └── TabNavigator.js            ✅ Bottom Tabs
    │
    ├── screens/
    │   ├── HomeScreen.js              ✅ Tela inicial
    │   ├── ProfileScreen.js           ✅ Perfil completo
    │   ├── QualificationsScreen.js    ✅ Qualificações
    │   ├── ProjectsScreen.js          ✅ Lista de projetos
    │   ├── ProjectDetailScreen.js     ✅ Detalhes de projeto
    │   ├── ArticlesScreen.js          ✅ Lista de artigos
    │   ├── ArticleWebViewScreen.js    ✅ WebView de artigo
    │   ├── ApplicationsScreen.js      ✅ Candidaturas
    │   └── SettingsScreen.js          ✅ Configurações
    │
    ├── components/
    │   ├── ProfileHeader.js           ✅ Header de perfil
    │   ├── InfoCard.js                ✅ Card genérico
    │   ├── SkillCard.js               ✅ Card de skill
    │   ├── ProjectCard.js             ✅ Card de projeto
    │   ├── ArticleCard.js             ✅ Card de artigo
    │   ├── ApplicationCard.js         ✅ Card de candidatura
    │   └── ThemeToggle.js             ✅ Toggle de tema
    │
    ├── context/
    │   ├── ThemeContext.js            ✅ Context de tema
    │   └── ProfileContext.js          ✅ Context de perfil
    │
    ├── services/
    │   ├── githubApi.js               ✅ API GitHub
    │   ├── devToApi.js                ✅ API Dev.to
    │   └── storage.js                 ✅ AsyncStorage
    │
    ├── data/
    │   ├── profileData.js             ✅ Dados do perfil
    │   ├── qualifications.js          ✅ Skills e certificações
    │   └── mockApplications.js        ✅ Candidaturas mock
    │
    ├── styles/
    │   └── theme.js                   ✅ Temas claro/escuro
    │
    └── utils/
        └── helpers.js                 ✅ Funções auxiliares
```

## ❌ O que NÃO vai para o professor:

Estes arquivos estão no .gitignore e não serão incluídos:

- ❌ `node_modules/` - Dependências (muito grande)
- ❌ `.expo/` - Cache do Expo
- ❌ `package-lock.json` - Arquivo de lock
- ❌ `RESUMO_PROJETO.md` - Documentação interna
- ❌ `INSTRUCOES_ENTREGA.md` - Guia pessoal
- ❌ `COMO_INICIAR.md` - Guia de inicialização

## 📝 Para Upload no Expo Snack:

Faça upload apenas dos arquivos essenciais listados acima (✅).

O Snack vai instalar as dependências automaticamente baseado no `package.json`.

---

## 📊 Total de Arquivos:

- **Configuração:** 4 arquivos
- **Documentação:** 2 arquivos
- **Navegação:** 2 arquivos
- **Screens:** 9 arquivos
- **Components:** 7 arquivos
- **Context:** 2 arquivos
- **Services:** 3 arquivos
- **Data:** 3 arquivos
- **Styles:** 1 arquivo
- **Utils:** 1 arquivo

**TOTAL: 34 arquivos criados** 🎉

---

**Desenvolvido por:** Brice Roduit  
**Data:** Março 2026

