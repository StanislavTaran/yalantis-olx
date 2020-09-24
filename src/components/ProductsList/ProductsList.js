import React from 'react';
import propTypes from 'prop-types';
import styles from './ProductsList.module.css';
import ProductItemContainer from '../ProductItem/ProductItemContainer';

export default function ProductsList({ products }) {
  return (
    <div className={styles.container}>
      <ul className={styles.productList}>
        {products.map(item => (
          <ProductItemContainer key={item.id} product={item} />
        ))}
      </ul>
    </div>
  );
}
ProductsList.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      origin: propTypes.string.isRequired,
      createdAt: propTypes.string.isRequired,
      updatedAt: propTypes.string.isRequired,
    }),
  ),
};
