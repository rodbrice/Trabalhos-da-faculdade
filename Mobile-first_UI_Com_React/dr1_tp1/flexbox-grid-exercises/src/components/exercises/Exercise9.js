import React from 'react';
import BackButton from '../BackButton';
import './ExerciseStyles.css';

function Exercise9() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 9: Space-between</h1>
        <p className="exercise-description">
          Container flexível com seis itens e distribuição de espaço igual entre os itens (space-between)
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="flex-container-9">
          <div className="flex-item small-item">Item 1</div>
          <div className="flex-item small-item">Item 2</div>
          <div className="flex-item small-item">Item 3</div>
          <div className="flex-item small-item">Item 4</div>
          <div className="flex-item small-item">Item 5</div>
          <div className="flex-item small-item">Item 6</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.flex-container {
  display: flex;
  justify-content: space-between;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise9;
