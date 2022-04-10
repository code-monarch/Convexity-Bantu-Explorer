import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
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
        return state.filter((todo) => todo.id !== action.payload.id);
    }
  },
});

export const { addWallet, deleteWallet} = walletSlice.actions;

export default walletSlice.reducer;
