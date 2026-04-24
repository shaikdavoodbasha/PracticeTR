// import React, { useContext, useState } from "react";
// import { MainContext } from "../context/AppContext";
// import { cardData } from "../data/cardata";
// import Card from "../common/Card";

// const BasicQuestins = ({ data }) => {
  
//   const [count, setCount] = useState(0);
//   const { name1,setVan,van } = useContext(MainContext);
//   return (
//     <div>
//       <button
//           className="px-3 py-1 bg-red-600 text-white"
//           onClick={() => setVan(!van)}
//         >
//           IncVan
//         </button>
//       <p className="text-red-700">{name1}</p>
//       <div>
//         <p>{data.class}</p>
//         <p>{data.section}</p>
//       </div>
//       <div className="flex gap-3 py-6">
//         <button
//           className="px-3 py-1 bg-red-600 text-white"
//           onClick={() => setCount(count + 1)}
//         >
//           Increment
//         </button>
//         <p>Count Value : {count}</p>
//         <button
//           className="px-3 py-1 bg-red-600 text-white"
//           onClick={() => setCount(count - 1)}
//         >
//           Decrement
//         </button>
//         <button
//           className="px-3 py-1 bg-red-600 text-white"
//           onClick={() => setCount(0)}
//         >
//           Reset
//         </button>
//       </div>
//       <div className="grid grid-cols-3 gap-4">
//         {cardData.map(({ title, description, category, id }) => {
//           return (
//             <div key={id}>
//               <Card
//                 title={title}
//                 description={description}
//                 category={category}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BasicQuestins;
