import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import './Exercise6.css';

const HeaderEx6 = () => (
  <header className="header-ex6">
    <h1>Meu Website</h1>
  </header>
);

const MainEx6 = () => (
  <main className="main-ex6">
    <h2>Conteúdo Principal</h2>
    <p>Este é o componente Main com parágrafos e imagens, focando em mobile-first design.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    
    <div className="image-placeholder-ex6">
      <span>Imagem Responsiva</span>
    </div>
    
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
    <div className="image-placeholder-ex6">
      <span>Segunda Imagem</span>
    </div>
  </main>
);

const FooterEx6 = () => (
  <footer className="footer-ex6">
    <p>&copy; 2025 Meu Website</p>
  </footer>
);

function Exercise6() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 6: Componente Main com Conteúdo</h1>
        <p className="exercise-description">
          Componente Main exibido entre Header e Footer, com parágrafos e imagens, 
          mantendo o foco mobile-first.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Layout Completo:</div>
        
        <div className="ex6-demo-container">
          <HeaderEx6 />
          <MainEx6 />
          <FooterEx6 />
        </div>
      </div>

      <div className="code-snippet">
        <h3>Main.js:</h3>
        <pre>{`import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <h2>Conteúdo Principal</h2>
      <p>Texto do componente Main...</p>
      
      <img 
        src="imagem.jpg" 
        alt="Descrição" 
        className="main-image"
      />
      
      <p>Mais conteúdo...</p>
    </main>
  );
};

export default Main;`}</pre>
      </div>

      <div className="code-snippet">
        <h3>App.js:</h3>
        <pre>{`import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise6;
