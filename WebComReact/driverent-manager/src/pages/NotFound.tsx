import React from 'react';
import { useNavigate } from 'react-router-dom';

// Página 404 - Não Encontrado com animação

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="content-box">
      <div className="not-found">
        <div className="not-found-icon shake">🚗❌</div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Veículo ou Página Não Encontrados</h2>
        <p className="not-found-message">
          A página que você está procurando não existe ou foi removida.
        </p>
        <div className="not-found-actions">
          <button 
            className="btn-submit"
            onClick={() => navigate('/')}
          >
            🏠 Voltar ao Início
          </button>
          <button 
            className="btn-secondary"
            onClick={() => navigate('/frota')}
          >
            📋 Ver Frota
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

