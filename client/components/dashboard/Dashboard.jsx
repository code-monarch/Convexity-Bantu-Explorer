import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import In from "../transaction/In";
import Out from "../transaction/Out";
import { NotificationSvg, MenuSvg } from "./icons";
// import { useSelector, useDispatch } from "react-redux";
// import axios from 'axios'


const style = {
  container: `w-[80vw] ml-[20vw] overflow-auto px-[20px] bg-[#fff]`,
  wrapper: `m-[0] mt-0`,
  titleFlex: `flex flex-row justify-between items-center bg-walletColor rounded h-[60px] shadow-sm px-[20px] mt-[10px]`,
  iconsFlex: `w-[70px] flex justify-between`,
  icons: `cursor-pointer`,
  main: `bg-white w-[100%] h-full overflow-auto flex flex-row justify-between rounded mt-[15px]`,
};
const Header = () => {
  return (
    <div className={style.titleFlex}>
      <h1 className='font-[800] text-xl text-white'>
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
  const transactions = useSelector((state) => state.transactions);

  // const transactions = useSelector((state) => state.transactions);
    // useEffect(() => {
    //   getTransaction();
    // }, []);

    const transactIn = (walletKey) => {
      const transactionIn = transactions?.filter(
        (transac) => transac.from !== address
      );
      return transactionIn;
    };
    const transactOut = (walletKey) => {
      const transactionOut = transactions?.filter(
        (transac) => transac.from == address
      );
      return transactionOut;
    };
    // const transactOut = (address) => {
    //   const transactionIn = fetchedData?.filter(
    //     (transac) => transac.to !== address
    //   );

    //   return transactionIn;
    // };

    // console.log(
    //   transactIn("GAE7E56N3XIC6JGJI54SD3VN4EDY3OZVFA7CLHXAMMTHLU4LIFYJMFSI"),
    //   "in"
    // );
    // console.log(
    //   transactOut("GAE7E56N3XIC6JGJI54SD3VN4EDY3OZVFA7CLHXAMMTHLU4LIFYJMFSI"),
    //   "Out"
    // );
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Header />
        <main className={style.main}>
          <In />
          <Out />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
