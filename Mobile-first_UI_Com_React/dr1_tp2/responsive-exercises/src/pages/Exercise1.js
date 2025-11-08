import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise1() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 1: Imagens Fluídas com tag &lt;picture&gt;</h1>
        <p className="exercise-description">
          Layout com imagem responsiva usando a tag &lt;picture&gt; com 3 resoluções diferentes: 
          576px (mobile), 992px (tablet) e acima (desktop). A imagem ocupa 100% da largura do viewport.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado - Redimensione a janela para ver a mudança:</div>
        <picture className="responsive-picture">
          <source 
            media="(min-width: 992px)" 
            srcSet="https://via.placeholder.com/1200x400/667eea/ffffff?text=Desktop+%28992px%2B%29" 
          />
          <source 
            media="(min-width: 576px)" 
            srcSet="https://via.placeholder.com/800x300/764ba2/ffffff?text=Tablet+%28576px+-+991px%29" 
          />
          <img 
            src="https://via.placeholder.com/400x200/28a745/ffffff?text=Mobile+%28at%C3%A9+575px%29" 
            alt="Imagem responsiva" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </picture>
      </div>

      <div className="code-snippet">
        <h3>HTML utilizado:</h3>
        <pre>
{`<picture>
  <source 
    media="(min-width: 992px)" 
    srcset="desktop-image.jpg" 
  />
  <source 
    media="(min-width: 576px)" 
    srcset="tablet-image.jpg" 
  />
  <img 
    src="mobile-image.jpg" 
    alt="Imagem responsiva" 
    style="width: 100%;" 
  />
</picture>`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>Conceito:</h3>
        <pre style={{ color: '#fff' }}>
{`A tag <picture> permite definir diferentes imagens para
diferentes condições de viewport, otimizando o carregamento
e a experiência do usuário em cada dispositivo.

Resoluções definidas:
- Até 575px: Mobile (verde)
- 576px a 991px: Tablet (roxo)
- 992px ou mais: Desktop (azul)`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise1;
