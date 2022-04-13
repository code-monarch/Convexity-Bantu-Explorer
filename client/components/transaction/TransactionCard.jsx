import React from "react";


const style = {
  flex: `flex flex-row items-center`,
}

const TransactionCard = ({ transaction }) => {
  return (
    <div>
      {/* ONE */}
      <div className={style.flex}>
        <span>Hash:</span>
        <span>{transaction.hash}</span>
      </div>
      {/* TWO */}
      <div className={style.flex}>
        <span>Receiver:</span>
        <span>{transaction.receiver}</span>
      </div>
      {/* THREE */}
      <div className={style.flex}>
        <span>Ledger:</span>
        <span>{transaction.ledger}</span>
      </div>
      {/* FOUR */}
      <div className={style.flex}>
        <span>Amount:</span>
        <span>{transaction.amount}</span>
      </div>
      {/* FIVE */}
      <div className={style.flex}>
        <span>Time:</span>
        <span>{transaction.time}</span>
      </div>
    </div>
  );
};

export default TransactionCard;
