import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import './Exercise7.css';

const HeaderEx7 = () => <header className="header-ex7"><h1>Responsive Site</h1></header>;
const MainEx7 = () => (
  <main className="main-ex7">
    <h2>Main Content</h2>
    <p>This layout adapts to: Mobile (&lt;768px), Tablet (≥768px), Desktop (≥1200px)</p>
    <div className="grid-ex7">
      <div className="grid-item-ex7">Item 1</div>
      <div className="grid-item-ex7">Item 2</div>
      <div className="grid-item-ex7">Item 3</div>
      <div className="grid-item-ex7">Item 4</div>
    </div>
  </main>
);
const FooterEx7 = () => <footer className="footer-ex7"><p>&copy; 2025 Responsive Site</p></footer>;

function Exercise7() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 7: Breakpoints Tablet e Desktop</h1>
        <p className="exercise-description">
          Breakpoints adicionados: Tablet (768px+) e Desktop (1200px+).
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Redimensione para ver os breakpoints:</div>
        <div className="ex7-demo-container">
          <HeaderEx7 />
          <MainEx7 />
          <FooterEx7 />
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS com Breakpoints:</h3>
        <pre>{`/* Mobile First - Base */
.main { padding: 1rem; }
.grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }

/* Tablet - 768px */
@media (min-width: 768px) {
  .main { padding: 2rem; }
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop - 1200px */
@media (min-width: 1200px) {
  .main { max-width: 1200px; margin: 0 auto; padding: 3rem; }
  .grid { grid-template-columns: repeat(4, 1fr); }
}`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise7;
