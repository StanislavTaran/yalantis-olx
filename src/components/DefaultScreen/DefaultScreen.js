import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PAGE_ROUTE } from '../../constants/routes';
import styles from './DefaultScreen.module.css';

export default function DefaultScreen() {
  return (
    <div className={styles.container}>
      <h2>Something wents wrong. Our experts are already working on this</h2>
      <Link to={HOME_PAGE_ROUTE}>HOME PAGE</Link>
    </div>
  );
}
