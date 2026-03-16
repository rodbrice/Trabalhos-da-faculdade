import React from 'react';
import { Navigate } from 'react-router-dom';

// Requisito 12: Componente para Proteger Rotas (Simulação de Autenticação)

interface ProtectedRouteProps {
  isAuth: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuth, children }) => {
  if (!isAuth) {
    // Se não estiver autenticado, redireciona para a home
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

