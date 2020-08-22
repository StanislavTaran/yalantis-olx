import React from 'react';
import propTypes from 'prop-types';
import styles from './ProductCardBig.module.css';
import { getDateString } from '../../helpers/dateOperations';
import { isAlreadyInCart } from '../../helpers/productChecks';
import Button from '../share/buttons/Button/Button';
import CountButton from '../share/buttons/CountButton/CountButton';

export default function ProductCardBig({
  product,
  addToCart,
  removeFromCart,
  productsInCart,
  withCountButtons,
  cart,
  incrementQuantity,
  decrementQuantity,
}) {
  const isInCart = isAlreadyInCart(product.id, productsInCart);
  const quantity = (cart[product.id] && cart[product.id].quantity) || 0;
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>Price : {product.price} USD</p>
        <p className={styles.origin}>Origin : {product.origin}</p>
        <p className={styles.dateOfCreated}>Created at : {getDateString(product.createdAt)}</p>
      </div>

      {
        <div>
          {isInCart ? (
            <>
              <p>
                Quantity in cart : <CountButton onClick={() => decrementQuantity(product.id)} type="decrement" />{' '}
                {quantity} <CountButton onClick={() => incrementQuantity(product.id)} />
              </p>
              <Button onClick={() => removeFromCart(product.id)}>Remove from cart</Button>
              {withCountButtons ? <div></div> : null}
            </>
          ) : (
            <Button onClick={() => addToCart(product)} type="submit">
              Add to cart
            </Button>
          )}
        </div>
      }
    </div>
  );
}

ProductCardBig.propTypes = {
  product: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    origin: propTypes.string.isRequired,
    createdAt: propTypes.string.isRequired,
    updatedAt: propTypes.string.isRequired,
    isEditable: propTypes.bool.isRequired,
  }).isRequired,
  addToCart: propTypes.func.isRequired,
  removeFromCart: propTypes.func.isRequired,
  withCountButtons: propTypes.bool,
};

ProductCardBig.defaultProps = {
  withCountButtons: false,
};
