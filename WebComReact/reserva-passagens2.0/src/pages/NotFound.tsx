import React from 'react';
import { useNavigate } from 'react-router-dom';

// Requisito 9: Página 404 - Not Found

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-not-found">
      <div className="content-box not-found-box">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2>🚫 Página não encontrada</h2>
          <p className="not-found-text">
            Ops! A página que você está procurando não existe ou foi removida.
          </p>
          <p className="not-found-subtext">
            Verifique se o endereço está correto ou retorne à página inicial.
          </p>
          <button 
            className="btn btn-primary btn-large"
            onClick={() => navigate('/')}
          >
            🏠 Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

