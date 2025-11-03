import React from 'react';
import BackButton from '../BackButton';
import './ExerciseStyles.css';


function Exercise12() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 12: Centralização Completa</h1>
        <p className="exercise-description">
          Container flexível onde todos os itens são centralizados tanto 
          horizontalmente quanto verticalmente no container
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="flex-container-12">
          <div className="flex-item">Item 1</div>
          <div className="flex-item">Item 2</div>
          <div className="flex-item">Item 3</div>
          <div className="flex-item">Item 4</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  gap: 15px;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise12;
