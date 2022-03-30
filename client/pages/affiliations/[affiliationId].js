import Head from "next/head";
import Image from "next/image";

export default function Affiliation({ trades }) {
  return (
    <div>
      <h1>Trades</h1>
      <ul className='flex flex-col items-center'>
        {" "}
        {trades.map((trade) => {
          return (
            <ul className='flex flex-col items-center'>
         {trades.map((trade) => {
           return (
             <li key={trade._embedded.records.id}>
               <p>{trade._embedded.records[0].price}</p>
               {/* <p>{character.affiliation}</p>
               <img src={character.photoUrl} width='100%' alt='' /> */}
             </li>
           );
         })}
       </ul>
          );
        })}
      </ul>
    </div>
  );
}
// export default function Affiliation({ characters, affiliationId }) {
//   return (
//     <div>
//       <h1>
//         Characters Matching Affiliation "{affiliationId.replace(/\+/g, " ")}"
//       </h1>
//       <ul className='flex flex-col items-center'>
//         {characters.map((character) => {
//           return (
//             <li key={character._id}>
//               <p>{character.name}</p>
//               <p>{character.affiliation}</p>
//               <img src={character.photoUrl} width='100%' alt='' />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export async function getServerSideProps({ params }) {
//   const affiliationId = params.affiliationId.replace(/\-/g, "+");
//   const characters = await fetch(
//     `https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${affiliationId}`
//   ).then((res) => res.json());
//   console.log(characters);
//   return {
//     props: {
//       affiliationId,
//       characters,
//     },
//   };
// }
export async function getServerSideProps({ params }) {
   const BantuAlltrade = params.affiliationId;
  const trades = await fetch(
    `https://expansion.bantu.network/transactions/8231fc844308a1324a7c2c08610a5c13439aec1fca82e67e99678b8c3278eb52`
  ).then((res) => res.json());
//   console.log(trades._embedded.records);
  return {
    props: {
      trades,
      BantuAlltrade,
    },
  };
}
