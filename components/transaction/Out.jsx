import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";
import { LoaderIcon } from "react-hot-toast";

const headerstyle = {
  headerwrapper: `w-[100%] rounded-t flex flex-col items-center text-black p-2  border-b-2 border-black mb-3`,
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
          {paymentOut?.length ? (
            <h4 className='mr-[5px]'>
              Total Transfers OUT: <strong>{paymentOut?.length}</strong>
            </h4>
          ) : (
            <>
              <h4 className='mr-[5px]'>
                Total Transfers OUT: <strong>{paymentOut?.length}</strong>
              </h4>
              <LoaderIcon />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Out = ({ paymentOut}) => {
  // let [transactIn, setTransactIn] = useState()

  const transactOut = useSelector((state) => state?.paymentsOut);

  return (
    <div className='w-[48%] flex flex-col items-center text-black rounded bg-[#ecf0f1]'>
      <Header paymentOut={paymentOut} />
      <div className='w-full'>
        {paymentOut?.map((outs, i) => {
          return (
            <div
              key={i}
              className='text-sm bg-[#f6e5e4] rounded-sm p-1 my-2 mx-2'>
              {/* ONE */}
              <div className='flex flex-row items-center'>
                <span className='mr-3 font-bold'>Hash:</span>
                <span className='truncate font-medium text-xs'>
                  {outs?.transaction_hash}
                </span>
              </div>
              {/* TWO */}
              <div className='flex flex-row items-center'>
                <span className='mr-3 font-bold'>Receiver:</span>
                <span className='truncate font-medium text-xs'>{outs?.to}</span>
              </div>
              <div className='flex flex-row items-center'>
                <span className='mr-3 font-bold'>Amount:</span>
                <span className='truncate font-medium text-xs'>
                  {outs?.amount}
                </span>
              </div>
              {/* FIVE */}
              <div>
                <span className='mr-3 font-bold'>Time:</span>
                <span className='truncate font-medium text-xs'>
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
