import React from 'react'
import WalletSvg from './icons'
import Wallets from './Wallets'

const style = {
  container: `fixed top-0 left-0 font-sans w-[20vw] bg-[#0b090a] h-[100vh] pt-[40px] overflow-auto shadow-xl`,
  wallet: `flex flex-row items-center text-white font-extrabold text-l px-2 pb-4 border-b-2 border-[#252b2c] rounded-xl`,
};

const SideBar = () => {
  return (
    <div className={style.container}>
        <div className={style.wallet}>
          <span>
            <WalletSvg />
          </span>
          <h2 className='ml-2 text-center'>WALLETS</h2>
        </div>
          <Wallets />
          <Wallets />
          <Wallets />
          <Wallets />
          <Wallets />
          <Wallets />
          <Wallets />
          <Wallets />
          <Wallets />
    </div>
  );
}

export default SideBar