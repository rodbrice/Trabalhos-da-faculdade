import React from 'react';
import { Link } from 'react-router-dom';

const Exercise5 = () => {
  // Valores primitivos em JavaScript
  const userName = "Ana Carolina";           // String
  const userAge = 28;                       // Number
  const isActive = true;                    // Boolean
  const accountBalance = 1250.75;           // Number (float)
  const isStudent = false;                  // Boolean
  const userId = 12345;                     // Number (integer)
  
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Valores Primitivos</h1>
          <p>Exercício 5: Perfil de usuário usando tipos primitivos</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="user-profile">
          <h2>Perfil do Usuário</h2>
          <div className="profile-info">
            <p><strong>ID:</strong> {userId}</p>
            <p><strong>Nome:</strong> {userName}</p>
            <p><strong>Idade:</strong> {userAge} anos</p>
            <p><strong>Saldo da conta:</strong> R$ {accountBalance.toFixed(2)}</p>
            <p><strong>Status:</strong> {isActive ? "Ativo" : "Inativo"}</p>
            <p><strong>Estudante:</strong> {isStudent ? "Sim" : "Não"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise5;