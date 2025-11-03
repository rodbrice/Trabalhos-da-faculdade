import React from 'react';
import { Link } from 'react-router-dom';

const exercises = [
  {
    category: "Direção e Eixo",
    items: [
      { id: 1, title: "Container flexível com itens em linha (row) e ordem invertida" },
      { id: 2, title: "Container flexível com itens em coluna (column) e ordem invertida" }
    ]
  },
  {
    category: "Flex-grow, Flex-shrink e Flex-basis",
    items: [
      { id: 3, title: "Primeiro item com flex-grow maior que os outros" },
      { id: 4, title: "Terceiro item com flex-shrink menor que os outros" },
      { id: 5, title: "Segundo item com flex-basis de 200px" }
    ]
  },
  {
    category: "Alinhamento e Espaçamento",
    items: [
      { id: 6, title: "Alinhar itens ao início (flex-start)" },
      { id: 7, title: "Alinhar itens ao final (flex-end)" },
      { id: 8, title: "Centralizar itens horizontalmente (center)" },
      { id: 9, title: "Espaço igual entre itens (space-between)" }
    ]
  },
  {
    category: "Containers Aninhados",
    items: [
      { id: 10, title: "Dois containers aninhados - externo horizontal, internos verticais" },
      { id: 11, title: "Três containers aninhados - externo vertical, internos horizontais" }
    ]
  },
  {
    category: "Centralização",
    items: [
      { id: 12, title: "Itens centralizados horizontal e verticalmente" },
      { id: 13, title: "Itens distribuídos ao redor do centro (space-around)" }
    ]
  },
  {
    category: "Grid Layout",
    items: [
      { id: 14, title: "Grid com 4 colunas e 3 linhas" },
      { id: 15, title: "Item ocupando 2 colunas e outro ocupando 2 linhas" },
      { id: 16, title: "Grid com colunas de larguras diferentes (1fr, 2fr, 1fr)" }
    ]
  },
  {
    category: "Responsividade",
    items: [
      { id: "r1", title: "Layout Flexbox que se adapta desktop/mobile" },
      { id: "r2", title: "Grid responsivo com auto-fit" },
      { id: "r3", title: "Breakpoints múltiplos" },
      { id: "r4", title: "Flex-wrap responsivo" }
    ]
  }
];

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Flexbox & Grid Layout</h1>
      <p className="home-subtitle">Exercícios práticos de CSS Flexbox e Grid</p>
      
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
  );
}

export default Home;
