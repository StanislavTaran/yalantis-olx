import { all } from 'redux-saga/effects';
import { watchProductsMain } from './products/productsSaga';

export default function* rootSaga() {
  yield all([watchProductsMain()]);
}
