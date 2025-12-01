import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

function Exercise15() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 15: Main com Hero Integrado</h1>
        <p className="exercise-description">Componente Main que integra o Hero e outros conteúdos.</p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '3rem 2rem', textAlign: 'center' }}>
            <h1>Hero Inside Main</h1>
            <p>This is the hero component integrated within the Main component</p>
          </div>
          <div style={{ padding: '2rem', background: '#f8f9fa' }}>
            <h2 style={{ color: '#333', marginBottom: '1rem' }}>Main Content</h2>
            <p style={{ color: '#666' }}>Additional content sections go here...</p>
          </div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>Main.jsx:</h3>
        <pre>{`import React from 'react';
import Hero from './Hero';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <Hero />
      <section className="content">
        <h2>Main Content</h2>
        <p>Additional sections...</p>
      </section>
    </main>
  );
};

export default Main;`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise15;
