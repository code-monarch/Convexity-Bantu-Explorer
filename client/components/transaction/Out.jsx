import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";
import { LoaderIcon } from "react-hot-toast";

const headerstyle = {
  headerwrapper: `flex flex-col items-center text-black p-2`,
  headtextFlex: `flex flex-row items-center mb-1 `,
  headerH2: `text-black font-bold text-l`,
  headerH4: `flex flex-row items-center font-base text-sm`,
};

const Header = ({ paymentOut }) => {
  return (
    <div className={headerstyle.headerwrapper}>
      <div>
        <div className={headerstyle.headtextFlex}>
          {/* <TransactionSvg /> */}
          <h2 className={headerstyle.headerH2}>TRANSFERS OUT</h2>
        </div>
        <div className={headerstyle.headerH4}>
          <h4 className='mr-[5px]'>
            Total Transfers OUT: <strong>{paymentOut?.length}</strong>
          </h4>{" "}
          {<LoaderIcon />}
        </div>
      </div>

    </div>
  );
};

const Out = ({ paymentOut}) => {
  // let [transactIn, setTransactIn] = useState()

  const transactOut = useSelector((state) => state?.paymentsOut);
  console.log(transactOut, "transactOut func");

  return (
    <div className='bg-slate-300 w-[48%] mr-[1%] border-[#4a4a49] flex flex-col items-center text-white rounded'>
      <Header paymentOut={paymentOut} />
      <div className='w-full'>
        {paymentOut?.map((outs, i) => {
          return (
            <div
              key={i}
              className='text-sm bg-walletColor rounded-sm p-1 my-2 mx-2 border border-gray-200'>
              {/* ONE */}
              <div className='flex flex-row items-center'>
                <span className='mr-3 font-bold'>Hash:</span>
                <span className='truncate font-normal text-xs'>
                  {outs?.transaction_hash}
                </span>
              </div>
              {/* TWO */}
              <div className='flex flex-row items-center'>
                <span className='mr-3 font-bold'>Receiver:</span>
                <span className='truncate font-normal text-xs'>{outs?.to}</span>
              </div>
              <div className='flex flex-row items-center'>
                <span className='mr-3 font-bold'>Amount:</span>
                <span className='truncate font-normal text-xs'>
                  {millify(outs?.amount, {
                    precision: 3,
                    lowercase: true,
                  })}
                </span>
              </div>
              {/* FIVE */}
              <div>
                <span className='mr-3 font-bold'>Time:</span>
                <span className='truncate font-normal text-xs'>
                  {outs?.created_at}
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
