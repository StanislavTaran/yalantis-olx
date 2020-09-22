import { all } from 'redux-saga/effects';
import { watchProducts } from './products/productsSaga';

export default function* rootSaga() {
  yield all([watchProducts()]);
}
