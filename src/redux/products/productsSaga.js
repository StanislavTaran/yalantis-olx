import { put, takeEvery, select } from 'redux-saga/effects';
import * as productsActions from '../products/productsActions';
import { mapFiltersToParams } from '../../helpers/mapFiltersToParams';

export function* fetchAllProducts() {}

export function* watchFetchAllProducts() {
  yield takeEvery(productsActions.getProductsRequest, fetchAllProducts);
}
