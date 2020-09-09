import React from 'react';
import propTypes from 'prop-types';
import styles from './ProductCardBig.module.css';
import { isAlreadyInCart } from '../../helpers/productHelpers';
import { reducerForPrice } from '../../helpers/productHelpers';
import currencyFormatter from '../../helpers/currencyFormatter';
import Button from '../share/buttons/Button/Button';
import CountButton from '../share/buttons/CountButton/CountButton';
import SimpleLabel from '../share/labels/SimpleLabel/SimpleLabel';
import BaseProductInfo from '../BaseProductInfo/BaseProductInfo';

import { useSelector, useDispatch } from 'react-redux';
import { getProductsIdInCart, getCart } from '../../redux/cart/cartSelectors';
import {
  addProductToCart,
  removeProductFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../redux/cart/cartOperatins';

const mapPriceToCart = product => {
  return currencyFormatter(reducerForPrice(0, product));
};

export default function ProductCardBig({ product, withCountButtons, children }) {
  const productsInCart = useSelector(getProductsIdInCart);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const isInCart = isAlreadyInCart(product.id, productsInCart);
  const quantity = (cart[product.id] && cart[product.id].quantity) || 0;

  const handleProductIncrement = () => dispatch(incrementQuantity(product.id));
  const handleProductDecrement = () => dispatch(decrementQuantity(product.id));
  const handleAddProductToCart = () => dispatch(addProductToCart(product));
  const handleRemoveProductFromCart = () => dispatch(removeProductFromCart(product.id));

  return (
    <div className={styles.container}>
      <div>
        <BaseProductInfo product={product} />

        {children}
        {
          <div>
            {isInCart ? (
              <>
                {withCountButtons ? (
                  <p>
                    Quantity in cart : <CountButton onClick={handleProductDecrement}>-</CountButton> {quantity}{' '}
                    <CountButton onClick={handleProductIncrement}>+</CountButton>
                    <SimpleLabel text={`Price for ${quantity} units : ${mapPriceToCart(cart[product.id])}`} />
                  </p>
                ) : null}

                <Button onClick={handleRemoveProductFromCart}>Remove from cart</Button>
              </>
            ) : (
              <Button onClick={handleAddProductToCart} type="submit">
                Add to cart
              </Button>
            )}
          </div>
        }
      </div>
    </div>
  );
}

ProductCardBig.propTypes = {
  product: propTypes.shape({
    id: propTypes.string.isRequired,
  }).isRequired,
  withCountButtons: propTypes.bool,
  children: propTypes.node,
};

ProductCardBig.defaultProps = {
  withCountButtons: false,
};
