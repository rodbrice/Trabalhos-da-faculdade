import React from 'react';
import { Link } from 'react-router-dom';

const Exercise8 = () => {
  // Obter hora atual
  const currentHour = new Date().getHours();
  
  // Lógica condicional para determinar a saudação
  let greeting;
  let icon;
  let bgColor;
  let description;
  
  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Bom dia";
    icon = "Manhã";
    bgColor = "#FFE082"; // Amarelo claro
    description = "A manhã é o momento perfeito para começar o dia com energia!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Boa tarde";
    icon = "Sol";
    bgColor = "#FFCC02"; // Amarelo
    description = "A tarde é ideal para manter o ritmo e a produtividade!";
  } else {
    greeting = "Boa noite";
    icon = "Noite";
    bgColor = "#3F51B5"; // Azul escuro
    description = "A noite é hora de relaxar e refletir sobre o dia!";
  }

  // Diferentes tipos de condicionais
  const getDetailedMessage = () => {
    // Switch case para mais opções
    switch (true) {
      case (currentHour >= 5 && currentHour < 8):
        return "Bem cedo! Que tal um café para começar bem o dia?";
      case (currentHour >= 8 && currentHour < 12):
        return "Manhã produtiva! É um ótimo horário para focar no trabalho.";
      case (currentHour >= 12 && currentHour < 14):
        return "Hora do almoço! Não esqueça de fazer uma pausa.";
      case (currentHour >= 14 && currentHour < 18):
        return "Tarde ativa! Continue com o bom trabalho.";
      case (currentHour >= 18 && currentHour < 22):
        return "Começo da noite! Hora de relaxar um pouco.";
      case (currentHour >= 22 || currentHour < 5):
        return "Noite avançada! Que tal descansar?";
      default:
        return "Horário não identificado!";
    }
  };


  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Condicionais por Horário</h1>
          <p>Exercício 8: Saudações baseadas na hora atual</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div 
          className="user-profile" 
          style={{ 
            background: `linear-gradient(135deg, ${bgColor}99, ${bgColor}CC)`,
            color: bgColor === "#3F51B5" ? "white" : "#333"
          }}
        >
          <div style={{ textAlign: 'center', fontSize: '3rem' }}>
            {icon}
          </div>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', margin: '1rem 0' }}>
            {greeting}!
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '1rem' }}>
            Agora são {new Date().getHours().toString().padStart(2, '0')}:
            {new Date().getMinutes().toString().padStart(2, '0')}
          </p>
          <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
            {description}
          </p>
        </div>
        
        <div className="content-box">
          <h2>Mensagem Detalhada</h2>
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1.5rem', 
            borderRadius: '8px', 
            textAlign: 'center',
            fontSize: '1.1rem',
            border: '1px solid #e0e0e0'
          }}>
            {getDetailedMessage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise8;