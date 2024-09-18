// slices/purchasesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Purchase {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface PurchasesState {
  items: Purchase[];
}

const initialState: PurchasesState = {
  items: [],
};

const purchasesSlice = createSlice({
  name: 'purchases',
  initialState,
  reducers: {
    addPurchase: (state, action: PayloadAction<Purchase>) => {
      state.items.push(action.payload);
    },
    removePurchase: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearPurchases: state => {
      state.items = [];
    },
  },
});

export const { addPurchase, removePurchase, clearPurchases } = purchasesSlice.actions;
export default purchasesSlice.reducer;
