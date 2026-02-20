import React from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task4() {
  const items = [
    'Comprar leite e ovos no supermercado',
    'Estudar React Native para a prova',
    'Fazer exercícios físicos pela manhã',
    'Ler um capítulo do livro de JavaScript',
    'Preparar apresentação para reunião',
    'Organizar a mesa de trabalho',
    'Ligar para a família no final de semana',
    'Revisar código do projeto pessoal'
  ];

  return (
    <div className="task-container">
      <BackButton />
      <div className="scroll-container">
        <h2 className="rn-text" style={{ color: 'white', marginBottom: '20px', fontSize: '1.8rem', textAlign: 'center' }}>
          Lista de Tarefas
        </h2>
        <div className="rn-scrollview" style={{ maxHeight: '70vh' }}>
          {items.map((item, index) => (
            <div key={index} className="scroll-item">
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>
                {index + 1}.
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Task4;

