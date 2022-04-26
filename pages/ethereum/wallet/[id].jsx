import Header from "../../../components/dashboard/Header";
import TransactionsPageLayout from "../../../components/Ethereum/TransactionsPageLayout";
import In from "../../../components/xbn/transaction/In";
import Out from "../../../components/xbn/transaction/Out";

import { getWalletBalance } from "../../../app/ethereum/ethbalanceSlice";

import { useRouter } from "next/router";

import { useGetPaymentsQuery } from "../../../services/ethereum/ethpaymentsApi";
import { useGetBalanceQuery } from "../../../services/ethereum/ethbalanceApi";
import { useDispatch } from "react-redux";

const style = {
  main: `bg-white w-[80vw] h-full overflow-auto flex flex-row justify-around rounded mt-[80px]`,
};

const Wallet = () => {
  const dispatch = useDispatch();

  // INSTANTIATE NEXT JS useRouter
  const router = useRouter();

  // STORE ROUTE QUERY WHICH IS THE WALLET KEY IN A VARIABLE
  const { id } = router.query;
  console.log(router.query);

  const { data, isFetching } = useGetPaymentsQuery(id);
  const payments = data;
  console.log(payments, "Eth Payments")

  // GET WALLET BALANCE FROM balanceApi, PASS WALLET KEY TO THE useGetBalanceQuery RTK hook. THE ethbalanceApi FETCHES THE WALLET BALANCE FROM EtherScan API. THE RETURNED DATA IS DESTRUCTURED FROM THE useGetEthBalanceQuery hook
  // DATA FETCHED IS USED AS THE ALIAS BALANCE TO PREVENT REDEFINED ERROR
  const { data: balance } = useGetBalanceQuery(id);
  console.log(`${balance}, balance`);
  // DISPATCH getWalletBalance Action
  dispatch(
    getWalletBalance({
      balance: data,
      id: id,
    })
  );

  // PAYMENTS IN
  const paymentIn = payments?.result?.filter(
    (payment) => payment.to !== id
  );

  // PAYMENT OUT
  const paymentOut = payments?.result?.filter(
    (payment) =>
      payment.from == id
  );

  return (
    <TransactionsPageLayout>
      <div>
        <Header />
        <div className='flex flex-row justify-between'>
          <main className={style.main}>
            <In paymentIn={paymentIn} />
            <Out paymentOut={paymentOut} />
          </main>
        </div>
      </div>
    </TransactionsPageLayout>
  );
};

export default Wallet;
