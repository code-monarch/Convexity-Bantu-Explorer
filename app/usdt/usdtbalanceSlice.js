import { createSlice } from "@reduxjs/toolkit";

const usdtbalanceSlice = createSlice({
  name: "usdtbalance",
  initialState: null,
  reducers: {
    getWalletBalance: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getWalletBalance } = usdtbalanceSlice.actions;

export default usdtbalanceSlice.reducer;
