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
});

export default combineReducers({ origins, price, perPage, page });
