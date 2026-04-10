import React from 'react';
import { NavLink } from 'react-router-dom';

// Componente de Navegação com destaque visual para link ativo

interface NavBarProps {
  isLogged: boolean;
  onToggleAuth: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isLogged, onToggleAuth }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            🏠 Início
          </NavLink>
          <NavLink 
            to="/cadastrar" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            🚗 Novo Veículo
          </NavLink>
          <NavLink 
            to="/frota" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            📋 Frota
          </NavLink>
        </div>
        
        <button 
          className="auth-button"
          onClick={onToggleAuth}
        >
          {isLogged ? '🔓 Sair' : '🔒 Entrar'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

