import React from 'react'
import Header from "../dashboard/Header"

const dashboard = () => {
  return (
    <div className='relative w-[80vw] flex flex-col items-center justify-between'>
      <Header />
      <h1>Add a Wallet</h1>
    </div>
  )
}

export default dashboard