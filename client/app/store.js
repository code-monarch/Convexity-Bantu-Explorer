import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./walletSlice";
import balanceReducer from "./balanceSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { paymentsApi } from "../services/paymentsApi"
import { balanceApi } from "../services/balanceApi"

export const store = configureStore({
  reducer: {
    wallets: walletReducer,
    balance: balanceReducer,
    [paymentsApi.reducerPath]: paymentsApi.reducer,
    [balanceApi.reducerPath]: balanceApi.reducer,

    // transactions: transactionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(paymentsApi.middleware),
});

setupListeners(store.dispatch);