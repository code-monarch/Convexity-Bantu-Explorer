import React from 'react'

const style = {
  container: `font-bold font-sans h-[60px] w-[100%] bg-[#0b090a] hover:bg-white focus:bg-white text-white cursor-pointer rounded-sm p-2 hover:shadow-md border-b-2 border-[#252b2c] rounded-xl`,
  wrapper: `w-[100%] flex flex-row justify-left font-bold cursor-pointer`,
  walletname: `font-bold cursor-pointer`,
};

const Wallets = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div>
          <h3 className='font-bold mr-2'>1.</h3>
        </div>
        <div>
          <h3 className={style.walletname}>Daniel Desk</h3>
          <h4 className='text-sm font-light'>Balance: $6,000</h4>
        </div>
      </div>
    </div>
  );
}

export default Wallets