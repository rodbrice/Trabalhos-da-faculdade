import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TravelList from '../components/TravelList';
import { Passagem } from '../types/types';

// Requisito 13: Componente para exibir apenas passagens canceladas

interface DashboardContext {
  filteredPassagens: Passagem[];
  onEdit: (passagem: Passagem) => void;
  onDelete: (id: number) => void;
  onViewDetails: (id: number) => void;
}

const CanceledTickets: React.FC = () => {
  const { filteredPassagens, onEdit, onDelete, onViewDetails } = useOutletContext<DashboardContext>();

  // Filtrar apenas passagens canceladas
  const canceledPassagens = filteredPassagens.filter(
    (p) => p.status === 'cancelado'
  );

  if (canceledPassagens.length === 0) {
    return (
      <div className="no-results">
        <p>📭 Nenhuma passagem cancelada encontrada.</p>
      </div>
    );
  }

  return (
    <TravelList
      passagens={canceledPassagens}
      onEdit={onEdit}
      onDelete={onDelete}
      onViewDetails={onViewDetails}
    />
  );
};

export default CanceledTickets;

