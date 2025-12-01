import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import './Exercise5.css';

// Componente Header para o exercício
const HeaderEx5 = () => {
  return (
    <header className="header-ex5">
      <h1>Meu Website Mobile-First</h1>
      <p>Design otimizado para dispositivos móveis</p>
    </header>
  );
};

// Componente Footer para o exercício
const FooterEx5 = () => {
  return (
    <footer className="footer-ex5">
      <p>&copy; 2025 Meu Website. Todos os direitos reservados.</p>
      <p>Desenvolvido com React</p>
    </footer>
  );
};

function Exercise5() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 5: Header e Footer Mobile-First</h1>
        <p className="exercise-description">
          Componentes básicos React (Header e Footer) com design mobile-first 
          otimizado para telas com largura de até 576px.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Demonstração - Layout Mobile-First:</div>
        
        <div className="ex5-demo-container">
          <HeaderEx5 />
          <div className="ex5-content">
            <p>Conteúdo principal da página adaptado para mobile.</p>
          </div>
          <FooterEx5 />
        </div>
      </div>

      <div className="code-snippet">
        <h3>Header.js:</h3>
        <pre>{`import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Meu Website Mobile-First</h1>
      <p>Design otimizado para dispositivos móveis</p>
    </header>
  );
};

export default Header;`}</pre>
      </div>

      <div className="code-snippet">
        <h3>Footer.js:</h3>
        <pre>{`import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Meu Website.</p>
      <p>Desenvolvido com React</p>
    </footer>
  );
};

export default Footer;`}</pre>
      </div>

      <div className="code-snippet">
        <h3>Header.css (Mobile-First até 576px):</h3>
        <pre>{`/* Mobile First - até 576px */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem 1rem;
  text-align: center;
}

.header h1 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.header p {
  font-size: 0.9rem;
  opacity: 0.9;
}`}</pre>
      </div>

      <div className="code-snippet">
        <h3>App.js:</h3>
        <pre>{`import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <p>Conteúdo principal</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise5;
