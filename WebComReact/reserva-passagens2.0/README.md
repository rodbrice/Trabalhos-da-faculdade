# 🚌 Expresso Horizon - Sistema de Reserva de Passagens 2.0

**DR4_TP3** - Sistema completo de reserva de passagens de ônibus com roteamento avançado

## 📋 Descrição do Projeto

Sistema de gerenciamento de reservas de passagens de ônibus desenvolvido com React, TypeScript e React Router DOM, implementando todos os requisitos do DR4_TP3.

## ✨ Funcionalidades Implementadas

### ✅ Requisitos Cumpridos

1. **Ambiente de Desenvolvimento** - Projeto React com TypeScript
2. **Roteamento** - React Router DOM configurado com BrowserRouter
3. **Estrutura de Páginas** - Páginas isoladas (Home, Booking, Dashboard)
4. **Navegação** - NavBar com links ativos usando NavLink
5. **Definição de Rotas** - Sistema completo de roteamento
6. **Layout Base** - RootLayout com Header, NavBar e Outlet
7. **Rota Dinâmica** - TicketDetails com parâmetro :id
8. **Navegação Programática** - useNavigate após submissão
9. **Página 404** - NotFound com rota curinga (*)
10. **Elevação de Estado** - Estado gerenciado no App.tsx
11. **Persistência** - LocalStorage para salvar dados
12. **Rotas Protegidas** - ProtectedRoute com autenticação simulada
13. **Rotas Aninhadas** - Dashboard com sub-rotas (ativas/canceladas)
14. **Navegação de Retorno** - navigate(-1) no botão Voltar
15. **Feedback Visual** - Loading de 2 segundos com setTimeout
16. **Estrutura Organizada** - /components, /pages, /types, /navigation

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx           # Cabeçalho da aplicação
│   ├── Footer.tsx           # Rodapé da aplicação
│   ├── NavBar.tsx           # Barra de navegação com links ativos
│   ├── TicketForm.tsx       # Formulário de reserva (com loading)
│   ├── TravelList.tsx       # Tabela de passagens
│   └── ProtectedRoute.tsx   # Componente de proteção de rotas
├── pages/
│   ├── Home.tsx             # Página inicial
│   ├── Booking.tsx          # Página de reserva
│   ├── Dashboard.tsx        # Painel administrativo (com rotas aninhadas)
│   ├── TicketDetails.tsx    # Detalhes da passagem (rota dinâmica)
│   ├── AllTickets.tsx       # Sub-rota: todas as passagens
│   ├── ActiveTickets.tsx    # Sub-rota: passagens ativas
│   ├── CanceledTickets.tsx  # Sub-rota: passagens canceladas
│   └── NotFound.tsx         # Página 404
├── navigation/
│   └── RootLayout.tsx       # Layout base compartilhado
├── types/
│   └── types.ts             # Interfaces TypeScript
├── styles/
│   └── App.css              # Estilos globais
├── App.tsx                  # Componente principal com rotas
└── index.tsx                # Ponto de entrada

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

```bash
# Navegar até a pasta do projeto
cd reserva-passagens2.0

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm start
```

O projeto será aberto em `http://localhost:3000`

## 🔐 Autenticação

O sistema possui autenticação simulada:
- Clique no botão "🔒 Login" na barra de navegação
- Após login, você terá acesso ao Painel Administrativo
- O estado de autenticação é salvo no localStorage

## 🛣️ Rotas da Aplicação

| Rota | Descrição | Proteção |
|------|-----------|----------|
| `/` | Página inicial com boas-vindas | Pública |
| `/reservar` | Formulário de nova reserva | Pública |
| `/painel` | Painel administrativo (todas as reservas) | Protegida |
| `/painel/ativas` | Sub-rota: reservas ativas | Protegida |
| `/painel/canceladas` | Sub-rota: reservas canceladas | Protegida |
| `/passagem/:id` | Detalhes de uma passagem específica | Pública |
| `*` | Página 404 - não encontrada | Pública |

## 💾 Persistência de Dados

- Os dados são salvos automaticamente no **localStorage**
- As reservas persistem mesmo após recarregar a página
- O estado de autenticação também é salvo

## 🎨 Estilo

O projeto segue o mesmo padrão de estilização do projeto **postagens-blog**:
- Gradiente roxo no header e botões principais
- Design limpo e responsivo
- Tabelas estilizadas com hover effects
- Badges coloridos para status
- Animações suaves

## 📱 Responsividade

- Layout adaptável para desktop, tablet e mobile
- Tabelas transformadas em cards em telas pequenas
- Menu responsivo
- Botões em largura total em mobile

## 🔄 Fluxo de Uso

1. **Página Inicial** → Visualizar features do sistema
2. **Nova Reserva** → Preencher formulário (com validação e loading)
3. **Redirecionamento** → Após 2 segundos, redireciona para o painel
4. **Painel** → Visualizar, filtrar, editar ou cancelar reservas
5. **Detalhes** → Ver informações completas de uma reserva
6. **Voltar** → Usar navegação histórica para retornar

## 🛠️ Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript
- **TypeScript 4.9.5** - Superset tipado
- **React Router DOM 7.x** - Gerenciamento de rotas
- **CSS Puro** - Estilização sem frameworks
- **LocalStorage API** - Persistência de dados

## 📝 Tipos de Dados

```typescript
interface Passagem {
  id: number;
  passageiro: string;
  assento: number;
  origem: string;
  destino: string;
  data: string;
  status: 'confirmado' | 'pendente' | 'cancelado';
}
```

## ⚡ Features Especiais

- ✅ Validação completa de formulários
- ✅ Verificação de assentos ocupados
- ✅ Mensagens de feedback temporárias (3 segundos)
- ✅ Loading simulado (2 segundos)
- ✅ Filtro por cidade de destino
- ✅ Sub-navegação com rotas aninhadas
- ✅ Navegação programática
- ✅ Navegação histórica (voltar)
- ✅ Proteção de rotas sensíveis
- ✅ Confirmação antes de cancelar

## 👨‍💻 Desenvolvimento

Projeto desenvolvido seguindo as melhores práticas:
- Componentes funcionais com Hooks
- TypeScript para type safety
- Sem uso de `any`
- Código limpo e bem documentado
- Estrutura organizada e escalável

## 📄 Licença

Este projeto foi desenvolvido como trabalho acadêmico (DR4_TP3).

---

**Desenvolvido com ❤️ usando React + TypeScript + React Router**

