import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';

import products from './products/productsReducer';
import app from './app/appReducer';

const middlewares = [ReduxThunk];

const rootReducer = combineReducers({
  app,
  products,
  // basket: persistReducer(persistConfig, basket),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: true,
});
