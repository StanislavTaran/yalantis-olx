import React from 'react';
import proptypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import cartSVG from '../../images/cart.svg';
import currencyFormatter from '../../helpers/currencyFormatter';
import { getTotalPrice, getTotalQuantity } from '../../redux/cart/cartSelectors';

export default function Header() {
  const { pathname } = useLocation();
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

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
              <p className={styles.price}>Total price : {currencyFormatter(totalPrice)}</p>
              <span className={styles.quantityIcon}>{totalQuantity}</span>
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}

Header.propTypes = {
  totalPrice: proptypes.number.isRequired,
  totalQuantity: proptypes.number.isRequired,
};
