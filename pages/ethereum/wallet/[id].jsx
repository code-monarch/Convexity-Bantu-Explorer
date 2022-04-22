import Header from "../../../components/dashboard/Header";
import In from "../../../components/transaction/In";
import Out from "../../../components/transaction/Out";

import { getWalletBalance } from "../../../app/ethereum/ethbalanceSlice";

import { useRouter } from "next/router";

import { useGetEthPaymentsQuery } from "../../../services/ethpaymentsApi";
import { useGetEthBalanceQuery } from "../../../services/ethbalanceApi";
import { useDispatch } from "react-redux";

const style = {
  container: `w-[80vw] bg-[#fff] ml-[20vw]`,
  main: `bg-white w-[100%] h-full overflow-auto flex flex-row justify-around rounded mt-[80px]`,
};

const Wallet = () => {
  const dispatch = useDispatch();

  // INSTANTIATE NEXT JS useRouter
  const router = useRouter();

  // STORE ROUTE QUERY WHICH IS THE WALLET KEY IN A VARIABLE
  const { id } = router.query;
  console.log(router.query);

  const { data, isFetching } = useGetEthPaymentsQuery(id);
  const payments = data;

  // GET WALLET BALANCE FROM balanceApi, PASS WALLET KEY TO THE useGetBalanceQuery RTK hook. THE ethbalanceApi FETCHES THE WALLET BALANCE FROM EtherScan API. THE RETURNED DATA IS DESTRUCTURED FROM THE useGetEthBalanceQuery hook
  // DATA FETCHED IS USED AS THE ALIAS BALANCE TO PREVENT REDEFINED ERROR
  const { data: balance } = useGetEthBalanceQuery(id);
  console.log(balance);
  // DISPATCH getWalletBalance Action
  dispatch(
    getWalletBalance({
      balance: data,
      id: id,
    })
  );

  // PAYMENTS IN
  const paymentIn = payments?.filter(
    (payment) => payment.to == id
  );

  // PAYMENT OUT
  const paymentOut = payments?.filter(
    (payment) =>
      payment.from == id
  );

  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <In paymentIn={paymentIn} />
        <Out paymentOut={paymentOut} />
      </main>
    </div>
  );
};

export default Wallet;
