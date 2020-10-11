import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import * as productsActions from '../products/productsActions';
import { loaderOn, loaderOff, showFilters, showProductForm } from './appActions';
import { logInRequest, logInSucces, logInError } from '../auth/authActions';

interface IApp {
  errors: null | string;
  isLoading: boolean;
  isShowFilters: boolean;
  isShowProductForm: boolean;
}

const appInitialState: IApp = {
  errors: null,
  isLoading: false,
  isShowFilters: false,
  isShowProductForm: false,
};

const errors = createReducer(appInitialState.errors, {
  [productsActions.getProductsError.type]: (state, { payload }: PayloadAction<string>) => payload,
  [productsActions.getCurrentProductError.type]: (state, { payload }: PayloadAction<string>) => payload,
});

const isLoading = createReducer(appInitialState.isLoading, {
  [productsActions.getProductsRequest.type]: () => true,
  [productsActions.getCurrentProductRequest.type]: () => true,
  [loaderOn.type]: () => true,
  [logInRequest.type]: () => true,

  [productsActions.getProductsSucces.type]: () => false,
  [productsActions.getProductsError.type]: () => false,
  [productsActions.getCurrentProductSucces.type]: () => false,
  [productsActions.getCurrentProductError.type]: () => false,
  [loaderOff.type]: () => false,
  [logInError.type]: () => false,
  [logInSucces.type]: () => false,

  [productsActions.getOriginsRequest.type]: () => true,
  [productsActions.getOriginsSucces.type]: () => false,
});

const isShowFilters = createReducer(appInitialState.isShowFilters, {
  [showFilters.type]: (state, { payload }: PayloadAction<boolean>) => payload,
});

const isShowProductForm = createReducer(appInitialState.isShowProductForm, {
  [showProductForm.type]: (state, { payload }: PayloadAction<boolean>) => payload,
});

export default combineReducers({
  errors,
  isLoading,
  isShowFilters,
  isShowProductForm,
});
