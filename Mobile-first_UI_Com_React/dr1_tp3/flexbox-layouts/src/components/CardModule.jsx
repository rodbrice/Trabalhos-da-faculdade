import React from 'react';
import styles from './Card.module.css';

const CardModule = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>Image</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CardModule;
