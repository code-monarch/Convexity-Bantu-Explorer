import React from 'react'

const TransactionInCard = ( {hashList,sourceList,amountList,timeList} ) => {
  return (
    <div>
      <ul>
        {hashList.map((hash) => (
          <li key={Math.floor(Math.random() * 5)}>{hash}</li>
        ))}
      </ul>
      <ul>
        {sourceList.map((source) => (
          <li key={Math.floor(Math.random() * 5)}>{source}</li>
        ))}
      </ul>
      <ul>
        {amountList.map((amount) => (
          <li key={Math.floor(Math.random() * 5)}>{amount}</li>
        ))}
      </ul>
      <ul>
        {timeList.map((time) => (
          <li key={Math.floor(Math.random() * 5)}>{time}</li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionInCard