import React from 'react';
import BackButton from '../BackButton';
import './ExerciseStyles.css';

function Exercise4() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 4: Flex-shrink</h1>
        <p className="exercise-description">
          Container flexível com quatro itens onde o terceiro item encolhe (flex-shrink) 
          menos que os outros três quando o container é redimensionado
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado (o terceiro item resiste mais ao encolhimento):</div>
        <div className="flex-container-4">
          <div className="flex-item">Item 1</div>
          <div className="flex-item">Item 2</div>
          <div className="flex-item">Item 3 (shrink: 0.5)</div>
          <div className="flex-item">Item 4</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.flex-container {
  display: flex;
  gap: 15px;
}

.flex-item {
  flex-shrink: 1;
  flex-basis: 200px;
}

.item-3 {
  flex-shrink: 0.5;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise4;
