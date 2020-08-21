import { connect } from 'react-redux';
import { getProducts } from '../../redux/products/productsSelectors';
import { fetchAllProducts } from '../../redux/products/productsOperations';
import ProductsList from './ProductsList';

const mapStateToProps = state => ({
  products: getProducts(state),
});

const mapDispatchToProps = dispatch => {
  return { fetchProducts: () => dispatch(fetchAllProducts()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
