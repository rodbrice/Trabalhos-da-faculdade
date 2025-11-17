import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise4() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 4: Layout Responsivo com Media Query (992px)</h1>
        <p className="exercise-description">
          Layout vertical no mobile (menu + apresentação). A partir de 992px, 
          a seção de apresentação se divide horizontalmente entre texto e imagem.
        </p>
        <BackButton />
      </div>

      <div className="demo-area" style={{ padding: 0, border: 'none' }}>
        <div className="demo-title" style={{ padding: '0 20px 15px' }}>Resultado - Redimensione para ver a mudança em 992px:</div>
        
        <div className="flex-layout-4">
          {/* Menu no topo (vertical no mobile) */}
          <div className="menu-section-4">
            <nav className="menu-nav-4">
              <span>Works</span>
              <span>Blog</span>
              <span>Contact</span>
            </nav>
          </div>

          {/* Seção de apresentação */}
          <div className="presentation-section-4">
            {/* Texto à esquerda */}
            <div className="text-content-4">
              <h1 className="main-title-4">
                Hi, I am John,<br />
                Creative Technologist
              </h1>
              <p className="main-description-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam 
                consequat sunt nostrud amet.
              </p>
              <button className="download-btn-4">Download Resume</button>
            </div>

            {/* Imagem circular à direita */}
            <div className="image-content-4">
              <div className="profile-circle-4">
                <img 
                  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2011/10/31/20/48-John-McCarthy-AP.jpg" 
                  alt="Profile" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>HTML utilizado:</h3>
        <pre>
{`<div class="flex-layout-4">
  <!-- Menu -->
  <div class="menu-section-4">
    <nav>
      <span>Works</span>
      <span>Blog</span>
      <span>Contact</span>
    </nav>
  </div>

  <!-- Apresentação -->
  <div class="presentation-section-4">
    <div class="text-content-4">
      <h1>Hi, I am John, Creative Technologist</h1>
      <p>Descrição...</p>
      <button>Download Resume</button>
    </div>
    <div class="image-content-4">
      <img src="profile.jpg" alt="Profile" />
    </div>
  </div>
</div>`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS Mobile-first (base - vertical):</h3>
        <pre>
{`.flex-layout-4 {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-section-4 {
  padding: 20px;
  text-align: right;
}

.presentation-section-4 {
  display: flex;
  flex-direction: column-reverse;
  padding: 40px 20px;
  align-items: center;
  text-align: center;
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS Media Query (a partir de 992px - horizontal):</h3>
        <pre>
{`@media (min-width: 992px) {
  .presentation-section-4 {
    flex-direction: row;
    text-align: left;
    gap: 60px;
  }
  
  .text-content-4 {
    flex: 1;
  }
  
  .image-content-4 {
    flex: 0 0 250px;
  }
}`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise4;
