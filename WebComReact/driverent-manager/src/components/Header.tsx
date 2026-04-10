import React from 'react';

// Componente Header - Exibe título do sistema

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>🚗 DriveRent</h1>
        <p>Sistema de Gestão de Frota DriveRent</p>
      </div>
    </header>
  );
};

export default Header;

