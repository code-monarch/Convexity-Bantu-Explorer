import { deleteWallet } from "../../../../app/walletSlice";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import Link from "next/link";

import CancelIcon from "@mui/icons-material/Cancel";
import { red } from "@mui/material/colors";

import { LoaderIcon } from "react-hot-toast";

import toast from "react-hot-toast";

const style = {
  walletContainer: `cursor-pointer font-bold font-sans h-[60px] w-[90%] bg-[#f9690c] opacity-25 text-[#fff] cursor-pointer rounded-sm p-3 hover:shadow-md mx-auto mt-[10px] cursor-pointer hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150`,
  walletname: `font-bold cursor-pointer text-[#fff] uppercase`,
};

const WalletItem = ({ id, walletKey, walletName }) => {
  const notify = () =>
    toast("Wallet Removed", {
      position: "bottom-center",
      style: {
        borderRadius: "10px",
        background: "#ee2855",
        color: "#fff",
      },
    });

  // INSTANTIATE NEXT JS useRouter
  const router = useRouter();

  // GET WALLET BALANCE FROM BALANCE STATE STATE IN BALANCE SLICE
  const balance = useSelector((state) => state.balance);
  console.log(balance);

  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(
      deleteWallet({
        id: id,
      })
    );
    notify();
  };

  return (
    <div className={style.walletContainer}>
      <div className='flex flex-col justify-between cursor-pointer ring-pink-500 focus:ring-2'>
        <div className='flex flex-row justify-between items-top'>
          <Link href={`${router.pathname}/wallet/${walletKey}`}>
            <a className='cursor-pointer'>
              <h3 className={style.walletname}>{walletName}</h3>
            </a>
          </Link>
          <div onClick={handleDeleteClick}>
            <CancelIcon sx={{ color: red[300] }} />
          </div>
        </div>
        <div className='flex flex-row items-center text-sm font-light'>
          {/* IF WALLET BALANCE HAVE BEEN FETCHED, DISPLAY WALLET BALANCE */}

          {balance?.id == walletKey && (
            <>
              <h4 className='mr-[5px]'>Balance: {balance.balance}</h4>
            </>
          )}
          {balance?.id !== walletKey && (
            <>
              <h4 className='mr-[5px]'>Balance:</h4>
              <LoaderIcon />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletItem;
