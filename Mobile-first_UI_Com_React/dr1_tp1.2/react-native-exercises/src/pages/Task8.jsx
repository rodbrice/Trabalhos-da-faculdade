import React from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task8() {
  const handlePress1 = () => {
    alert('👆 Você tocou no primeiro botão!');
  };

  const handlePress2 = () => {
    alert('✨ Você tocou no segundo botão!');
  };

  const handlePress3 = () => {
    alert('🎉 Você tocou no terceiro botão!');
  };

  return (
    <div className="task-container">
      <BackButton />
      <div className="button-container" style={{ minHeight: 'calc(100vh - 100px)', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>TouchableOpacity</h2>
        
        <div
          className="rn-touchable"
          style={{
            backgroundColor: '#6C5CE7',
            color: 'white',
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '12px',
            minWidth: '200px',
            textAlign: 'center',
            userSelect: 'none'
          }}
          onClick={handlePress1}
        >
          Toque Aqui (Roxo)
        </div>

        <div
          className="rn-touchable"
          style={{
            backgroundColor: '#00B894',
            color: 'white',
            padding: '12px 35px',
            fontSize: '16px',
            borderRadius: '8px',
            minWidth: '200px',
            textAlign: 'center',
            userSelect: 'none'
          }}
          onClick={handlePress2}
        >
          Toque Aqui (Verde)
        </div>

        <div
          className="rn-touchable"
          style={{
            backgroundColor: '#FD79A8',
            color: 'white',
            padding: '18px 40px',
            fontSize: '20px',
            borderRadius: '25px',
            width: '90%',
            maxWidth: '600px',
            textAlign: 'center',
            fontWeight: 'bold',
            userSelect: 'none',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
          onClick={handlePress3}
        >
          Toque Aqui (Rosa)
        </div>
      </div>
    </div>
  );
}

export default Task8;

