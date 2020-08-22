import { connect } from 'react-redux';
import { getProductsIdInCart } from '../../redux/cart/cartSelectors';
import { addProductToCart, removeProductFromCart } from '../../redux/cart/cartOperatins';

import ProductItem from './ProductItem';

const mapStateToProps = state => ({
  productsInCart: getProductsIdInCart(state),
});

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: product => dispatch(addProductToCart(product)),
    removeProductFromCart: id => dispatch(removeProductFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
