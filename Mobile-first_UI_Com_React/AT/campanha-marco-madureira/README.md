# Campanha Marco Madureira - SPA Responsiva

Uma Single Page Application (SPA) responsiva e otimizada para dispositivos móveis, desenvolvida para a campanha eleitoral do candidato Marco Madureira.

## 🎯 Objetivo

Criar uma aplicação web moderna que apresente de forma clara e atraente o candidato Marco Madureira, suas propostas, agenda de eventos e formas de contato.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Material UI** - Biblioteca de componentes React
- **CSS Modules** - Estilização escopada por componente
- **CSS3** - Flexbox, Grid Layout, Custom Properties (variáveis CSS)
- **Mobile-First Design** - Abordagem de desenvolvimento responsivo

## 📁 Estrutura do Projeto

```
campanha-marco-madureira/
├── public/
│   └── index.html           # HTML base com meta viewport
├── src/
│   ├── components/
│   │   ├── Header/          # Navegação com links âncora
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Biografia/       # Seção de biografia do candidato
│   │   │   ├── Biografia.jsx
│   │   │   └── Biografia.module.css
│   │   ├── Propostas/       # Cards de propostas
│   │   │   ├── Propostas.jsx
│   │   │   └── Propostas.module.css
│   │   ├── Agenda/          # Lista de eventos
│   │   │   ├── Agenda.jsx
│   │   │   └── Agenda.module.css
│   │   ├── Contato/         # Formulário de contato
│   │   │   ├── Contato.jsx
│   │   │   └── Contato.module.css
│   │   └── Footer/          # Rodapé com redes sociais
│   │       ├── Footer.jsx
│   │       └── Footer.module.css
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos globais
│   └── index.jsx            # Ponto de entrada
├── package.json
└── README.md
```

## 🎨 Características de Design

### Mobile-First
- Layout desenvolvido primeiramente para telas pequenas (até 576px)
- Expansão progressiva para tablets e desktops
- Breakpoints: 576px, 768px, 992px, 1200px

### Flexbox
- Containers flexíveis aninhados
- Propriedades `flex-grow`, `flex-shrink`, `flex-basis`
- Alinhamentos com `flex-start`, `center`, `stretch`
- Layouts verticais em mobile, horizontais em desktop

### Grid Layout
- Cards de propostas em grid responsivo
- Eventos da agenda em grid adaptativo

### Media Queries Level 5
- `prefers-color-scheme`: Tema claro/escuro automático
- `prefers-reduced-motion`: Respeita preferência por animações reduzidas

### Imagens Fluidas
- Todas as imagens são responsivas
- Uso de `max-width: 100%` e `height: auto`
- Aspect ratio mantido em diferentes tamanhos

## 🧩 Componentes

### Header
- Nome do candidato como logo
- Menu de navegação com links âncora
- Navegação suave (smooth scroll)
- Menu hambúrguer em dispositivos móveis
- Efeito de scroll (muda aparência ao rolar)

### Biografia
- Imagem do candidato
- Texto sobre trajetória
- Layout vertical (mobile) / horizontal (desktop)
- Destaques numéricos (anos de experiência, famílias beneficiadas, projetos)

### Propostas
- 4 cards com imagem, título e descrição
- Grid responsivo (1 → 2 → 4 coluopcols)
- Lista adicional com 5 propostas
- Componentes Material UI (Card, List)

### Agenda
- Lista de 6 eventos de campanha
- Informações: data, horário, local
- Chips coloridos por tipo de evento
- Grid responsivo (1 → 2 → 3 colunas)

### Contato
- Informações de contato
- Formulário com Material UI (TextField, Button)
- Feedback de envio (Snackbar)
- Layout vertical (mobile) / horizontal (desktop)

### Footer
- Logo e slogan
- Links de navegação
- Informações de contato
- Ícones de redes sociais (Material UI Icons)
- Copyright

## 🔧 Instalação e Execução

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Build para produção
npm run build
```

## 📱 Responsividade

| Breakpoint | Dispositivo | Características |
|------------|-------------|-----------------|
| < 576px | Mobile | Layout vertical, menu hambúrguer |
| 576px | Tablet pequeno | Grid 2 colunas |
| 768px | Tablet | Layout horizontal em seções |
| 992px | Desktop | Grid 3-4 colunas |
| 1200px | Desktop grande | Espaçamentos maiores |

## ♿ Acessibilidade

- Cores com contraste adequado
- Labels em todos os campos de formulário
- Aria-labels em botões de ícone
- Navegação por teclado
- Respeito às preferências do sistema (tema, movimento)

## 📝 Requisitos Técnicos Atendidos

- [x] Abordagem mobile-first
- [x] Meta viewport configurada
- [x] Flexbox para layout responsivo
- [x] Grid Layout para cards e eventos
- [x] Containers flexíveis aninhados
- [x] Propriedades flex-grow, flex-shrink, flex-basis
- [x] Alinhamentos flex-start, center, stretch
- [x] Media queries para diferentes breakpoints
- [x] Imagens fluidas
- [x] prefers-color-scheme (tema escuro)
- [x] prefers-reduced-motion (animações)
- [x] CSS Modules para escopo de estilos
- [x] Material UI para componentes
- [x] SPA com navegação suave
- [x] Links âncora funcionais
