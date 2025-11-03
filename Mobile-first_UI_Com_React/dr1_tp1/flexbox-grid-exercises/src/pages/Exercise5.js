import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise5() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 5: Flex-basis</h1>
        <p className="exercise-description">
          Container flexível com cinco itens onde o segundo item tem uma base (flex-basis) 
          de 200px, enquanto os outros itens têm bases automáticas
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="flex-container-5">
          <div className="flex-item">Item 1</div>
          <div className="flex-item">Item 2 (200px)</div>
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
  gap: 15px;
}

.item-2 {
  flex-basis: 200px;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise5;
