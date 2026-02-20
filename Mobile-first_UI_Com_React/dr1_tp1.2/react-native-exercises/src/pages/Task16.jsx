import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task16() {
  const [feedback, setFeedback] = useState('');
  const maxLength = 500;

  const handleSubmit = () => {
    if (feedback.trim() === '') {
      alert('⚠️ Por favor, escreva seu feedback antes de enviar!');
    } else {
      alert('✅ Feedback enviado com sucesso! Obrigado pela sua opinião.');
      setFeedback('');
    }
  };

  return (
    <div className="task-container">
      <BackButton />
      <div className="feedback-container">
        <div className="feedback-form">
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '20px', 
            color: '#333',
            fontSize: '1.8rem'
          }}>
            💬 Deixe seu Feedback
          </h2>
          
          <label className="feedback-label" htmlFor="feedback-input">
            Conte-nos sua opinião sobre o aplicativo:
          </label>
          
          <textarea
            id="feedback-input"
            className="feedback-input"
            placeholder="Digite seu feedback aqui... (máximo 500 caracteres)"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            maxLength={maxLength}
          />
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '10px'
          }}>
            <p style={{ 
              fontSize: '0.9rem', 
              color: feedback.length >= maxLength ? '#ff6b6b' : '#666'
            }}>
              {feedback.length} / {maxLength} caracteres
            </p>
            
            <button
              className="rn-button"
              style={{
                backgroundColor: '#667eea',
                color: 'white',
                padding: '12px 30px',
                fontSize: '16px',
                borderRadius: '8px'
              }}
              onClick={handleSubmit}
            >
              Enviar Feedback
            </button>
          </div>

          <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '8px',
            fontSize: '0.9rem',
            color: '#666'
          }}>
            <p><strong>Dica:</strong> Este campo aceita múltiplas linhas e é rolável quando o conteúdo excede a altura definida.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task16;

