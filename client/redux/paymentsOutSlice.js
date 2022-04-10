import { createSlice } from "@reduxjs/toolkit";

const paymentsOutSlice = createSlice({
  name: "paymentsOut",
  initialState: [],
  reducers: {
    getPaymentsOut: (state, action) => {
      state = [action.payload];
    },
  },
});

export const { getPaymentsOut } = paymentsOutSlice.actions;

export default paymentsOutSlice.reducer;
