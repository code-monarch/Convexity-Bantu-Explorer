import React from "react";
import { deleteWallet } from "../../redux/walletSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentsIn } from "../../redux/paymentsInSlice";
import { getPaymentsOut } from "../../redux/paymentsOutSlice";
import CancelIcon from "@mui/icons-material/Cancel";

import { useGetPaymentsQuery } from "../../services/paymentsApi"

const style = {
  container: `cursor-pointer font-bold font-sans h-[60px] w-[90%] bg-walletColor focus:bg-white focus:text-black text-[#fff] cursor-pointer rounded-sm p-3 hover:shadow-md mx-auto mt-[10px] cursor-pointer`,
  walletname: `font-bold cursor-pointer text-[#fff]`,
};

const WalletItem = ({ id, walletKey, walletName }) => {
  // if(isFetching) return <h4>Loading...</h4>;

  const dispatch = useDispatch();
  const { data, isFetching } = useGetPaymentsQuery(walletKey);
  // FUNCTION TO GET ALL PAYMENTS IN
  const transactIn = (payments, walletKey) => {
    const paymentsIn = payments?.filter(
      (payment) =>
        (payment.from !== walletKey && payment.type == "payment")
    );
    console.log(paymentsIn, "payments in");
    dispatch(getPaymentsIn(paymentsIn));
  };
  // FUNCTION TO GET ALL PAYMENTS OUT
  const transactOut = (payments) => {
    const paymentsOut = payments?.filter(
      (payment) =>
        (payment.from == walletKey && payment.asset_type == "native") ||
        payment.asset_type == "create_account"
    );
    console.log(paymentsOut, "payments out");
    dispatch(getPaymentsOut(paymentsOut));
  };

  // FUNCTION THAT HANDLES DELETE WALLET
  const handleDeleteClick = () => {
    dispatch(
      deleteWallet({
        id: id,
      })
    );
  };

  const handleClick = (walletKey) => {
    if (isFetching) return <h4>Loading...</h4>;
    const payments = data?._embedded?.records;
    transactIn(payments, walletKey);
    transactOut(payments, walletKey);
    console.log(payments);
  };

  return (
    <div onClick={handleClick} className={style.container}>
      <div>
        <h3 className='font-bold mr-2'></h3>
      </div>
      <div>
        <div className='flex flex-row justify-between items-center'>
          <h3 className={style.walletname}>{walletName}</h3>
          <div>
            <div onClick={handleDeleteClick}>
              <CancelIcon />
            </div>
          </div>
        </div>
        <h4 className='text-sm font-light'>Balance: $6,000</h4>
      </div>
    </div>
  );
};

export default WalletItem;
