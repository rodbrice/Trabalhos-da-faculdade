import React, { useState, useEffect } from 'react';
import { Passagem } from '../types/types';

// Exercício 5: Componente de Formulário (TicketForm)
// Exercício 9: Cadastro Dinâmico
// Exercício 10: Validação de Assentos
// Exercício 12: Edição de Dados (Update)

interface TicketFormProps {
  onSubmit: (passagem: Passagem) => void;
  editingPassagem: Passagem | null;
  onCancelEdit: () => void;
  assentosOcupados: number[];
}

const TicketForm: React.FC<TicketFormProps> = ({ 
  onSubmit, 
  editingPassagem, 
  onCancelEdit,
  assentosOcupados 
}) => {
  const [passageiro, setPassageiro] = useState<string>('');
  const [assento, setAssento] = useState<string>('');
  const [origem, setOrigem] = useState<string>('');
  const [destino, setDestino] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  // Exercício 12: Preencher formulário ao receber passagem para edição
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

  // Exercício 10: Validação completa
  const validate = (): boolean => {
    if (passageiro.trim().length < 3) {
      setValidationError('O nome do passageiro deve ter pelo menos 3 caracteres.');
      return false;
    }

    const assentoNum = parseInt(assento);
    if (isNaN(assentoNum) || assentoNum < 1 || assentoNum > 40) {
      setValidationError('O número do assento deve estar entre 1 e 40.');
      return false;
    }

    // Exercício 10: Verificar se assento já está ocupado (exceto se estiver editando o mesmo)
    if (assentosOcupados.includes(assentoNum) && 
        (!editingPassagem || editingPassagem.assento !== assentoNum)) {
      setValidationError(`O assento ${assentoNum} já está ocupado!`);
      return false;
    }

    if (origem.trim().length < 3) {
      setValidationError('A cidade de origem deve ter pelo menos 3 caracteres.');
      return false;
    }

    if (destino.trim().length < 3) {
      setValidationError('A cidade de destino deve ter pelo menos 3 caracteres.');
      return false;
    }

    if (!data) {
      setValidationError('A data da viagem é obrigatória.');
      return false;
    }

    setValidationError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    // Exercício 12: Preserva o id se estiver editando, gera novo se não
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

    // Exercício 15: Limpar campos após o envio
    clearForm();
  };

  const clearForm = () => {
    setPassageiro('');
    setAssento('');
    setOrigem('');
    setDestino('');
    setData('');
    setValidationError('');
  };

  const handleCancel = () => {
    clearForm();
    onCancelEdit();
  };

  const isEditing = editingPassagem !== null;

  return (
    <div className="content-box">
      <h2>{isEditing ? 'Alterar Reserva' : 'Nova Reserva'}</h2>

      <form className="ticket-form" onSubmit={handleSubmit}>
        
        {/* Campo Passageiro */}
        <div className="form-group">
          <label htmlFor="passageiro">Nome do Passageiro: *</label>
          <input
            type="text"
            id="passageiro"
            placeholder="Digite o nome completo (mín. 3 caracteres)"
            value={passageiro}
            onChange={(e) => setPassageiro(e.target.value)}
          />
        </div>

        {/* Campo Assento */}
        <div className="form-group">
          <label htmlFor="assento">Número do Assento (1 a 40): *</label>
          <input
            type="number"
            id="assento"
            min="1"
            max="40"
            placeholder="Digite o número do assento"
            value={assento}
            onChange={(e) => setAssento(e.target.value)}
          />
        </div>

        {/* Campo Origem */}
        <div className="form-group">
          <label htmlFor="origem">Cidade de Origem: *</label>
          <input
            type="text"
            id="origem"
            placeholder="Digite a cidade de partida"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />
        </div>

        {/* Campo Destino */}
        <div className="form-group">
          <label htmlFor="destino">Cidade de Destino: *</label>
          <input
            type="text"
            id="destino"
            placeholder="Digite a cidade de destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>

        {/* Campo Data */}
        <div className="form-group">
          <label htmlFor="data">Data da Viagem: *</label>
          <input
            type="date"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        {/* Mensagem de validação */}
        {validationError && (
          <span className="error-message">{validationError}</span>
        )}

        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            {isEditing ? 'Salvar Alterações' : 'Reservar Assento'}
          </button>
          {isEditing && (
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TicketForm;

