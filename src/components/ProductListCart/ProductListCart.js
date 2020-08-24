import React from 'react';
import ProductCardBig from '../ProductCardBig/ProductCardBig';
import Button from '../share/buttons/Button/Button';
import styles from './ProductListCart.module.css';

import { getProductsInCart, getTotalPrice } from '../../redux/cart/cartSelectors';
import { useSelector } from 'react-redux';

export default function ProductListCart() {
  const products = useSelector(getProductsInCart);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {products.map(item => (
          <li className={styles.item} key={item.id}>
            <ProductCardBig product={item} withCountButtons />
          </li>
        ))}
      </ul>
      {totalPrice > 0 ? (
        <Button type="submit">Place your order {totalPrice} </Button>
      ) : (
        <h2>Your cart is empty now...</h2>
      )}
    </div>
  );
}
