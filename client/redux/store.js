import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./walletSlice";
import paymentsInReducer from "./paymentsInSlice";
import paymentsOutReducer from "./paymentsOutSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { paymentsApi } from "../services/paymentsApi"
// import transactionReducer from "./dashboardSlice";

export const store = configureStore({
  reducer: {
    wallets: walletReducer,
    paymentsIn: paymentsInReducer,
    paymentsOut: paymentsOutReducer,
    [paymentsApi.reducerPath]: paymentsApi.reducer,

    // transactions: transactionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(paymentsApi.middleware),
});

setupListeners(store.dispatch);