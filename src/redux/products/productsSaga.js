import { put, call, takeEvery, take, fork, select, debounce } from 'redux-saga/effects';
import * as productsActions from '../products/productsActions';
import * as appActions from '../app/appActions';
import { getFilters } from '../filters/filtersSelectors';
import { mapFiltersToParams } from '../../helpers/mapFiltersToParams';
import * as olxAPI from '../../api/olxAPI';
import { toastr } from 'react-redux-toastr';
import { SUCCES, ERRORS } from '../../constants/notifications';

export function* fetchAllProducts() {
  try {
    const filters = yield select(getFilters);
    const params = mapFiltersToParams(filters);
    const res = yield call(olxAPI.fetchProducts, params);

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

export function* getOrigins() {
  try {
    const res = yield call(olxAPI.fetchOrigins);
    yield put(productsActions.getOriginsSucces(res.data.items));
  } catch (e) {
    yield put(productsActions.getOriginsError(e));
  }
}

export function* fetchOneProduct() {
  while (true) {
    try {
      const { payload: productId } = yield take(productsActions.getCurrentProductRequest);
      const res = yield call(olxAPI.fetchOneProduct, productId);
      yield put(productsActions.getCurrentProductSucces(res.data));
    } catch (e) {
      yield put(productsActions.getCurrentProductError(e));
    }
  }
}

export function* postProduct() {
  while (true) {
    try {
      const { payload: data } = yield take(productsActions.postProductRequest);
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
}

export function* patchProduct() {
  while (true) {
    try {
      const {
        payload: { productId, values },
      } = yield take(productsActions.patchProductRequest);
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
}

export function* watchProducts() {
  yield takeEvery(productsActions.getOriginsRequest, getOrigins);
  yield debounce(1000, productsActions.getOwnProductsRequest, fetchOwnProducts);
  yield debounce(1000, productsActions.getProductsRequest, fetchAllProducts);
}

export function* watchProductsMain() {
  yield fork(watchProducts);
  yield fork(fetchOneProduct);
  yield fork(postProduct);
  yield fork(patchProduct);
}
