import React from 'react';
import styles from './Button.module.css';

const ButtonModule = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonModule;
