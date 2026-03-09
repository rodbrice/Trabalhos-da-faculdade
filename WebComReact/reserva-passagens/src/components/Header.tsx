import React from 'react';

// Exercício 3: Componente de Cabeçalho (Header)

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>Expresso Horizon</h1>
        <p>Painel de Controle de Viagens - Reserva de Passagens</p>
      </div>
    </header>
  );
};

export default Header;

