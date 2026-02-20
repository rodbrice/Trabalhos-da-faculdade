import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const tasks = [
  {
    category: "Componentes Básicos",
    items: [
      { id: 1, title: "Tela de boas-vindas com View e Text" },
      { id: 2, title: "Login básico com validação" },
      { id: 3, title: "Image com descrição" },
      { id: 4, title: "ScrollView com lista de itens" },
      { id: 5, title: "Duas imagens lado a lado" }
    ]
  },
  {
    category: "Interatividade com Botões",
    items: [
      { id: 6, title: "Personalização de botões" },
      { id: 7, title: "Resposta ao Button com Alert" },
      { id: 8, title: "TouchableOpacity com interação" }
    ]
  },
  {
    category: "Layouts e Listas",
    items: [
      { id: 9, title: "Tela de perfil simples" },
      { id: 10, title: "Lista de compras com FlatList" },
      { id: 11, title: "Galeria com ScrollView horizontal" }
    ]
  },
  {
    category: "Estados e Interações",
    items: [
      { id: 12, title: "Contagem de cliques" },
      { id: 13, title: "Contagem de cliques - V2 (incrementar/decrementar)" },
      { id: 14, title: "Pressable com mudança de cor aleatória" }
    ]
  },
  {
    category: "Componentes Avançados",
    items: [
      { id: 15, title: "Página de Notícias" },
      { id: 16, title: "Campo de feedback com várias linhas" }
    ]
  }
];

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1>🚀 React Native - TP1.2</h1>
        <p>16 Tarefas de React Native</p>
      </div>

      <div className="tasks-container">
        {tasks.map((category, idx) => (
          <div key={idx} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="tasks-grid">
              {category.items.map((task) => (
                <Link key={task.id} to={`/task/${task.id}`} className="task-card">
                  <span className="task-number">Tarefa {task.id}</span>
                  <h3 className="task-title">{task.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;

