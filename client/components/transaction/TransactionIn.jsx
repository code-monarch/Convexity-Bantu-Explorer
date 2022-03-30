import React, { useEffect, useState } from "react";
import { TransactionSvg } from "./icons.js";
// import TransactionInCard from "./TransactionInCard";

const headerstyle = {
  headerwrapper: `p-[10px] mt-[25px] shadow-md`,
};

const Header = () => {
  return (
    <div className={headerstyle.headerwrapper}>
      <div>
        <div>
          <TransactionSvg />
          <h2>TRANSFER OUT</h2>
        </div>
        <h4>Total Transfer Out:8</h4>
      </div>
      <div></div>
    </div>
  );
};

const TransactionIn = () => {
  const [data, setData] = useState([]);

  var EventSource = require("eventsource");
  var es = new EventSource(
    "https://expansion-testnet.bantu.network/accounts/GB7JFK56QXQ4DVJRNPDBXABNG3IVKIXWWJJRJICHRU22Z5R5PI65GAK3/payments"
  );
  es.onmessage = (message) => {
    var result = message.data ? JSON.parse(message.data) : message;
    console.log(result);
    setData((data) => [...data, result]);
  };
  es.onerror = function (error) {
    console.log("An error occurred!");
  };


  return (
    <div className='bg-[#B9FBC0] rounded-xl p-[10px] mt-[25px] shadow-md w-[47%]'>
      <Header />
      <div>
        {data.map((entry) => (
          <div className='text-black'>{entry}</div>
        ))}
      </div>
    </div>
  );
};

export default TransactionIn;
