// store.ts
import { configureStore } from '@reduxjs/toolkit';
import purchasesReducer from '../slices/purchasesSlice'; // Importa el slice de compras

export const store = configureStore({
  reducer: {
    purchases: purchasesReducer, // Añade el reducer de compras
  },
});

// Tipos personalizados de Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
