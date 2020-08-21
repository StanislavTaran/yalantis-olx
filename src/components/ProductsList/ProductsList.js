import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItemContainer';
import styles from './ProductsList.module.css';

export default function ProductsList({ products, fetchProducts }) {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ul className={styles.productList}>
      {products.map(item => (
        <ProductItem key={item.id} product={item} />
      ))}
    </ul>
  );
}

ProductsList.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
  fetchProducts: propTypes.func.isRequired,
};
