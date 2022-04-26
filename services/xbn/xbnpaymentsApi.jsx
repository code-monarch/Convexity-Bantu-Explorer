import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const xbnpaymentsApi = createApi({
  reducerPath: 'xbnpaymentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expansion-testnet.bantu.network",
  }),
  endpoints: (builder) => ({
    getPayments: builder.query({
      query: (walletKey) =>`/accounts/${walletKey}/payments`,
    }),
  }), 
});

export const { useGetPaymentsQuery } = xbnpaymentsApi;