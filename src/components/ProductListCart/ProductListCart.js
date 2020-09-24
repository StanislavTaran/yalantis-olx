import React from 'react';
import propTypes from 'prop-types';
import styles from './ProductListCart.module.css';
import ProductCardBigContainer from '../ProductCardBig/ProductCardBigContainer';
import Button from '../share/buttons/Button/Button';

export default function ProductListCart({ products, totalPrice }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {products.map(item => (
          <li className={styles.item} key={item.id}>
            <ProductCardBigContainer product={item} withCountButtons />
          </li>
        ))}
      </ul>
      {totalPrice > 0 ? (
        <Button type="submit">{`Place your order ${totalPrice}`} </Button>
      ) : (
        <h2>Your cart is empty now...</h2>
      )}
    </div>
  );
}

ProductListCart.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      origin: propTypes.string.isRequired,
      createdAt: propTypes.string.isRequired,
      updatedAt: propTypes.string.isRequired,
    }),
  ),
  totalPrice: propTypes.number.isRequired,
};
