import * as productsActions from './productsActions';
import * as olxAPI from '../../api/olxAPI';

export const fetchAllProducts = () => dispatch => {
  dispatch(productsActions.getProductsRequest());

  olxAPI
    .fetchProducts()
    .then(res => dispatch(productsActions.getProductsSucces(res.data.items)))
    .catch(err => dispatch(productsActions.getProductsError(err)));
};

export const fetchOneProduct = () => dispatch => {
  dispatch(productsActions.getProductRequest());

  olxAPI
    .fetchProduct()
    .then(res => dispatch(productsActions.getProductSucces(res.data)))
    .catch(err => dispatch(productsActions.getProductError(err)));
};
