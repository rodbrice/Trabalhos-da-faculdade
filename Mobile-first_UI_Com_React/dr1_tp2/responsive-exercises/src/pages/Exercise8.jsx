import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise8() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 8: Cinco Breakpoints com Media Queries (Mobile-first)</h1>
        <p className="exercise-description">
          Definição de 5 breakpoints com media queries para diferentes tamanhos de dispositivos,
          aplicando a abordagem mobile-first (do menor para o maior).
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado - Redimensione para ver as mudanças:</div>
        <div className="breakpoint-demo-8">
          <div className="device-indicator-8">
            <span className="device-name-8"></span>
          </div>
          <p className="breakpoint-info-8">A cor de fundo muda conforme o breakpoint</p>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS com 5 Breakpoints (Mobile-first):</h3>
        <pre>
{`/* Base: Mobile (até 575px) */
.breakpoint-demo-8 {
  background: #ff6b6b;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  color: white;
}

.device-name-8::before {
  content: "📱 Mobile (até 575px)";
}

/* Breakpoint 1: Tablets pequenos (576px) */
@media (min-width: 576px) {
  .breakpoint-demo-8 {
    background: #4ecdc4;
  }
  .device-name-8::before {
    content: "📱 Tablet Pequeno (576px+)";
  }
}

/* Breakpoint 2: Tablets (768px) */
@media (min-width: 768px) {
  .breakpoint-demo-8 {
    background: #45b7d1;
  }
  .device-name-8::before {
    content: "📱 Tablet (768px+)";
  }
}

/* Breakpoint 3: Desktop pequeno (992px) */
@media (min-width: 992px) {
  .breakpoint-demo-8 {
    background: #667eea;
  }
  .device-name-8::before {
    content: "💻 Desktop Pequeno (992px+)";
  }
}

/* Breakpoint 4: Desktop médio (1200px) */
@media (min-width: 1200px) {
  .breakpoint-demo-8 {
    background: #764ba2;
  }
  .device-name-8::before {
    content: "🖥️ Desktop Médio (1200px+)";
  }
}

/* Breakpoint 5: Desktop grande (1400px) */
@media (min-width: 1400px) {
  .breakpoint-demo-8 {
    background: #f093fb;
  }
  .device-name-8::before {
    content: "🖥️ Desktop Grande (1400px+)";
  }
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>Conceito Mobile-first:</h3>
        <pre style={{ color: '#fff' }}>
{`Os estilos base são aplicados para mobile (menor tela).
Cada media query adiciona ou sobrescreve estilos para
telas maiores, usando min-width.

Breakpoints definidos:
1. Base: até 575px (Mobile)
2. 576px+: Tablets pequenos
3. 768px+: Tablets
4. 992px+: Desktop pequeno
5. 1200px+: Desktop médio
6. 1400px+: Desktop grande`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise8;
