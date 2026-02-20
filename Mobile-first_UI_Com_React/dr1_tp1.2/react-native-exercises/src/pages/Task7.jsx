import React from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task7() {
  const handleButton1 = () => {
    alert('🔴 Você clicou no Botão Vermelho!');
  };

  const handleButton2 = () => {
    alert('🟢 Você clicou no Botão Turquesa!');
  };

  const handleButton3 = () => {
    alert('🟡 Você clicou no Botão de Largura Total!');
  };

  return (
    <div className="task-container">
      <BackButton />
      <div className="button-container" style={{ minHeight: 'calc(100vh - 100px)', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Botões com Respostas</h2>
        
        <button
          className="rn-button"
          style={{
            backgroundColor: '#FF6B6B',
            color: 'white',
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '25px',
            minWidth: '200px'
          }}
          onClick={handleButton1}
        >
          Botão Vermelho
        </button>

        <button
          className="rn-button"
          style={{
            backgroundColor: '#4ECDC4',
            color: 'white',
            padding: '10px 40px',
            fontSize: '14px',
            borderRadius: '5px',
            border: '3px solid #45B7AF',
            minWidth: '200px'
          }}
          onClick={handleButton2}
        >
          Botão Turquesa
        </button>

        <button
          className="rn-button"
          style={{
            backgroundColor: '#FFE66D',
            color: '#333',
            padding: '20px 50px',
            fontSize: '20px',
            borderRadius: '50px',
            width: '90%',
            maxWidth: '600px',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
          onClick={handleButton3}
        >
          Botão Largura Total
        </button>
      </div>
    </div>
  );
}

export default Task7;

