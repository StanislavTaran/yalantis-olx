import * as productsActions from './productsActions';
import * as filtersActions from '../filters/filtersActions';
import * as olxAPI from '../../api/olxAPI';

export const fetchOwnProducts = props => dispatch => {
  dispatch(productsActions.getOwnProductsRequest());

  olxAPI
    .fetchOwnProducts(props)
    .then(res => {
      dispatch(productsActions.getOwnProductsSucces(res.data));
      dispatch(filtersActions.setPage(res.data.page));
    })
    .catch(err => {
      dispatch(productsActions.getOwnProductsError(err));
    });
};

export const fetchAllProducts = props => dispatch => {
  dispatch(productsActions.getProductsRequest());

  olxAPI
    .fetchProducts(props)
    .then(res => {
      dispatch(productsActions.getProductsSucces(res.data));
      dispatch(filtersActions.setPage(res.data.page));
    })
    .catch(err => dispatch(productsActions.getProductsError(err)));
};

export const fetchOneProduct = productId => dispatch => {
  dispatch(productsActions.getCurrentProductRequest());

  olxAPI
    .fetchOneProduct(productId)
    .then(res => dispatch(productsActions.getCurrentProductSucces(res.data)))
    .catch(err => dispatch(productsActions.getCurrentProductError(err)));
};

export const fetchOrigins = () => dispatch => {
  dispatch(productsActions.getOriginsRequest());

  olxAPI
    .fetchOrigins()
    .then(res => dispatch(productsActions.getOriginsSucces(res.data.items)))
    .catch(err => dispatch(productsActions.getOriginsError(err)));
};
