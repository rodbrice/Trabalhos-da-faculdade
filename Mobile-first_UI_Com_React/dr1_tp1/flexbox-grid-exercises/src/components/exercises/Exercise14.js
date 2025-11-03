import React from 'react';
import BackButton from '../BackButton';
import './ExerciseStyles.css';

function Exercise14() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 14: Grid Layout Básico</h1>
        <p className="exercise-description">
          Layout de grade (grid) com quatro colunas e três linhas. 
          Cada célula da grade preenchida com um item
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="grid-container-14">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="grid-item">{index + 1}</div>
          ))}
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 15px;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise14;
