import React from 'react';
import proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header({ totalPrice = 0 }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>YOLX</h1>
      <div className={styles.cart}>
        <Link to="/cart" className={styles.link}>
          <p>Total price : {totalPrice}</p>
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = { totalPrice: proptypes.number.isRequired };
