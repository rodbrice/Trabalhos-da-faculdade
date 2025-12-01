import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import './Exercise13.css';

function Exercise13() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 13: Menu de Navegação Responsivo</h1>
        <p className="exercise-description">
          Menu com navegação mobile-first: até 576px (vertical), até 992px (horizontal sem espaço), 
          acima 992px (horizontal distribuído).
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Menu Responsivo - Redimensione a janela:</div>
        
        <nav className="menu-ex13">
          <button className="menu-toggle-ex13" onClick={() => setMenuOpen(!menuOpen)}>
            ☰ Menu
          </button>
          <ul className={`menu-items-ex13 ${menuOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="code-snippet">
        <h3>menu.css:</h3>
        <pre>{`/* Mobile First - até 576px */
.menu-items {
  display: none;
  flex-direction: column;
  list-style: none;
}

.menu-items.open {
  display: flex;
}

.menu-items li {
  width: 100%; /* Largura total */
}

/* Tablet - 576px a 992px */
@media (min-width: 576px) {
  .menu-toggle { display: none; }
  .menu-items {
    display: flex;
    flex-direction: row; /* Horizontal */
    gap: 0; /* Sem espaço */
  }
}

/* Desktop - acima de 992px */
@media (min-width: 992px) {
  .menu-items {
    justify-content: space-around; /* Distribuído */
    gap: 2rem; /* Com espaço */
  }
}`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise13;
