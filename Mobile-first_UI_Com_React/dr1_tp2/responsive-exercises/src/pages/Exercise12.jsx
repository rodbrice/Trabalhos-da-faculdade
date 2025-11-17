import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import '../styles/ExerciseStyles.css';

function Exercise12() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 12: Esquema de Cores - Light e Dark</h1>
        <p className="exercise-description">
          Página responsiva com resumo sobre responsividade, implementando estilos diferentes 
          para esquema de cores claro (light) e escuro (dark), seguindo a abordagem mobile-first.
        </p>
        <BackButton />
      </div>

      <div className="demo-area" style={{ padding: 0, border: 'none' }}>
        <div className="theme-demo-12">
          <header className="theme-header-12">
            <h1>🌓 Benefícios da Responsividade</h1>
          </header>
          
          <main className="theme-content-12">
            <section className="benefit-card-12">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXl-gWCvDF5eLHMao-584wTM-4CZ2_3mDbDA&s" 
                alt="Acessibilidade" 
                className="benefit-image-12"
              />
              <h2>Acessibilidade Universal</h2>
              <p>
                Sites responsivos podem ser acessados de qualquer dispositivo, 
                proporcionando inclusão digital e alcançando mais usuários.
              </p>
            </section>

            <section className="benefit-card-12">
              <img 
                src="https://www.outlookmarketingsrv.com/wp-content/uploads/2020/12/SEO-2-1.jpg" 
                alt="SEO" 
                className="benefit-image-12"
              />
              <h2>Melhor SEO</h2>
              <p>
                Google prioriza sites mobile-friendly nos resultados de busca, 
                melhorando o ranqueamento e visibilidade online.
              </p>
            </section>

            <section className="benefit-card-12">
              <img 
                src="https://oadministrador.com/wp-content/uploads/2024/07/AnyConv.com__Custo-beneficio-de-um-produto--1024x569.webp" 
                alt="Custo-benefício" 
                className="benefit-image-12"
              />
              <h2>Custo-Benefício</h2>
              <p>
                Manter um único site responsivo é mais econômico do que 
                desenvolver versões separadas para mobile e desktop.
              </p>
            </section>
          </main>

          <footer className="theme-footer-12">
            <p>💡 Altere o tema do seu sistema para ver a mudança de cores!</p>
          </footer>
        </div>
      </div>

      <div className="code-snippet">
        <h3>CSS - Tema Light (padrão):</h3>
        <pre>
{`/* Tema claro (padrão) */
.theme-demo-12 {
  background-color: #ffffff;
  color: #333333;
}

.theme-header-12 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
}

.benefit-card-12 {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  color: #333;
}`}
        </pre>
      </div>

      <div className="code-snippet">
        <h3>CSS - Tema Dark:</h3>
        <pre>
{`/* Tema escuro */
@media (prefers-color-scheme: dark) {
  .theme-demo-12 {
    background-color: #1a1a1a;
    color: #e0e0e0;
  }
  
  .theme-header-12 {
    background: linear-gradient(135deg, #4a5fd9 0%, #5a3a82 100%);
  }
  
  .benefit-card-12 {
    background: #2a2a2a;
    border: 1px solid #404040;
    color: #e0e0e0;
  }
  
  .theme-footer-12 {
    background: #2a2a2a;
    border-top: 1px solid #404040;
  }
}`}
        </pre>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise12;
