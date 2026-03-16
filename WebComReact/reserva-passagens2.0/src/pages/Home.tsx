import React from 'react';
import { useNavigate } from 'react-router-dom';

// Requisito 3: Página Home - Tela inicial de boas-vindas do Expresso Horizon

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-home">
      <div className="welcome-section">
        <h1 className="welcome-title">🚌 Bem-vindo ao Expresso Horizon</h1>
        <p className="welcome-subtitle">Sistema Completo de Reserva de Passagens de Ônibus</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎫</div>
            <h3>Reservas Rápidas</h3>
            <p>Sistema intuitivo para reservar sua passagem em poucos cliques</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Destinos Variados</h3>
            <p>Viaje para diversos destinos pelo Brasil com conforto e segurança</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💺</div>
            <h3>Escolha seu Assento</h3>
            <p>Selecione o melhor assento disponível para sua viagem</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Painel Administrativo</h3>
            <p>Gerencie todas as suas reservas em um só lugar</p>
          </div>
        </div>
        
        <div className="cta-buttons">
          <button 
            className="btn-cta primary"
            onClick={() => navigate('/reservar')}
          >
            ➡️ Fazer Nova Reserva
          </button>
          <button 
            className="btn-cta secondary"
            onClick={() => navigate('/painel')}
          >
            📋 Ver Painel de Controle
          </button>
        </div>
        
        <div className="info-box">
          <p>💡 <strong>Dica:</strong> Faça login para acessar o painel administrativo e gerenciar suas reservas!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

