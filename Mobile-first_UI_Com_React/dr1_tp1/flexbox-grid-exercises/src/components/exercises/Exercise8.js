import React from 'react';
import BackButton from '../BackButton';
import './ExerciseStyles.css';

function Exercise8() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 8: Centralização Horizontal</h1>
        <p className="exercise-description">
          Container flexível com três itens centralizados horizontalmente (center)
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="flex-container-8">
          <div className="flex-item small-item">Item 1</div>
          <div className="flex-item small-item">Item 2</div>
          <div className="flex-item small-item">Item 3</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.flex-container {
  display: flex;
  justify-content: center;
  gap: 15px;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise8;
