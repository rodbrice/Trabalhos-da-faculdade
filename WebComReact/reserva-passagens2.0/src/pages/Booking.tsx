import React from 'react';
import { useNavigate } from 'react-router-dom';
import TicketForm from '../components/TicketForm';
import { Passagem } from '../types/types';

// Requisito 3: Página Booking - Página dedicada ao componente TicketForm

interface BookingProps {
  onSubmit: (passagem: Passagem) => void;
  editingPassagem: Passagem | null;
  onCancelEdit: () => void;
  assentosOcupados: number[];
}

const Booking: React.FC<BookingProps> = ({ 
  onSubmit, 
  editingPassagem, 
  onCancelEdit,
  assentosOcupados
}) => {
  const navigate = useNavigate();

  // Requisito 8: Navegação programática para o painel
  const handleNavigateToPainel = () => {
    navigate('/painel');
  };

  return (
    <div className="page-booking">
      <div className="content-box">
        <h2>
          {editingPassagem ? '✏️ Alterar Reserva' : '🎫 Nova Reserva de Passagem'}
        </h2>
        <p className="page-description">
          {editingPassagem 
            ? 'Atualize os dados da sua reserva abaixo:'
            : 'Preencha os dados abaixo para fazer uma nova reserva de passagem:'}
        </p>
        
        <TicketForm
          onSubmit={onSubmit}
          editingPassagem={editingPassagem}
          onCancelEdit={onCancelEdit}
          assentosOcupados={assentosOcupados}
          onNavigateToPainel={handleNavigateToPainel}
        />
      </div>
    </div>
  );
};

export default Booking;

