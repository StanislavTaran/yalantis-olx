import React from 'react';
import propTypes from 'prop-types';
import ProductCardBig from '../ProductCardBig/ProductCardBigContainer';
import Button from '../share/buttons/Button/Button';
import styles from './ProductListCart.module.css';
import { reducerForPrice } from '../../helpers/productHelpers';

export default function ProductListCart({ products, totalPrice }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {products.map(item => (
          <li className={styles.item} key={item.id}>
            <ProductCardBig product={item} withCountButtons>
              <p className={styles.price}>Price: {reducerForPrice(0, item)} </p>
            </ProductCardBig>
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

ProductListCart.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
};
