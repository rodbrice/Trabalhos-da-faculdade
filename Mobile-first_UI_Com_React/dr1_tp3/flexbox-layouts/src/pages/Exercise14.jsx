import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import './Exercise14.css';

function Exercise14() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 14: Hero com Imagens Responsivas</h1>
        <p className="exercise-description">Hero section com imagens responsivas usando técnica picture/source.</p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="hero-ex14">
          <div className="hero-content-ex14">
            <h1>Welcome to Our Site</h1>
            <p>Responsive hero section with adaptive images</p>
            <button className="hero-btn-ex14">Learn More</button>
          </div>
          <div className="hero-image-ex14">Hero Image</div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>Hero.jsx com Picture Tag:</h3>
        <pre>{`<section className="hero">
  <picture>
    <source media="(min-width: 992px)" srcset="hero-desktop.jpg" />
    <source media="(min-width: 576px)" srcset="hero-tablet.jpg" />
    <img src="hero-mobile.jpg" alt="Hero" />
  </picture>
  <div className="hero-content">
    <h1>Welcome</h1>
  </div>
</section>`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise14;
