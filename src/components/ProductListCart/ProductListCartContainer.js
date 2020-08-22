import { connect } from 'react-redux';
import { getCart, getProductsInCart } from '../../redux/cart/cartSelectors';
import ProductListCart from './ProductListCart';

const mapStateToProps = state => ({
  products: getProductsInCart(state),
});

// const mapDispatchToProps = dispatch => {
//   return { fetchProducts: () => dispatch(fetchAllProducts()) };
// };

export default connect(mapStateToProps, null)(ProductListCart);
