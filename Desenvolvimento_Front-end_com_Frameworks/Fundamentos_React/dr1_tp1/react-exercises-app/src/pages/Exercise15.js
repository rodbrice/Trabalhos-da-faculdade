import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Exercise15 = () => {
  // Estado do contador usando useState Hook
  const [count, setCount] = useState(0);
  
  // Estados adicionais para demonstrar diferentes casos de uso
  const [step, setStep] = useState(1);
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [history, setHistory] = useState([0]);
  const [maxReached, setMaxReached] = useState(0);
  const [minReached, setMinReached] = useState(0);

  // useEffect para modo automático
  useEffect(() => {
    let interval;
    
    if (isAutoMode) {
      interval = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount + 1;
          addToHistory(newCount);
          return newCount;
        });
      }, 500); // Incrementa a cada 500ms
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoMode]);

  // useEffect para acompanhar máximos e mínimos
  useEffect(() => {
    if (count > maxReached) {
      setMaxReached(count);
    }
    if (count < minReached) {
      setMinReached(count);
    }
  }, [count, maxReached, minReached]);

  // Função para incrementar o contador
  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    addToHistory(newCount);
  };

  // Função para decrementar o contador
  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
    addToHistory(newCount);
  };

  // Função para resetar o contador
  const reset = () => {
    setCount(0);
    setHistory([0]);
    setMaxReached(0);
    setMinReached(0);
  };

  // Função para adicionar ao histórico
  const addToHistory = (newValue) => {
    setHistory(prev => {
      const newHistory = [...prev, newValue];
      // Manter apenas os últimos 10 valores
      return newHistory.length > 10 ? newHistory.slice(-10) : newHistory;
    });
  };

  // Função para definir um valor específico
  const setSpecificValue = (value) => {
    setCount(value);
    addToHistory(value);
  };

  // Calculadora de estatísticas
  const getStatistics = () => {
    return {
      current: count,
      isPositive: count > 0,
      isNegative: count < 0,
      isZero: count === 0,
      isEven: count % 2 === 0,
      isOdd: count % 2 !== 0,
      absolute: Math.abs(count),
      squared: count * count,
      doubled: count * 2,
      halved: count / 2
    };
  };

  const stats = getStatistics();
  
  // Determinar cor baseada no valor
  const getCounterColor = () => {
    if (count > 0) return '#28a745';
    if (count < 0) return '#dc3545';
    return '#6c757d';
  };

  // Determinar emoji baseado no valor
  const getCounterEmoji = () => {
    if (count > 50) return 'MAX';
    if (count > 20) return '📈';
    if (count > 10) return '↑';
    if (count > 0) return '👍';
    if (count === 0) return '⚪';
    if (count > -10) return '👎';
    if (count > -20) return '↓';
    return '📉';
  };

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Estado (State) - Contador</h1>
          <p>Exercício 15: Gerenciamento de state com useState Hook</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="counter-container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              {getCounterEmoji()}
            </div>
            <div 
              className="counter-display" 
              style={{ color: getCounterColor() }}
            >
              {count}
            </div>
            
            <div style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>
              {count === 0 && "Ponto neutro"}
              {count > 0 && `${count} ${count === 1 ? 'unidade' : 'unidades'} acima do zero`}
              {count < 0 && `${Math.abs(count)} ${Math.abs(count) === 1 ? 'unidade' : 'unidades'} abaixo do zero`}
            </div>
          </div>

          <div className="counter-buttons">
            <button 
              className="counter-button" 
              onClick={decrement}
              style={{ background: '#dc3545' }}
            >
              - {step}
            </button>
            
            <button 
              className="counter-button" 
              onClick={reset}
              style={{ background: '#6c757d' }}
            >
              Reset
            </button>
            
            <button 
              className="counter-button" 
              onClick={increment}
              style={{ background: '#28a745' }}
            >
              + {step}
            </button>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
            <button 
              className="counter-button" 
              onClick={() => setSpecificValue(100)}
              style={{ background: '#17a2b8', fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            >
              Ir para 100
            </button>
            
            <button 
              className="counter-button" 
              onClick={() => setSpecificValue(-50)}
              style={{ background: '#fd7e14', fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            >
              Ir para -50
            </button>
            
            <button 
              className="counter-button" 
              onClick={() => setIsAutoMode(!isAutoMode)}
              style={{ 
                background: isAutoMode ? '#dc3545' : '#28a745', 
                fontSize: '0.9rem', 
                padding: '0.5rem 1rem' 
              }}
            >
              {isAutoMode ? 'Parar Auto' : 'Modo Auto'}
            </button>
          </div>
        </div>

        <div className="content-box">
          <h2>Configurações do Contador</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div className="book-info">
              <h4>📏 Passo do Incremento</h4>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                {[1, 2, 5, 10].map(stepValue => (
                  <button
                    key={stepValue}
                    onClick={() => setStep(stepValue)}
                    style={{
                      background: step === stepValue ? '#007bff' : '#e9ecef',
                      color: step === stepValue ? 'white' : '#333',
                      border: '1px solid #ccc',
                      padding: '0.5rem 1rem',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    {stepValue}
                  </button>
                ))}
              </div>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                Passo atual: {step}
              </p>
            </div>
            
            <div className="book-info">
              <h4>Ações Rápidas</h4>
              <div style={{ display: 'grid', gap: '0.5rem', marginTop: '1rem' }}>
                <button
                  onClick={() => setCount(count * 2)}
                  style={{
                    background: '#6f42c1',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Dobrar Valor
                </button>
                
                <button
                  onClick={() => setCount(Math.floor(count / 2))}
                  style={{
                    background: '#20c997',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Dividir por 2
                </button>
                
                <button
                  onClick={() => setCount(-count)}
                  style={{
                    background: '#e83e8c',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Inverter Sinal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise15;