import React from 'react';
import propTypes from 'prop-types';
import ProductCardBig from '../ProductCardBig/ProductCardBigContainer';
import styles from './ProductListCart.module.css';

export default function ProductListCart({ products }) {
  return (
    <ul className={styles.list}>
      {products.map(item => (
        <li className={styles.item} key={item.id}>
          <ProductCardBig product={item} withCountButtons />
        </li>
      ))}
    </ul>
  );
}

ProductListCart.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
};
