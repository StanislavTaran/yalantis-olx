import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as productsActions from './productsActions';

const products = createReducer([], {
  [productsActions.getProductsSucces]: (state, action) => [...action.payload],
});

const currentProduct = createReducer(
  {},
  {
    [productsActions.getCurrentProductSucces]: (state, action) => ({ ...action.payload }),
    [productsActions.getCurrentProductRequest]: () => {
      return {};
    },
  },
);

export default combineReducers({
  products,
  currentProduct,
});
