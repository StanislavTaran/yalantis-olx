import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SimpleLabel from '../share/labels/SimpleLabel/SimpleLabel';
import routes from '../../constants/routes';
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
      <Link to={routes.INDEX.INDEX} className={styles.link}>
        <h1 className={styles.logo}>YOLX</h1>
      </Link>
      <div>
        {pathname !== routes.CART.INDEX ? (
          <div className={styles.cart}>
            <Link to={routes.CART.INDEX} className={styles.link}>
              <img src={cartSVG} alt="Cart" className={styles.cartImage} />
              <SimpleLabel overStyle={styles.price} text={`Total price : ${currencyFormatter(totalPrice) || 0}`} />
              <span className={styles.quantityIcon}>{totalQuantity}</span>
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
