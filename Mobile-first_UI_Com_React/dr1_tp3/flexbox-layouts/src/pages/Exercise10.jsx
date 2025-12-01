import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import HeaderModule from '../components/HeaderModule';
import ContentModule from '../components/ContentModule';
import FooterModule from '../components/FooterModule';

function Exercise10() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 10: Header, Content e Footer com CSS Modules</h1>
        <p className="exercise-description">
          Três componentes (Header, Content, Footer) cada um com seu próprio módulo de estilo CSS.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Layout Completo com CSS Modules:</div>
        <div style={{ marginTop: '2rem', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <HeaderModule />
          <ContentModule />
          <FooterModule />
        </div>
      </div>

      <div className="code-snippet">
        <h3>Estrutura de Arquivos:</h3>
        <pre>{`src/
├── components/
│   ├── Header.jsx
│   ├── Header.module.css
│   ├── Content.jsx
│   ├── Content.module.css
│   ├── Footer.jsx
│   └── Footer.module.css
└── App.jsx`}</pre>
      </div>

      <div className="code-snippet">
        <h3>App.jsx:</h3>
        <pre>{`import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise10;
