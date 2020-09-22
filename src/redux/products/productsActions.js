import { createAction } from '@reduxjs/toolkit';

// ALL PRODUCTS
export const getProductsRequest = createAction('products/GET_PRODUCTS_REQUEST');
export const getProductsSucces = createAction('products/GET_PRODUCTS_SUCCES');
export const getProductsError = createAction('products/GET_PRODUCTS_ERROR');

// OWN PRODUCTS
export const getOwnProductsRequest = createAction('products/GET_OWN_PRODUCTS_REQUEST');
export const getOwnProductsSucces = createAction('products/GET_OWN_PRODUCTS_SUCCES');
export const getOwnProductsError = createAction('products/GET_OWN_PRODUCTS_ERROR');

// CURRENT PRODUCT
export const getCurrentProductRequest = createAction('products/GET_CURRENT_PRODUCT_REQUEST');
export const getCurrentProductSucces = createAction('products/GET_CURRENT_PRODUCT_SUCCES');
export const getCurrentProductError = createAction('products/GET_CURRENT_PRODUCT_ERROR');

// ORIGINS
export const getOriginsRequest = createAction('products/GET_ORIGINS_REQUEST');
export const getOriginsSucces = createAction('products/GET_ORIGINS_SUCCES');
export const getOriginsError = createAction('products/GET_ORIGINS_ERROR');

// POST PRODUCT
export const postProductRequest = createAction('products/POST_PRODUCT_REQUEST');
export const postProductSucces = createAction('products/POST_PRODUCT_SUCCES');
export const postProductError = createAction('products/POST_PRODUCT_ERROR');

// PATCH PRODUCT
export const patchProductRequest = createAction('products/PATCH_PRODUCT_REQUEST');
export const patchProductSucces = createAction('products/PATCH_PRODUCT_SUCCES');
export const patchProductError = createAction('products/PATCH_PRODUCT_ERROR');

// EDITED PRODUCT
export const setEditedProduct = createAction('products/SET_EDITED_PRODUCT');
