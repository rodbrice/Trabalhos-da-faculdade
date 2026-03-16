import React from 'react';
import { NavLink } from 'react-router-dom';

// Requisito 4: Componente de Navegação (NavBar)

interface NavBarProps {
  isAuth: boolean;
  onToggleAuth: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isAuth, onToggleAuth }) => {
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
            to="/reservar" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            🎫 Nova Reserva
          </NavLink>
          <NavLink 
            to="/painel" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            📊 Painel
          </NavLink>
        </div>
        
        {/* Requisito 12: Botão de Login/Logout */}
        <button 
          className="auth-button"
          onClick={onToggleAuth}
        >
          {isAuth ? '🔓 Logout' : '🔒 Login'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

