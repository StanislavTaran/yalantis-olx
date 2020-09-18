import { createSelector } from 'reselect';

export const getProducts = state => state.products.products;

export const getCurrentProduct = state => state.products.currentProduct;

export const getOrigins = state => state.products.origins;

export const getTotalQuantity = state => state.products.totalProducts;

export const getEditedProduct = state => state.products.editedProduct;

export const getIsOwnProduct = product =>
  createSelector([getProducts], products => {
    if (products && products.length) {
      const foundProduct = products.find(productItem => productItem.id === product.id);
      return foundProduct && foundProduct.isEditable;
    }
    return product.isEditable;
  });
