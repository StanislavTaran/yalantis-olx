import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, incrementProductQuantity, decrementProductQuantity } from './cartActions';

const cart = createReducer(
  {},
  {
    [addToCart]: (state, action) => {
      if (state[action.payload.id]) {
        return {
          ...state,
          [action.payload.id]: { ...state[action.payload.id], quantity: state[action.payload.id].quantity + 1 },
        };
      }

      return { ...state, [action.payload.id]: { ...action.payload, quantity: 1 } };
    },

    [removeFromCart]: (state, action) => {
      const clone = { ...state };
      delete clone[action.payload];
      return clone;
    },
    [incrementProductQuantity]: (state, action) => {
      if (!state[action.payload]) return;
      return {
        ...state,
        [action.payload]: { ...state[action.payload], quantity: state[action.payload].quantity + 1 },
      };
    },
    [decrementProductQuantity]: (state, action) => {
      if (!state[action.payload] || state[action.payload].quantity < 2) return;
      return {
        ...state,
        [action.payload]: { ...state[action.payload], quantity: state[action.payload].quantity - 1 },
      };
    },
  },
);

export default combineReducers({ cart });
