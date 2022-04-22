import React from 'react'
import Header from './Header'
import ExchangeCard from './ExchangeCard'

import { Toaster } from "react-hot-toast";

const DashBoard = () => {
  return (
    <div className='relative w-[80vw] flex flex-col items-center justify-between'>
      <Header />
      <ExchangeCard />
      <Toaster />
    </div>
  );
}

export default DashBoard