import { put, call, takeEvery, take, select } from 'redux-saga/effects';
import * as productsActions from '../products/productsActions';
import * as appActions from '../app/appActions';
import { getFilters } from '../filters/filtersSelectors';
import { mapFiltersToParams } from '../../helpers/mapFiltersToParams';
import * as olxAPI from '../../api/olxAPI';

import { toastr } from 'react-redux-toastr';
import { SUCCES, ERRORS } from '../../constants/notifications';

export function* fetchAllProducts() {
  try {
    const params = yield select(getFilters);
    const res = yield call(olxAPI.fetchProducts, mapFiltersToParams(params));

    yield put(productsActions.getProductsSucces(res.data));
  } catch (e) {
    yield put(productsActions.getProductsError(e));
  }
}

export function* fetchOwnProducts() {
  try {
    const params = yield select(getFilters);
    const res = yield call(olxAPI.fetchOwnProducts, mapFiltersToParams(params));

    yield put(productsActions.getOwnProductsSucces(res.data));
  } catch (e) {
    yield put(productsActions.getOwnProductsError(e));
  }
}

export function* fetchOneProduct() {
  try {
    const { payload: productId } = yield take(productsActions.getCurrentProductRequest);
    const res = yield call(olxAPI.fetchOneProduct, productId);
    yield put(productsActions.getCurrentProductSucces(res.data));
  } catch (e) {
    yield put(productsActions.getCurrentProductError(e));
  }
}

export function* getOrigins() {
  try {
    const res = yield call(olxAPI.fetchOrigins);
    yield put(productsActions.getOriginsSucces(res.data.items));
  } catch (e) {
    yield put(productsActions.getOriginsError(e));
  }
}
// can exist problem take/takeEvery takeEvery=> take -- 2 action for success
export function* postProduct() {
  try {
    const { payload: data } = yield take(productsActions.postProductRequest);
    const res = yield call(olxAPI.postProduct, data);
    yield put(productsActions.postProductSucces(res.data));
    yield call(toastr.success(SUCCES.INDEX, SUCCES.PRODUCT.ADD_PRODUCT));
  } catch (e) {
    yield put(productsActions.postProductError(e));
    yield call(toastr.error(ERRORS.INDEX, ERRORS.UNKNOWN_ERROR));
  } finally {
    yield put(appActions.showProductForm(false));
  }
}

export function* watchProducts() {
  yield takeEvery(productsActions.getOriginsRequest, getOrigins);
  yield takeEvery(productsActions.getOwnProductsRequest, fetchOwnProducts);
  yield takeEvery(productsActions.getProductsRequest, fetchAllProducts);
  yield takeEvery(productsActions.getCurrentProductRequest, fetchOneProduct);
}

//
// export default function* root {
//   yield fork(watcher1);
//   yield fork(watcher2);
// }
