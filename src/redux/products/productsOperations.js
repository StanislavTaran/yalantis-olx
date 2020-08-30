import * as productsActions from './productsActions';
import * as olxAPI from '../../api/olxAPI';

export const fetchAllProducts = () => dispatch => {
  dispatch(productsActions.getProductsRequest());

  olxAPI
    .fetchProducts()
    .then(res => dispatch(productsActions.getProductsSucces(res.data.items)))
    .catch(err => dispatch(productsActions.getProductsError(err)));
};

export const fetchOneProduct = productId => dispatch => {
  dispatch(productsActions.getCurrentProductRequest());

  olxAPI
    .fetchOneProduct(productId)
    .then(res => dispatch(productsActions.getCurrentProductSucces(res.data)))
    .catch(err => dispatch(productsActions.getCurrentProductError(err)));
};
