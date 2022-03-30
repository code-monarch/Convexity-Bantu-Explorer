import React, { useEffect, useState } from "react";
import { TransactionSvg } from "./icons.js"
// import TransactionInCard from "./TransactionInCard";

const headerstyle = {
  headerwrapper: `p-[10px] mt-[25px] shadow-md`,
};

const Header = () => {
  return (
    <div  className={headerstyle.headerwrapper}>
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

const Out = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    var EventSource = require("eventsource");

    var es = new EventSource(
      "https://expansion-testnet.bantu.network/accounts/GAE7E56N3XIC6JGJI54SD3VN4EDY3OZVFA7CLHXAMMTHLU4LIFYJMFSI/payments"
    );

    // addEventListener("message", (event) => {});

    // onmessage = (event) => {};

    // es.onmessage = (message) => {
    //   let result = message.data ? JSON.parse(message.data) : message;
    //   console.log(result);

    //  setData((data) => [...data, result]);
    // };
    // es.addEventListener("error", (e) => {
    // //console.log("An error occurred while attempting to connect.");
    // });
  }, []);

  return (
    <div className='bg-[#E3A1A6] rounded-xl p-[10px] mt-[25px] shadow-md w-[47%]'>
      <Header />
      <div>
        {data.map((entry) => (
          <div>{entry}</div>
        ))}
      </div>
    </div>
  );
};

export default Out;
