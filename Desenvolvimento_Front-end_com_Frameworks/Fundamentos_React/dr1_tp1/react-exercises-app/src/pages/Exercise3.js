import React from 'react';
import { Link } from 'react-router-dom';

const Exercise3 = () => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Hello, React!</h1>
          <p>Exercício 3: Sua primeira aplicação React</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="content-box">
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '15px',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            margin: '2rem 0'
          }}>
            Hello, React!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise3;