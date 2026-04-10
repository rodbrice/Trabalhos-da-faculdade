import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './navigation/RootLayout';
import Home from './pages/Home';
import VehicleRegister from './pages/VehicleRegister';
import FleetDashboard from './pages/FleetDashboard';
import AllVehicles from './pages/AllVehicles';
import AvailableVehicles from './pages/AvailableVehicles';
import RentedVehicles from './pages/RentedVehicles';
import VehicleDetails from './pages/VehicleDetails';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { Veiculo, FeedbackMessage } from './types/types';
import './styles/App.css';

// Sistema de Gestão de Frota DriveRent com Roteamento Completo

const STORAGE_KEY = 'driverent-frota';
const AUTH_KEY = 'driverent-auth';

function App() {
  // Estado elevado: Frota de veículos com persistência em localStorage
  const [veiculos, setVeiculos] = useState<Veiculo[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Erro ao carregar frota do localStorage:', e);
      }
    }
    // Dados mockados iniciais - 5 veículos
    return [
      {
        id: 1,
        marca: 'Fiat',
        modelo: 'Uno',
        placa: 'ABC-1234',
        status: 'disponível',
      },
      {
        id: 2,
        marca: 'Volkswagen',
        modelo: 'Gol',
        placa: 'DEF-5678',
        status: 'alugado',
      },
      {
        id: 3,
        marca: 'Honda',
        modelo: 'Civic',
        placa: 'GHI-9012',
        status: 'disponível',
      },
      {
        id: 4,
        marca: 'Toyota',
        modelo: 'Corolla',
        placa: 'JKL3M45',
        status: 'alugado',
      },
      {
        id: 5,
        marca: 'Chevrolet',
        modelo: 'Onix',
        placa: 'MNO-6789',
        status: 'disponível',
      },
    ];
  });

  // Estado: Veículo sendo editado no momento
  const [editingVehicle, setEditingVehicle] = useState<Veiculo | null>(null);

  // Estado: Mensagem de feedback temporária
  const [message, setMessage] = useState<FeedbackMessage | null>(null);

  // Estado: Autenticação simulada
  const [isLogged, setIsLogged] = useState<boolean>(() => {
    const savedAuth = localStorage.getItem(AUTH_KEY);
    return savedAuth === 'true';
  });

  // Persistência: Salvar no localStorage sempre que veículos mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(veiculos));
  }, [veiculos]);

  // Persistência: Salvar estado de autenticação
  useEffect(() => {
    localStorage.setItem(AUTH_KEY, String(isLogged));
  }, [isLogged]);

  // Exibe mensagem temporária por 3 segundos
  const showFeedback = (type: FeedbackMessage['type'], text: string): void => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  // Adicionar ou atualizar veículo no estado
  const handleSubmit = (veiculo: Veiculo): void => {
    if (editingVehicle) {
      // Atualização - substituir no estado pelo id
      setVeiculos((prev) =>
        prev.map((v) => (v.id === veiculo.id ? veiculo : v))
      );
      showFeedback('success', '✅ Veículo atualizado com sucesso!');
      setEditingVehicle(null);
    } else {
      // Adicionar novo veículo ao estado local
      setVeiculos((prev) => [veiculo, ...prev]);
      showFeedback('success', '🎉 Veículo cadastrado com sucesso!');
    }
  };

  // Remover veículo pelo id
  const handleDelete = (id: number): void => {
    setVeiculos((prev) => prev.filter((v) => v.id !== id));
    showFeedback('success', '🗑️ Veículo removido da frota!');
  };

  // Preencher formulário com dados do veículo a editar
  const handleEdit = (veiculo: Veiculo): void => {
    setEditingVehicle(veiculo);
    showFeedback('info', '✏️ Modo de edição ativado');
  };

  const handleCancelEdit = (): void => {
    setEditingVehicle(null);
    showFeedback('info', '❌ Edição cancelada');
  };

  // Toggle de autenticação
  const handleToggleAuth = (): void => {
    setIsLogged((prev: boolean) => {
      const newAuth = !prev;
      showFeedback('info', newAuth ? '🔓 Login realizado com sucesso!' : '🔒 Logout realizado!');
      return newAuth;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Base envolve todas as rotas */}
        <Route 
          path="/" 
          element={<RootLayout isLogged={isLogged} onToggleAuth={handleToggleAuth} message={message} />}
        >
          {/* Home - Tela inicial */}
          <Route index element={<Home />} />
          
          {/* VehicleRegister - Página de cadastro/edição */}
          <Route 
            path="/cadastrar" 
            element={
              <VehicleRegister 
                onSubmit={handleSubmit}
                editingVehicle={editingVehicle}
                onCancelEdit={handleCancelEdit}
              />
            } 
          />
          
          {/* FleetDashboard - Página administrativa protegida com sub-rotas */}
          <Route 
            path="/frota" 
            element={
              <ProtectedRoute isLogged={isLogged}>
                <FleetDashboard 
                  veiculos={veiculos}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </ProtectedRoute>
            }
          >
            {/* Sub-rotas aninhadas */}
            <Route index element={<AllVehicles />} />
            <Route path="disponiveis" element={<AvailableVehicles />} />
            <Route path="alugados" element={<RentedVehicles />} />
          </Route>
          
          {/* VehicleDetails - Rota Dinâmica com parâmetro ID */}
          <Route 
            path="/veiculo/:id" 
            element={<VehicleDetails veiculos={veiculos} />} 
          />
          
          {/* NotFound - Página 404 para rotas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

