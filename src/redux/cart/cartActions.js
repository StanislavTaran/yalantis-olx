import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/ADD_TO_CART');
export const removeFromCart = createAction('cart/REMOVE_FROM_CART');
export const incrementProductQuantity = createAction('cart/INCREMENT_QUANTITY');
export const decrementProductQuantity = createAction('cart/DECREMENT_QUANTITY');
