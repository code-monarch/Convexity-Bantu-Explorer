import { createSlice } from "@reduxjs/toolkit";

const ethbalanceSlice = createSlice({
  name: "ethbalance",
  initialState: null,
  reducers: {
    getWalletBalance: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getWalletBalance } = ethbalanceSlice.actions;

export default ethbalanceSlice.reducer;
