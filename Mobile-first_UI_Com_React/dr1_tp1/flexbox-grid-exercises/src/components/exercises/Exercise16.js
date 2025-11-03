import React from 'react';
import BackButton from '../BackButton';
import './ExerciseStyles.css';

function Exercise16() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 16: Grid com Colunas Proporcionais</h1>
        <p className="exercise-description">
          Layout de grade com três colunas e três linhas. As colunas têm larguras 
          diferentes usando a unidade fr (1fr, 2fr, 1fr)
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado (note a coluna do meio mais larga):</div>
        <div className="grid-container-16">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="grid-item">
              {index % 3 === 0 ? '1fr' : index % 3 === 1 ? '2fr' : '1fr'}
            </div>
          ))}
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(3, 100px);
  gap: 15px;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise16;
