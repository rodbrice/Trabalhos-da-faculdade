import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise16() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 16: Transmutação Mobile-First - iPhone 414px</h1>
        <p className="exercise-description">
          Implementação mobile-first de um wireframe para iPhone com largura de 414px.
          Layout otimizado exclusivamente para dispositivos móveis.
        </p>
        <BackButton />
      </div>

      <div className="demo-area" style={{ padding: 0, border: 'none', background: '#f5f5f5' }}>
        <div className="demo-title" style={{ padding: '0 20px 15px' }}>Resultado (414px de largura):</div>
        
        <div className="mobile-wireframe-16">
          {/* Header com logo e menu */}
          <header className="header-top-16">
            <div className="logo-16">HOMCO</div>
            <button className="menu-hamburger-16">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </header>

          {/* Hero Section */}
          <section className="hero-section-16">
            <h1 className="hero-title-16">SINGLE POST</h1>
            <p className="hero-subtitle-16">
              This is the subject or title of your blog post which will be replaced 
              once you publish the actual blog entry.
            </p>
          </section>

          {/* Main Article */}
          <article className="article-section-16">
            <div className="article-image-16"></div>
            <h2 className="article-title-16">TIPS CHOICE BEST AGENCY FOR HOUSE DECORATION</h2>
            <p className="article-text-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris.
            </p>
            <p className="article-text-16">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>

          {/* Logos Section */}
          <section className="logos-section-16">
            <div className="logo-item-16">Logo 1</div>
            <div className="logo-item-16">Logo 2</div>
            <div className="logo-item-16">Logo 3</div>
            <div className="logo-item-16">Logo 4</div>
          </section>

          {/* CTA Banner */}
          <section className="cta-banner-16">
            <h2 className="cta-title-16">
              LET'S CHANGE YOUR OWN HOME INTERIOR DESIGN NOW
            </h2>
            <button className="cta-button-16">CONTACT US</button>
          </section>

          {/* Footer */}
          <footer className="footer-main-16">
            <div className="footer-col-16">
              <h3>INFORMATION</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="footer-col-16">
              <h3>NAVIGATION</h3>
              <ul>
                <li>Homepage</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Projects</li>
              </ul>
            </div>
            <div className="footer-col-16">
              <h3>CONTACT US</h3>
              <p>Something More Info About contact</p>
              <input type="email" placeholder="Email Address" />
              <button>SUBSCRIBE</button>
            </div>
          </footer>

          {/* Bottom Footer */}
          <div className="footer-bottom-16">
            <p>©2025 - HOMCO - INTERIOR DESIGN</p>
          </div>
        </div>

        <div style={{ 
          textAlign: 'center', 
          padding: '20px', 
          background: 'white', 
          borderTop: '2px solid #e0e0e0',
          marginTop: '20px'
        }}>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            📱 Layout otimizado para iPhone (414px de largura)
          </p>
        </div>
      </div>

      <div className="code-snippet">
        <h3>HTML utilizado:</h3>
        <pre>
{`<div class="mobile-wireframe-16">
  <header class="wireframe-header-16">
    <div class="profile-circle-16">
      <img src="profile.jpg" alt="Profile" />
    </div>
    <h1>Hi, I am John,<br/>Creative Technologist</h1>
    <p class="wireframe-subtitle-16">...</p>
    <button class="download-button-16">Download Resume</button>
  </header>

  <section class="wireframe-content-16">
    <div class="content-block-16">
      <div class="placeholder-image-16"></div>
      <div class="text-block-16">...</div>
    </div>
  </section>

  <footer class="wireframe-footer-16">...</footer>
</div>`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS Mobile-first (414px):</h3>
        <pre>
{`.mobile-wireframe-16 {
  max-width: 414px;
  margin: 0 auto;
  background: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.wireframe-header-16 {
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.profile-circle-16 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border: 4px solid #667eea;
}

.profile-circle-16 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wireframe-title-16 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.3;
}

.download-button-16 {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
}

.content-block-16 {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
}

.placeholder-image-16 {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
}`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise16;
