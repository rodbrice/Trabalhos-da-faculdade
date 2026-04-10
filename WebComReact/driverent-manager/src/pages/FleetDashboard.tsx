import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Veiculo } from '../types/types';

// Painel Administrativo da Frota com sub-rotas

interface FleetDashboardProps {
  veiculos: Veiculo[];
  onEdit: (veiculo: Veiculo) => void;
  onDelete: (id: number) => void;
}

const FleetDashboard: React.FC<FleetDashboardProps> = ({ veiculos, onEdit, onDelete }) => {
  const disponiveisCount = veiculos.filter(v => v.status === 'disponível').length;
  const alugadosCount = veiculos.filter(v => v.status === 'alugado').length;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>📋 Painel da Frota ({veiculos.length} veículos)</h2>
        <div className="stats">
          <span className="stat disponivel">✅ {disponiveisCount} Disponíveis</span>
          <span className="stat alugado">🚗 {alugadosCount} Alugados</span>
        </div>
      </div>

      <div className="dashboard-tabs">
        <NavLink 
          to="/frota"
          end
          className={({ isActive }) => isActive ? 'tab-link active' : 'tab-link'}
        >
          📁 Todos
        </NavLink>
        <NavLink 
          to="/frota/disponiveis"
          className={({ isActive }) => isActive ? 'tab-link active' : 'tab-link'}
        >
          ✅ Disponíveis
        </NavLink>
        <NavLink 
          to="/frota/alugados"
          className={({ isActive }) => isActive ? 'tab-link active' : 'tab-link'}
        >
          🚗 Alugados
        </NavLink>
      </div>

      <div className="dashboard-content">
        {/* Outlet renderiza as sub-rotas com contexto */}
        <Outlet context={{ veiculos, onEdit, onDelete }} />
      </div>
    </div>
  );
};

export default FleetDashboard;

