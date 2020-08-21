import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as productsActions from '../products/productsActions';

const errors = createReducer([], {
  [productsActions.getProductError]: (state, action) => [...state, ...action.payload],
  [productsActions.getProductsError]: (state, action) => [...state, ...action.payload],
});

const isLoading = createReducer(false, {
  [productsActions.getProductRequest]: () => true,
  [productsActions.getProductsRequest]: () => true,

  [productsActions.getProductsSucces]: () => false,
  [productsActions.getProductsSucces]: () => false,
  [productsActions.getProductsError]: () => false,
  [productsActions.getProductError]: () => false,
});

export default combineReducers({
  errors,
  isLoading,
});
