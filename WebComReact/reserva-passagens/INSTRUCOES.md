# INSTRUÇÕES DE INSTALAÇÃO E USO

## Sistema de Reserva de Passagens de Ônibus - Expresso Horizon

---

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

---

## 🚀 Instalação

### Passo 1: Navegue até a pasta do projeto
```bash
cd D:\Projetos_e_Codigos\WebComReact\reserva-passagens
```

### Passo 2: Instale as dependências
```bash
npm install
```
ou
```bash
yarn install
```

---

## ▶️ Executar o Projeto

### Modo Desenvolvimento
```bash
npm start
```
ou
```bash
yarn start
```

O projeto será aberto automaticamente em: **http://localhost:3000**

### Build de Produção
```bash
npm run build
```

### Executar Testes
```bash
npm test
```

---

## 📁 Estrutura do Projeto

```
reserva-passagens/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Cabeçalho com título
│   │   ├── Footer.tsx           # Rodapé
│   │   ├── Button.tsx           # Botão genérico reutilizável
│   │   ├── SeatCard.tsx         # Card visual de assento
│   │   ├── TicketForm.tsx       # Formulário de reserva
│   │   └── TravelList.tsx       # Lista/tabela de passagens
│   ├── types/
│   │   └── types.ts             # Interfaces TypeScript
│   ├── styles/
│   │   └── App.css              # Estilos globais
│   ├── App.tsx                  # Componente principal
│   ├── App.test.tsx             # Testes
│   ├── index.tsx                # Entry point
│   ├── index.css                # Reset CSS
│   ├── reportWebVitals.ts       # Métricas de performance
│   ├── setupTests.ts            # Configuração de testes
│   └── react-app-env.d.ts       # Declarações TypeScript
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✅ Funcionalidades Implementadas

### Exercício 1-2: Configuração e Header ✓
- [x] Projeto configurado com React + TypeScript
- [x] Header exibindo "Expresso Horizon - Painel de Controle de Viagens"

### Exercício 2: Tipos TypeScript ✓
- [x] Interface `Passagem` com todos os campos solicitados
- [x] Tipos auxiliares (`FeedbackMessage`, `ButtonVariant`, `StatusPassagem`)

### Exercício 3: Componente Header ✓
- [x] Header com gradiente roxo
- [x] Título e subtítulo centralizados

### Exercício 4: SeatCard ✓
- [x] Card visual de assento
- [x] Verde para "livre", vermelho para "ocupado"

### Exercício 5: TicketForm ✓
- [x] Formulário completo com todos os campos
- [x] Campos: Passageiro, Assento (1-40), Origem, Destino, Data
- [x] Botão "Reservar Assento"

### Exercício 6: TravelList ✓
- [x] Tabela organizada com todas as informações
- [x] Colunas: ID, Passageiro, Assento, Origem, Destino, Data, Status, Ações

### Exercício 7: Botão Genérico ✓
- [x] Componente `Button.tsx` com variants
- [x] Suporta: danger, success, warning, primary

### Exercício 8: Mock de Dados ✓
- [x] 3 passagens fictícias pré-carregadas
- [x] Mix de status (confirmado, pendente)

### Exercício 9: Cadastro Dinâmico ✓
- [x] Formulário adiciona novas passagens
- [x] Estado atualizado dinamicamente

### Exercício 10: Validação de Assentos ✓
- [x] Bloqueia assentos duplicados
- [x] Mensagem de erro específica

### Exercício 11: Cancelamento (Delete) ✓
- [x] Botão "Cancelar" em vermelho
- [x] Confirmação antes de remover
- [x] Remove passagem por ID

### Exercício 12: Edição (Update) ✓
- [x] Botão "Alterar" em amarelo/laranja
- [x] Preenche formulário com dados existentes
- [x] Botão muda para "Salvar Alterações"
- [x] Scroll automático para o topo

### Exercício 13: Filtro de Destino ✓
- [x] Campo de busca acima da lista
- [x] Filtragem em tempo real
- [x] Contador de resultados

### Exercício 14: Estilização CSS ✓
- [x] CSS puro (sem frameworks)
- [x] Tabela com bordas e padding
- [x] Botão Cancelar: vermelho
- [x] Botão Alterar: amarelo/laranja
- [x] Layout limpo e funcional
- [x] Gradiente roxo no header e botão principal

### Exercício 15: Feedback e Limpeza ✓
- [x] Formulário limpa automaticamente após envio
- [x] Mensagem temporária de sucesso (3 segundos)
- [x] Animação slideDown nas mensagens

### Exercício 16: Organização Final ✓
- [x] Arquivos organizados em `/components`, `/types`, `/styles`
- [x] TypeScript strict mode (sem `any`)
- [x] Todos os 16 exercícios implementados

---

## 🎨 Padrões de Estilização

### Cores Principais
- **Gradiente Primário:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Botão Alterar:** `#ff9800` (laranja)
- **Botão Cancelar:** `#dc3545` (vermelho)
- **Status Confirmado:** Verde
- **Status Pendente:** Amarelo
- **Status Cancelado:** Vermelho

### Responsividade
- Breakpoint 768px: Tabela vira cards
- Breakpoint 480px: Layout móvel otimizado
- Design mobile-first

---

## 🧪 Testes

O projeto inclui testes básicos com React Testing Library:

```bash
npm test
```

---

## 📝 Notas Importantes

1. **TypeScript Strict Mode:** Todos os tipos estão corretamente definidos
2. **Sem bibliotecas de estilo:** CSS puro seguindo padrão do projeto anterior
3. **Validações completas:** Formulário valida todos os campos
4. **UX otimizada:** Feedback visual, animações, scroll automático
5. **Código comentado:** Cada exercício está documentado

---

## 🐛 Troubleshooting

### Erro: "npm não é reconhecido"
Instale o Node.js de: https://nodejs.org/

### Erro: "Cannot find module"
Execute: `npm install`

### Porta 3000 já em uso
Execute: `npm start` e escolha outra porta quando solicitado

---

## 👨‍💻 Desenvolvimento

Este projeto segue os padrões do projeto `postagens-blog`:
- Mesma estrutura de pastas
- Mesmo padrão de estilização (gradiente roxo)
- Mesma abordagem TypeScript strict
- Mesmas convenções de nomenclatura

---

## 📄 Licença

Projeto educacional - Livre para uso acadêmico

---

**Desenvolvido com ❤️ usando React + TypeScript**

