import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task12() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="task-container">
      <BackButton />
      <div className="counter-container">
        <h2 className="rn-text" style={{ color: 'white', fontSize: '1.8rem', marginBottom: '20px' }}>
          Contador de Cliques
        </h2>
        
        <div className="counter-text">
          {count}
        </div>

        <button
          className="rn-button"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '15px 40px',
            fontSize: '18px',
            borderRadius: '12px',
            minWidth: '200px'
          }}
          onClick={handleIncrement}
        >
          Incrementar
        </button>
      </div>
    </div>
  );
}

export default Task12;

