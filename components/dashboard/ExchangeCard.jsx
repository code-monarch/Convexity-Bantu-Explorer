import React from "react";
import Link from "next/link"
import Image from "next/image"

const style = {
  wrapper: `w-[800px] flex flex-wrap justify-center space-x-4`,
  container: `w-[250px] relative p-6 max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-[20px] cursor-pointer hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150`,
  nameOfExchange: `mb-2 text-2xl font-bold tracking-tight`,
  text: `mb-3 font-normal text-gray-700 dark:text-gray-400`,
};

const ExchangeCard = () => {
  return (
    <div className='ml-[20vw] mt-[100px] flex flex-col items-center z-[-10]'>
      <div className={style.wrapper}>
        <div className={`${style.container} bg-[#f9690c]`}>
          <Link href='#'>
            <a>
              <h5 className={`${style.nameOfExchange} text-white`}>XBN</h5>

              <p className={`${style.text} text-white`}>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <svg
                className='ml-2 -mr-1 w-4 h-4'
                fill='#ffffff'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
              <div className='absolute bottom-0 right-1'>
                <Image
                  width={50}
                  height={50}
                  priority
                  src='/bantuLogo.png'
                  alt='Bantu Logo'
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={`${style.container} bg-[#ecf0f1]`}>
          <Link href='#'>
            <a>
              <h5 className={`${style.nameOfExchange} text-[#000000]`}>
                ETHEREUM
              </h5>
              <p className={`${style.text} text-black`}>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <svg
                className='ml-2 -mr-1 w-4 h-4'
                fill='#000000'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
              <div className='absolute bottom-0 right-1'>
                <Image
                  width={50}
                  height={50}
                  priority
                  src='/ethereumLogo.png'
                  alt='Bantu Logo'
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={`${style.container} bg-[#7DFDFE]`}>
          <Link href='#'>
            <a>
              <h5 className={`${style.nameOfExchange} text-black`}>TRON</h5>
              <p className={`${style.text} text-black`}>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <svg
                className='ml-2 -mr-1 w-4 h-4'
                fill='#000000'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
              <div className='absolute bottom-0 right-1'>
                <Image
                  width={50}
                  height={50}
                  priority
                  src='/tronLogo.png'
                  alt='Tron Logo'
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={`${style.container} bg-[#000000]`}>
          <Link href='#'>
            <a>
              <h5 className={`${style.nameOfExchange} text-[#F0B90B]`}>BNB</h5>
              <p className={`${style.text} text-white`}>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <svg
                className='ml-2 -mr-1 w-4 h-4'
                fill='#F0B90B'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
              <div className='absolute bottom-0 right-1'>
                <Image
                  width={50}
                  height={50}
                  priority
                  src='/binance.png'
                  alt='Bantu Logo'
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={`${style.container} bg-[#000000]`}>
          <Link href='#'>
            <a>
              <h5 className={`${style.nameOfExchange} text-[#FFFFFF]`}>
                SOLANA
              </h5>
              <p className={`${style.text} text-white`}>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <svg
                className='ml-2 -mr-1 w-4 h-4'
                fill='#ffffff'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
              <div className='absolute bottom-0 right-1'>
                <Image
                  width={50}
                  height={50}
                  priority
                  src='/solanaLogo.png'
                  alt='Solana Logo'
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCard;
