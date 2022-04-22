import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";
import { LoaderIcon } from "react-hot-toast";

const headerstyle = {
  headerwrapper: `w-[100%] rounded-t  flex flex-col items-center text-black p-2 border-b-2 border-black mb-3`,
  headtextFlex: `flex flex-row items-center mb-1`,
  headerH2: `text-black font-bold text-l`,
  headerH4: `flex flex-row items-center font-base text-sm`,
};

const Header = ({ paymentIn }) => {
  return (
    <div className={headerstyle.headerwrapper}>
      <div>
        <div className={headerstyle.headtextFlex}>
          {/* <TransactionSvg /> */}
          <h2 className={headerstyle.headerH2}>TRANSFERS IN</h2>
        </div>
        <div className={headerstyle.headerH4}>
          {paymentIn?.length ? (
            <h4 className='mr-[5px]'>
              Total Transfers OUT: <strong>{paymentIn?.length}</strong>
            </h4>
          ) : (
            <>
              <h4 className='mr-[5px]'>
                Total Transfers In: <strong>{paymentIn?.length}</strong>
              </h4>
              <LoaderIcon />
            </>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

const In = ({ paymentIn }) => {
  return (
    <div className='w-[48%] flex flex-col items-center text-[#252422] rounded bg-[#ecf0f1]'>
      <Header paymentIn={paymentIn} />
      <div className='w-full'>
        {paymentIn?.map((ins, i) => {
          return (
            <div
              key={i}
              className='text-sm bg-[#e3fbe3] rounded-sm p-1 my-2 mx-2'>
              {/* ONE */}
              <div className='flex flex-row items-center'>
                <span className='mr-3 font-bold'>Hash:</span>
                <span className='truncate font-medium text-xs'>
                  {ins?.transaction_hash}
                </span>
              </div>
              {/* TWO */}
              <div className='flex flex-row items-center'>
                <span className='mr-3 font-bold'>Receiver:</span>
                <span className='truncate font-medium text-xs'>{ins?.to}</span>
              </div>
              <div className='flex flex-row items-center'>
                <span className='mr-3 font-bold'>Amount:</span>
                <span className='truncate font-medium text-xs'>
                  {ins?.amount}
                </span>
              </div>
              {/* FIVE */}
              <div className='flex flex-row items-center'>
                <span className='mr-3 font-bold'>Time:</span>
                <span className='truncate font-medium text-xs'>
                  {ins?.created_at}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default In;
