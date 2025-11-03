import React from 'react';
import BackButton from '../BackButton';
import './ExerciseStyles.css';

function Exercise10() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 10: Containers Aninhados</h1>
        <p className="exercise-description">
          Container externo horizontal com dois containers internos verticais
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="flex-container-10-outer">
          <div className="flex-container-10-inner">
            <div className="flex-item small-item">Item 1.1</div>
            <div className="flex-item small-item">Item 1.2</div>
            <div className="flex-item small-item">Item 1.3</div>
          </div>
          <div className="flex-container-10-inner">
            <div className="flex-item small-item">Item 2.1</div>
            <div className="flex-item small-item">Item 2.2</div>
            <div className="flex-item small-item">Item 2.3</div>
          </div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.container-externo {
  display: flex;
  gap: 20px;
  justify-content: space-around;
}

.container-interno {
  display: flex;
  flex-direction: column;
  gap: 10px;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise10;
