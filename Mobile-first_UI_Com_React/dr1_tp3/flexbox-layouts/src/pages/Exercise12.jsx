import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

function Exercise12() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 12: Estilos do App (styles.css)</h1>
        <p className="exercise-description">Estilos específicos para o componente App.js</p>
        <BackButton />
      </div>
      <div className="demo-area">
        <div className="demo-title">Ver código abaixo:</div>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', marginTop: '1rem' }}>
          <h2 style={{ color: '#667eea' }}>App Component</h2>
          <p>Estilos com escopo voltado para o App principal.</p>
        </div>
      </div>
      <div className="code-snippet">
        <h3>styles.css:</h3>
        <pre>{`.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.app-section {
  background: white;
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`}</pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise12;
