import React from 'react';
import proptypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header({ totalPrice }) {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <h1 className={styles.logo}>YOLX</h1>
      </Link>
      <div className={styles.cart}>
        {pathname !== '/cart' ? (
          <Link to="/cart" className={styles.link}>
            <p>Total price : {totalPrice}</p>
          </Link>
        ) : null}
      </div>
    </header>
  );
}

Header.propTypes = { totalPrice: proptypes.number.isRequired };
