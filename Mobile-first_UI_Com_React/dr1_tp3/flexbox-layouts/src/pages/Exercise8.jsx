import React from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import CardModule from '../components/CardModule';

function Exercise8() {
  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h1>Exercício 8: Card com CSS Modules</h1>
        <p className="exercise-description">
          Componente Card estilizado com CSS Modules para melhor organização e escopo de estilos.
        </p>
        <BackButton />
      </div>

      <div className="demo-area">
        <div className="demo-title">Card Component:</div>
        <CardModule 
          title="Product Card"
          description="This card is styled using CSS Modules, which provides scoped and modular CSS."
        />
      </div>

      <div className="code-snippet">
        <h3>Card.module.css:</h3>
        <pre>{`.card {
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.description {
  color: #666;
  line-height: 1.6;
}`}</pre>
      </div>

      <div className="code-snippet">
        <h3>Card.jsx:</h3>
        <pre>{`import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;`}</pre>
      </div>

      <Footer />
    </div>
  );
}

export default Exercise8;
