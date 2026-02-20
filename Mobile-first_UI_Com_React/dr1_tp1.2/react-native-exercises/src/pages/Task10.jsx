import React from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task10() {
  const shoppingList = [
    { id: '1', name: 'Leite' },
    { id: '2', name: 'Pão' },
    { id: '3', name: 'Ovos' },
    { id: '4', name: 'Queijo' },
    { id: '5', name: 'Frutas' },
    { id: '6', name: 'Vegetais' },
    { id: '7', name: 'Arroz' },
    { id: '8', name: 'Feijão' },
    { id: '9', name: 'Café' },
    { id: '10', name: 'Açúcar' }
  ];

  return (
    <div className="task-container">
      <BackButton />
      <div className="flatlist-container">
        <h2 className="rn-text" style={{ 
          color: 'white', 
          marginBottom: '20px', 
          fontSize: '1.8rem', 
          textAlign: 'center' 
        }}>
          🛒 Lista de Compras
        </h2>
        
        <div>
          {shoppingList.map((item) => (
            <div key={item.id} className="flatlist-item">
              <span style={{ 
                fontSize: '1.5rem', 
                marginRight: '10px' 
              }}>
                ✓
              </span>
              <span style={{ fontSize: '1.1rem', color: '#333' }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Task10;

