import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as productsActions from '../products/productsActions';
import { loaderOn, loaderOff, showFilters, showProductForm } from './appActions';
import { logInRequest, logInSucces, logInError } from '../auth/authActions';

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
  [logInRequest]: () => true,

  [productsActions.getProductsSucces]: () => false,
  [productsActions.getProductsError]: () => false,
  [productsActions.getCurrentProductSucces]: () => false,
  [productsActions.getCurrentProductError]: () => false,
  [loaderOff]: () => false,
  [logInError]: () => false,
  [logInSucces]: () => false,

  [productsActions.getOriginsRequest]: () => true,
  [productsActions.getOriginsSucces]: () => false,
});

const isShowFilters = createReducer(false, {
  [showFilters]: (state, action) => action.payload,
});

const isShowProductForm = createReducer(false, {
  [showProductForm]: (state, action) => action.payload,
});

export default combineReducers({
  errors,
  isLoading,
  isShowFilters,
  isShowProductForm,
});
