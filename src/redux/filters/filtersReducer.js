import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as filtersActions from './filtersActions';
import { productsPriceRange, productsPerPage } from '../../constants/productsFilters';

const origins = createReducer([], {
  [filtersActions.setOrigins]: (state, action) => action.payload,
  [filtersActions.setFilters]: (state, action) =>
    action.payload.origins && action.payload.origins.length ? [...action.payload.origins] : [],
  [filtersActions.resetFilters]: () => [],
});

const price = createReducer(productsPriceRange, {
  [filtersActions.setPrice]: (state, action) => [...action.payload],
  [filtersActions.setFilters]: (state, action) => {
    const { minPrice, maxPrice } = action.payload;
    return [minPrice || productsPriceRange[0], maxPrice || productsPriceRange[1]];
  },
  [filtersActions.resetFilters]: () => productsPriceRange,
});

const perPage = createReducer(productsPerPage[0], {
  [filtersActions.setPerPage]: (state, action) => action.payload,
  [filtersActions.setFilters]: (state, action) =>
    action.payload.perPage ? action.payload.perPage : productsPerPage[0],
  [filtersActions.resetFilters]: () => productsPerPage[0],
});

const page = createReducer(1, {
  [filtersActions.setPage]: (state, action) => action.payload,
  [filtersActions.setPerPage]: (state, action) => (state !== 1 ? 1 : state),
  [filtersActions.setOrigins]: (state, action) => (state !== 1 ? 1 : state),
  [filtersActions.setPrice]: (state, action) => (state !== 1 ? 1 : state),
  [filtersActions.setFilters]: (state, action) => (action.payload.page ? action.payload.page : 1),
  [filtersActions.resetFilters]: () => 1,
});

const editable = createReducer(false, {
  [filtersActions.setEditable]: (state, action) => action.payload,
  [filtersActions.setFilters]: (state, action) => (action.payload.editable ? action.payload.editable : false),
  [filtersActions.resetFilters]: () => false,
});

export default combineReducers({ origins, price, perPage, page, editable });
