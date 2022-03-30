import React from "react";
import Out from "../transaction/Out";
import TransactionIn from "../transaction/TransactionIn";
import { NotificationSvg, MenuSvg } from "./icons";
// import Transact from '../transaction/Transact';

const style = {
  container: `w-[80vw] ml-[20vw] overflow-auto px-[20px] bg-slate-200`,
  wrapper: `m-[0] mt-0`,
  titleFlex: `flex flex-row justify-between items-center bg-[#0b090a] h-[60px] shadow-md px-[20px] border-b-2 border-[#252b2c] rounded-xl mt-[20px]`,
  iconsFlex: `w-[70px] flex justify-between`,
  icons: `cursor-pointer`,
  main: `w-[100%] h-[500px] overflow-auto flex flex-row justify-between rounded-xl p-[10px] mt-[15px]`,
};
const Header = () => {
  return (
    <div className={style.titleFlex}>
      <h1 className='text-customgreen font-extrabold text-l'>
        CONVEXITY TRADING EXPLORER
      </h1>
      <div className={style.iconsFlex}>
        <span className={style.icons}>
          <NotificationSvg />
        </span>
        <span className={style.icons}>
          <MenuSvg />
        </span>
      </div>
    </div>
  );
};
const Dashboard = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Header />
        <main className={style.main}>
          <TransactionIn />
          <Out />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
