import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as productsActions from '../products/productsActions';

const errors = createReducer(
  {},
  {
    [productsActions.getProductsError]: (state, action) => action.payload,
  },
);

const isLoading = createReducer(false, {
  [productsActions.getProductsRequest]: () => true,
  [productsActions.getProductsSucces]: () => false,
  [productsActions.getProductsError]: () => false,
});

export default combineReducers({
  errors,
  isLoading,
});
