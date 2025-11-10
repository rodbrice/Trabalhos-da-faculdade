import React from 'react';
import { Link } from 'react-router-dom';

const Exercise10 = () => {
  // Função tradicional para calcular a soma
  function calculateSum(a, b) {
    const result = a + b;
    console.log(`Calculando: ${a} + ${b} = ${result}`);
    return result;
  }

  // Função com validação
  function safeSumCalculation(num1, num2) {
    // Verifica se são números
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Erro: Ambos os valores devem ser números';
    }
    
    if (isNaN(num1) || isNaN(num2)) {
      return 'Erro: Valores inválidos (NaN)';
    }
    
    const sum = num1 + num2;
    
    // Verifica resultado
    if (sum === Infinity || sum === -Infinity) {
      return 'Erro: Resultado infinito';
    }
    
    return sum;
  }

  // Exemplos de diferentes tipos de soma
  const examples = [
    { a: 10, b: 25 },
    { a: 3.14, b: 2.86 },
    { a: -15, b: 8 },
    { a: 100, b: -50 },
    { a: 0, b: 42 }
  ];

  // Função para formatar o resultado
  function formatResult(a, b, result) {
    return {
      operation: `${a} + ${b}`,
      result: result,
      type: typeof result === 'number' ? 'success' : 'error'
    };
  }

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Funções JavaScript</h1>
          <p>Exercício 10: Função para calcular soma de dois números</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="calculation-box">
          <h2>Calculadora de Soma</h2>
          <div className="result">
            Função principal: calculateSum(15, 27) = {calculateSum(15, 27)}
          </div>
          <p style={{ marginTop: '1rem', color: '#666' }}>
            Função que soma dois números.
          </p>
        </div>

        <div className="content-box">
          <h2>Exemplos de Cálculos</h2>
          <div className="cards-container">
            {examples.map((example, index) => {
              const result = safeSumCalculation(example.a, example.b);
              const formatted = formatResult(example.a, example.b, result);
              
              return (
                <div key={index} className="product-card">
                  <h3>Exemplo {index + 1}</h3>
                  <div style={{ 
                    fontSize: '1.2rem', 
                    margin: '1rem 0',
                    fontFamily: 'monospace'
                  }}>
                    {formatted.operation}
                  </div>
                  <div className={`price ${formatted.type === 'error' ? '' : ''}`} style={{
                    color: formatted.type === 'error' ? '#dc3545' : '#28a745'
                  }}>
                    = {formatted.result}
                  </div>
                  <div className="category">
                    {formatted.type === 'success' ? 'Válido' : 'Erro'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise10;