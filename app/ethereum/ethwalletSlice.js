import { createSlice } from "@reduxjs/toolkit";

const ethwalletSlice = createSlice({
  name: "wallets",
  initialState: [],
  reducers: {
    addEthWallet: (state, action) => {
      const newWallet = {
        id: action.payload.id,
        walletKey: action.payload.walletKey,
        walletName: action.payload.walletName,
      };
      state.push(newWallet);
    },
    deleteEthWallet: (state, action) => {
      return state.filter((wallet) => wallet.id !== action.payload.id);
    },
  },
});

export const { addEthWallet, deleteEthWallet } = ethwalletSlice.actions;

export default ethwalletSlice.reducer;
