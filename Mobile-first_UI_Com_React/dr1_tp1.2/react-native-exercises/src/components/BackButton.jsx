import React from 'react';
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <Link to="/" className="back-button">
      ← Voltar para lista
    </Link>
  );
}

export default BackButton;

