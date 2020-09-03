import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as filtersActions from './filtersActions';
import { productsPriceRange, productsPerPage } from '../../constants/productsFilters';

const origins = createReducer([], {
  [filtersActions.setOrigins]: (state, action) => action.payload,
});

const price = createReducer(productsPriceRange, {
  [filtersActions.setPrice]: (state, action) => [...action.payload],
});

const perPage = createReducer(productsPerPage[0], {
  [filtersActions.setPerPage]: (state, action) => action.payload,
});

const page = createReducer(1, {
  [filtersActions.setPage]: (state, action) => action.payload,
  [filtersActions.setPerPage]: (state, action) => (state !== 1 ? 1 : state),
  [filtersActions.setOrigins]: (state, action) => (state !== 1 ? 1 : state),
  [filtersActions.setPrice]: (state, action) => (state !== 1 ? 1 : state),
});

export default combineReducers({ origins, price, perPage, page });
