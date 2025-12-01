import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

// Componente Card com inline styles
const Card = ({ title, description, imageUrl }) => {
  const cardStyle = {
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    background: 'white',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    maxWidth: '400px',
    margin: '0 auto'
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    margin: 0
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    margin: 0
  };

  return (
    <div style={cardStyle} onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    }} onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }}>
      {imageUrl && <div style={imageStyle} />}
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

// Componente Button com inline styles
const Button = ({ text, onClick, variant = 'primary' }) => {
  const baseButtonStyle = {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    },
    secondary: {
      background: '#6c757d',
      color: 'white'
    },
    success: {
      background: '#28a745',
      color: 'white'
    }
  };

  const buttonStyle = {
    ...baseButtonStyle,
    ...variantStyles[variant]
  };

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      }}
    >
      {text}
    </button>
  );
};

function Exercise3() {
  const handleButtonClick = () => {
    alert('Botão clicado!');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
    padding: '2rem'
  };

  const buttonsContainerStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 3: Card e Button com Inline Styles</h1>
        <p className="exercise-description">
          Componentes React estilizados com inline styles. 
          O Card tem borda, sombra, padding e layout flexível. 
          O Button tem variantes de cor e efeitos hover.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Demonstração dos Componentes:</div>
        
        <div style={containerStyle}>
          <Card 
            title="Card Estilizado"
            description="Este é um componente Card com estilos inline aplicados. Possui borda arredondada, sombra, padding e efeito hover. Todos os estilos foram aplicados usando a prop style do React."
            imageUrl="placeholder"
          />
          
          <div style={buttonsContainerStyle}>
            <Button text="Botão Primário" onClick={handleButtonClick} variant="primary" />
            <Button text="Botão Secundário" onClick={handleButtonClick} variant="secondary" />
            <Button text="Botão Sucesso" onClick={handleButtonClick} variant="success" />
          </div>
        </div>
      </div>

      <div className="code-snippet">
        <h3>Componente Card.js com Inline Styles:</h3>
        <pre>{`const Card = ({ title, description, imageUrl }) => {
  const cardStyle = {
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    background: 'white',
    transition: 'transform 0.3s ease'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333'
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6'
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};`}</pre>
      </div>

      <div className="code-snippet">
        <h3>Componente Button.js com Inline Styles:</h3>
        <pre>{`const Button = ({ text, onClick, variant = 'primary' }) => {
  const baseStyle = {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    },
    secondary: {
      background: '#6c757d',
      color: 'white'
    }
  };

  const buttonStyle = {
    ...baseStyle,
    ...variants[variant]
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};`}</pre>
      </div>

      <div className="code-snippet">
        <h3>Usando no App.js:</h3>
        <pre>{`import React from 'react';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Card 
        title="Meu Card"
        description="Descrição do card"
      />
      
      <Button 
        text="Clique Aqui" 
        onClick={() => alert('Clicado!')}
        variant="primary"
      />
    </div>
  );
}`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise3;
