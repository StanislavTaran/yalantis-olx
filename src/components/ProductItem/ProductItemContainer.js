import { connect } from 'react-redux';

import ProductItem from './ProductItem';

// const mapStateToProps = state => ({
//   products: getProducts(state),
// });

// const mapDispatchToProps = dispatch => {
//   return { fetchProducts: () => dispatch(fetchAllProducts()) };
// };

export default connect()(ProductItem);
