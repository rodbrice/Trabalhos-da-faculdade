import React from 'react';
import BackButton from '../BackButton';
import './ExerciseStyles.css';

function Exercise1() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 1: Flex Direction Row-Reverse</h1>
        <p className="exercise-description">
          Container com três itens em linha horizontal com ordem invertida
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="flex-container-1">
          <div className="flex-item">Item 1</div>
          <div className="flex-item">Item 2</div>
          <div className="flex-item">Item 3</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.flex-container {
  display: flex;
  flex-direction: row-reverse;
  gap: 15px;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise1;
