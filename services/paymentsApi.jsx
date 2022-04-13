import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const paymentsApi = createApi({
  reducerPath: 'paymentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expansion-testnet.bantu.network",
  }),
  endpoints: (builder) => ({
    getPayments: builder.query({
      query: (walletKey) =>`/accounts/${walletKey}/payments`,
    }),
  }), 
});

export const { useGetPaymentsQuery } = paymentsApi;