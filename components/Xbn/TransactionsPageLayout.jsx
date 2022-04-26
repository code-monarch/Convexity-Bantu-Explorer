import React from 'react'
import SideBar from './sidebar/SideBar'


const TransactionsPageLayout = ({ children }) => {
  return (
    <div className='flex flex-row justify-between w-[100vw] h-[100vh]'>
        <SideBar />
        { children }
    </div>
  )
}

export default TransactionsPageLayout