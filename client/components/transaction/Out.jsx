import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";

const headerstyle = {
  headerwrapper: `flex flex-col items-center text-black border-b-[2px] border-[#4a4a49] p-2`,
  headtextFlex: `flex flex-row items-center mb-1 `,
  headerH2: `text-black font-bold text-l`,
  headerH4: `font-thin text-sm`,
};

const Header = ({ transactOut }) => {
  return (
    <div className={headerstyle.headerwrapper}>
      <div>
        <div className={headerstyle.headtextFlex}>
          {/* <TransactionSvg /> */}
          <h2 className={headerstyle.headerH2}>TRANSFERS Out</h2>
        </div>
        <h4 className={headerstyle.headerH4}>
          Total Transfers Out: {transactOut[0]?.length}
        </h4>
      </div>
      <div></div>
    </div>
  );
};

const Out = () => {
  // let [transactIn, setTransactIn] = useState()

  const transactOut = useSelector((state) => state?.paymentsOut);
  console.log(transactOut, "transactOut func");

  return (
    <div className='w-[50%] border-r-[1px] border-[#4a4a49] fex flex-col items-center text-white'>
      <Header transactOut={transactOut} />
      <div className='w-full'>
        {transactOut[0]?.map((paymentOut, i) => {
          return (
            <div
              key={i}
              className='text-sm bg-walletColor rounded p-1 my-2 mx-2'>
              {/* ONE */}
              <div className='flex'>
                <span className='mr-3 font-bold'>Hash:</span>
                <span className='truncate font-normal text-xs'>
                  {paymentOut?.transaction_hash}
                </span>
              </div>
              {/* TWO */}
              <div className='flex'>
                <span className='mr-3 font-bold'>Receiver:</span>
                <span className='truncate font-normal text-xs'>
                  {paymentOut?.to}
                </span>
              </div>
              <div className='flex'>
                <span className='mr-3 font-bold'>Amount:</span>
                <span className='truncate font-normal text-xs'>
                  {millify(paymentOut?.amount, {
                    precision: 3,
                    lowercase: true,
                  })}
                </span>
              </div>
              {/* FIVE */}
              <div>
                <span className='mr-3 font-bold'>Time:</span>
                <span className='truncate font-normal text-xs'>
                  {paymentOut?.created_at}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Out;
