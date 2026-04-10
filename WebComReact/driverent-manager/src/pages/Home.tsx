import React from 'react';
import { useNavigate } from 'react-router-dom';

// Página Home - Tela inicial de boas-vindas do DriveRent

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-home">
      <div className="welcome-section">
        <h1 className="welcome-title">🚗 Bem-vindo ao DriveRent</h1>
        <p className="welcome-subtitle">Sistema Completo de Gestão de Frota de Veículos para Locação</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Cadastro Rápido</h3>
            <p>Cadastre novos veículos de forma rápida e intuitiva</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🗂️</div>
            <h3>Controle de Frota</h3>
            <p>Gerencie toda a frota com informações detalhadas</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Gestão de Aluguéis</h3>
            <p>Controle quais veículos estão disponíveis ou alugados</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Acesso Seguro</h3>
            <p>Sistema com controle de acesso para funcionários</p>
          </div>
        </div>
        
        <div className="cta-buttons">
          <button 
            className="btn-cta primary"
            onClick={() => navigate('/cadastrar')}
          >
            ➡️ Cadastrar Veículo
          </button>
          <button 
            className="btn-cta secondary"
            onClick={() => navigate('/frota')}
          >
            📋 Ver Frota Completa
          </button>
        </div>
        
        <div className="info-box">
          <p>💡 <strong>Dica:</strong> Faça login para acessar o painel de controle da frota e gerenciar os veículos!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

