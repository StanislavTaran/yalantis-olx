import { connect } from 'react-redux';
import { getProductsInCart, getTotalPrice } from '../../redux/cart/cartSelectors';
import ProductListCart from './ProductListCart';

const mapStateToProps = state => ({
  products: getProductsInCart(state),
  totalPrice: getTotalPrice(state),
});

export default connect(mapStateToProps, null)(ProductListCart);
