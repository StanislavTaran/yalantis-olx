import React from 'react';
import propTypes from 'prop-types';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import routes from '../../constants/routes';
import CircleButton from '../share/buttons/CircleButton/CircleButton';
import plusSVG from '../../images/plus.svg';
import cartSVG from '../../images/cart.svg';
import SimpleLabel from '../share/labels/SimpleLabel/SimpleLabel';
import currencyFormatter from '../../helpers/currencyFormatter';

export default function Header({ pathname, totalQuantity, totalPrice, handleOpenProductForm }) {
  return (
    <header className={styles.header}>
      <Link to={{ pathname: routes.INDEX.INDEX, state: { resetFilters: true } }} className={styles.link}>
        <h1 className={styles.logo}>YOLX</h1>
      </Link>

      <div className={styles.wrap}>
        {pathname !== routes.CART.INDEX ? (
          <>
            <NavLink
              className={styles.link}
              activeClassName={styles.activeLink}
              to={{ pathname: routes.OWN_PRODUCTS.INDEX, state: { resetFilters: true } }}
            >
              My Products
            </NavLink>
            <CircleButton onClick={handleOpenProductForm}>
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

Header.propTypes = {
  pathname: propTypes.string.isRequired,
  handleOpenProductForm: propTypes.func.isRequired,
  totalQuantity: propTypes.number.isRequired,
  totalprice: propTypes.number.isRequired,
};
