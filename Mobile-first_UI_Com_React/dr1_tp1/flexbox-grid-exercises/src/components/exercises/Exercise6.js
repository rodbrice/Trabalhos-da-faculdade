import React from 'react';
import BackButton from '../BackButton';
import './ExerciseStyles.css';

function Exercise6() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 6: Alinhamento Flex-start</h1>
        <p className="exercise-description">
          Container flexível com cinco itens alinhados ao início do container (flex-start)
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="flex-container-6">
          <div className="flex-item small-item">Item 1</div>
          <div className="flex-item small-item">Item 2</div>
          <div className="flex-item small-item">Item 3</div>
          <div className="flex-item small-item">Item 4</div>
          <div className="flex-item small-item">Item 5</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.flex-container {
  display: flex;
  justify-content: flex-start;
  gap: 15px;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise6;
