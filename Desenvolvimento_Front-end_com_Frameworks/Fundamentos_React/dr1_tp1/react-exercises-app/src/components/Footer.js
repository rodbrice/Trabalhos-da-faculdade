import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#f8f9fa',
      borderTop: '1px solid #e0e0e0',
      padding: '1rem 0',
      textAlign: 'center',
      marginTop: 'auto',
      color: '#666',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <p style={{ margin: 0 }}>
          2025 <strong>Brice Roduit</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;