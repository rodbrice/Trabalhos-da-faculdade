import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

function Exercise2() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 2: Media Queries - Tablet e Desktop</h1>
        <p className="exercise-description">
          Demonstração das Media Queries aplicadas para adaptar o layout em diferentes resoluções:
          Mobile (&lt;768px), Tablet (≥768px) e Desktop (≥992px).
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Análise dos Breakpoints - Redimensione a janela!</div>
        
        <style>{`
          .ex2-demo-container {
            background: white;
            border-radius: 8px;
            padding: 2rem;
          }
          
          .breakpoint-indicator {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 2rem;
            transition: all 0.3s ease;
          }
          
          .breakpoint-indicator h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          
          .breakpoint-indicator p {
            opacity: 0.9;
          }
          
          .responsive-grid {
            display: grid;
            gap: 1rem;
            grid-template-columns: 1fr;
          }
          
          .grid-item {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            border: 2px solid #e0e0e0;
            text-align: center;
          }
          
          .grid-item h4 {
            color: #667eea;
            margin-bottom: 0.5rem;
          }
          
          /* Mobile Default */
          .current-device::before {
            content: "📱 Mobile (<768px)";
            font-size: 1.2rem;
            font-weight: bold;
          }
          
          /* Tablet - 768px */
          @media (min-width: 768px) {
            .breakpoint-indicator {
              background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
            }
            
            .current-device::before {
              content: "📱 Tablet (≥768px)";
            }
            
            .responsive-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          /* Desktop - 992px */
          @media (min-width: 992px) {
            .breakpoint-indicator {
              background: linear-gradient(135deg, #ee0979 0%, #ff6a00 100%);
            }
            
            .current-device::before {
              content: "💻 Desktop (≥992px)";
            }
            
            .responsive-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          /* Desktop Large - 1200px */
          @media (min-width: 1200px) {
            .breakpoint-indicator {
              background: linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%);
            }
            
            .current-device::before {
              content: "🖥️ Desktop Large (≥1200px)";
            }
            
            .responsive-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}</style>
        
        <div className="ex2-demo-container">
          <div className="breakpoint-indicator">
            <div className="current-device"></div>
            <p style={{ marginTop: '1rem' }}>
              Redimensione a janela para ver as mudanças nos breakpoints
            </p>
          </div>
          
          <div className="responsive-grid">
            <div className="grid-item">
              <h4>Item 1</h4>
              <p>Conteúdo adaptativo</p>
            </div>
            <div className="grid-item">
              <h4>Item 2</h4>
              <p>Conteúdo adaptativo</p>
            </div>
            <div className="grid-item">
              <h4>Item 3</h4>
              <p>Conteúdo adaptativo</p>
            </div>
            <div className="grid-item">
              <h4>Item 4</h4>
              <p>Conteúdo adaptativo</p>
            </div>
            <div className="grid-item">
              <h4>Item 5</h4>
              <p>Conteúdo adaptativo</p>
            </div>
            <div className="grid-item">
              <h4>Item 6</h4>
              <p>Conteúdo adaptativo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>Media Queries - Abordagem Mobile-First:</h3>
        <pre>{`/* Mobile First - Estilos Base (< 768px) */
.navbar {
  display: flex;
  flex-direction: column; /* Links empilhados */
}

.main-content {
  display: flex;
  flex-direction: column; /* Colunas empilhadas */
  gap: 1rem;
  padding: 1rem;
}

.column {
  width: 100%;
}

/* Tablet - a partir de 768px */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row; /* Links horizontais */
    justify-content: flex-end;
    align-items: center;
  }
  
  .main-content {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .column-left,
  .column-right {
    flex: 1; /* Colunas laterais iguais */
    min-width: 200px;
  }
  
  .column-center {
    flex: 2; /* Coluna central maior */
    min-width: 300px;
  }
}

/* Desktop - a partir de 992px */
@media (min-width: 992px) {
  .main-content {
    flex-wrap: nowrap; /* Não quebra linha */
    padding: 2rem;
  }
  
  .column-left {
    flex: 0 0 20%; /* 20% fixo */
  }
  
  .column-center {
    flex: 1; /* Ocupa espaço restante */
  }
  
  .column-right {
    flex: 0 0 25%; /* 25% fixo */
  }
}

/* Desktop Large - a partir de 1200px */
@media (min-width: 1200px) {
  .main-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .navbar {
    font-size: 1.1rem;
  }
}`}</pre>
      </div>

      <div className="code-snippet">
        <h3>Conceitos Importantes:</h3>
        <pre style={{ color: '#fff' }}>{`Mobile-First Approach:
• Começa com estilos para telas pequenas
• Adiciona complexidade progressivamente
• Usa min-width nas media queries

Breakpoints Comuns:
• 576px  - Landscape phones
• 768px  - Tablets
• 992px  - Desktops
• 1200px - Large desktops
• 1400px - Extra large

Vantagens:
✓ Performance em mobile
✓ Código mais limpo
✓ Progressively enhanced
✓ Facilita manutenção`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise2;
