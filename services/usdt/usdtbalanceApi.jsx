import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usdtbalanceApi = createApi({
  reducerPath: "usdtbalanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.shasta.trongrid.io/v1/accounts/",
  }),
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: (walletKey) =>
        `${walletKey}`,
    }),
  }),
});

export const { useGetBalanceQuery } = usdtbalanceApi;