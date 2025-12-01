import React from 'react';
import styles from './HeaderModule.module.css';

const HeaderModule = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Header Component</h1>
      <p className={styles.subtitle}>With CSS Modules</p>
    </header>
  );
};

export default HeaderModule;
