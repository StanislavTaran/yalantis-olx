import * as productsActions from './productsActions';
import * as filtersActions from '../filters/filtersActions';
import * as appActions from '../app/appActions';
import * as olxAPI from '../../api/olxAPI';

import { toastr } from 'react-redux-toastr';
import { SUCCES, ERRORS } from '../../constants/notifications';

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

export const postProduct = data => dispatch => {
  dispatch(productsActions.postProductRequest());

  olxAPI
    .postProduct(data)
    .then(res => {
      dispatch(productsActions.postProductSucces(res.data));
      toastr.success(SUCCES.INDEX, SUCCES.PRODUCT.ADD_PRODUCT);
    })
    .catch(err => toastr.error(ERRORS.INDEX, ERRORS.UNKNOWN_ERROR))
    .finally(() => {
      dispatch(appActions.showProductForm(false));
    });
};

export const patchProduct = (id, data) => dispatch => {
  dispatch(productsActions.patchProductRequest());

  olxAPI
    .patchProduct(id, data)
    .then(res => {
      dispatch(productsActions.patchProductSucces(res.data));
      toastr.success(SUCCES.INDEX, SUCCES.PRODUCT.PATCH_PRODUCT);
    })
    .catch(err => toastr.error(ERRORS.INDEX, ERRORS.UNKNOWN_ERROR))
    .finally(() => {
      dispatch(appActions.showProductForm(false));
    });
};
