import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usdtpaymentsApi = createApi({
  reducerPath: "usdtpaymentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.shasta.trongrid.io/v1/accounts/",
  }),
  endpoints: (builder) => ({
    getPayments: builder.query({
      query: (walletKey) =>
        `${walletKey}/transactions/trc20`,
    }),
  }),
});

export const { useGetPaymentsQuery } = usdtpaymentsApi;





// TV6MuMXfmLbBqPZvBHdwFsDnQeVfnmiuSi/transactions/trc20