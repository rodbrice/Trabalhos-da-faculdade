import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

// Componente TextoEstilizado com inline styles
const TextoEstilizado = () => {
  const containerStyle = {
    backgroundColor: '#f0f4f8',
    color: '#2d3748',
    padding: '2rem',
    fontFamily: "'Georgia', serif",
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.8'
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    marginBottom: '1rem',
    textAlign: 'justify'
  };

  const highlightStyle = {
    backgroundColor: '#ffd700',
    padding: '0.2rem 0.5rem',
    borderRadius: '3px',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
        Este é um texto estilizado usando <span style={highlightStyle}>inline styles</span> em React.
      </p>
      <p style={paragraphStyle}>
        Os inline styles em React são aplicados como objetos JavaScript, onde as propriedades 
        CSS são escritas em camelCase (por exemplo, backgroundColor em vez de background-color).
      </p>
      <p style={paragraphStyle}>
        Esta abordagem oferece algumas vantagens, como escopo automático de estilos e 
        facilidade para aplicar estilos dinâmicos baseados em props ou state.
      </p>
    </div>
  );
};

function Exercise4() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 4: TextoEstilizado com Inline Styles</h1>
        <p className="exercise-description">
          Componente que exibe um parágrafo de texto com estilos aplicados inline, 
          incluindo cor de fundo clara, cor de texto escura, padding e fonte personalizada.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Demonstração do Componente TextoEstilizado:</div>
        
        <div style={{ marginTop: '2rem' }}>
          <TextoEstilizado />
        </div>
      </div>

      <div className="code-snippet">
        <h3>TextoEstilizado.js - Código Completo:</h3>
        <pre>{`import React from 'react';

const TextoEstilizado = () => {
  const containerStyle = {
    backgroundColor: '#f0f4f8',
    color: '#2d3748',
    padding: '2rem',
    fontFamily: "'Georgia', serif",
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.8'
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    marginBottom: '1rem',
    textAlign: 'justify'
  };

  const highlightStyle = {
    backgroundColor: '#ffd700',
    padding: '0.2rem 0.5rem',
    borderRadius: '3px',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
        Este é um texto estilizado usando{' '}
        <span style={highlightStyle}>inline styles</span>{' '}
        em React.
      </p>
      <p style={paragraphStyle}>
        Os inline styles em React são aplicados como 
        objetos JavaScript, onde as propriedades CSS 
        são escritas em camelCase.
      </p>
    </div>
  );
};

export default TextoEstilizado;`}</pre>
      </div>

      <div className="code-snippet">
        <h3>Importando e Usando no App.js:</h3>
        <pre>{`import React from 'react';
import TextoEstilizado from './components/TextoEstilizado';

function App() {
  return (
    <div className="App">
      <h1>Minha Aplicação</h1>
      <TextoEstilizado />
    </div>
  );
}

export default App;`}</pre>
      </div>

      <div className="code-snippet">
        <h3>Conceitos de Inline Styles em React:</h3>
        <pre style={{ color: '#fff' }}>{`Características:
• Estilos definidos como objetos JavaScript
• Propriedades em camelCase (backgroundColor)
• Valores numéricos sem unidade assumem 'px'
• Valores de string precisam de aspas

Vantagens:
✓ Escopo automático no componente
✓ Fácil aplicar estilos dinâmicos
✓ Não há conflito de classes CSS
✓ Pode usar lógica JavaScript

Desvantagens:
✗ Não suporta pseudo-classes (:hover)
✗ Não suporta media queries
✗ Pode ficar verboso
✗ Dificulta reutilização

Quando Usar:
• Estilos específicos do componente
• Estilos dinâmicos baseados em props/state
• Prototipagem rápida
• Estilos simples e únicos`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise4;
