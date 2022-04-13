import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "balance",
  initialState: null,
  reducers: {
    getWalletBalance: (state, action) => {
      return state = action.payload.balance;
    },
  },
});

export const { getWalletBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
