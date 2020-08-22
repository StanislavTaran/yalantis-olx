import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as productsActions from '../products/productsActions';
import { loaderOn, loaderOff } from './appActions';

const errors = createReducer(
  {},
  {
    [productsActions.getProductsError]: (state, action) => action.payload,
  },
);

const isLoading = createReducer(false, {
  [productsActions.getProductsRequest]: () => true,
  [loaderOn]: () => true,

  [productsActions.getProductsSucces]: () => false,
  [productsActions.getProductsError]: () => false,
  [loaderOff]: () => false,
});

export default combineReducers({
  errors,
  isLoading,
});
