import React from 'react';

// Exercício 4: Componente de Card de Assento (SeatCard)

interface SeatCardProps {
  numero: number;
  status: 'livre' | 'ocupado';
  onClick?: () => void;
}

const SeatCard: React.FC<SeatCardProps> = ({ numero, status, onClick }) => {
  return (
    <div 
      className={`seat-card seat-${status}`}
      onClick={onClick}
      title={`Assento ${numero} - ${status === 'livre' ? 'Disponível' : 'Ocupado'}`}
    >
      <span className="seat-number">{numero}</span>
    </div>
  );
};

export default SeatCard;

