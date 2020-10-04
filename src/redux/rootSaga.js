import { all } from 'redux-saga/effects';
import { watchProducts } from './products/productsSagas';

export default function* rootSaga() {
  yield all([watchProducts()]);
}
