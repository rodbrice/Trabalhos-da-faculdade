import React from 'react';
import { Link } from 'react-router-dom';

const Exercise11 = () => {
  // Função para converter Celsius para Fahrenheit
  function celsiusToFahrenheit(celsius) {
    // Verifica se é número
    if (typeof celsius !== 'number' || isNaN(celsius)) {
      return { error: 'Valor deve ser um número válido' };
    }
    
    // Fórmula: F = (C × 9/5) + 32
    const fahrenheit = (celsius * 9 / 5) + 32;
    
    return {
      celsius: celsius,
      fahrenheit: Math.round(fahrenheit * 100) / 100,
      formula: `(${celsius} × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`
    };
  }

  // Função adicional: Fahrenheit para Celsius
  function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
      return { error: 'Valor deve ser um número válido' };
    }
    
    // Fórmula: C = (F - 32) × 5/9
    const celsius = (fahrenheit - 32) * 5 / 9;
    
    return {
      fahrenheit: fahrenheit,
      celsius: Math.round(celsius * 100) / 100,
      formula: `(${fahrenheit} - 32) × 5/9 = ${celsius.toFixed(2)}°C`
    };
  }

  // Função para classificar a temperatura
  function classifyTemperature(celsius) {
    if (celsius <= 0) return { category: 'Congelamento', color: '#007bff' };
    if (celsius <= 15) return { category: 'Frio', color: '#17a2b8' };
    if (celsius <= 25) return { category: 'Agradável', color: '#28a745' };
    if (celsius <= 35) return { category: 'Quente', color: '#ffc107' };
    return { category: 'Muito Quente', color: '#dc3545' };
  }

  // Exemplos de conversões interessantes
  const temperatureExamples = [
    { name: 'Ponto de congelamento da água', celsius: 0 },
    { name: 'Temperatura ambiente', celsius: 25 },
    { name: 'Temperatura corporal humana', celsius: 37 },
    { name: 'Ponto de ebulição da água', celsius: 100 },
    { name: 'Temperatura muito fria', celsius: -10 },
    { name: 'Temperatura de verão', celsius: 35 }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Conversor de Temperatura</h1>
          <p>Exercício 11: Função para converter Celsius para Fahrenheit</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="calculation-box">
          <h2>Conversão de Temperatura</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'center' }}>
            <div>
              <h3>Celsius → Fahrenheit</h3>
              <div className="result">25°C = {celsiusToFahrenheit(25).fahrenheit}°F</div>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                {celsiusToFahrenheit(25).formula}
              </p>
            </div>
            <div>
              <h3>Fahrenheit → Celsius</h3>
              <div className="result">77°F = {fahrenheitToCelsius(77).celsius}°C</div>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                {fahrenheitToCelsius(77).formula}
              </p>
            </div>
          </div>
        </div>

        <div className="content-box">
          <h2>Exemplos de Temperaturas</h2>
          <div className="cards-container">
            {temperatureExamples.map((example, index) => {
              const conversion = celsiusToFahrenheit(example.celsius);
              const classification = classifyTemperature(example.celsius);
              
              return (
                <div key={index} className="product-card">
                  <h3>{example.name}</h3>
                  <div style={{ 
                    fontSize: '2rem', 
                    margin: '1rem 0',
                    color: classification.color
                  }}>
                    {classification.icon}
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong>{example.celsius}°C</strong>
                  </div>
                  <div className="price" style={{ color: classification.color }}>
                    {conversion.fahrenheit}°F
                  </div>
                  <div className="category" style={{ background: classification.color }}>
                    {classification.category}
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

export default Exercise11;