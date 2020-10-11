import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import * as productsActions from './productsActions';

import * as resTypes from '../../api/types/resTypes';
import * as payloadsTypes from './types/payloadTypes';

interface IProducts {
  products: [] | Array<payloadsTypes.ProductType>;
  currentProduct: {} | payloadsTypes.ProductType;
  origins: [] | resTypes.ResOriginsType;
  totalProducts: number;
  editedProduct: {} | payloadsTypes.ProductType;
}

const productsInitialState: IProducts = {
  products: [],
  currentProduct: {},
  origins: [],
  totalProducts: 0,
  editedProduct: {},
};

const products = createReducer(productsInitialState.products, {
  [productsActions.getProductsSucces.type]: (state, action: PayloadAction<resTypes.ResProductsType>) => [
    ...action.payload.items,
  ],
  [productsActions.getOwnProductsSucces.type]: (state, action: PayloadAction<resTypes.ResProductsType>) => [
    ...action.payload.items,
  ],
  [productsActions.postProductSucces.type]: (state, action: PayloadAction<payloadsTypes.ProductType>) => [
    ...state,
    action.payload,
  ],
  [productsActions.patchProductSucces.type]: (state, action: PayloadAction<payloadsTypes.ProductType>) => {
    return (state as Array<payloadsTypes.ProductType>).map(product =>
      product.id !== action.payload.id ? product : action.payload,
    );
  },
});

const currentProduct = createReducer(productsInitialState.currentProduct, {
  [productsActions.getCurrentProductSucces.type]: (state, action: PayloadAction<payloadsTypes.ProductType>) => ({
    ...action.payload,
  }),
  [productsActions.getCurrentProductRequest.type]: () => {
    return {};
  },
  [productsActions.patchProductSucces.type]: (state, action: PayloadAction<payloadsTypes.ProductType>) =>
    (state as payloadsTypes.ProductType).id === action.payload.id ? action.payload : state,
});

const origins = createReducer(productsInitialState.origins, {
  [productsActions.getOriginsSucces.type]: (state, action: PayloadAction<resTypes.ResOriginsType>) => [
    ...action.payload,
  ],
});

const totalProducts = createReducer(productsInitialState.totalProducts, {
  [productsActions.getProductsSucces.type]: (state, action: PayloadAction<resTypes.ResProductsType>) =>
    action.payload.totalItems,
  [productsActions.getOwnProductsSucces.type]: (state, action: PayloadAction<resTypes.ResProductsType>) =>
    action.payload.totalItems,
});

const editedProduct = createReducer(productsInitialState.editedProduct, {
  [productsActions.setEditedProduct.type]: (state, action: PayloadAction<payloadsTypes.ProductType>) => action.payload,
  [productsActions.patchProductRequest.type]: () => ({}),
});

export default combineReducers({
  products,
  currentProduct,
  editedProduct,
  origins,
  totalProducts,
});
