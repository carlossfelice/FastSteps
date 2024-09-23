// store.ts
import { configureStore } from '@reduxjs/toolkit';
import purchasesReducer from '../slices/purchasesSlice';

export const store = configureStore({
  reducer: {
    purchases: purchasesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
