import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TravelList from '../components/TravelList';
import { Passagem } from '../types/types';

// Requisito 13: Componente para exibir todas as passagens (rota aninhada)

interface DashboardContext {
  filteredPassagens: Passagem[];
  onEdit: (passagem: Passagem) => void;
  onDelete: (id: number) => void;
  onViewDetails: (id: number) => void;
}

const AllTickets: React.FC = () => {
  const { filteredPassagens, onEdit, onDelete, onViewDetails } = useOutletContext<DashboardContext>();

  return (
    <TravelList
      passagens={filteredPassagens}
      onEdit={onEdit}
      onDelete={onDelete}
      onViewDetails={onViewDetails}
    />
  );
};

export default AllTickets;

