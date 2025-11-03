import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise2() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 2: Flex Direction Column-Reverse</h1>
        <p className="exercise-description">
          Container flexível que distribui quatro itens em uma coluna vertical (column) 
          e inverte a ordem dos itens usando flex-direction: column-reverse
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado:</div>
        <div className="flex-container-2">
          <div className="flex-item">Item 1</div>
          <div className="flex-item">Item 2</div>
          <div className="flex-item">Item 3</div>
          <div className="flex-item">Item 4</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.flex-container {
  display: flex;
  flex-direction: column-reverse;
  gap: 15px;
  height: 300px;
}`}
        </pre>
      </div>
       <Footer />
    </div>
  );
}

export default Exercise2;
