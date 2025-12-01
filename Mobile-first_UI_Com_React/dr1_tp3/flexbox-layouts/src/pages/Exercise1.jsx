import React, { useEffect } from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

function Exercise1() {
  useEffect(() => {
    // Script para o menu mobile
    const menuToggle = document.getElementById('menu-toggle-ex1');
    const navLinks = document.getElementById('nav-links-ex1');
    
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
    
    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 1: Layout Mobile-First com Flexbox</h1>
        <p className="exercise-description">
          Layout complexo usando Flexbox com abordagem mobile-first. 
          Contém Header com navegação, Main com 3 colunas e Footer.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Demonstração - Layout HTML/CSS/JS Puro:</div>
        
        <style>{`
          .ex1-layout {
            font-family: Arial, sans-serif;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          
          /* Mobile First - Estilos base */
          .ex1-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem;
          }
          
          .ex1-header h1 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          
          .ex1-nav {
            position: relative;
          }
          
          .menu-toggle {
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            padding: 0.5rem 1rem;
            cursor: pointer;
            border-radius: 4px;
            font-size: 1rem;
            display: block;
            width: 100%;
          }
          
          .ex1-nav-links {
            display: none;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin-top: 1rem;
          }
          
          .ex1-nav-links.active {
            display: flex;
          }
          
          .ex1-nav-links li {
            margin: 0.5rem 0;
          }
          
          .ex1-nav-links a {
            color: white;
            text-decoration: none;
            padding: 0.5rem;
            display: block;
            background: rgba(255,255,255,0.1);
            border-radius: 4px;
            transition: background 0.3s;
          }
          
          .ex1-nav-links a:hover {
            background: rgba(255,255,255,0.2);
          }
          
          .ex1-main {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }
          
          .ex1-column {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
          }
          
          .ex1-column h2 {
            color: #333;
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
          }
          
          .ex1-column p {
            color: #666;
            line-height: 1.6;
          }
          
          .ex1-left {
            background: #e3f2fd;
          }
          
          .ex1-center {
            background: #f3e5f5;
          }
          
          .ex1-right {
            background: #fff3e0;
          }
          
          .ex1-footer {
            background: #333;
            color: white;
            padding: 1.5rem;
            text-align: center;
          }
          
          .ex1-footer p {
            margin: 0.5rem 0;
          }
          
          .ex1-social-links {
            margin-top: 1rem;
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .ex1-social-links a {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            background: rgba(255,255,255,0.1);
            border-radius: 4px;
            transition: background 0.3s;
          }
          
          .ex1-social-links a:hover {
            background: rgba(255,255,255,0.2);
          }
          
          /* Tablet - 768px */
          @media (min-width: 768px) {
            .menu-toggle {
              display: none;
            }
            
            .ex1-nav-links {
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              margin-top: 0;
            }
            
            .ex1-nav-links li {
              margin: 0 0 0 1rem;
            }
            
            .ex1-main {
              flex-direction: row;
              flex-wrap: wrap;
            }
            
            .ex1-left,
            .ex1-right {
              flex: 1;
              min-width: 200px;
            }
            
            .ex1-center {
              flex: 2;
              min-width: 300px;
            }
          }
          
          /* Desktop - 992px */
          @media (min-width: 992px) {
            .ex1-header h1 {
              font-size: 2rem;
            }
            
            .ex1-main {
              flex-wrap: nowrap;
            }
            
            .ex1-left {
              flex: 0 0 20%;
            }
            
            .ex1-center {
              flex: 1;
            }
            
            .ex1-right {
              flex: 0 0 25%;
            }
          }
        `}</style>
        
        <div className="ex1-layout">
          {/* Header */}
          <header className="ex1-header">
            <h1>Meu Website</h1>
            <nav className="ex1-nav">
              <button id="menu-toggle-ex1" className="menu-toggle">☰ Menu</button>
              <ul id="nav-links-ex1" className="ex1-nav-links">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </nav>
          </header>
          
          {/* Main Content */}
          <main className="ex1-main">
            <aside className="ex1-column ex1-left">
              <h2>Navegação</h2>
              <p>Links adicionais e informações importantes.</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Dashboard</li>
                <li>Perfil</li>
                <li>Configurações</li>
              </ul>
            </aside>
            
            <section className="ex1-column ex1-center">
              <h2>Conteúdo Principal</h2>
              <p>
                Esta é a área principal do conteúdo. Em dispositivos móveis, 
                todas as colunas aparecem empilhadas verticalmente. Em tablets, 
                as colunas começam a se organizar lado a lado. Em desktops, 
                temos o layout completo de três colunas.
              </p>
              <p>
                O design mobile-first garante que a experiência em dispositivos 
                menores seja priorizada, com melhorias progressivas para telas maiores.
              </p>
            </section>
            
            <aside className="ex1-column ex1-right">
              <h2>Widgets</h2>
              <p>Informações secundárias e widgets úteis.</p>
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.05)', borderRadius: '4px' }}>
                <strong>Dica:</strong> Redimensione a janela para ver a responsividade!
              </div>
            </aside>
          </main>
          
          {/* Footer */}
          <footer className="ex1-footer">
            <p>&copy; 2025 Meu Website. Todos os direitos reservados.</p>
            <div className="ex1-social-links">
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#instagram">Instagram</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </footer>
        </div>
      </div>

      <div className="code-snippet">
        <h3>Estrutura HTML:</h3>
        <pre>{`<header>
  <h1>Meu Website</h1>
  <nav>
    <button id="menu-toggle">☰ Menu</button>
    <ul id="nav-links">
      <li><a href="#inicio">Início</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>
</header>

<main>
  <aside class="left-column">...</aside>
  <section class="center-column">...</section>
  <aside class="right-column">...</aside>
</main>

<footer>...</footer>`}</pre>
      </div>

      <div className="code-snippet">
        <h3>CSS Mobile-First:</h3>
        <pre>{`/* Mobile First - Base Styles */
.main {
  display: flex;
  flex-direction: column; /* Colunas empilhadas */
  gap: 1rem;
}

.nav-links {
  display: flex;
  flex-direction: column; /* Links verticais */
}

/* Tablet - 768px */
@media (min-width: 768px) {
  .nav-links {
    flex-direction: row; /* Links horizontais */
    justify-content: flex-end;
  }
  
  .main {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .left-column, .right-column {
    flex: 1;
  }
  
  .center-column {
    flex: 2;
  }
}

/* Desktop - 992px */
@media (min-width: 992px) {
  .main {
    flex-wrap: nowrap;
  }
  
  .left-column { flex: 0 0 20%; }
  .center-column { flex: 1; }
  .right-column { flex: 0 0 25%; }
}`}</pre>
      </div>

      <div className="code-snippet">
        <h3>JavaScript para Menu Mobile:</h3>
        <pre>{`const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise1;
