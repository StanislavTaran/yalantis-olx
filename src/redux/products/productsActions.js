import { createAction } from '@reduxjs/toolkit';

// ALL PRODUCTS
export const getProductsRequest = createAction('products/GET_PRODUCTS_REQUEST');
export const getProductsSucces = createAction('products/GET_PRODUCTS_SUCCES');
export const getProductsError = createAction('products/GET_PRODUCTS_ERROR');

// ONE PRODUCT
export const getProductRequest = createAction('products/GET_PRODUCT_REQUEST');
export const getProductSucces = createAction('products/GET_PRODUCT_SUCCES');
export const getProductError = createAction('products/GET_PRODUCT_ERROR');
