import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ethpaymentsApi = createApi({
  reducerPath: "ethpaymentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.etherscan.io/api",
  }),
  endpoints: (builder) => ({
    getPayments: builder.query({
      query: (walletKey) =>
        `   ?module=account&action=txlist&address=${walletKey}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.ETHERSCAN_KEY}`,
    }),
  }),
});

export const { useGetEthPaymentsQuery } = ethpaymentsApi;
