import React from 'react';
import { Link } from 'react-router-dom';

const Exercise12 = () => {
  // Arrow function para calcular a diferença entre dois números
  const calculateDifference = (a, b) => {
    return Math.abs(a - b);
  };

  // Arrow function mais concisa (implícita)
  const simpleDifference = (a, b) => Math.abs(a - b);

  // Arrow function com múltiplas operações
  const detailedDifference = (a, b) => {
    const difference = Math.abs(a - b);
    const larger = Math.max(a, b);
    const smaller = Math.min(a, b);
    
    return {
      num1: a,
      num2: b,
      difference: difference,
      larger: larger,
      smaller: smaller,
      operation: `|${a} - ${b}| = ${difference}`,
      percentage: larger !== 0 ? ((difference / larger) * 100).toFixed(1) : 0
    };
  };

  // Arrow function para diferentes tipos de diferença
  const calculateVariations = (a, b) => ({
    absolute: Math.abs(a - b),        // Diferença absoluta
    relative: a - b,                  // Diferença relativa (com sinal)
    percentage: b !== 0 ? (((a - b) / b) * 100).toFixed(2) : 'Indefinido',
    squared: Math.pow(a - b, 2)       // Diferença ao quadrado
  });

  // Exemplos de cálculos
  const examples = [
    { a: 15, b: 7 },
    { a: 3.14, b: 2.71 },
    { a: -8, b: 5 },
    { a: 100, b: 150 },
    { a: 0, b: 42 },
    { a: -20, b: -35 }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Arrow Functions - Diferença</h1>
          <p>Exercício 12: Arrow Function para calcular diferença entre números</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="calculation-box">
          <h2>📐 Calculadora de Diferença</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'center' }}>
            <div>
              <h4>Diferença Simples</h4>
              <div className="result">{simpleDifference(25, 10)}</div>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>|25 - 10|</p>
            </div>
            
            <div>
              <h4>Com Decimais</h4>
              <div className="result">{simpleDifference(7.5, 3.2).toFixed(1)}</div>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>|7.5 - 3.2|</p>
            </div>
            
            <div>
              <h4>Números Negativos</h4>
              <div className="result">{simpleDifference(-15, 8)}</div>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>|{'-15 - 8'}|</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise12;