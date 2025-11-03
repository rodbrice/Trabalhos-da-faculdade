import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise11() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 11: Containers Aninhados Invertidos</h1>
        <p className="exercise-description">
          Layout com três containers flexíveis aninhados. O container externo distribui 
          três containers internos verticalmente, e cada container interno distribui 
          quatro itens horizontalmente
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="flex-container-11-outer">
          <div className="flex-container-11-inner">
            <div className="flex-item small-item">1.1</div>
            <div className="flex-item small-item">1.2</div>
            <div className="flex-item small-item">1.3</div>
            <div className="flex-item small-item">1.4</div>
          </div>
          <div className="flex-container-11-inner">
            <div className="flex-item small-item">2.1</div>
            <div className="flex-item small-item">2.2</div>
            <div className="flex-item small-item">2.3</div>
            <div className="flex-item small-item">2.4</div>
          </div>
          <div className="flex-container-11-inner">
            <div className="flex-item small-item">3.1</div>
            <div className="flex-item small-item">3.2</div>
            <div className="flex-item small-item">3.3</div>
            <div className="flex-item small-item">3.4</div>
          </div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.container-externo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.container-interno {
  display: flex;
  gap: 10px;
}`}
        </pre>
      </div>
    </div>
  );
}

export default Exercise11;
