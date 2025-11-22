import { configureStore } from '@reduxjs/toolkit';
import connectorReducer from '../features/connectorSlice';

export const store = configureStore({
  reducer: {
    connector: connectorReducer,
  },
});
