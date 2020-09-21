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

const user = createReducer(
  {},
  {
    [logInSucces]: (state, action) => action.payload.email,
  },
);

export default combineReducers({
  errors,
  user,
});
