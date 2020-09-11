import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SimpleLabel from '../share/labels/SimpleLabel/SimpleLabel';
import routes from '../../constants/routes';
import CircleButton from '../share/buttons/CircleButton/CircleButton';
import styles from './Header.module.css';
import cartSVG from '../../images/cart.svg';
import plusSVG from '../../images/plus.svg';
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

      <div className={styles.wrap}>
        {pathname !== routes.CART.INDEX ? (
          <>
            <CircleButton>
              <img src={plusSVG} alt="add product" />
            </CircleButton>
            <div className={styles.cart}>
              <Link to={routes.CART.INDEX} className={styles.link}>
                <img src={cartSVG} alt="Cart" className={styles.cartImage} />
                <SimpleLabel overStyle={styles.price} text={`Total : ${currencyFormatter(totalPrice) || 0}`} />
                <span className={styles.quantityIcon}>{totalQuantity}</span>
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
