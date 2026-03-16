import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './navigation/RootLayout';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import TicketDetails from './pages/TicketDetails';
import AllTickets from './pages/AllTickets';
import ActiveTickets from './pages/ActiveTickets';
import CanceledTickets from './pages/CanceledTickets';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { Passagem, FeedbackMessage } from './types/types';
import './styles/App.css';

// DR4_TP3: Sistema de Reserva de Passagens de Ônibus com Roteamento Completo

const STORAGE_KEY = 'expresso-horizon-passagens';
const AUTH_KEY = 'expresso-horizon-auth';

function App() {
  // Requisito 11: Persistência com localStorage - carregar dados salvos
  const [passagens, setPassagens] = useState<Passagem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Erro ao carregar passagens do localStorage:', e);
      }
    }
    // Dados iniciais mockados
    return [
      {
        id: 1,
        passageiro: 'João Silva',
        assento: 12,
        origem: 'São Paulo',
        destino: 'Rio de Janeiro',
        data: '2026-03-25',
        status: 'confirmado',
      },
      {
        id: 2,
        passageiro: 'Maria Santos',
        assento: 8,
        origem: 'Belo Horizonte',
        destino: 'Salvador',
        data: '2026-04-10',
        status: 'pendente',
      },
      {
        id: 3,
        passageiro: 'Pedro Costa',
        assento: 25,
        origem: 'Curitiba',
        destino: 'Florianópolis',
        data: '2026-03-28',
        status: 'confirmado',
      },
      {
        id: 4,
        passageiro: 'Ana Oliveira',
        assento: 15,
        origem: 'Brasília',
        destino: 'Goiânia',
        data: '2026-03-20',
        status: 'cancelado',
      },
    ];
  });

  // Requisito 10: Estado elevado - Passagem sendo editada
  const [editingPassagem, setEditingPassagem] = useState<Passagem | null>(null);

  // Mensagens de feedback
  const [message, setMessage] = useState<FeedbackMessage | null>(null);

  // Termo de busca por destino
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Requisito 12: Simulação de autenticação
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    const savedAuth = localStorage.getItem(AUTH_KEY);
    return savedAuth === 'true';
  });

  // Requisito 11: Salvar no localStorage sempre que passagens mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(passagens));
  }, [passagens]);

  // Salvar estado de autenticação
  useEffect(() => {
    localStorage.setItem(AUTH_KEY, String(isAuth));
  }, [isAuth]);

  const showFeedback = (type: FeedbackMessage['type'], text: string): void => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  // Adicionar ou atualizar passagem
  const handleSubmit = (passagem: Passagem): void => {
    if (editingPassagem) {
      setPassagens((prev) =>
        prev.map((p) => (p.id === passagem.id ? passagem : p))
      );
      showFeedback('success', '✅ Alterações salvas com sucesso!');
      setEditingPassagem(null);
    } else {
      setPassagens((prev) => [passagem, ...prev]);
      showFeedback('success', '🎉 Reserva confirmada com sucesso!');
    }
  };

  // Remover passagem
  const handleDelete = (id: number): void => {
    const passagem = passagens.find(p => p.id === id);
    if (passagem && window.confirm(`Deseja realmente cancelar a reserva de ${passagem.passageiro}?`)) {
      setPassagens((prev) => prev.filter((p) => p.id !== id));
      showFeedback('success', '🗑️ Reserva cancelada com sucesso!');
    }
  };

  // Editar passagem
  const handleEdit = (passagem: Passagem): void => {
    setEditingPassagem(passagem);
    showFeedback('info', '✏️ Modo de edição ativado');
  };

  const handleCancelEdit = (): void => {
    setEditingPassagem(null);
    showFeedback('info', '❌ Edição cancelada');
  };

  // Filtrar passagens por destino
  const filteredPassagens = passagens.filter((passagem) =>
    passagem.destino.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Lista de assentos ocupados
  const assentosOcupados = passagens.map((p) => p.assento);

  // Toggle de autenticação
  const handleToggleAuth = () => {
    setIsAuth((prev) => {
      const newAuth = !prev;
      showFeedback('info', newAuth ? '🔓 Login realizado com sucesso!' : '🔒 Logout realizado!');
      return newAuth;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Requisito 6: Layout Base envolve todas as rotas */}
        <Route 
          path="/" 
          element={<RootLayout isAuth={isAuth} onToggleAuth={handleToggleAuth} message={message} />}
        >
          {/* Requisito 5: Definição das Rotas */}
          
          {/* Requisito 3: Home - Tela inicial */}
          <Route index element={<Home />} />
          
          {/* Requisito 3: Booking - Página de reserva */}
          <Route 
            path="/reservar" 
            element={
              <Booking 
                onSubmit={handleSubmit}
                editingPassagem={editingPassagem}
                onCancelEdit={handleCancelEdit}
                assentosOcupados={assentosOcupados}
              />
            } 
          />
          
          {/* Requisito 3 e 12: Dashboard - Página administrativa protegida */}
          <Route 
            path="/painel" 
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Dashboard 
                  passagens={passagens}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  filteredPassagens={filteredPassagens}
                />
              </ProtectedRoute>
            }
          >
            {/* Requisito 13: Rotas Aninhadas */}
            <Route index element={<AllTickets />} />
            <Route path="ativas" element={<ActiveTickets />} />
            <Route path="canceladas" element={<CanceledTickets />} />
          </Route>
          
          {/* Requisito 7: Rota Dinâmica - Detalhes da Passagem */}
          <Route 
            path="/passagem/:id" 
            element={<TicketDetails passagens={passagens} />} 
          />
          
          {/* Requisito 9: Página 404 - Tratamento de Erros de Rota */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

