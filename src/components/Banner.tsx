// import Image from "next/image";
// import React from "react";

// const Banner = () => {
//   const date = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });

//   return (
//     <div className="max-w-6xl mx-auto bg-[#107810] flex justify-between p-6 rounded-2xl my-[50px]">
//       {/* left side */}
//       <div>
//         {/* date sspace  */}
//         <span className="bg-[#E1F0E7] py-2 px-5 rounded rounded-4xl text-[#05893E] font-semibold text-[18px]">
//             {date}
//         </span>

//         {/* content space */}
//         <h1 className="mt-[18px] text-[36px] font-bold text-[#1D271F]">আজকের বাজারের দাম এক নজরে</h1>

//         <p className="text-[#5F6761] py-[18px]">
//           চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
//           বিস্তারিত, গড়, সর্বনিম্ন- <br /> সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
//         </p>

//         {/* button */}
//         <button className="pointer bg-[#40893F] btn px-2 sm:px-4.25 py-1 text-[#FAFCFA] text-sm sm:text-base">
//             সব পণ্য দেখুন
//         </button>

//       </div>

//       {/* right side */}
//       <div>
//         <Image
//           className="bg-[#40893F] rounded-xl p-3"
//           width={300}
//           height={300}
//           src="/bazar-hero-removebg.png"
//           alt="logo-icon"
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;

import Image from "next/image";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="max-w-6xl mx-auto my-[40px]">
      <div className="bg-[#E1F0E7] flex flex-col md:flex-row items-center justify-between gap-10 p-6 md:p-10 rounded-2xl">
        {/* Left side */}
        <div className="flex-1">
          <span className="inline-block bg-[#ffffff] py-2 px-5 rounded-4xl text-[#05893E] font-semibold text-[18px] text-sm md:text-lg">
            {date}
          </span>

          <h1 className="mt-[18px] text-2xl md:text-4xl font-bold text-[#1D271F]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="text-[#5F6761] py-[18px] leading-7">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন- সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <button className="cursor-pointer bg-[#40893F] hover:bg-[#326E31] rounded-lg px-4 py-2 text-white text-sm sm:text-base">
            সব পণ্য দেখুন
          </button>
        </div>

        {/* Right side */}
        <div className="flex-shrink-0">
          <Image
            className="object-contain"
            src="/bazar-hero-removebg.png"
            width={300}
            height={300}
            alt="বাজারের পণ্য"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
