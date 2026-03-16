import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Passagem } from '../types/types';

// Requisito 3 e 13: Página Dashboard com Rotas Aninhadas

interface DashboardProps {
  passagens: Passagem[];
  onEdit: (passagem: Passagem) => void;
  onDelete: (id: number) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filteredPassagens: Passagem[];
}

const Dashboard: React.FC<DashboardProps> = ({ 
  passagens,
  onEdit, 
  onDelete,
  searchTerm,
  onSearchChange,
  filteredPassagens
}) => {
  const navigate = useNavigate();

  const handleEdit = (passagem: Passagem) => {
    onEdit(passagem);
    navigate('/reservar');
  };

  // Requisito 7: Navegar para detalhes da passagem
  const handleViewDetails = (id: number) => {
    navigate(`/passagem/${id}`);
  };

  return (
    <div className="page-dashboard">
      <div className="content-box">
        <h2>📊 Painel de Controle de Viagens</h2>
        <p className="page-description">
          Gerencie todas as reservas de passagens do sistema
        </p>

        {/* Requisito 13: Sub-navegação para rotas aninhadas */}
        <div className="sub-navigation">
          <NavLink 
            to="/painel" 
            end
            className={({ isActive }) => isActive ? 'sub-link active' : 'sub-link'}
          >
            📋 Todas as Reservas
          </NavLink>
          <NavLink 
            to="/painel/ativas" 
            className={({ isActive }) => isActive ? 'sub-link active' : 'sub-link'}
          >
            ✅ Ativas
          </NavLink>
          <NavLink 
            to="/painel/canceladas" 
            className={({ isActive }) => isActive ? 'sub-link active' : 'sub-link'}
          >
            ❌ Canceladas
          </NavLink>
        </div>

        {/* Filtro de Destino */}
        <div className="search-bar">
          <input
            type="search"
            placeholder="🔍 Buscar por cidade de destino..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="list-header">
          <h3>
            {searchTerm
              ? `Resultados para "${searchTerm}": ${filteredPassagens.length} reserva(s)`
              : `Total de Reservas: ${passagens.length}`}
          </h3>
        </div>

        {/* Requisito 6 e 13: Outlet para rotas aninhadas */}
        <Outlet context={{ filteredPassagens, onEdit: handleEdit, onDelete, onViewDetails: handleViewDetails }} />
      </div>
    </div>
  );
};

export default Dashboard;

