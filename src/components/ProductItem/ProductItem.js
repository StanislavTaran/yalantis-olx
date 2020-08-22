import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDateString } from '../../helpers/dateOperations';
import Button from '../share/buttons/Button/Button';
import { isAlreadyInCart } from '../../helpers/productChecks';
import styles from './ProductItem.module.css';

export default function ProductItem({
  product,
  addProductToCart,
  removeProductFromCart,
  productsInCart,
  fetchCurrentProduct,
}) {
  const isInCart = isAlreadyInCart(product.id, productsInCart);

  return (
    <li className={styles.container}>
      <Link to={`/products/${product.id}`} className={styles.link}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>Price : {product.price} USD</p>
        <p className={styles.origin}>Origin : {product.origin}</p>
        <p className={styles.dateOfCreated}>Created at : {getDateString(product.createdAt)}</p>
      </Link>

      <div>
        {isInCart ? (
          <Button onClick={() => removeProductFromCart(product.id)}>Remove from cart</Button>
        ) : (
          <Button type="submit" onClick={() => addProductToCart(product)}>
            Add to cart
          </Button>
        )}
      </div>
    </li>
  );
}

ProductItem.propTypes = {
  product: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    origin: propTypes.string.isRequired,
    createdAt: propTypes.string.isRequired,
    updatedAt: propTypes.string.isRequired,
    isEditable: propTypes.bool.isRequired,
  }),
  addProductToCart: propTypes.func.isRequired,
  removeProductFromCart: propTypes.func.isRequired,
};
