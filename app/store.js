import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./walletSlice";
import balanceReducer from "./balanceSlice";
// ETHEREUM
import ethwalletReducer from "./ethereum/ethwalletSlice";
import ethbalanceReducer from "./ethereum/ethbalanceSlice";
// XBN
import xbnwalletReducer from "./xbn/xbnwalletSlice";
import xbnbalanceReducer from "./xbn/xbnbalanceSlice";
// USDT
import usdtwalletReducer from "./usdt/usdtwalletSlice";
import usdtbalanceReducer from "./usdt/usdtbalanceSlice";

// EHEREUM RTK APIs
import { ethpaymentsApi } from "../services/ethereum/ethpaymentsApi"
import { ethbalanceApi } from "../services/ethereum/ethbalanceApi"
// XBN RTK APIs
import { xbnpaymentsApi } from "../services/xbn/xbnpaymentsApi"
import { xbnbalanceApi } from "../services/xbn/xbnbalanceApi"
// USDT RTK APIs
import { usdtpaymentsApi } from "../services/usdt/usdtpaymentsApi"
import { usdtbalanceApi } from "../services/usdt/usdtbalanceApi"

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // ETHEREUM
    ethwallet: ethwalletReducer,
    ethbalance: ethbalanceReducer,

    // XBN
    xbnwallet: xbnwalletReducer,
    xbnbalance: xbnbalanceReducer,

    // USDT
    usdtwallet: usdtwalletReducer,
    usdtbalance: usdtbalanceReducer,

    // ETHEREUM BALANCE AND PAYMENT RTK REDUCER
    [ethpaymentsApi.reducerPath]: ethpaymentsApi.reducer,
    [ethbalanceApi.reducerPath]: ethbalanceApi.reducer,

    // XBN BALANCE AND PAYMENT RTK REDUCER
    [xbnpaymentsApi.reducerPath]: xbnpaymentsApi.reducer,
    [xbnbalanceApi.reducerPath]: xbnbalanceApi.reducer,

    // USDT BALANCE AND PAYMENT RTK REDUCER
    [usdtpaymentsApi.reducerPath]: usdtpaymentsApi.reducer,
    [usdtbalanceApi.reducerPath]: usdtbalanceApi.reducer,

    // transactions: transactionReducer,
  },
});

setupListeners(store.dispatch);