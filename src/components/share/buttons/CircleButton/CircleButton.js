import React from 'react';
import styles from './CircleButton.module.css';

export default function CircleButton({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
