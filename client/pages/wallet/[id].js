import Header from "../../components/dashboard/Header";
import In from "../../components/transaction/In";
import Out from "../../components/transaction/Out";
import Loader from "../../components/utils/Loader";

import { getWalletBalance } from "../../app/balanceSlice";

import { useRouter } from "next/router";

import { useGetPaymentsQuery } from "../../services/paymentsApi";
import { useGetBalanceQuery } from "../../services/balanceApi";
import { useDispatch } from "react-redux";

const style = {
  container: `w-[80vw] bg-[#fff] ml-[20vw]`,
  main: `bg-white w-[100%] h-full overflow-auto flex flex-row justify-around rounded mt-[80px]`,
};

const Wallet = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;
  const { data, isFetching } = useGetPaymentsQuery(id);
  const payments = data?._embedded?.records;
  console.log(payments, "payments");
  console.log(data, "data");
  console.log({ id }, "slug");

  // GET WALLET BALANCE
  const { data: balance} = useGetBalanceQuery(id);
  dispatch(
    getWalletBalance({
      balance: balance?.balances[1]?.balance,
    })
  );

  // PAYMENTS IN
  const paymentIn = payments?.filter(
    (payment) => payment.from !== id && payment.type == "payment"
  );
  // transactIn.concat(newTransactIn)
  console.log(paymentIn, "new transact in");

  // PAYMENT OUT
  const paymentOut = payments?.filter(
    (payment) =>
      payment.from == id ||
      payment.asset_type == "native" ||
      payment.asset_type == "create_account"
  );
  console.log(paymentOut, "new transact out");

  if (isFetching) return <Loader />;

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
