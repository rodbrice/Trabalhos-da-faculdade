import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const exercises = [
  {
    category: "Layouts Complexos com Flexbox",
    items: [
      { id: 1, title: "Layout Mobile-First com Flexbox (HTML/CSS/JS)" },
      { id: 2, title: "Media Queries para Tablet e Desktop" }
    ]
  },
  {
    category: "Estilos Inline em React",
    items: [
      { id: 3, title: "Card e Button com Inline Styles" },
      { id: 4, title: "TextoEstilizado com Inline Styles" }
    ]
  },
  {
    category: "Componentes JSX Mobile-First",
    items: [
      { id: 5, title: "Header e Footer Mobile-First (até 576px)" },
      { id: 6, title: "Componente Main com Conteúdo" },
      { id: 7, title: "Breakpoints para Tablet (768px) e Desktop (1200px)" }
    ]
  },
  {
    category: "Módulos de Estilo CSS",
    items: [
      { id: 8, title: "Card com CSS Modules" },
      { id: 9, title: "Button com CSS Modules e Estados" },
      { id: 10, title: "Header, Content e Footer com CSS Modules" }
    ]
  },
  {
    category: "Estilização Global - Projeto Completo",
    items: [
      { id: 11, title: "Estilos Globais (global.css)" },
      { id: 12, title: "Estilos do App (styles.css)" },
      { id: 13, title: "Menu de Navegação Responsivo" },
      { id: 14, title: "Hero com Imagens Responsivas" },
      { id: 15, title: "Main com Hero Integrado" },
      { id: 16, title: "Footer com Avatar e LinkedIn" }
    ]
  }
];

function HomePage() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Mobile-first UI com React - DR1_TP3</h1>
          <p>Criação de Layouts Complexos com Flexbox</p>
        </div>
      </div>
      
      <div className="container">
        <div className="content-box">
          <h2>Sobre este projeto</h2>
          <p>
            Esta aplicação contém os 16 exercícios práticos para o TP_03 de Mobile-first UI com React, 
            focando em layouts complexos com Flexbox, estilos inline, CSS Modules e estilização global.
          </p>
          <p>
            <strong>Código fonte:</strong> <a 
              href="https://github.com/rodbrice/Trabalhos-da-faculdade/tree/master/Mobile-first_UI_Com_React/dr1_tp3/flexbox-layouts" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#007bff', textDecoration: 'none' }}
            >
              Ver repositório no GitHub
            </a>
          </p>
        </div>

        <div className="exercises-grid">
          {exercises.map((category, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              <div className="category-title">{category.category}</div>
              {category.items.map(exercise => (
                <Link to={`/exercise/${exercise.id}`} key={exercise.id} className="exercise-card">
                  <div className="exercise-number">{exercise.id}</div>
                  <div className="exercise-title">{exercise.title}</div>
                </Link>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
