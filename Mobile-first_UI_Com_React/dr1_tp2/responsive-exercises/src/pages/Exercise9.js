import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

function Exercise9() {
  return (
    <>
      <link rel="stylesheet" href="styles/exercise9-screen.css" media="screen" />
      <link rel="stylesheet" href="styles/exercise9-print.css" media="print" />
      <link rel="stylesheet" href="styles/exercise9-mobile.css" media="screen and (max-width: 768px)" />
      
      <div className="exercise-container">
        <div className="exercise-header">
          <h1>Exercício 9: Três Arquivos CSS com Atributo Media</h1>
          <p className="exercise-description">
            Demonstração de como usar o atributo "media" na tag &lt;link&gt; para carregar
            diferentes arquivos CSS conforme o tipo de mídia (screen, print) e condições.
          </p>
          <BackButton />
        </div>

        <div className="demo-area">
          <div className="demo-title">Arquivos CSS Carregados:</div>
          <div className="media-links-demo-9">
            <div className="link-box-9">
              <h3>1. Screen (Tela)</h3>
              <p>Estilos para visualização em tela</p>
              <code>media="screen"</code>
            </div>
            <div className="link-box-9">
              <h3>2. Print (Impressão)</h3>
              <p>Estilos para impressão</p>
              <code>media="print"</code>
            </div>
            <div className="link-box-9">
              <h3>3. Mobile Screen</h3>
              <p>Estilos para telas até 768px</p>
              <code>media="screen and (max-width: 768px)"</code>
            </div>
          </div>
          
          <div className="print-note-9">
            💡 <strong>Dica:</strong> Use Ctrl+P (Cmd+P no Mac) para ver os estilos de impressão aplicados!
          </div>
        </div>

        <div className="code-snippet">
          <h3>HTML - Tags &lt;link&gt; utilizadas:</h3>
          <pre>
{`<!-- 1. CSS para visualização em tela -->
<link rel="stylesheet" 
      href="styles/exercise9-screen.css" 
      media="screen" />

<!-- 2. CSS específico para impressão -->
<link rel="stylesheet" 
      href="styles/exercise9-print.css" 
      media="print" />

<!-- 3. CSS para dispositivos móveis -->
<link rel="stylesheet" 
      href="styles/exercise9-mobile.css" 
      media="screen and (max-width: 768px)" />`}
          </pre>
        </div>

        <div className="code-snippet">
          <h3>Exemplo - exercise9-screen.css:</h3>
          <pre>
{`/* Estilos para tela */
body {
  background-color: #f5f5f5;
  color: #333;
}`}
          </pre>
        </div>

        <div className="code-snippet">
          <h3>Exemplo - exercise9-print.css:</h3>
          <pre>
{`/* Estilos para impressão */
@media print {
  body {
    background-color: white;
    color: black;
  }
  .no-print {
    display: none;
  }
}`}
          </pre>
        </div>

        <div className="code-snippet">
          <h3>Exemplo - exercise9-mobile.css:</h3>
          <pre>
{`/* Estilos para mobile */
@media screen and (max-width: 768px) {
  .container {
    padding: 10px;
  }
}`}
          </pre>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Exercise9;
