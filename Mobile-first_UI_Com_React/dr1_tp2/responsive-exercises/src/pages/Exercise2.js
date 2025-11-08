import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise2() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 2: Imagem Responsiva com CSS</h1>
        <p className="exercise-description">
          Layout com imagem responsiva usando a tag &lt;img&gt; e a propriedade CSS max-width
          para garantir que a imagem se ajuste a todas as resoluções, ocupando 100% da largura do viewport.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Resultado - A imagem se ajusta automaticamente:</div>
        <img 
          src="https://via.placeholder.com/1200x400/667eea/ffffff?text=Imagem+Responsiva+com+max-width" 
          alt="Imagem fluída" 
          className="responsive-image"
        />
      </div>

      <div className="code-snippet">
        <h3>HTML utilizado:</h3>
        <pre>
{`<img 
  src="image.jpg" 
  alt="Imagem fluída" 
  class="responsive-image"
/>`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado:</h3>
        <pre>
{`.responsive-image {
  max-width: 100%;
  height: auto;
  width: 100%;
  display: block;
  border-radius: 8px;
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>Conceito:</h3>
        <pre style={{ color: '#fff' }}>
{`A propriedade max-width: 100% garante que a imagem nunca
ultrapasse a largura do seu container, enquanto width: 100%
faz com que ela ocupe toda a largura disponível.

height: auto mantém a proporção original da imagem,
evitando distorções ao redimensionar.`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise2;
