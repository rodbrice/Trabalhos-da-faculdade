import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const exercises = [
    {
      category: "Conceitos Fundamentais",
      items: [
        { id: 1, title: "O que é React" },
        { id: 2, title: "Histórico do ReactJs" },
        { id: 3, title: "Hello, React!" }
      ]
    },
    {
      category: "JavaScript ES6+", 
      items: [
        { id: 4, title: "Let e Const" },
        { id: 5, title: "Valores Primitivos" },
        { id: 6, title: "Objetos e Arrays" },
        { id: 7, title: "Template Strings" }
      ]
    },
    {
      category: "Lógica e Controle",
      items: [
        { id: 8, title: "Condicionais por Horário" },
        { id: 9, title: "Loop de Tarefas" }
      ]
    },
    {
      category: "Funções",
      items: [
        { id: 10, title: "Função de Soma" },
        { id: 11, title: "Conversão de Temperatura" },
        { id: 12, title: "Arrow Function - Diferença" },
        { id: 13, title: "Arrow Function - Par/Ímpar" }
      ]
    },
    {
      category: "React Avançado",
      items: [
        { id: 14, title: "Componentes Dinâmicos" },
        { id: 15, title: "State - Contador" },
        { id: 16, title: "Props" }
      ]
    }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Fundamentos React - DR2_TP1</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="content-box">
          <h2>Sobre este projeto</h2>
          <p>
            Esta aplicação contém os 16 exercícios práticos para o TP_01 de Fundamentos de React.
          </p>
          <p>
            <strong>Código fonte:</strong> <a 
              href="https://github.com/rodbrice/Trabalhos-da-faculdade/tree/master/Desenvolvimento_Front-end_com_Frameworks/Fundamentos_React/dr1_tp1/react-exercises-app" 
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
                <Link to={`/exercise${exercise.id}`} key={exercise.id} className="exercise-card">
                  <div className="exercise-number">{exercise.id}</div>
                  <div className="exercise-title">{exercise.title}</div>
                </Link>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;