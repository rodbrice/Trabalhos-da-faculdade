import React from 'react';
import { Link } from 'react-router-dom';

const Exercise13 = () => {
  // Arrow function para verificar se um número é par ou ímpar
  const checkEvenOdd = (number) => {
    if (typeof number !== 'number' || isNaN(number)) {
      return { error: 'Valor deve ser um número válido' };
    }
    
    const isEven = number % 2 === 0;
    
    return {
      number: number,
      isEven: isEven,
      type: isEven ? 'Par' : 'Ímpar',
      emoji: isEven ? '✅' : '❌',
      explanation: `${number} ÷ 2 = ${(number / 2).toFixed(1)} (resto: ${number % 2})`
    };
  };

  // Arrow function alternativa mais concisa
  const isEven = num => num % 2 === 0;
  const isOdd = num => num % 2 !== 0;

  // Arrow function para análise mais detalhada
  const analyzeNumber = (number) => ({
    value: number,
    isEven: number % 2 === 0,
    isOdd: number % 2 !== 0,
    divisibleBy2: number % 2 === 0,
    remainder: number % 2,
    quotient: Math.floor(number / 2),
    type: number % 2 === 0 ? 'Par' : 'Ímpar',
    binary: number.toString(2), // Representação binária
    lastDigit: Math.abs(number) % 10
  });

  // Arrow function para gerar sequências
  const generateSequence = (start, count, type) => {
    const sequence = [];
    let current = start;
    
    // Ajustar o início para o tipo desejado
    if (type === 'even' && current % 2 !== 0) current++;
    if (type === 'odd' && current % 2 === 0) current++;
    
    for (let i = 0; i < count; i++) {
      sequence.push(current);
      current += 2;
    }
    
    return sequence;
  };

  // Exemplos de números para testar
  const testNumbers = [1, 2, 3, 4, 5, 10, 15, 20, 25, 42, 99, 100, -8, -15, 0];
  
  // Separar pares e ímpares
  const evenNumbers = testNumbers.filter(num => isEven(num));
  const oddNumbers = testNumbers.filter(num => isOdd(num));

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Arrow Functions - Par/Ímpar</h1>
          <p>Exercício 13: Arrow Function para verificar números pares e ímpares</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="calculation-box">
          <h2>🔢 Verificador de Paridade</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'center' }}>
            <div>
              <h4>Número 42</h4>
              <div className="result" style={{ color: '#28a745' }}>
                {checkEvenOdd(42).type} {checkEvenOdd(42).emoji}
              </div>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                {checkEvenOdd(42).explanation}
              </p>
            </div>
            
            <div>
              <h4>Número 17</h4>
              <div className="result" style={{ color: '#dc3545' }}>
                {checkEvenOdd(17).type} {checkEvenOdd(17).emoji}
              </div>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                {checkEvenOdd(17).explanation}
              </p>
            </div>
            
            <div>
              <h4>Número 0</h4>
              <div className="result" style={{ color: '#28a745' }}>
                {checkEvenOdd(0).type} {checkEvenOdd(0).emoji}
              </div>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                {checkEvenOdd(0).explanation}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Exercise13;