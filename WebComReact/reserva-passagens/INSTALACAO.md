# 📋 Guia de Instalação - Reserva de Passagens

## Pré-requisitos para Windows

### 1. **Node.js** (OBRIGATÓRIO)
Node.js é necessário para rodar aplicações React.

**Como instalar:**
1. Acesse: https://nodejs.org/
2. Baixe a versão **LTS** (Long Term Support) - recomendada
3. Execute o instalador baixado
4. Siga as instruções do instalador (deixe todas as opções padrão marcadas)
5. Reinicie o terminal/prompt de comando após a instalação

**Verificar instalação:**
```bash
node --version
npm --version
```
Deve exibir as versões instaladas (ex: v18.x.x e 9.x.x)

---

### 2. **Git** (Opcional, mas recomendado)
Para controle de versão do código.

**Como instalar:**
1. Acesse: https://git-scm.com/download/win
2. Baixe e execute o instalador
3. Use as configurações padrão durante a instalação

---

## 🚀 Instalando o Projeto

Após instalar o Node.js, siga estes passos:

### Passo 1: Abra o terminal na pasta do projeto
```bash
cd D:\Projetos_e_Codigos\WebComReact\reserva-passagens
```

### Passo 2: Instale as dependências
```bash
npm install
```
⏳ Este processo pode levar alguns minutos. Aguarde até concluir.

### Passo 3: Inicie o servidor de desenvolvimento
```bash
npm start
```

✅ O navegador abrirá automaticamente em `http://localhost:3000`

---

## 🔧 Comandos Úteis

- **Iniciar o projeto:** `npm start`
- **Criar build de produção:** `npm build`
- **Rodar testes:** `npm test`
- **Limpar cache (se houver problemas):** `npm cache clean --force`

---

## ⚠️ Problemas Comuns

### Erro: "npm não é reconhecido"
- **Solução:** Node.js não foi instalado corretamente. Reinstale o Node.js e reinicie o terminal.

### Erro: "ENOTEMPTY: directory not empty"
- **Solução:** 
  ```bash
  rmdir /s /q node_modules
  del package-lock.json
  npm install
  ```

### Porta 3000 já em uso
- **Solução:** Feche outros processos usando a porta 3000 ou o React perguntará se quer usar outra porta.

---

## 📦 Dependências Principais do Projeto

Este projeto usa:
- **React** 18.2.0 - Biblioteca para criar interfaces
- **TypeScript** 4.9.5 - JavaScript com tipagem
- **React Scripts** 5.0.1 - Ferramentas de build e desenvolvimento

Todas instaladas automaticamente com `npm install`.

---

## 📞 Versões Recomendadas

- Node.js: v16.x, v18.x ou v20.x (LTS)
- npm: 8.x ou 9.x (vem com Node.js)
- Windows: 10 ou 11

---

✨ **Pronto!** Após seguir estes passos, seu ambiente estará configurado e o projeto funcionando.

