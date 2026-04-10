import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Veiculo } from '../types/types';

// Página de Cadastro de Veículos com validação de placa brasileira

interface VehicleRegisterProps {
  onSubmit: (veiculo: Veiculo) => void;
  editingVehicle: Veiculo | null;
  onCancelEdit: () => void;
}

const VehicleRegister: React.FC<VehicleRegisterProps> = ({ 
  onSubmit, 
  editingVehicle, 
  onCancelEdit 
}) => {
  const navigate = useNavigate();
  
  const [marca, setMarca] = useState<string>('');
  const [modelo, setModelo] = useState<string>('');
  const [placa, setPlaca] = useState<string>('');
  const [errors, setErrors] = useState<{
    marca?: string;
    modelo?: string;
    placa?: string;
  }>({});
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Preenche os campos quando está editando
  useEffect(() => {
    if (editingVehicle) {
      setMarca(editingVehicle.marca);
      setModelo(editingVehicle.modelo);
      setPlaca(editingVehicle.placa);
    } else {
      // Limpa os campos quando não está editando
      setMarca('');
      setModelo('');
      setPlaca('');
    }
    setErrors({});
  }, [editingVehicle]);

  // Valida formato de placa brasileira (AAA-1234 ou AAA1A23 - Mercosul)
  const validatePlaca = (placaValue: string): boolean => {
    const regex = /^[A-Z]{3}-?\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$/;
    return regex.test(placaValue);
  };

  // Formata placa automaticamente (adiciona hífen e converte para maiúsculas)
  const formatPlaca = (value: string): string => {
    let formatted = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    
    // Adiciona hífen após 3 letras para formato antigo
    if (formatted.length > 3 && /^[A-Z]{3}\d/.test(formatted)) {
      // Verifica se é formato Mercosul (AAA1A23) ou antigo (AAA1234)
      if (formatted.length === 7 && /^[A-Z]{3}\d[A-Z]\d{2}$/.test(formatted)) {
        // Formato Mercosul - não adiciona hífen
        return formatted;
      } else if (/^[A-Z]{3}\d{1,4}$/.test(formatted)) {
        // Formato antigo - adiciona hífen
        formatted = formatted.slice(0, 3) + '-' + formatted.slice(3);
      }
    }
    
    return formatted.slice(0, 8); // Limita o tamanho
  };

  const handlePlacaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPlaca(e.target.value);
    setPlaca(formatted);
    
    // Remove erro quando o usuário começa a digitar
    if (errors.placa) {
      setErrors({ ...errors, placa: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação
    const newErrors: typeof errors = {};
    
    if (!marca.trim()) {
      newErrors.marca = 'Marca é obrigatória';
    }
    
    if (!modelo.trim()) {
      newErrors.modelo = 'Modelo é obrigatório';
    }
    
    if (!placa.trim()) {
      newErrors.placa = 'Placa é obrigatória';
    } else if (!validatePlaca(placa)) {
      newErrors.placa = 'Placa inválida. Use formato AAA-1234 ou AAA1A23';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simula processamento no servidor
    setIsProcessing(true);
    
    setTimeout(() => {
      const newVehicle: Veiculo = {
        id: editingVehicle?.id || Date.now(),
        marca: marca.trim(),
        modelo: modelo.trim(),
        placa: placa.trim(),
        status: editingVehicle?.status || 'disponível',
      };
      
      onSubmit(newVehicle);
      
      // Limpa o formulário
      setMarca('');
      setModelo('');
      setPlaca('');
      setErrors({});
      setIsProcessing(false);
      
      // Redireciona para a frota
      navigate('/frota');
    }, 2000);
  };

  const handleCancel = () => {
    setMarca('');
    setModelo('');
    setPlaca('');
    setErrors({});
    onCancelEdit();
  };

  return (
    <div className="content-box">
      <h2>{editingVehicle ? '✏️ Editar Veículo' : '🚗 Cadastrar Novo Veículo'}</h2>
      
      <form onSubmit={handleSubmit} className="vehicle-form">
        <div className="form-group">
          <label htmlFor="marca">Marca</label>
          <input
            type="text"
            id="marca"
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
              if (errors.marca) {
                setErrors({ ...errors, marca: undefined });
              }
            }}
            placeholder="Ex: Fiat, Volkswagen, Honda"
            disabled={isProcessing}
          />
          {errors.marca && <span className="error-message">{errors.marca}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="modelo">Modelo</label>
          <input
            type="text"
            id="modelo"
            value={modelo}
            onChange={(e) => {
              setModelo(e.target.value);
              if (errors.modelo) {
                setErrors({ ...errors, modelo: undefined });
              }
            }}
            placeholder="Ex: Uno, Gol, Civic"
            disabled={isProcessing}
          />
          {errors.modelo && <span className="error-message">{errors.modelo}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="placa">Placa</label>
          <input
            type="text"
            id="placa"
            value={placa}
            onChange={handlePlacaChange}
            placeholder="Ex: ABC-1234 ou ABC1D23"
            disabled={isProcessing}
          />
          {errors.placa && <span className="error-message">{errors.placa}</span>}
          <small className="input-hint">
            Formatos aceitos: AAA-1234 (antigo) ou AAA1A23 (Mercosul)
          </small>
        </div>

        <div className="form-buttons">
          <button 
            type="submit" 
            className="btn-submit"
            disabled={isProcessing}
          >
            {isProcessing ? '⏳ Processando...' : (editingVehicle ? '💾 Salvar Alterações' : '➕ Cadastrar Veículo')}
          </button>
          
          {editingVehicle && (
            <button 
              type="button" 
              className="btn-cancel"
              onClick={handleCancel}
              disabled={isProcessing}
            >
              ❌ Cancelar Edição
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VehicleRegister;

