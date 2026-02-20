import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task2() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (usuario.trim() === '' || senha.trim() === '') {
      alert('❌ Erro: Preencha todos os campos!');
    } else {
      alert('✅ Login realizado com sucesso!');
    }
  };

  return (
    <div className="task-container">
      <BackButton />
      <div className="center-container">
        <div className="form-container">
          <h2 className="rn-text" style={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>
            Login Básico
          </h2>
          <input
            className="rn-input"
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            className="rn-input"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button
            className="rn-button"
            style={{ backgroundColor: '#4CAF50', color: 'white' }}
            onClick={handleLogin}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task2;

