# Sistema de Cadastro de Produtos

Sistema CRUD (Create, Read, Update, Delete) desenvolvido em React para gerenciamento de produtos.

## 🚀 Tecnologias Utilizadas

- React 19.2.0
- React Router DOM 7.9.4
- CSS Puro (sem bibliotecas externas)

## 📋 Funcionalidades

- ✅ Listar produtos em tabela
- ✅ Adicionar novos produtos
- ✅ Editar produtos existentes
- ✅ Excluir produtos
- ✅ Buscar produtos por nome (tempo real)
- ✅ Validação de campos do formulário
- ✅ Mensagens de feedback (sucesso/erro)
- ✅ Interface responsiva

## 🎨 Estrutura do Projeto

```
produtos-crud/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── ProductList.js
│   │   └── ProductForm.js
│   ├── pages/
│   │   └── HomePage.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## 🔧 Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm start
```

3. Acesse no navegador:
```
http://localhost:3000
```

## 📝 Requisitos Implementados

### Exercícios 1-2: Configuração Inicial
- ✅ Projeto criado com template React
- ✅ Componente Header com título "Gestão de Produtos"

### Exercícios 3-5: Estrutura de Componentes
- ✅ Array de produtos com nome, categoria e preço
- ✅ Componente ProductList exibindo produtos em tabela
- ✅ Componente ProductForm com formulário completo

### Exercícios 6-8: Funcionalidades CRUD
- ✅ useState para gerenciar lista de produtos
- ✅ Adicionar produtos dinamicamente
- ✅ Limpar campos após cadastro

### Exercícios 9-11: Edição e Exclusão
- ✅ Botão Excluir com confirmação
- ✅ Botão Editar carregando dados no formulário
- ✅ Atualização de produtos existentes

### Exercícios 12-14: Estilização e Validação
- ✅ CSS puro com gradiente roxo/azul (#667eea → #764ba2)
- ✅ Mensagens de feedback animadas
- ✅ Validação completa dos campos

### Exercícios 15-16: Busca e Revisão
- ✅ Campo de busca em tempo real
- ✅ Código organizado e testado

## 👨‍💻 Autor

**Brice Roduit**

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
