import React from 'react';
import BackButton from '../BackButton';
import './ExerciseStyles.css';

function Exercise13() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 13: Space-around</h1>
        <p className="exercise-description">
          Container flexível onde os itens são distribuídos ao redor do centro 
          do container (space-around)
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="flex-container-13">
          <div className="flex-item">Item 1</div>
          <div className="flex-item">Item 2</div>
          <div className="flex-item">Item 3</div>
          <div className="flex-item">Item 4</div>
          <div className="flex-item">Item 5</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 300px;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise13;
