import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as productsActions from './productsActions';

const products = createReducer([], {
  [productsActions.getProductsSucces]: (state, action) => [...action.payload],
});

export default combineReducers({
  products,
});
