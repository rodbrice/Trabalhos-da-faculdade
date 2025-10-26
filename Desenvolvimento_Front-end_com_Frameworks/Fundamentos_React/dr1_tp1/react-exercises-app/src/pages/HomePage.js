import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const exercises = [
    {
      id: 1,
      title: "Exercício 1: O que é React",
      description: "Página explicando os conceitos básicos do React"
    },
    {
      id: 2,
      title: "Exercício 2: Histórico do ReactJs",
      description: "Linha do tempo com marcos importantes do React"
    },
    {
      id: 3,
      title: "Exercício 3: Hello, React!",
      description: "Aplicação básica exibindo uma mensagem de boas-vindas"
    },
    {
      id: 4,
      title: "Exercício 4: Let e Const",
      description: "Demonstração do uso de variáveis let e const"
    },
    {
      id: 5,
      title: "Exercício 5: Valores Primitivos",
      description: "Perfil de usuário usando números, strings e booleans"
    },
    {
      id: 6,
      title: "Exercício 6: Objetos e Arrays",
      description: "Informações de livro usando objetos e arrays"
    },
    {
      id: 7,
      title: "Exercício 7: Template Strings",
      description: "Mensagem personalizada com template strings"
    },
    {
      id: 8,
      title: "Exercício 8: Condicionais por Horário",
      description: "Saudações baseadas na hora atual"
    },
    {
      id: 9,
      title: "Exercício 9: Loop de Tarefas",
      description: "Lista de tarefas renderizada com loops"
    },
    {
      id: 10,
      title: "Exercício 10: Função de Soma",
      description: "Calculadora simples com função de soma"
    },
    {
      id: 11,
      title: "Exercício 11: Conversão de Temperatura",
      description: "Conversor de Celsius para Fahrenheit"
    },
    {
      id: 12,
      title: "Exercício 12: Arrow Function - Diferença",
      description: "Cálculo de diferença usando arrow functions"
    },
    {
      id: 13,
      title: "Exercício 13: Arrow Function - Par/Ímpar",
      description: "Verificador de números pares/ímpares"
    },
    {
      id: 14,
      title: "Exercício 14: Componentes Dinâmicos",
      description: "Cards de produtos renderizados dinamicamente"
    },
    {
      id: 15,
      title: "Exercício 15: State - Contador",
      description: "Contador com gerenciamento de state"
    },
    {
      id: 16,
      title: "Exercício 16: Props",
      description: "Passagem de dados entre componentes com props"
    }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Exercícios React - DR1_TP1</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="content-box">
          <h2>Sobre este projeto</h2>
          <p>
            Esta aplicação contém os 16 exercícios práticos para o TP_1_DR1 de Fundamentos de React.
          </p>
        </div>

        <div className="exercise-grid">
          {exercises.map(exercise => (
            <Link 
              key={exercise.id} 
              to={`/exercise${exercise.id}`} 
              className="exercise-card"
            >
              <h3>{exercise.title}</h3>
              <p>{exercise.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;