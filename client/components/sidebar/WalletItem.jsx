import React from "react";
import { deleteWallet } from "../../app/walletSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import CancelIcon from "@mui/icons-material/Cancel";
import { red } from "@mui/material/colors";

import { LoaderIcon } from "react-hot-toast";

import toast from "react-hot-toast";

import millify from "millify";

const style = {
  walletContainer: `cursor-pointer font-bold font-sans h-[60px] w-[90%] bg-walletColor focus:bg-white focus:text-black text-[#fff] cursor-pointer rounded-sm p-3 hover:shadow-md mx-auto mt-[10px] cursor-pointer`,
  walletname: `font-bold cursor-pointer text-[#fff] uppercase`,
};

const WalletItem = ({ id, walletKey, walletName }) => {
  const notify = () =>
    toast("Wallet Removed", {
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#ee2855",
        color: "#fff",
      },
    });

  const nativeBalance = useSelector((state) => state.balance);
  console.log(nativeBalance, "native balance");

  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(
      deleteWallet({
        id: id,
      })
    );
    notify()
  };

  return (
    <div id={id} className={style.walletContainer}>
      <div className='flex flex-col justify-between cursor-pointer'>
        <Link href={`/wallet/${walletKey}`}>
          <a className='cursor-pointer'>
            <div className='flex flex-row justify-between items-top'>
              <h3 className={style.walletname}>{walletName}</h3>
              <div onClick={handleDeleteClick}>
                <CancelIcon sx={{ color: red[300] }} />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center text-sm font-light'>
              {nativeBalance ? (
                <h4 className='mr-[5px]'>
                  Balance: {nativeBalance && nativeBalance}
                </h4>
              ) : (
                <>
                  <h4 className='mr-[5px]'>
                    Balance: {nativeBalance && nativeBalance}
                  </h4>{" "}
                  <LoaderIcon />
                </>
              )}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WalletItem;
