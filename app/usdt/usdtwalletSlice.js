import { createSlice } from "@reduxjs/toolkit";

const usdtwalletSlice = createSlice({
  name: "wallets",
  initialState: [],
  reducers: {
    addUsdtWallet: (state, action) => {
      const newWallet = {
        id: action.payload.id,
        walletKey: action.payload.walletKey,
        walletName: action.payload.walletName,
      };
      state.push(newWallet);
    },
    deleteUsdtWallet: (state, action) => {
      return state.filter((wallet) => wallet.id !== action.payload.id);
    },
  },
});

export const { addUsdtWallet, deleteUsdtWallet } = usdtwalletSlice.actions;

export default usdtwalletSlice.reducer;
