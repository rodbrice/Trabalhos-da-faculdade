import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Passagem } from '../types/types';

// Requisito 7: Página de Detalhes da Passagem (Rota Dinâmica)

interface TicketDetailsProps {
  passagens: Passagem[];
}

const TicketDetails: React.FC<TicketDetailsProps> = ({ passagens }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Buscar a passagem pelo ID
  const passagem = passagens.find((p) => p.id === Number(id));

  // Requisito 14: Botão de voltar usando navigate(-1)
  const handleGoBack = () => {
    navigate(-1);
  };

  if (!passagem) {
    return (
      <div className="page-details">
        <div className="content-box">
          <h2>❌ Passagem não encontrada</h2>
          <p>A passagem com ID <strong>{id}</strong> não foi encontrada no sistema.</p>
          <div className="detail-actions">
            <button className="btn btn-secondary" onClick={handleGoBack}>
              ⬅️ Voltar
            </button>
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              🏠 Ir para Início
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-details">
      <div className="content-box">
        <h2>🎫 Detalhes da Reserva</h2>
        <p className="page-description">Visualizando detalhes da passagem ID: <strong>{id}</strong></p>

        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-label">🔢 ID da Reserva:</span>
            <span className="detail-value">{passagem.id}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">👤 Passageiro:</span>
            <span className="detail-value">{passagem.passageiro}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">💺 Assento:</span>
            <span className="detail-value seat-number">{passagem.assento}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">📍 Origem:</span>
            <span className="detail-value">{passagem.origem}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">🎯 Destino:</span>
            <span className="detail-value">{passagem.destino}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">📅 Data da Viagem:</span>
            <span className="detail-value">
              {new Date(passagem.data).toLocaleDateString('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">📊 Status:</span>
            <span className={`status-badge ${passagem.status === 'confirmado' ? 'status-confirmado' : passagem.status === 'pendente' ? 'status-pendente' : 'status-cancelado'}`}>
              {passagem.status === 'confirmado' && '✅ Confirmado'}
              {passagem.status === 'pendente' && '⏳ Pendente'}
              {passagem.status === 'cancelado' && '❌ Cancelado'}
            </span>
          </div>
        </div>

        <div className="detail-actions">
          <button className="btn btn-secondary" onClick={handleGoBack}>
            ⬅️ Voltar
          </button>
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/painel')}
          >
            📊 Ir para o Painel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;

