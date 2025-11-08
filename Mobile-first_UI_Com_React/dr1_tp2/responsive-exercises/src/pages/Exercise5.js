import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise5() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 5: Centralização com CSS Grid</h1>
        <p className="exercise-description">
          Layout responsivo onde os elementos são centralizados vertical e horizontalmente usando display: grid.
          O container ocupa 100% da altura da tela e se adapta a diferentes tamanhos.
        </p>
        <BackButton />
      </div>

      <div className="demo-area" style={{ minHeight: '500px', padding: 0, border: 'none' }}>
        <div className="grid-center-5">
          <div className="grid-item-5 item-1">Item 1</div>
          <div className="grid-item-5 item-2">Item 2</div>
          <div className="grid-item-5 item-3">Item 3</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>HTML utilizado:</h3>
        <pre>
{`<div class="grid-center-5">
  <div class="grid-item-5 item-1">Item 1</div>
  <div class="grid-item-5 item-2">Item 2</div>
  <div class="grid-item-5 item-3">Item 3</div>
</div>`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.grid-center-5 {
  display: grid;
  place-items: center;
  gap: 20px;
  min-height: 500px;
  background: linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%);
  padding: 20px;
  border-radius: 8px;
}

.grid-item-5 {
  padding: 30px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  text-align: center;
}

.item-1 { 
  background: #667eea; 
  width: 150px; 
  height: 100px; 
}

.item-2 { 
  background: #764ba2; 
  width: 200px; 
  height: 150px; 
}

.item-3 { 
  background: #f093fb; 
  width: 180px; 
  height: 120px; 
}

/* Adaptação para telas menores */
@media (max-width: 768px) {
  .grid-center-5 {
    grid-template-columns: 1fr;
  }
}`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise5;
