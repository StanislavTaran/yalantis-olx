import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as productsActions from '../products/productsActions';
import { loaderOn, loaderOff } from './appActions';

const errors = createReducer(
  {},
  {
    [productsActions.getProductsError]: (state, action) => ({ ...action.payload }),
    [productsActions.getCurrentProductError]: (state, action) => ({ ...action.payload }),
  },
);

const isLoading = createReducer(false, {
  [productsActions.getProductsRequest]: () => true,
  [productsActions.getCurrentProductRequest]: () => true,
  [loaderOn]: () => true,

  [productsActions.getProductsSucces]: () => false,
  [productsActions.getProductsError]: () => false,
  [productsActions.getCurrentProductSucces]: () => false,
  [productsActions.getCurrentProductError]: () => false,
  [loaderOff]: () => false,

  [productsActions.getOriginsRequest]: () => true,
  [productsActions.getOriginsSucces]: () => false,
});

export default combineReducers({
  errors,
  isLoading,
});
