import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise13() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 13: Media Query - pointer (none, coarse, fine)</h1>
        <p className="exercise-description">
          Utilização de media queries para detectar o tipo de dispositivo apontador (pointer) 
          e ajustar o estilo conforme a presença e precisão do dispositivo: none, coarse (touch) ou fine (mouse).
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Teste os botões - O estilo muda conforme seu dispositivo:</div>
        <div className="pointer-demo-13">
          <button className="pointer-button-13 btn-1">
            Botão 1 - Pointer Fine
          </button>
          <button className="pointer-button-13 btn-2">
            Botão 2 - Pointer Coarse
          </button>
          <button className="pointer-button-13 btn-3">
            Botão 3 - Pointer None
          </button>
        </div>
        
        <div className="pointer-info-13">
          <p><strong>Dispositivo detectado:</strong> <span className="device-type-13"></span></p>
        </div>
      </div>

      <div className="code-snippet">
        <h3>HTML utilizado:</h3>
        <pre>
{`<div class="pointer-demo-13">
  <button class="pointer-button-13 btn-1">
    Botão 1 - Pointer Fine
  </button>
  <button class="pointer-button-13 btn-2">
    Botão 2 - Pointer Coarse
  </button>
  <button class="pointer-button-13 btn-3">
    Botão 3 - Pointer None
  </button>
</div>`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS - Estilos Base:</h3>
        <pre>
{`.pointer-button-13 {
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS - pointer: none (sem ponteiro):</h3>
        <pre>
{`/* Dispositivos sem ponteiro (teclado, controle remoto) */
@media (pointer: none) {
  .pointer-button-13 {
    padding: 20px 40px;
    font-size: 18px;
    border: 3px solid #333;
  }
  
  .device-type-13::before {
    content: "Nenhum ponteiro (teclado/controle)";
  }
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS - pointer: coarse (toque/touch):</h3>
        <pre>
{`/* Dispositivos com ponteiro impreciso (touchscreen) */
@media (pointer: coarse) {
  .pointer-button-13 {
    padding: 20px 35px;
    font-size: 18px;
    min-height: 48px; /* Área de toque acessível */
  }
  
  .pointer-button-13:active {
    transform: scale(0.95);
    background: #4a5fd9;
  }
  
  .device-type-13::before {
    content: "📱 Touch (tela sensível ao toque)";
  }
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS - pointer: fine (mouse preciso):</h3>
        <pre>
{`/* Dispositivos com ponteiro preciso (mouse, trackpad) */
@media (pointer: fine) {
  .pointer-button-13 {
    padding: 12px 25px;
    font-size: 16px;
  }
  
  .pointer-button-13:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .device-type-13::before {
    content: "🖱️ Mouse (ponteiro preciso)";
  }
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>Conceito:</h3>
        <pre style={{ color: '#fff' }}>
{`Estados de pointer:
- none: Sem dispositivo apontador (teclado, controle)
- coarse: Ponteiro impreciso (touchscreen)
- fine: Ponteiro preciso (mouse, trackpad)

Benefícios:
✓ Botões maiores para touch
✓ Hover effects apenas para mouse
✓ Acessibilidade otimizada por dispositivo`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise13;
