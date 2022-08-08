import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import test from './modules/test';

const reducer = combineReducers({ test });

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
