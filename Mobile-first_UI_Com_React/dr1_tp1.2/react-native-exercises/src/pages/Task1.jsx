import React from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task1() {
  return (
    <div className="task-container">
      <BackButton />
      <div className="center-container">
        <h1 className="rn-text" style={{ color: 'white', fontSize: '2rem', textAlign: 'center', padding: '20px' }}>
          Bem-vindos ao meu TP1 de React Native
        </h1>
      </div>
    </div>
  );
}

export default Task1;

