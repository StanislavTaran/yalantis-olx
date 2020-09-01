import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as filtersActions from './filtersActions';

const origins = createReducer([], {
  [filtersActions.setOrigins]: (state, action) => action.payload,
});

const price = createReducer([0, 1000], {
  [filtersActions.setPrice]: (state, action) => [...action.payload],
});

const perPage = createReducer(50, {
  [filtersActions.setPerPage]: (state, action) => action.payload,
});

const page = createReducer(1, {
  [filtersActions.setPage]: (state, action) => action.payload,
});

export default combineReducers({ origins, price, perPage, page });
