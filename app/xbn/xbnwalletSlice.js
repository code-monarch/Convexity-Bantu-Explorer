import { createSlice } from "@reduxjs/toolkit";

const xbnwalletSlice = createSlice({
  name: "wallets",
  initialState: [],
  reducers: {
    addWallet: (state, action) => {
      const newWallet = {
        id: action.payload.id,
        walletKey: action.payload.walletKey,
        walletName: action.payload.walletName,
      };
      state.push(newWallet);
    },
    deleteWallet: (state, action) => {
      return state.filter((wallet) => wallet.id !== action.payload.id);
    },
  },
});

export const { addWallet, deleteWallet } = xbnwalletSlice.actions;

export default xbnwalletSlice.reducer;
