import React from "react";

const TransactionCard = ({ transaction }) => {
  return (
    <div>
      {/* ONE */}
      <div>
        <span>Hash:</span>
        <span>{transaction.hash}</span>
      </div>
      {/* TWO */}
      <div>
        <span>Receiver:</span>
        <span>{transaction.receiver}</span>
      </div>
      {/* THREE */}
      <div>
        <span>Ledger:</span>
        <span>{transaction.ledger}</span>
      </div>
      {/* FOUR */}
      <div>
        <span>Amount:</span>
        <span>{transaction.amount}</span>
      </div>
      {/* FIVE */}
      <div>
        <span>Time:</span>
        <span>{transaction.time}</span>
      </div>
    </div>
  );
};

export default TransactionCard;
