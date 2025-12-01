import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import './Exercise11.css';

function Exercise11() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 11: Estilos Globais (global.css)</h1>
        <p className="exercise-description">
          Aplicação de estilos globais que afetam toda a aplicação React.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Demonstração de Estilos Globais:</div>
        <div className="ex11-demo">
          <h1>Título H1 Global</h1>
          <h2>Título H2 Global</h2>
          <p>Parágrafo com estilos globais aplicados. O arquivo global.css define estilos que afetam todos os elementos da aplicação.</p>
          <p>Isso inclui reset CSS, tipografia base, cores e espaçamentos padrão.</p>
        </div>
      </div>

      <div className="code-snippet">
        <h3>global.css:</h3>
        <pre>{`/* Reset e estilos globais */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
    'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f5f5;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #667eea;
}

h2 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  color: #764ba2;
}

p {
  margin-bottom: 1rem;
  color: #666;
}

a {
  color: #667eea;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}`}</pre>
      </div>

      <div className="code-snippet">
        <h3>index.js (Importando global.css):</h3>
        <pre>{`import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'; // ← Importar aqui
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise11;
