import React from 'react';
import { Link } from 'react-router-dom';

const Exercise7 = () => {
  // Dados do usuário
  const userName = "Carlos Eduardo";
  
  // Obter hora atual
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
  
  // Determinar período do dia
  let period;
  if (currentHour >= 5 && currentHour < 12) {
    period = "manhã";
  } else if (currentHour >= 12 && currentHour < 18) {
    period = "tarde";
  } else {
    period = "noite";
  }

  // Template strings para diferentes situações
  const welcomeMessage = `Olá, ${userName}! Bem-vindo(a) de volta!`;
  
  const personalizedGreeting = `Olá ${userName}!
  
  Como você está nesta ${period}? 
  
  São ${timeString} agora. Tenha um bom dia!`;

  // Informações adicionais usando template strings
  const userInfo = {
    name: userName,
    loginTime: timeString,
    dayOfWeek: currentDate.toLocaleDateString('pt-BR', { weekday: 'long' }),
    fullDate: currentDate.toLocaleDateString('pt-BR')
  };

  const detailedInfo = `
    Data: ${userInfo.dayOfWeek}, ${userInfo.fullDate}
    Horário de acesso: ${userInfo.loginTime}
    Usuário: ${userInfo.name}
    Período: ${period.charAt(0).toUpperCase() + period.slice(1)}
  `;

  // Template string com expressões condicionais
  const statusMessage = `Status do sistema: ${currentHour >= 6 && currentHour <= 22 ? 'Online' : 'Manutenção'}`;
  
  // Template string com cálculos
  const timeUntilMidnight = 24 - currentHour;
  const countdownMessage = `Faltam ${timeUntilMidnight} horas para a meia-noite (aproximadamente)`;

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Template Strings</h1>
          <p>Exercício 7</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="user-profile">
          <div style={{ fontSize: '1.4rem', marginBottom: '1rem', textAlign: 'center' }}>
            {welcomeMessage}
          </div>
          
          <div style={{ fontSize: '1.2rem', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
            {personalizedGreeting}
          </div>
          
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
            <strong>{statusMessage}</strong>
          </div>
        </div>

        <div className="content-box">
          <h2>Informações Detalhadas</h2>
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1.5rem', 
            borderRadius: '8px', 
            fontFamily: 'monospace',
            fontSize: '1.1rem',
            whiteSpace: 'pre-line',
            border: '1px solid #e0e0e0'
          }}>
            {detailedInfo}
          </div>
          
          <div style={{ marginTop: '1rem', textAlign: 'center', color: '#666' }}>
            {countdownMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise7;