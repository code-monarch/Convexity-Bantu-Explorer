import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./walletSlice";
import balanceReducer from "./balanceSlice";
// ETHEREUM
import ethbalanceReducer from "./ethereum/ethbalanceSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
// XBN
import { paymentsApi } from "../services/paymentsApi"
import { balanceApi } from "../services/balanceApi"
// EHEREUM
import { ethpaymentsApi } from "../services/ethereum/ethpaymentsApi"
import { ethbalanceApi } from "../services/ethereum/ethbalanceApi"

export const store = configureStore({
  reducer: {
    wallets: walletReducer,
    balance: balanceReducer,

    // ETHEREUM BALANCE 
    ethbalance: ethbalanceReducer,

    // XBN BALANCE AND PAYMENT REDUCER
    [paymentsApi.reducerPath]: paymentsApi.reducer,
    [balanceApi.reducerPath]: balanceApi.reducer,

    // ETHEREUM BALANCE AND PAYMENT REDUCER
    [ethpaymentsApi.reducerPath]: ethpaymentsApi.reducer,
    [ethbalanceApi.reducerPath]: ethbalanceApi.reducer,

    // transactions: transactionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(paymentsApi.middleware),
});

setupListeners(store.dispatch);