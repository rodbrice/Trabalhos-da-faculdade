import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Exercise4 = () => {
  // Demonstração prática: usando useState para mostrar o comportamento real no React
  const [userName, setUserName] = useState("João Silva");
  const [userAge, setUserAge] = useState(25);

  // Para demonstrar let vs const, vamos usar exemplos teóricos
  let exemploLet = "Variável let";
  const exemploConst = "Variável const";

  // Função que realmente atualiza o estado (re-renderiza o componente)
  const changeUserName = () => {
    setUserName("Maria Santos");
    
    // Demonstrando que let pode ser alterada (mas não causa re-render)
    exemploLet = "Let foi alterada!";
    console.log("Exemplo let alterado:", exemploLet);
    
    // exemploConst = "Tentando alterar const"; // ❌ Isso causaria erro!
  };

  const changeUserAge = () => {
    setUserAge(30);
    console.log("Idade alterada para 30 anos");
  };

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Let e Const</h1>
          <p>Exercício 4: Declaração de variáveis com let e const</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
    

        <div className="user-profile">
          <h2>Informações do Usuário</h2>
          <div className="profile-info">
            <p><strong>Nome (useState):</strong> {userName}</p>
            <p><strong>Idade (useState):</strong> {userAge} anos</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={changeUserName}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid white',
                padding: '0.75rem 1.5rem',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Alterar Nome
            </button>
            
            <button 
              onClick={changeUserAge}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid white',
                padding: '0.75rem 1.5rem',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Alterar Idade
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Exercise4;