import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise3() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 3: Flex-grow</h1>
        <p className="exercise-description">
          Primeiro item cresce mais que os outros dois
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="flex-container-3">
          <div className="flex-item">Item 1 (flex-grow: 3)</div>
          <div className="flex-item">Item 2 (flex-grow: 1)</div>
          <div className="flex-item">Item 3 (flex-grow: 1)</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.flex-container {
  display: flex;
  gap: 15px;
}

.item-1 {
  flex-grow: 3;
}

.item-2, .item-3 {
  flex-grow: 1;
}`}
        </pre>
      </div>
       <Footer />
    </div>
  );
}

export default Exercise3;
