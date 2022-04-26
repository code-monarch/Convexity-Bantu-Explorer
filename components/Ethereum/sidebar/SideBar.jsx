import React from "react";
import WalletSvg from "./icons";
import WalletItem from "./walletItem";
import { useSelector } from "react-redux";
import AddWalletBtn from "../form/addWalletBtn";

const style = {
  container: `relative z-50 fixed left-0 top-0 font-sans w-[20vw] bg-[#000000] h-[100vh] pt-[40px] overflow-auto shadow-md`,
  wallet: `flex flex-row items-center text-black font-extrabold text-l px-2 pb-4 border-b-2 border-[#ecf0f1]`,
};

const SideBar = ({ toggleModal }) => {
  const wallets = useSelector((state) => state.ethwallet);

  return (
    <div className={style.container}>
      <div className={style.wallet}>
        <span>
          <WalletSvg />
        </span>
        <h2 className='ml-2 text-center text-[#ecf0f1]'>WALLETS</h2>
      </div>
      {wallets.map((wallet) => (
        <>
          <WalletItem
            key={wallet.id}
            id={wallet.id}
            walletKey={wallet.walletKey}
            walletName={wallet.walletName}
          />
        </>
      ))}
      <AddWalletBtn toggleModal={toggleModal} />
    </div>
  );
};

export default SideBar;
