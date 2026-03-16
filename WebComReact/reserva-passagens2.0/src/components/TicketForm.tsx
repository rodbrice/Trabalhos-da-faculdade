import React, { useState, useEffect } from 'react';
import { Passagem } from '../types/types';

// Requisito 5: Componente de Formulário (TicketForm)
// Requisito 15: Feedback Visual e Atraso Simulado

interface TicketFormProps {
  onSubmit: (passagem: Passagem) => void;
  editingPassagem: Passagem | null;
  onCancelEdit: () => void;
  assentosOcupados: number[];
  onNavigateToPainel: () => void;
}

const TicketForm: React.FC<TicketFormProps> = ({ 
  onSubmit, 
  editingPassagem, 
  onCancelEdit,
  assentosOcupados,
  onNavigateToPainel
}) => {
  const [passageiro, setPassageiro] = useState<string>('');
  const [assento, setAssento] = useState<string>('');
  const [origem, setOrigem] = useState<string>('');
  const [destino, setDestino] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');
  
  // Requisito 15: Estado de loading
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Preencher formulário ao receber passagem para edição
  useEffect(() => {
    if (editingPassagem) {
      setPassageiro(editingPassagem.passageiro);
      setAssento(editingPassagem.assento.toString());
      setOrigem(editingPassagem.origem);
      setDestino(editingPassagem.destino);
      setData(editingPassagem.data);
      setValidationError('');
    }
  }, [editingPassagem]);

  const validate = (): boolean => {
    if (passageiro.trim().length < 3) {
      setValidationError('❌ O nome do passageiro deve ter pelo menos 3 caracteres.');
      return false;
    }

    const assentoNum = parseInt(assento);
    if (isNaN(assentoNum) || assentoNum < 1 || assentoNum > 40) {
      setValidationError('❌ O número do assento deve estar entre 1 e 40.');
      return false;
    }

    // Verificar se assento já está ocupado
    if (assentosOcupados.includes(assentoNum) && 
        (!editingPassagem || editingPassagem.assento !== assentoNum)) {
      setValidationError(`❌ O assento ${assentoNum} já está ocupado!`);
      return false;
    }

    if (origem.trim().length < 3) {
      setValidationError('❌ A cidade de origem deve ter pelo menos 3 caracteres.');
      return false;
    }

    if (destino.trim().length < 3) {
      setValidationError('❌ A cidade de destino deve ter pelo menos 3 caracteres.');
      return false;
    }

    if (!data) {
      setValidationError('❌ A data da viagem é obrigatória.');
      return false;
    }

    const selectedDate = new Date(data);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      setValidationError('❌ A data da viagem não pode ser no passado.');
      return false;
    }

    setValidationError('');
    return true;
  };

  const clearForm = () => {
    setPassageiro('');
    setAssento('');
    setOrigem('');
    setDestino('');
    setData('');
    setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    // Requisito 15: Simular atraso de processamento de 2 segundos
    setIsLoading(true);
    setValidationError('');

    setTimeout(() => {
      const passagem: Passagem = {
        id: editingPassagem ? editingPassagem.id : Date.now(),
        passageiro: passageiro.trim(),
        assento: parseInt(assento),
        origem: origem.trim(),
        destino: destino.trim(),
        data: data,
        status: editingPassagem ? editingPassagem.status : 'confirmado',
      };

      onSubmit(passagem);
      clearForm();
      setIsLoading(false);
      
      // Requisito 8: Navegação programática após submissão
      setTimeout(() => {
        onNavigateToPainel();
      }, 500);
    }, 2000);
  };

  const handleCancel = () => {
    clearForm();
    onCancelEdit();
  };

  const isEditing = editingPassagem !== null;

  return (
    <div className="form-container">
      <form className="ticket-form" onSubmit={handleSubmit}>
        
        {/* Campo Passageiro */}
        <div className="form-group">
          <label htmlFor="passageiro">👤 Nome do Passageiro: *</label>
          <input
            type="text"
            id="passageiro"
            placeholder="Digite o nome completo"
            value={passageiro}
            onChange={(e) => setPassageiro(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        {/* Campo Assento */}
        <div className="form-group">
          <label htmlFor="assento">💺 Número do Assento (1 a 40): *</label>
          <input
            type="number"
            id="assento"
            min="1"
            max="40"
            placeholder="Digite o número do assento"
            value={assento}
            onChange={(e) => setAssento(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        {/* Campo Origem */}
        <div className="form-group">
          <label htmlFor="origem">📍 Cidade de Origem: *</label>
          <input
            type="text"
            id="origem"
            placeholder="Ex: São Paulo"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        {/* Campo Destino */}
        <div className="form-group">
          <label htmlFor="destino">🎯 Cidade de Destino: *</label>
          <input
            type="text"
            id="destino"
            placeholder="Ex: Rio de Janeiro"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        {/* Campo Data */}
        <div className="form-group">
          <label htmlFor="data">📅 Data da Viagem: *</label>
          <input
            type="date"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        {/* Mensagem de validação */}
        {validationError && (
          <div className="error-message">{validationError}</div>
        )}

        <div className="form-buttons">
          <button 
            type="submit" 
            className="btn-submit"
            disabled={isLoading}
          >
            {isLoading ? '⏳ A processar...' : (isEditing ? '💾 Salvar Alterações' : '🎫 Reservar Assento')}
          </button>
          {isEditing && (
            <button 
              type="button" 
              className="btn-cancel" 
              onClick={handleCancel}
              disabled={isLoading}
            >
              ❌ Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TicketForm;

