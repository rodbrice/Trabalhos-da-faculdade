import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TravelList from '../components/TravelList';
import { Passagem } from '../types/types';

// Requisito 13: Componente para exibir apenas passagens ativas

interface DashboardContext {
  filteredPassagens: Passagem[];
  onEdit: (passagem: Passagem) => void;
  onDelete: (id: number) => void;
  onViewDetails: (id: number) => void;
}

const ActiveTickets: React.FC = () => {
  const { filteredPassagens, onEdit, onDelete, onViewDetails } = useOutletContext<DashboardContext>();

  // Filtrar apenas passagens ativas (confirmadas e pendentes)
  const activePassagens = filteredPassagens.filter(
    (p) => p.status === 'confirmado' || p.status === 'pendente'
  );

  if (activePassagens.length === 0) {
    return (
      <div className="no-results">
        <p>📭 Nenhuma passagem ativa encontrada.</p>
      </div>
    );
  }

  return (
    <TravelList
      passagens={activePassagens}
      onEdit={onEdit}
      onDelete={onDelete}
      onViewDetails={onViewDetails}
    />
  );
};

export default ActiveTickets;

