import { createSlice } from "@reduxjs/toolkit";

const paymentsInSlice = createSlice({
  name: "paymentsIn",
  initialState: [],
  reducers: {
    getPaymentsIn: (state, action) => {
      state.push(action.payload);
      // state = [action.payload]
    },
  },
});

export const { getPaymentsIn } = paymentsInSlice.actions;

export default paymentsInSlice.reducer;
