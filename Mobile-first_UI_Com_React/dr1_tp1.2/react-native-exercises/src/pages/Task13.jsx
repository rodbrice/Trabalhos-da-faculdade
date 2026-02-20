import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task13() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="task-container">
      <BackButton />
      <div className="counter-container">
        <h2 className="rn-text" style={{ color: 'white', fontSize: '1.8rem', marginBottom: '20px' }}>
          Contador de Cliques - V2
        </h2>
        
        <div className="counter-text">
          {count}
        </div>

        <div className="counter-buttons">
          <button
            className="rn-button"
            style={{
              backgroundColor: '#FF6B6B',
              color: 'white',
              padding: '15px 30px',
              fontSize: '18px',
              borderRadius: '12px',
              minWidth: '150px',
              opacity: count === 0 ? 0.5 : 1,
              cursor: count === 0 ? 'not-allowed' : 'pointer'
            }}
            onClick={handleDecrement}
            disabled={count === 0}
          >
            - Decrementar
          </button>

          <button
            className="rn-button"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '15px 30px',
              fontSize: '18px',
              borderRadius: '12px',
              minWidth: '150px'
            }}
            onClick={handleIncrement}
          >
            + Incrementar
          </button>
        </div>

        {count === 0 && (
          <p style={{ color: 'white', marginTop: '20px', fontSize: '0.9rem' }}>
            ⚠️ Não é permitido valores negativos
          </p>
        )}
      </div>
    </div>
  );
}

export default Task13;

