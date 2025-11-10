import React from 'react';
import { Link } from 'react-router-dom';

const Exercise9 = () => {
  // Array de tarefas simples
  const tasks = [
    "Estudar conceitos básicos do React",
    "Praticar JavaScript ES6+",
    "Criar componentes reutilizáveis",
    "Implementar roteamento com React Router",
    "Gerenciar estado com useState"
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Loops de JavaScript</h1>
          <p>Exercício 9: Lista de tarefas renderizada com loops</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="content-box">
          <h2>📋 Lista de Tarefas</h2>
          <p>Demonstração de como usar loops para renderizar listas em React.</p>
          
          <div className="task-list">
            <ul>
              {tasks.map((task, index) => (
                <li key={index} style={{ 
                  padding: '0.75rem', 
                  marginBottom: '0.5rem', 
                  background: 'rgba(255,255,255,0.1)', 
                  borderRadius: '5px',
                  listStyle: 'none'
                }}>
                  <span style={{ marginRight: '0.5rem', fontWeight: 'bold', color: '#007bff' }}>
                    {index + 1}.
                  </span>
                  {task}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1rem', textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }}>
              <strong>Total de tarefas: {tasks.length}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise9;