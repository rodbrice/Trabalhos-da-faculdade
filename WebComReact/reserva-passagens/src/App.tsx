import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TravelList from './components/TravelList';
import TicketForm from './components/TicketForm';
import { Passagem, FeedbackMessage } from './types/types';
import './styles/App.css';

// Exercício 1: Sistema de Reserva de Passagens de Ônibus

function App() {
  // Exercício 8: Mock de Dados Iniciais
  const [passagens, setPassagens] = useState<Passagem[]>([
    {
      id: 1,
      passageiro: 'João Silva',
      assento: 12,
      origem: 'São Paulo',
      destino: 'Rio de Janeiro',
      data: '2026-03-15',
      status: 'confirmado',
    },
    {
      id: 2,
      passageiro: 'Maria Santos',
      assento: 8,
      origem: 'Belo Horizonte',
      destino: 'Salvador',
      data: '2026-03-20',
      status: 'pendente',
    },
    {
      id: 3,
      passageiro: 'Pedro Costa',
      assento: 25,
      origem: 'Curitiba',
      destino: 'Florianópolis',
      data: '2026-03-18',
      status: 'confirmado',
    },
  ]);

  // Exercício 12: Passagem sendo editada no momento
  const [editingPassagem, setEditingPassagem] = useState<Passagem | null>(null);

  // Exercício 15: Mensagem de feedback temporária
  const [message, setMessage] = useState<FeedbackMessage | null>(null);

  // Exercício 13: Termo de busca por destino
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Exercício 15: Exibe mensagem temporária por 3 segundos
  const showFeedback = (type: FeedbackMessage['type'], text: string): void => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  // Exercício 9: Adicionar ou atualizar passagem no estado
  const handleSubmit = (passagem: Passagem): void => {
    if (editingPassagem) {
      // Exercício 12: Atualização — substituir no estado pelo id
      setPassagens((prev) =>
        prev.map((p) => (p.id === passagem.id ? passagem : p))
      );
      showFeedback('success', 'Alterações salvas com sucesso!');
      setEditingPassagem(null);
    } else {
      // Exercício 9: Adicionar nova passagem ao estado local
      setPassagens((prev) => [passagem, ...prev]);
      showFeedback('success', 'Reserva confirmada com sucesso!');
    }
  };

  // Exercício 11: Remover passagem pelo id
  const handleDelete = (id: number): void => {
    if (window.confirm('Deseja realmente cancelar esta reserva?')) {
      setPassagens((prev) => prev.filter((p) => p.id !== id));
      showFeedback('success', 'Reserva cancelada!');
    }
  };

  // Exercício 12: Preencher formulário com dados da passagem a editar
  const handleEdit = (passagem: Passagem): void => {
    setEditingPassagem(passagem);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = (): void => {
    setEditingPassagem(null);
  };

  // Exercício 13: Filtrar passagens pelo termo de busca (destino)
  const filteredPassagens = passagens.filter((passagem) =>
    passagem.destino.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Exercício 10: Obter lista de assentos ocupados
  const assentosOcupados = passagens.map((p) => p.assento);

  return (
    <div className="App">
      {/* Exercício 3: Renderizar Header */}
      <Header />

      <main className="container">
        {/* Exercício 15: Mensagens de feedback */}
        {message && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Exercício 5 / 9 / 10 / 12: Formulário */}
        <TicketForm
          onSubmit={handleSubmit}
          editingPassagem={editingPassagem}
          onCancelEdit={handleCancelEdit}
          assentosOcupados={assentosOcupados}
        />

        {/* Exercício 13: Campo de busca por destino */}
        <div className="search-bar">
          <input
            type="search"
            placeholder="Buscar por cidade de destino..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Lista com contagem */}
        <div className="list-header">
          <h2>
            {searchTerm
              ? `Resultados para "${searchTerm}" (${filteredPassagens.length})`
              : `Reservas (${passagens.length})`}
          </h2>
        </div>

        {/* Exercício 6: TravelList recebe o estado de passagens filtradas */}
        {/* Exercício 11 / 12: Passa handlers de delete e edit */}
        <TravelList
          passagens={filteredPassagens}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;

