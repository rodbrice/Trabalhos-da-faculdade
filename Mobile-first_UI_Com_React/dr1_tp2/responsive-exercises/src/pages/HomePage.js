import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const exercises = [
  {
    category: "Imagens Fluídas",
    items: [
      { id: 1, title: "Layouts com Imagens Fluídas I" },
      { id: 2, title: "Layouts com Imagens Fluídas II" }
    ]
  },
  {
    category: "Layouts Responsivos com Flexbox",
    items: [
      { id: 3, title: "Layout Mobile-first com Flexbox até 576px" },
      { id: 4, title: "Layout Flexbox com Media Query a partir de 992px" }
    ]
  },
  {
    category: "Grid e Centralização",
    items: [
      { id: 5, title: "Centralização vertical e horizontal com CSS Grid" },
      { id: 6, title: "Layout básico com CSS Grid (header, nav, main, aside, footer)" }
    ]
  },
  {
    category: "Meta Viewport",
    items: [
      { id: 7, title: "Ajustando responsividade com tag <meta> viewport" }
    ]
  },
  {
    category: "Media Queries",
    items: [
      { id: 8, title: "5 Breakpoints com Media Queries (Mobile-first)" },
      { id: 9, title: "3 arquivos CSS com atributo media na tag <link>" },
      { id: 10, title: "3 chamadas CSS com @import combinando condições" }
    ]
  },
  {
    category: "Layout Responsivo Avançado",
    items: [
      { id: 11, title: "Imagem e texto - Layout vertical e horizontal" },
      { id: 12, title: "Esquema de cores Light e Dark" }
    ]
  },
  {
    category: "Recursos de Mídia",
    items: [
      { id: 13, title: "Media Query: pointer (none, coarse, fine)" },
      { id: 14, title: "Media Query: hover (none, hover)" },
      { id: 15, title: "Media Query: prefers-color-scheme (light, dark)" }
    ]
  },
  {
    category: "Mobile-First",
    items: [
      { id: 16, title: "Transmutação Mobile-First - iPhone 414px" }
    ]
  }
];

function HomePage() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Mobile-first UI com React - DR1_TP2</h1>
          <p>Exercícios de Responsividade e Media Queries</p>
        </div>
      </div>
      
      <div className="container">
        <div className="content-box">
          <h2>Sobre este projeto</h2>
          <p>
            Esta aplicação contém os 16 exercícios práticos para o TP_02 de Mobile-first UI com React, 
            focando em técnicas de responsividade, imagens fluídas, layouts com Flexbox e Grid, 
            e uso avançado de Media Queries.
          </p>
          <p>
            <strong>Código fonte:</strong> <a 
              href="https://github.com/rodbrice/Trabalhos-da-faculdade/tree/master/Mobile-first_UI_Com_React/dr1_tp2/responsive-exercises" 
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
