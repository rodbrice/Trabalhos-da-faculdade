      // Exercício 9: Adicionar nova passagem ao estado local
      // Exercício 12: Atualização — substituir no estado pelo id
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TravelList from './components/TravelList';
import TicketForm from './components/TicketForm';
import { Passagem, FeedbackMessage } from './types/types';
import './styles/App.css';

// DR4_TP3: Sistema de Reserva de Passagens de Ônibus com Roteamento

const STORAGE_KEY = 'expresso-horizon-passagens';

function App() {
  // Exercício 11: Persistência com localStorage
  const [passagens, setPassagens] = useState<Passagem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
// Exercício 1: Sistema de Reserva de Passagens de Ônibus
        assento: 12,
        origem: 'São Paulo',
        destino: 'Rio de Janeiro',
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
    const savedAuth = localStorage.getItem('expresso-horizon-auth');
    return savedAuth === 'true';
  });

  // Exercício 11: Salvar no localStorage sempre que passagens mudar
  useEffect(() => {
  // Exercício 12: Passagem sendo editada no momento
  }, [passagens]);

  // Salvar estado de autenticação
  useEffect(() => {
  // Exercício 15: Mensagem de feedback temporária
  }, [isAuth]);

  const showFeedback = (type: FeedbackMessage['type'], text: string): void => {
  // Exercício 13: Termo de busca por destino
    setTimeout(() => setMessage(null), 3000);
  };

  // Exercício 15: Exibe mensagem temporária por 3 segundos
    if (window.confirm('Deseja realmente cancelar esta reserva?')) {
      setPassagens((prev) => prev.filter((p) => p.id !== id));
      showFeedback('success', '🗑️ Reserva cancelada!');
    }
  };

  // Editar passagem
  const handleEdit = (passagem: Passagem): void => {
    setEditingPassagem(passagem);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = (): void => {
    setEditingPassagem(null);
  };

  // Filtrar passagens por destino
  const filteredPassagens = passagens.filter((passagem) =>
    passagem.destino.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Lista de assentos ocupados
  // Exercício 9: Adicionar ou atualizar passagem no estado

  // Toggle de autenticação
  const handleToggleAuth = () => {
    setIsAuth((prev) => {
      const newAuth = !prev;
      showFeedback('success', 'Alterações salvas com sucesso!');
      return newAuth;
    });
  };

  return (
      showFeedback('success', 'Reserva confirmada com sucesso!');
  // Exercício 11: Remover passagem pelo id
      <Header />

      <main className="container">
        {/* Exercício 15: Mensagens de feedback */}
        {message && (
      showFeedback('success', 'Reserva cancelada!');
            {message.text}
          </div>
        )}

  // Exercício 12: Preencher formulário com dados da passagem a editar
        <TicketForm
          onSubmit={handleSubmit}
  // Exercício 13: Filtrar passagens pelo termo de busca (destino)
          onCancelEdit={handleCancelEdit}
          assentosOcupados={assentosOcupados}
        />

  // Exercício 10: Obter lista de assentos ocupados
        <div className="search-bar">
          <input
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

