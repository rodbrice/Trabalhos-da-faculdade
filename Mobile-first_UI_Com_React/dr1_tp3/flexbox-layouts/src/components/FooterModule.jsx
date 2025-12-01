import React from 'react';
import styles from './FooterModule.module.css';

const FooterModule = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>&copy; 2025 My Website</p>
      <p className={styles.text}>Built with React and CSS Modules</p>
    </footer>
  );
};

export default FooterModule;
