import { put, call, takeEvery, select, delay } from 'redux-saga/effects';
import * as productsActions from '../products/productsActions';
import * as appActions from '../app/appActions';
import { getFilters } from '../filters/filtersSelectors';
import { mapFiltersToParams } from '../../helpers/mapFiltersToParams';
import { pushToUrl } from '../../helpers/history/URLHelpers';
import * as olxAPI from '../../api/olxAPI';
import { toastr } from 'react-redux-toastr';
import { SUCCES, ERRORS } from '../../constants/notifications';

export function* fetchAllProducts() {
  try {
    const filters = yield select(getFilters);
    const params = mapFiltersToParams(filters);
    yield delay(700);

    const res = yield call(olxAPI.fetchProducts, params);
    yield put(productsActions.getProductsSucces(res.data));
    yield call(pushToUrl, params);
  } catch (e) {
    yield put(productsActions.getProductsError(e));
  }
}

export function* fetchOwnProducts() {
  try {
    const filters = yield select(getFilters);
    const params = mapFiltersToParams(filters);
    yield delay(700);

    const res = yield call(olxAPI.fetchOwnProducts, params);
    yield put(productsActions.getOwnProductsSucces(res.data));
    yield call(pushToUrl, params);
  } catch (e) {
    yield put(productsActions.getOwnProductsError(e));
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

export function* fetchOneProduct({ payload: productId }) {
  try {
    const res = yield call(olxAPI.fetchOneProduct, productId);
    yield put(productsActions.getCurrentProductSucces(res.data));
  } catch (e) {
    yield put(productsActions.getCurrentProductError(e));
  }
}

export function* postProduct({ payload: data }) {
  try {
    const res = yield call(olxAPI.postProduct, data);
    yield put(productsActions.postProductSucces(res.data));
    toastr.success(SUCCES.INDEX, SUCCES.PRODUCT.ADD_PRODUCT);
  } catch (e) {
    yield put(productsActions.postProductError(e));
    toastr.error(ERRORS.INDEX, ERRORS.UNKNOWN_ERROR);
  } finally {
    yield put(appActions.showProductForm(false));
  }
}

export function* patchProduct({ payload: { productId, values } }) {
  try {
    const res = yield call(olxAPI.patchProduct, { productId, values });
    yield put(productsActions.patchProductSucces(res.data));
    toastr.success(SUCCES.INDEX, SUCCES.PRODUCT.PATCH_PRODUCT);
  } catch (e) {
    yield put(productsActions.patchProductError(e));
    toastr.error(ERRORS.INDEX, ERRORS.UNKNOWN_ERROR);
  } finally {
    yield put(appActions.showProductForm(false));
  }
}

export function* watchProducts() {
  yield takeEvery(productsActions.getOriginsRequest, getOrigins);
  yield takeEvery(productsActions.getOwnProductsRequest, fetchOwnProducts);
  yield takeEvery(productsActions.getProductsRequest, fetchAllProducts);
  yield takeEvery(productsActions.getCurrentProductRequest, fetchOneProduct);
  yield takeEvery(productsActions.postProductRequest, postProduct);
  yield takeEvery(productsActions.patchProductRequest, patchProduct);
}
