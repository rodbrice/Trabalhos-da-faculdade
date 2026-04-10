import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Veiculo } from '../types/types';

// Página de Detalhes do Veículo com parâmetro dinâmico

interface VehicleDetailsProps {
  veiculos: Veiculo[];
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ veiculos }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const veiculo = veiculos.find(v => v.id === Number(id));

  if (!veiculo) {
    return (
      <div className="content-box">
        <div className="vehicle-not-found">
          <h2>🚗❌ Veículo Não Encontrado</h2>
          <p>O veículo com ID #{id} não foi encontrado na frota.</p>
          <button 
            className="btn-submit"
            onClick={() => navigate('/frota')}
          >
            ⬅️ Voltar para Lista
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="content-box">
      <div className="vehicle-details">
        <div className="details-header">
          <h2>🚗 Detalhes do Veículo</h2>
          <span className={`status-badge ${veiculo.status === 'disponível' ? 'disponivel' : 'alugado'}`}>
            {veiculo.status === 'disponível' ? '✅' : '🚗'} {veiculo.status}
          </span>
        </div>

        <div className="details-content">
          <div className="detail-item">
            <span className="detail-label">ID:</span>
            <span className="detail-value">#{veiculo.id}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Marca:</span>
            <span className="detail-value">{veiculo.marca}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Modelo:</span>
            <span className="detail-value">{veiculo.modelo}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Placa:</span>
            <span className="detail-value placa">{veiculo.placa}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Status:</span>
            <span className="detail-value">
              {veiculo.status === 'disponível' ? '✅ Disponível para locação' : '🚗 Atualmente alugado'}
            </span>
          </div>
        </div>

        <div className="details-actions">
          <button 
            className="btn-submit"
            onClick={() => navigate(-1)}
          >
            ⬅️ Voltar para Lista
          </button>
          <button 
            className="btn-secondary"
            onClick={() => navigate('/frota')}
          >
            📋 Ver Toda Frota
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;

