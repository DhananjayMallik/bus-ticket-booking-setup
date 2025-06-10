// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Save from "../../assets/save.png";
// import { FaCopy } from "react-icons/fa";
// const Offer = () => {
//   const [copied, setCopied] = useState(false);
//   const handleCopy = () => {
//     navigator.clipboard
//       .writeText("GTECH08")
//       .then(() => {
//         setCopied(true);
//         setTimeout(() => {
//           setCopied(true);
//         }, 2000);
//       })
//       .catch((err) => {
//         console.log("falied to copy", err);
//       });
//   };

//   return (
//     <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch]">
//       <div className="w-full flex items-center justify-between">
//         <h1 className="text-2xl font-medium mb-6">Special Offer</h1>
//         <Link to="/offer" className="text-violet-600">
//           View All
//         </Link>
//       </div>

//       {/* <div className="bg-violet-100 dark:bg-violet-900 p-5 rounded-md shadow-md flex items-center justify-between">
//         <div className="text-violet-800 dark:text-white font-semibold">
//           Use code <span className="font-bold">GTECH08</span> for 10% off!
//         </div>
//         <button
//           onClick={handleCopy}
//           className="ml-4 bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
//         >
//           Copy Code
//         </button>
//       </div> */}
//       <div className="grid grid-cols-2 gap-16">
//         <div className="w-full h-auto rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 p-8 flex items-center">
//           <img
//             src={Save}
//             alt=""
//             className="w-52 aspect-[2/1] object-contain object-center"
//           />
//           <div className="flex flex-1 flex-col space-y-5">
//             <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
//               Get 40% off on your first booking
//             </h1>
//             <div className="flex items-center gap-x-">
//               <div className="w-fit border border-dashed px-4 py-1 border-neutral-300 dark:border-neutral-800 bg-violet-500/10 dark:bg-violet-800/5 rounded-md p-3">
//                 {copied ? (
//                   <span className="text-green-600">Copied</span>
//                 ) : (
//                   <span className="text-violet-500">GTECH08</span>
//                 )}
//               </div>
//               {/* copy button*/}
//               <button onClick={handleCopy} className="text-xl text-violet-700">
//                 <FaCopy />
//               </button>
//             </div>
//             <p className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
//               Valid Till :{" "}
//               <span className="text-sm font-medium">26Th June</span>
//             </p>
//           </div>
//         </div>

//         <div className="w-full h-auto rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 p-8 flex items-center">
//           <img
//             src={Save}
//             alt=""
//             className="w-52 aspect-[2/1] object-contain object-center"
//           />
//           <div className="flex flex-1 flex-col space-y-5">
//             <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
//               Get 40% off on your first booking
//             </h1>
//             <div className="flex items-center gap-x-">
//               <div className="w-fit border border-dashed px-4 py-1 border-neutral-300 dark:border-neutral-800 bg-violet-500/10 dark:bg-violet-800/5 rounded-md p-3">
//                 {copied ? (
//                   <span className="text-green-600">Copied</span>
//                 ) : (
//                   <span className="text-violet-500">GTECH08</span>
//                 )}
//               </div>
//               {/* copy button*/}
//               <button onClick={handleCopy} className="text-xl text-violet-700">
//                 <FaCopy />
//               </button>
//             </div>
//             <p className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
//               Valid Till :{" "}
//               <span className="text-sm font-medium">26Th June</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Offer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Save from "../../assets/save.png";
import { FaCopy } from "react-icons/fa";

const Offer = () => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.log("Failed to copy", err));
  };

  const offers = [
    {
      id: 1,
      title: "Get 40% off on your first booking",
      code: "GTECH08",
      validTill: "26th June",
      image: Save
    },
    {
      id: 2,
      title: "Get 30% off on weekend trips",
      code: "WEEKEND30",
      validTill: "30th June",
      image: Save
    }
  ];

  return (
    <div className="w-full lg:px-28 md:px-16 px-4 mb-8 sm:mb-[8ch]">
      <div className="w-full flex items-center justify-between mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-medium">Special Offer</h1>
        <Link to="/offer" className="text-sm sm:text-base text-violet-600 hover:text-violet-700 transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-16">
        {offers.map((offer) => (
          <div key={offer.id} className="w-full h-auto rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4">
            <img
              src={offer.image}
              alt="Discount offer"
              className="w-32 sm:w-40 md:w-52 aspect-[2/1] object-contain object-center"
            />
            <div className="flex flex-1 flex-col space-y-3 sm:space-y-4 md:space-y-5">
              <h1 className="text-lg sm:text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                {offer.title}
              </h1>
              <div className="flex items-center gap-x-2">
                <div className="w-fit border border-dashed px-3 py-1 sm:px-4 sm:py-1 border-neutral-300 dark:border-neutral-800 bg-violet-500/10 dark:bg-violet-800/5 rounded-md">
                  {copied ? (
                    <span className="text-sm text-green-600">Copied!</span>
                  ) : (
                    <span className="text-sm sm:text-base text-violet-500">{offer.code}</span>
                  )}
                </div>
                <button 
                  onClick={() => handleCopy(offer.code)} 
                  className="text-lg sm:text-xl text-violet-600 hover:text-violet-700 transition-colors"
                  aria-label="Copy coupon code"
                >
                  <FaCopy />
                </button>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                Valid Till:{" "}
                <span className="font-medium">{offer.validTill}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;