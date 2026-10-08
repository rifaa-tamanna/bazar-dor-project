// import Image from "next/image";
// // import NavLinks from "./NavLinks";
// // import UserInfo from "./UserInfo";

// const Header = () => {
//   const date = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });

//   return (
//     <header className="relative mx-auto max-w-7xl px-4 py-4">
//       <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
//         <Image
//           className="bg-green-800 rounded rounded-2xl"
//           src="/logo-icon.png"
//           alt="Bangla News 24"
//           width={40}
//           height={40}
//           priority
//         />
//         <div className="flex flex-col items-center sm:items-start">
//           <span className="text-2xl font-bold text-[#1E1E1E]">
//             বাজার দর
//           </span>
//           <span className="text-[14px] text-neutral-500">{date}</span>
//         </div>
//       </div>

//      {/* <UserInfo/>

//       <NavLinks/> */}

//     <button className="btn">Sign In</button>
//     <button className="btn">Sign Up</button>

//     </header>
//   );
// };

// export default Header;

import Image from "next/image";
import NavLinks from "./NavLinks";

interface Category {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

interface CategoryResponse {
  success: boolean;
  count: number;
  cachedAt: string;
  data: Category[];
}

const Navbar = async () => {
  
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="w-full border-b border-gray-100 bg-white">
        <div className="relative mx-auto flex h-24 max-w-[1280px] items-center px-4 sm:px-6 lg:px-0">
          {/* ================= CENTER LOGO + NAME + DATE ================= */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <Image
              className="bg-[#05893E] rounded rounded-2xl p-[8px] h-10 w-10 sm:h-12 sm:w-12"
              height={18}
              width={18}
              src="/logo-icon.png"
              alt="Logo Image"
            />

            {/* Website Name + Date */}
            <div className="flex flex-col">
              <h1 className="font-serif text-[20px] font-bold leading-[28px] text-[#1D271F] sm:text-[20px]">
                বাজার দর
              </h1>

              <p className="font-serif text-[12px] leading-4 text-gray-500 sm:text-[13px]">
                {date}
              </p>
            </div>
          </div>

          {/* ================= RIGHT - AUTH BUTTONS ================= */}
          <div className="absolute right-4 flex items-center gap-4 sm:right-6 sm:gap-5 lg:right-0">
            <button className="font-serif text-[14px] text-gray-800 transition hover:text-[#05893E] sm:text-[14px]">
              সাইন ইন
            </button>

            <button className="btn border-0 bg-[#05893E] px-5 font-serif text-[14px] text-white shadow-none hover:bg-[#03602b] sm:px-6 sm:text-[14px]">
              সাইন আপ
            </button>
          </div>
        </div>

        {/* <NavLinks></NavLinks> */}
      </header>
    </>
  );
};

export default Navbar;
