import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const balanceApi = createApi({
  reducerPath: "balanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expansion-testnet.bantu.network",
  }),
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: (walletKey) => `/accounts/${walletKey}`,
    }),
  }),
});

export const { useGetBalanceQuery } = balanceApi;
