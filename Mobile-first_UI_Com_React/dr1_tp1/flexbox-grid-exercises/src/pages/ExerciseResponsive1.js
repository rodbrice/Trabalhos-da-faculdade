import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function ExerciseResponsive1() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício R1: Layout Flexbox Responsivo</h1>
        <p className="exercise-description">
          Layout que se adapta do desktop (linha) para mobile (coluna)
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado (redimensione a janela):</div>
        <div className="flex-responsive-1">
          <div className="flex-item">Conteúdo 1</div>
          <div className="flex-item">Conteúdo 2</div>
          <div className="flex-item">Conteúdo 3</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.flex-responsive {
  display: flex;
  gap: 15px;
}

@media (max-width: 768px) {
  .flex-responsive {
    flex-direction: column;
  }
}`}
        </pre>
      </div>
    </div>
  );
}

export default ExerciseResponsive1;