import { createSelector } from 'reselect';
import { reducerForPrice } from '../../helpers/productHelpers';

export const getCart = state => state.cart.cart;

export const getProductsInCart = createSelector([getCart], cart => Object.values(cart));
export const getProductsIdInCart = createSelector([getCart], cart => Object.keys(cart));

export const getTotalPrice = createSelector([getProductsInCart], products => products.reduce(reducerForPrice, 0));

export const getTotalQuantity = createSelector([getProductsInCart], products =>
  products.reduce((acc, item) => acc + item.quantity, 0),
);
