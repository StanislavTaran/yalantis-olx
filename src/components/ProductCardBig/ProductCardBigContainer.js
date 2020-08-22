import { connect } from 'react-redux';
import { getProductsIdInCart, getCart } from '../../redux/cart/cartSelectors';
import {
  addProductToCart,
  removeProductFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../redux/cart/cartOperatins';
import ProductCardBig from './ProductCardBig';

const mapStateToProps = state => ({
  productsInCart: getProductsIdInCart(state),
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addProductToCart(id)),
    removeFromCart: id => dispatch(removeProductFromCart(id)),
    incrementQuantity: id => dispatch(incrementQuantity(id)),
    decrementQuantity: id => dispatch(decrementQuantity(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardBig);
