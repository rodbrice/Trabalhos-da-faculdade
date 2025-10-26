# dr1_tp1 — React Exercises App

Este diretório contém o projeto `react-exercises-app`, que reúne exercícios do módulo "Fundamentos de React" (DR1 - Trabalho Prático 1).

Resumo
------

- Projeto: `react-exercises-app` (Create React App)
- Local: `Desenvolvimento_Front-end_com_Frameworks/Fundamentos de React/dr1_tp1/react-exercises-app`

Pré-requisitos
--------------

- Node.js (recomenda-se Node 14+ ou 16+)
- npm (ou yarn) — o projeto foi configurado com `npm` por padrão

Instalação e execução (desenvolvimento)
-------------------------------------

Abra um terminal na pasta do projeto e execute:

```bash
cd Desenvolvimento_Front-end_com_Frameworks/\
  Fundamentos\ de\ React/dr1_tp1/react-exercises-app
npm install
npm start
```

Após `npm start`, o app será aberto em `http://localhost:3000` (por padrão).

Scripts úteis
-------------

- `npm start` — inicia o servidor de desenvolvimento
- `npm test` — executa os testes configurados (se houver)
- `npm run build` — cria uma versão otimizada para produção na pasta `build`
- `npm run eject` — (não recomendado) expõe a configuração do CRA

Estrutura do projeto (resumo)
----------------------------

- `public/` — arquivos estáticos (index.html, manifest, etc.)
- `src/` — código-fonte React
  - `components/` — componentes reutilizáveis
  - `pages/` — páginas/exercícios separados
  - `styles/` — arquivos de estilo

Arquivos importantes
--------------------

- `.gitignore` — já configurado para ignorar `node_modules`, `build`, `.env` e logs
- `package.json` — dependências e scripts

Contrato rápido (inputs / outputs / erros)
---------------------------------------

- Input: código-fonte JavaScript/JSX nos arquivos em `src/`.
- Output: aplicação React servida localmente em `http://localhost:3000` (dev) ou pasta `build/` (produção).
- Modos de erro comuns: dependências faltando (rodar `npm install`), porta ocupada (escolher outra porta), problemas de versão do Node.

Dicas e edge-cases
------------------

- Se `npm install` falhar, verifique a versão do Node e limpe o cache com `npm cache clean --force`.
- Se o projeto tiver um `.git` interno (submódulo), remova-o se quiser que tudo seja parte do repositório pai.

Como contribuir (sugestões)
--------------------------

Se quiser sugerir mudanças:

1. Faça um fork
2. Crie uma branch com suas alterações
3. Abra um Pull Request no repositório original

Observações finais
-------------------

Se quiser, posso adicionar um comando `README` mais detalhado com screenshots, exemplos de exercícios resolvidos e instruções de avaliação.
