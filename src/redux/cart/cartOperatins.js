import { incrementProductQuantity, decrementProductQuantity, addToCart, removeFromCart } from './cartActions';

export const incrementQuantity = productId => dispatch => {
  dispatch(incrementProductQuantity(productId));
};

export const decrementQuantity = productId => dispatch => {
  dispatch(decrementProductQuantity(productId));
};

export const addProductToCart = productId => dispatch => {
  dispatch(addToCart(productId));
};

export const removeProductFromCart = productId => dispatch => {
  dispatch(removeFromCart(productId));
};
