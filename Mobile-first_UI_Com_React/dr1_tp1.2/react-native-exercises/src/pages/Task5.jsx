import React from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task5() {
  return (
    <div className="task-container">
      <BackButton />
      <div className="center-container" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', maxWidth: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 calc(50% - 5px)', minWidth: '250px', maxWidth: 'calc(50% - 5px)' }}>
            <img
              className="rn-image"
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
              alt="Natureza 1"
              style={{ borderRadius: '8px', width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <p className="rn-text" style={{ color: 'white', marginTop: '10px', textAlign: 'center' }}>
              Floresta tranquila com luz solar filtrando através das árvores
            </p>
          </div>
          
          <div style={{ flex: '1 1 calc(50% - 5px)', minWidth: '250px', maxWidth: 'calc(50% - 5px)' }}>
            <img
              className="rn-image"
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
              alt="Natureza 2"
              style={{ borderRadius: '8px', width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <p className="rn-text" style={{ color: 'white', marginTop: '10px', textAlign: 'center' }}>
              Campo verde exuberante com montanhas ao horizonte
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task5;

