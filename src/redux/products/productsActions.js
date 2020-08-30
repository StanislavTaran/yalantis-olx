import { createAction } from '@reduxjs/toolkit';

// ALL PRODUCTS
export const getProductsRequest = createAction('products/GET_PRODUCTS_REQUEST');
export const getProductsSucces = createAction('products/GET_PRODUCTS_SUCCES');
export const getProductsError = createAction('products/GET_PRODUCTS_ERROR');

// CURRENT PRODUCT
export const getCurrentProductRequest = createAction('products/GET_CURRENT_PRODUCT_REQUEST');
export const getCurrentProductSucces = createAction('products/GET_CURRENT_PRODUCT_SUCCES');
export const getCurrentProductError = createAction('products/GET_CURRENT_PRODUCT_ERROR');
