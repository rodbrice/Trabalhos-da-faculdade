import React from 'react';
import { ButtonVariant } from '../types/types';

// Exercício 7: Botão de Ação Genérico

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary',
  type = 'button'
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;


