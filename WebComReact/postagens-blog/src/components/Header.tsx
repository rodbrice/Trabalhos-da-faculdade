import React from 'react';

// Exercício 2: Componente Header com título "Blog Manager"

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>Blog Manager</h1>
        <p>Sistema de Gestão de Conteúdo</p>
      </div>
    </header>
  );
};

export default Header;
