import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise15() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 15: Grid com Span</h1>
        <p className="exercise-description">
          Layout de grade onde o primeiro item ocupa duas colunas e o segundo 
          item ocupa duas linhas
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="grid-container-15">
          <div className="grid-item">1 (2 colunas)</div>
          <div className="grid-item">2 (2 linhas)</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
          <div className="grid-item">7</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 15px;
}

.item-1 {
  grid-column: span 2;
}

.item-2 {
  grid-row: span 2;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise15;
