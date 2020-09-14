import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as productsActions from './productsActions';

const products = createReducer([], {
  [productsActions.getProductsSucces]: (state, action) => [...action.payload.items],
  [productsActions.getOwnProductsSucces]: (state, action) => [...action.payload.items],
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

const origins = createReducer([], {
  [productsActions.getOriginsSucces]: (state, action) => [...action.payload],
});

const totalProducts = createReducer(0, {
  [productsActions.getProductsSucces]: (state, action) => action.payload.totalItems,
  [productsActions.getOwnProductsSucces]: (state, action) => action.payload.totalItems,
});

export default combineReducers({
  products,
  currentProduct,
  origins,
  totalProducts,
});
