import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDateString } from '../../helpers/dateOperations';
import Button from '../share/buttons/Button/Button';
import { isAlreadyInCart } from '../../helpers/productHelpers';
import styles from './ProductItem.module.css';
import image from '../../images/default-avatar.jpg';

export default function ProductItem({ product, addProductToCart, removeProductFromCart, productsInCart }) {
  const isInCart = isAlreadyInCart(product.id, productsInCart);
  let styleOrigin;
  switch (product.origin) {
    case 'asia':
      styleOrigin = styles.styleOriginAsia;
      break;
    case 'europe':
      styleOrigin = styles.styleOriginEurope;
      break;
    case 'usa':
      styleOrigin = styles.styleOriginUsa;
      break;
    case 'africa':
      styleOrigin = styles.styleOriginAfrica;
      break;
    default:
      styleOrigin = styles.styleOrigin;
  }

  return (
    <li className={styles.container}>
      <Link to={`/products/${product.id}`} className={styles.link}>
        <img src={image} alt={product.name} className={styles.image} />
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>Price : {product.price} USD</p>
        <p>
          <span className={styleOrigin}>{product.origin}</span>
        </p>
        <p className={styles.cursive}>Created at : {getDateString(product.createdAt)}</p>
        <p className={styles.cursive}>Updated at : {getDateString(product.updatedAt)}</p>
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
