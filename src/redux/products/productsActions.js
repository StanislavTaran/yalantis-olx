import { createAction } from '@reduxjs/toolkit';

// ALL PRODUCTS
export const getProductsRequest = createAction('products/GET_PRODUCTS_REQUEST');
export const getProductsSucces = createAction('products/GET_PRODUCTS_SUCCES');
export const getProductsError = createAction('products/GET_PRODUCTS_ERROR');
