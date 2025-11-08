import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise14() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 14: Media Query - hover (none, hover)</h1>
        <p className="exercise-description">
          Utilização de media queries para detectar se o dispositivo permite hover (passar o mouse) 
          sobre elementos e ajustar os estilos conforme essa capacidade.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Teste os botões:</div>
        <div className="hover-demo-14">
          <button className="hover-button-14 btn-hover-1">
            Botão com Hover
          </button>
          <button className="hover-button-14 btn-hover-2">
            Botão Alternativo
          </button>
        </div>
        
        <div className="hover-info-14">
          <p><strong>Capacidade de hover:</strong> <span className="hover-type-14"></span></p>
          <p className="hover-description-14"></p>
        </div>
      </div>

      <div className="code-snippet">
        <h3>HTML utilizado:</h3>
        <pre>
{`<div class="hover-demo-14">
  <button class="hover-button-14 btn-hover-1">
    Botão com Hover
  </button>
  <button class="hover-button-14 btn-hover-2">
    Botão Alternativo
  </button>
</div>`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS - Estilos Base:</h3>
        <pre>
{`.hover-button-14 {
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS - hover: none (sem hover):</h3>
        <pre>
{`/* Dispositivos SEM capacidade de hover (touch) */
@media (hover: none) {
  .hover-button-14 {
    /* Botões maiores para facilitar toque */
    padding: 18px 35px;
    min-height: 48px;
  }
  
  /* Feedback visual no toque (active) */
  .hover-button-14:active {
    transform: scale(0.95);
    background: linear-gradient(135deg, #4a5fd9 0%, #5a3a82 100%);
    box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.3);
  }
  
  .hover-type-14::before {
    content: "📱 Sem hover (touch)";
  }
  
  .hover-description-14::before {
    content: "Feedback visual no toque (active state)";
  }
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS - hover: hover (com hover):</h3>
        <pre>
{`/* Dispositivos COM capacidade de hover (mouse) */
@media (hover: hover) {
  .hover-button-14 {
    /* Botões com dimensões normais */
    padding: 12px 28px;
  }
  
  /* Efeito hover suave */
  .hover-button-14:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
    background: linear-gradient(135deg, #7d8ff5 0%, #8b5bb8 100%);
  }
  
  .hover-button-14:active {
    transform: translateY(-1px);
  }
  
  .hover-type-14::before {
    content: "🖱️ Com hover (mouse)";
  }
  
  .hover-description-14::before {
    content: "Passe o mouse sobre os botões para ver o efeito";
  }
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>Conceito:</h3>
        <pre style={{ color: '#fff' }}>
{`Estados de hover:
- none: Dispositivo não permite hover (touchscreen)
- hover: Dispositivo permite hover (mouse, trackpad)

Benefícios:
✓ Evita hover em dispositivos touch
✓ Melhora UX com feedback apropriado
✓ Botões maiores para touch
✓ Efeitos hover apenas onde funcionam

Importante:
Dispositivos touch não ativam :hover de forma
consistente. Use :active para feedback em touch.`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise14;
