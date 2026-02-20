import React from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task3() {
  return (
    <div className="task-container">
      <BackButton />
      <div className="center-container">
        <div className="image-container" style={{ maxWidth: '90%', width: '600px' }}>
          <img
            className="rn-image"
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            alt="Paisagem montanhosa"
            style={{ borderRadius: '12px' }}
          />
          <p className="rn-text" style={{ color: 'white', fontSize: '1.1rem', textAlign: 'center', lineHeight: '1.6' }}>
            Uma bela paisagem montanhosa com picos cobertos de neve ao fundo e um vale verdejante à frente, 
            capturando a majestade da natureza.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Task3;

