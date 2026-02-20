import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task14() {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
    '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B88B', '#FAD7A0',
    '#52BE80', '#5DADE2', '#AF7AC5', '#EC7063', '#48C9B0'
  ];

  const [backgroundColor, setBackgroundColor] = useState('#667eea');

  const handlePress = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <div className="task-container" style={{ backgroundColor: backgroundColor, transition: 'background-color 0.3s ease' }}>
      <BackButton />
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: 'calc(100vh - 100px)',
        gap: '30px'
      }}>
        <h2 className="rn-text" style={{ color: 'white', fontSize: '1.8rem', textAlign: 'center' }}>
          🎨 Pressable - Mudança de Cor
        </h2>
        
        <p style={{ color: 'white', fontSize: '1.1rem', textAlign: 'center', maxWidth: '400px' }}>
          Pressione o botão para mudar a cor de fundo aleatoriamente
        </p>

        <div
          className="rn-touchable"
          style={{
            backgroundColor: 'white',
            color: '#333',
            padding: '20px 50px',
            fontSize: '20px',
            borderRadius: '50px',
            fontWeight: 'bold',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            userSelect: 'none'
          }}
          onClick={handlePress}
        >
          🎲 Mudar Cor
        </div>

        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
          padding: '15px 25px', 
          borderRadius: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ color: 'white', fontSize: '0.9rem', fontFamily: 'monospace' }}>
            Cor atual: <strong>{backgroundColor}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Task14;

