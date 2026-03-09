import React from 'react';
import { Passagem } from '../types/types';

// Exercício 6: Componente de Lista (TravelList)
// Exercício 11: Cancelamento de Passagem (Delete)
// Exercício 12: Edição de Dados (Update)

interface TravelListProps {
  passagens: Passagem[];
  onEdit: (passagem: Passagem) => void;
  onDelete: (id: number) => void;
}

const TravelList: React.FC<TravelListProps> = ({ passagens, onEdit, onDelete }) => {
  if (passagens.length === 0) {
    return (
      <div className="content-box">
        <p className="no-passagens">Nenhuma reserva encontrada.</p>
      </div>
    );
  }

  const getStatusBadgeClass = (status: string): string => {
    switch (status) {
      case 'confirmado':
        return 'status-confirmado';
      case 'pendente':
        return 'status-pendente';
      case 'cancelado':
        return 'status-cancelado';
      default:
        return '';
    }
  };

  const formatData = (data: string): string => {
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="content-box">
      <table className="travel-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Passageiro</th>
            <th>Assento</th>
            <th>Origem</th>
            <th>Destino</th>
            <th>Data</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {passagens.map((passagem) => (
            <tr key={passagem.id}>
              <td className="passagem-id">{passagem.id}</td>
              <td className="passagem-passageiro">{passagem.passageiro}</td>
              <td className="passagem-assento">
                <span className="assento-badge">{passagem.assento}</span>
              </td>
              <td className="passagem-origem">{passagem.origem}</td>
              <td className="passagem-destino">{passagem.destino}</td>
              <td className="passagem-data">{formatData(passagem.data)}</td>
              <td className="passagem-status">
                <span className={`status-badge ${getStatusBadgeClass(passagem.status)}`}>
                  {passagem.status}
                </span>
              </td>
              <td className="passagem-actions">
                {/* Exercício 12: Botão Alterar */}
                <button
                  className="btn-edit"
                  onClick={() => onEdit(passagem)}
                  title="Alterar reserva"
                >
                  Alterar
                </button>
                {/* Exercício 11: Botão Cancelar */}
                <button
                  className="btn-delete"
                  onClick={() => onDelete(passagem.id)}
                  title="Cancelar reserva"
                >
                  Cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TravelList;

