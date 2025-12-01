import React from 'react';
import styles from './ContentModule.module.css';

const ContentModule = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Content Component</h2>
      <p className={styles.paragraph}>
        This is the main content area styled with CSS Modules.
      </p>
      <p className={styles.paragraph}>
        CSS Modules help scope styles to specific components.
      </p>
    </div>
  );
};

export default ContentModule;
