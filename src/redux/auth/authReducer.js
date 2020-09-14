import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { logInError, logInRequest, logInSucces } from './authActions';

const errors = createReducer(
  {},
  {
    [logInRequest]: (state, action) => ({}),
    [logInError]: (state, action) => action.payload,
  },
);

const token = createReducer(
  {},
  {
    [logInSucces]: (state, action) => action.payload.token,
  },
);

export default combineReducers({
  errors,
  token,
});
