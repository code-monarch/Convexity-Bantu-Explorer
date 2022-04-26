import React from 'react'
import Header from './Header'
import ExchangeCard from './ExchangeCard'

import { Toaster } from "react-hot-toast";

const DashBoard = () => {
  return (
    <div className='ml-[20vw] relative flex flex-col items-center justify-between'>
      <Header />
      <ExchangeCard />
      <Toaster />
    </div>
  );
}

export default DashBoard