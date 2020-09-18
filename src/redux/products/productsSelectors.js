import { createSelector } from 'reselect';

export const getProducts = state => state.products.products;

export const getCurrentProduct = state => state.products.currentProduct;

export const getOrigins = state => state.products.origins;

export const getTotalQuantity = state => state.products.totalProducts;

export const getEditedProduct = state => state.products.editedProduct;

export const getIsOwnProduct = productId =>
  createSelector([getProducts], products => {
    const product = products.find(product => product.id === productId);
    return product && product.isEditable;
  });
