import { createSlice } from "@reduxjs/toolkit";

const xbnbalanceSlice = createSlice({
  name: "xbnbalance",
  initialState: null,
  reducers: {
    getWalletBalance: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getWalletBalance } = xbnbalanceSlice.actions;

export default xbnbalanceSlice.reducer;
