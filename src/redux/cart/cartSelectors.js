import { createSelector } from 'reselect';
import { reducerForPrice } from '../../helpers/productHelpers';

export const getCart = state => state.cart.cart;

export const getProductsInCart = createSelector([getCart], cart => Object.values(cart));
export const getProductsIdInCart = createSelector([getCart], cart => Object.keys(cart));

export const getProductQuantity = (state, id) => state.cart.cart[id].quantity;

export const getTotalPrice = createSelector([getProductsInCart], products => products.reduce(reducerForPrice, 0));

export const getQuantityProductInCart = (state, id) => state[id].quantity;
