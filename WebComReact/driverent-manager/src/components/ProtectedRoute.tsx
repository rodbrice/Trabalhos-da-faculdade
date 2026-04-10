import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente para Proteger Rotas - Simulação de Autenticação

interface ProtectedRouteProps {
  isLogged: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLogged, children }) => {
  if (!isLogged) {
    // Se não estiver autenticado, redireciona para a home
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

