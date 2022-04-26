// import Header from "../../../components/dashboard/Header";
// import In from "../../../components/transaction/In";
// import Out from "../../../components/transaction/Out";

// import { getWalletBalance } from "../../../app/balanceSlice";

// import { useRouter } from "next/router";

// import { useGetPaymentsQuery } from "../../../services/paymentsApi";
// import { useGetBalanceQuery } from "../../../services/balanceApi";
// import { useDispatch } from "react-redux";

// const style = {
//   container: `w-[80vw] bg-[#fff] ml-[20vw]`,
//   main: `bg-white w-[100%] h-full overflow-auto flex flex-row justify-around rounded mt-[80px]`,
// };

// const Wallet = () => {
//   const dispatch = useDispatch();

//   // INSTANTIATE NEXT JS useRouter
//   const router = useRouter();

//   // STORE ROUTE QUERY WHICH IS THE WALLET KEY IN A VARIABLE
//   const { id } = router.query;
//   console.log(router.query);

//   const { data, isFetching } = useGetPaymentsQuery(id);
//   const payments = data?._embedded?.records;

//   // GET WALLET BALANCE FROM balanceApi, PASS WALLET KEY TO THE useGetBalanceQuery RTK hook. THE balanceApi FETCHES THE WALLET BALANCE FROM BANTU API. THE RETURNED DATA IS DESTRUCTURED FROM THE useGetBalanceQuery hook
//   // DATA FETCHED IS USED AS THE ALIAS BALANCE TO PREVENT REDEFINED ERROR
//   const { data: balance } = useGetBalanceQuery(id);
//   console.log(balance);
//   // DISPATCH getWalletBalance Action WITH THE FETCHED BALANCE TO BE STORED IN THE BALANCE STATE
//   dispatch(
//     getWalletBalance({
//       balance: balance?.balances[1]?.balance,
//       id: id,
//     })
//   );

//   // PAYMENTS IN
//   const paymentIn = payments?.filter(
//     (payment) => payment.from !== id && payment.type == "payment"
//   );

//   // PAYMENT OUT
//   const paymentOut = payments?.filter(
//     (payment) =>
//       payment.from == id ||
//       payment.asset_type == "native" ||
//       payment.asset_type == "create_account"
//   );

//   return (
//     <div className={style.container}>
//       <Header />
//       <main className={style.main}>
//         <In paymentIn={paymentIn} />
//         <Out paymentOut={paymentOut} />
//       </main>
//     </div>
//   );
// };

// export default Wallet;
