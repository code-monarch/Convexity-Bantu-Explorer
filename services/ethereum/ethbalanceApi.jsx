import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ethbalanceApi = createApi({
  reducerPath: "ethbalanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.etherscan.io/api",
  }),
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: (walletKey) => `?module=account&action=balance&address=${walletKey}&tag=latest&apikey=${process.env.ETHERSCAN_KEY}`,
    }),
  }),
});

export const { useGetBalanceQuery } = ethbalanceApi;
