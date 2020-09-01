import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { reducer as formReducer } from 'redux-form';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';

import products from './products/productsReducer';
import app from './app/appReducer';
import cart from './cart/cartReducer';
import filters from './filters/filtersReducer';

const persistConfig = {
  key: 'cart',
  storage,
};

const middlewares = [ReduxThunk];

const rootReducer = combineReducers({
  app,
  products,
  filters,
  cart: persistReducer(persistConfig, cart),
  form: formReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: true,
});

export const persistor = persistStore(store);
