import React from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task9() {
  return (
    <div className="task-container">
      <BackButton />
      <div className="profile-container" style={{ backgroundColor: '#f5f5f5', minHeight: 'calc(100vh - 100px)' }}>
        <img
          className="profile-image"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
          alt="Foto de perfil"
        />
        
        <h1 style={{ fontSize: '2rem', color: '#333', marginTop: '10px' }}>
          Ana Silva
        </h1>
        
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#666', 
          textAlign: 'center', 
          maxWidth: '600px',
          lineHeight: '1.6',
          padding: '0 20px'
        }}>
          Desenvolvedora Full Stack apaixonada por tecnologia e inovação. 
          Especialista em React Native, Node.js e UX/UI Design. 
          Sempre em busca de novos desafios e aprendizados na área de desenvolvimento mobile.
        </p>

        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>150</p>
            <p style={{ color: '#666' }}>Projetos</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>2.5k</p>
            <p style={{ color: '#666' }}>Seguidores</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>500</p>
            <p style={{ color: '#666' }}>Seguindo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task9;

