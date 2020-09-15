import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as productsActions from './productsActions';

const products = createReducer([], {
  [productsActions.getProductsSucces]: (state, action) => [...action.payload.items],
  [productsActions.getOwnProductsSucces]: (state, action) => [...action.payload.items],
  [productsActions.postProductSucces]: (state, action) => [...state, action.payload],
  [productsActions.patchProductSucces]: (state, action) =>
    state.map(product => (product.id !== action.payload.id ? product : action.payload)),
});

const currentProduct = createReducer(
  {},
  {
    [productsActions.getCurrentProductSucces]: (state, action) => ({ ...action.payload }),
    [productsActions.getCurrentProductRequest]: () => {
      return {};
    },
    [productsActions.patchProductSucces]: (state, action) => (state.id === action.payload.id ? action.payload : state),
  },
);

const origins = createReducer([], {
  [productsActions.getOriginsSucces]: (state, action) => [...action.payload],
});

const totalProducts = createReducer(0, {
  [productsActions.getProductsSucces]: (state, action) => action.payload.totalItems,
  [productsActions.getOwnProductsSucces]: (state, action) => action.payload.totalItems,
});

const editedProduct = createReducer(
  {},
  {
    [productsActions.setEditedProduct]: (state, action) => action.payload,
    [productsActions.patchProductRequest]: () => ({}),
  },
);

export default combineReducers({
  products,
  currentProduct,
  editedProduct,
  origins,
  totalProducts,
});
