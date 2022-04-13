import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";
import { LoaderIcon } from "react-hot-toast";

const headerstyle = {
  headerwrapper: `bg-black w-[100%] rounded-t flex flex-col items-center text-white p-2`,
  headtextFlex: `flex flex-row items-center mb-1 `,
  headerH2: `text-white font-bold text-l`,
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
  console.log(transactOut, "transactOut func");

  return (
    <div className='border-2 border-black w-[48%] flex flex-col items-center text-black rounded '>
      <Header paymentOut={paymentOut} />
      <div className='w-full'>
        {paymentOut?.map((outs, i) => {
          return (
            <div
              key={i}
              className='text-sm bg-[#ff758f] rounded-sm p-1 my-2 mx-2'>
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
                  {millify(outs?.amount, {
                    precision: 3,
                    lowercase: true,
                  })}
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
