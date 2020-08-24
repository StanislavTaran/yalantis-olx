import React from 'react';
import propTypes from 'prop-types';
import styles from './ProductCardBig.module.css';
import { isAlreadyInCart } from '../../helpers/productHelpers';
import { reducerForPrice } from '../../helpers/productHelpers';
import Button from '../share/buttons/Button/Button';
import CountButton from '../share/buttons/CountButton/CountButton';
import OriginLabel from '../share/labels/OriginLabel/OriginLabel';
import DateLabel from '../share/labels/DateLabel/DateLabel';
import SimpleLabel from '../share/labels/SimpleLabel/SimpleLabel';
import image from '../../images/default-avatar.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsIdInCart, getCart } from '../../redux/cart/cartSelectors';
import {
  addProductToCart,
  removeProductFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../redux/cart/cartOperatins';

export default function ProductCardBig({ product, withCountButtons, children }) {
  const productsInCart = useSelector(getProductsIdInCart);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const isInCart = isAlreadyInCart(product.id, productsInCart);
  const quantity = (cart[product.id] && cart[product.id].quantity) || 0;

  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt={product.name} className={styles.image} />
        <SimpleLabel overStyle={styles.name} text={product.name} />
        <SimpleLabel text={'Price'} value={product.price} />
        <OriginLabel origin={product.origin} />
        <DateLabel text={'Created at'} iso={product.createdAt} />
        <DateLabel text={'Updated at'} iso={product.updatedAt} />
        {children}
        {
          <div>
            {isInCart ? (
              <>
                <p>
                  Quantity in cart :{' '}
                  <CountButton onClick={() => dispatch(decrementQuantity(product.id))} type="decrement" /> {quantity}{' '}
                  <CountButton onClick={() => dispatch(incrementQuantity(product.id))} />
                </p>
                <SimpleLabel text={`Price for ${quantity} units`} value={reducerForPrice(0, cart[product.id])} />
                <Button onClick={() => dispatch(removeProductFromCart(product.id))}>Remove from cart</Button>
                {withCountButtons ? <div></div> : null}
              </>
            ) : (
              <Button onClick={() => dispatch(addProductToCart(product))} type="submit">
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
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    origin: propTypes.string.isRequired,
    createdAt: propTypes.string.isRequired,
    updatedAt: propTypes.string.isRequired,
    isEditable: propTypes.bool.isRequired,
  }).isRequired,
  withCountButtons: propTypes.bool,
  children: propTypes.node,
};

ProductCardBig.defaultProps = {
  withCountButtons: false,
};
