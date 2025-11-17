import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise10() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 10: Três Chamadas CSS com @import</h1>
        <p className="exercise-description">
          Demonstração de @import combinando testes de orientação, largura mínima, altura
          e outras condições usando os conectores "and" e "or".
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Imports CSS Condicionais:</div>
        <div className="import-demo-10">
          <div className="import-box-10">
            <h3>1. Landscape + Min-width</h3>
            <p>Ativado em orientação paisagem E largura mínima de 768px</p>
          </div>
          <div className="import-box-10">
            <h3>2. Portrait OU Min-height</h3>
            <p>Ativado em retrato OU altura mínima de 600px</p>
          </div>
          <div className="import-box-10">
            <h3>3. Screen + Width Range</h3>
            <p>Ativado em tela E largura entre 576px e 992px</p>
          </div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS - Regras @import utilizadas:</h3>
        <pre>
{`/* Import 1: Orientação landscape E largura mínima */
@import url('landscape-wide.css') 
  screen and (orientation: landscape) and (min-width: 768px);

/* Import 2: Orientação portrait OU altura mínima */
@import url('portrait-tall.css') 
  screen and (orientation: portrait), 
  screen and (min-height: 600px);

/* Import 3: Tela com range de largura específico */
@import url('tablet-range.css') 
  screen and (min-width: 576px) and (max-width: 992px);`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>Exemplo - landscape-wide.css:</h3>
        <pre>
{`/* Aplicado apenas em landscape com largura >= 768px */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.sidebar {
  position: fixed;
  width: 250px;
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>Exemplo - portrait-tall.css:</h3>
        <pre>
{`/* Aplicado em portrait OU altura >= 600px */
.header {
  height: 80px;
}

.content {
  flex-direction: column;
}

.footer {
  position: relative;
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>Exemplo - tablet-range.css:</h3>
        <pre>
{`/* Aplicado entre 576px e 992px */
.container {
  max-width: 720px;
  padding: 20px;
}

.grid {
  grid-template-columns: repeat(2, 1fr);
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>Conceitos Importantes:</h3>
        <pre style={{ color: '#fff' }}>
{`Conectores:
- AND: Todas as condições devem ser verdadeiras
- OR (vírgula): Pelo menos uma condição verdadeira

Propriedades testáveis:
- orientation: landscape | portrait
- min-width, max-width: Largura do viewport
- min-height, max-height: Altura do viewport
- aspect-ratio: Proporção da tela

Vantagem do @import:
Modulariza o CSS, carregando arquivos específicos
apenas quando as condições são atendidas.`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise10;
