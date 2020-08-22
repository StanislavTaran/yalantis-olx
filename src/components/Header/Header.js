import React from 'react';
import proptypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import cartSVG from '../../images/cart.svg';

export default function Header({ totalPrice }) {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <h1 className={styles.logo}>YOLX</h1>
      </Link>
      <div>
        {pathname !== '/cart' ? (
          <div className={styles.cart}>
            <Link to="/cart" className={styles.link}>
              <img src={cartSVG} alt="Cart" className={styles.cartImage} />
              <p className={styles.price}>Total price : {totalPrice}</p>
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}

Header.propTypes = { totalPrice: proptypes.number.isRequired };
