import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise3() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 3: Layout Responsivo com Flexbox (Mobile-first)</h1>
        <p className="exercise-description">
          Reprodução de layout usando Flexbox com abordagem Mobile-first. 
          O container principal ocupa 100% da largura do viewport até o máximo de 576px.
        </p>
        <BackButton />
      </div>

      <div className="demo-area" style={{ padding: 0, border: 'none' }}>
        <div className="demo-title" style={{ padding: '0 20px 15px' }}>Resultado (máximo 576px de largura):</div>
        
        {/* Layout conforme a imagem */}
        <div className="flex-layout-3">
          {/* Menu hamburger */}
          <div className="hamburger-menu-3">
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Foto circular */}
          <div className="profile-photo-3">
            <img 
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2011/10/31/20/48-John-McCarthy-AP.jpg" 
              alt="Profile" 
            />
          </div>

          {/* Título */}
          <h1 className="profile-title-3">
            Hi, I am John,<br />
            Creative Technologist
          </h1>

          {/* Parágrafo */}
          <p className="profile-description-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam 
            consequat sunt nostrud amet.
          </p>

          {/* Botão */}
          <button className="download-button-3">Download Resume</button>
        </div>
      </div>

      <div className="code-snippet">
        <h3>HTML utilizado:</h3>
        <pre>
{`<div class="flex-layout-3">
  <!-- Menu hamburger -->
  <div class="hamburger-menu-3">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <!-- Foto circular -->
  <div class="profile-photo-3">
    <img src="profile.jpg" alt="Profile" />
  </div>

  <!-- Título -->
  <h1 class="profile-title-3">
    Hi, I am John,<br />
    Creative Technologist
  </h1>

  <!-- Descrição -->
  <p class="profile-description-3">
    Amet minim mollit non deserunt ullamco est...
  </p>

  <!-- Botão -->
  <button class="download-button-3">
    Download Resume
  </button>
</div>`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS aplicado (Mobile-first):</h3>
        <pre>
{`.flex-layout-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 576px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.hamburger-menu-3 {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger-menu-3 span {
  width: 30px;
  height: 3px;
  background: #333;
  border-radius: 2px;
}

.profile-photo-3 {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 30px;
}

.profile-title-3 {
  text-align: center;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.3;
}

.profile-description-3 {
  text-align: center;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
  padding: 0 10px;
}

.download-button-3 {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise3;
