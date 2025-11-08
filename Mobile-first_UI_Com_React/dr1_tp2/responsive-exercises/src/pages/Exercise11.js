import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise11() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 11: Layout Responsivo - Imagem e Texto</h1>
        <p className="exercise-description">
          Página simples com imagem e texto que se ajustam ao tamanho da tela.
          No mobile, apresenta layout vertical (imagem no topo). Em telas maiores, 
          apresenta layout horizontal (texto ao lado da imagem).
        </p>
        <BackButton />
      </div>

      <div className="demo-area" style={{ background: 'white', border: 'none', padding: 0 }}>
        <div className="content-layout-11">
          <div className="image-section-11">
            <img 
              src="https://via.placeholder.com/600x400/667eea/ffffff?text=Responsive+Design" 
              alt="Design Responsivo" 
            />
          </div>
          <div className="text-section-11">
            <h2>Design Responsivo</h2>
            <p>
              O design responsivo é uma abordagem de desenvolvimento web que cria páginas 
              capazes de se adaptar a diferentes tamanhos de tela e dispositivos.
            </p>
            <p>
              Utilizando técnicas como Flexbox, Grid e Media Queries, conseguimos criar 
              layouts que proporcionam uma experiência otimizada tanto em smartphones 
              quanto em desktops.
            </p>
            <p>
              A abordagem mobile-first prioriza o desenvolvimento para dispositivos móveis, 
              expandindo progressivamente o layout para telas maiores.
            </p>
          </div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>HTML utilizado:</h3>
        <pre>
{`<div class="content-layout-11">
  <div class="image-section-11">
    <img src="image.jpg" alt="Design Responsivo" />
  </div>
  <div class="text-section-11">
    <h2>Design Responsivo</h2>
    <p>Conteúdo do texto...</p>
  </div>
</div>`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS Mobile-first:</h3>
        <pre>
{`/* Base: Layout vertical (mobile) */
.content-layout-11 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.image-section-11 img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.text-section-11 {
  padding: 20px;
}

/* Layout horizontal para telas maiores */
@media (min-width: 768px) {
  .content-layout-11 {
    flex-direction: row;
    align-items: center;
  }
  
  .image-section-11,
  .text-section-11 {
    flex: 1;
  }
}`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise11;
