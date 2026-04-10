import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Veiculo } from '../types/types';

// Página de listagem de TODOS os veículos (disponíveis + alugados)

interface OutletContext {
  veiculos: Veiculo[];
  onEdit: (veiculo: Veiculo) => void;
  onDelete: (id: number) => void;
}

const AllVehicles: React.FC = () => {
  const navigate = useNavigate();
  const { veiculos, onEdit, onDelete } = useOutletContext<OutletContext>();

  const handleEdit = (veiculo: Veiculo) => {
    onEdit(veiculo);
    navigate('/cadastrar');
  };

  const handleDelete = (id: number, marca: string, modelo: string) => {
    if (window.confirm(`Deseja realmente excluir o veículo ${marca} ${modelo}?`)) {
      onDelete(id);
    }
  };

  if (veiculos.length === 0) {
    return (
      <div className="no-vehicles">
        <p>😔 Nenhum veículo cadastrado na frota.</p>
      </div>
    );
  }

  return (
    <div className="vehicles-list">
      <table className="vehicles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculo) => (
            <tr key={veiculo.id}>
              <td className="vehicle-id">#{veiculo.id}</td>
              <td className="vehicle-marca">{veiculo.marca}</td>
              <td className="vehicle-modelo">{veiculo.modelo}</td>
              <td className="vehicle-placa">{veiculo.placa}</td>
              <td>
                <span className={`status-badge ${veiculo.status === 'disponível' ? 'disponivel' : 'alugado'}`}>
                  {veiculo.status === 'disponível' ? '✅' : '🚗'} {veiculo.status}
                </span>
              </td>
              <td className="vehicle-actions">
                <button
                  className="btn-edit"
                  onClick={() => handleEdit(veiculo)}
                >
                  ✏️ Editar
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(veiculo.id, veiculo.marca, veiculo.modelo)}
                >
                  🗑️ Excluir
                </button>
                <button
                  className="btn-details"
                  onClick={() => navigate(`/veiculo/${veiculo.id}`)}
                >
                  👁️ Detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllVehicles;

