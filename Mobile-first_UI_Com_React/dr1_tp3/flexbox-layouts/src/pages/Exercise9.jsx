import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import ButtonModule from '../components/ButtonModule';

function Exercise9() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 9: Button com CSS Modules</h1>
        <p className="exercise-description">
          Componente Button com módulo de estilo incluindo variantes e estados (hover, active).
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Button Variants:</div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
          <ButtonModule text="Primary" variant="primary" onClick={() => alert('Primary!')} />
          <ButtonModule text="Secondary" variant="secondary" onClick={() => alert('Secondary!')} />
          <ButtonModule text="Success" variant="success" onClick={() => alert('Success!')} />
        </div>
      </div>

      <div className="code-snippet">
        <h3>Button.module.css:</h3>
        <pre>{`.button {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
.secondary { background: #6c757d; color: white; }
.success { background: #28a745; color: white; }

.button:hover { transform: translateY(-2px); }
.button:active { transform: translateY(0); }`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise9;
