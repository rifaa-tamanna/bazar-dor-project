// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// interface ICategory {
//   id: string;
//   nameBn: string;
//   icon: string;
// }

// const Navbar = () => {
//   const [categories, setCategories] = useState<ICategory[]>([]);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     fetch("https://openapi.programming-hero.com/api/bazardor/categories")
//       .then((res) => res.json())
//       .then((data) => setCategories(data))
//       .catch((err) => console.log(err));
//   }, []);
//   console.log(categories);

//   const date = new Intl.DateTimeFormat("bn-BD", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     timeZone: "Asia/Dhaka",
//   }).format(new Date());

//   return (
//     <nav className="bg-[#FAFCFA] flex flex-col gap-4 py-5 sticky top-0 z-50">
//       {/* ================= HEADER ================= */}
//       <div>
//         <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
//           <div className="relative flex items-center justify-between min-h-17.5 md:min-h-0">
//             {/* ================= MOBILE HAMBURGER ================= */}
//             <button
//               type="button"
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="md:hidden flex flex-col gap-1.5 p-2"
//               aria-label="Toggle menu"
//               aria-expanded={menuOpen}
//             >
//               <span className="block w-6 h-0.5 bg-[#1D2720]" />
//               <span className="block w-6 h-0.5 bg-[#1D2720]" />
//               <span className="block w-6 h-0.5 bg-[#1D2720]" />
//             </button>

//             {/* ================= LOGO + TITLE + DATE ================= */}
//             <div
//               className="
//                 flex items-center gap-2

//                 absolute left-1/2 -translate-x-1/2

//                 md:static
//                 md:left-auto
//                 md:translate-x-0
//               "
//             >
//               <div>
//                 <Link href="/">
//                   <Image
//                     className="bg-[#40893F] rounded-xl p-3"
//                     width={50}
//                     height={40}
//                     src="/logo-icon.png"
//                     alt="logo-icon"
//                   />
//                 </Link>
//               </div>

//               <div className="whitespace-nowrap">
//                 <Link href="/">
//                   <p className="font-bold text-xl sm:text-2xl">বাজার দর</p>
//                 </Link>

//                 <p className="text-xs sm:text-sm">{date}</p>
//               </div>
//             </div>

//             {/* ================= AUTH BUTTONS ================= */}
//             <div className="flex gap-1 sm:gap-2 ml-auto md:ml-0">
//               <Link href="/sign-in" className="pointer btn px-2 sm:px-4.25 py-1 text-sm sm:text-base">
//                 সাইন ইন
//               </Link>

//               <Link href="/sign-up" className="pointer bg-[#40893F] btn px-2 sm:px-4.25 py-1 text-[#FAFCFA] text-sm sm:text-base">
//                 সাইন আপ
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       {menuOpen && (
//         <div className="md:hidden border-t border-slate-200">
//           <div className="flex flex-col gap-2 py-3 px-4">
//             {categories?.map((category) => (
//               <li
//                 key={category.id}
//                 className="list-none px-3.25 py-2 text-[#1D2720] font-semibold"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <span>{category.icon}</span> <span>{category.nameBn}</span>
//               </li>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ================= TABLET + LAPTOP CATEGORY NAV ================= */}
//       <div className="hidden md:block">
//         <div
//           className="
//             max-w-6xl mx-auto

//             flex
//             flex-wrap
//             justify-center
//             items-center

//             gap-x-5
//             gap-y-2

//             lg:gap-x-8
//             xl:gap-x-12

//             py-3
//             mb-2.5

//             px-4
//             lg:px-0
//           "
//         >
//           {categories.map((category) => (
//             <li
//               key={category.id}
//               className="
//                 list-none
//                 px-2
//                 lg:px-3.25
//                 text-[#1D2720]
//                 font-semibold
//                 whitespace-nowrap
//               "
//             >
//               <span>{category.icon}</span> <span>{category.nameBn}</span>
//             </li>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import NavLinks from "@/components/NavLinks";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
          router.refresh();
        },
      },
    });
  };

  return (
    <header className="max-w-6xl mx-auto w-full">
      <div className="navbar bg-base-100 px-3 sm:px-4">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center gap-1 sm:gap-3">
          {/* Mobile Hamburger Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1.5"
              aria-label="Open menu"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Hamburger Dropdown Content */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[100] mt-3 w-56 p-3 shadow-xl border border-gray-100"
            >
              <li>
                <Link href="/" className="py-2.5 text-base font-medium">
                  🏠 হোম
                </Link>
              </li>

              {/* লগইন না থাকলে মোবাইল ইউজারদের জন্য সাইন ইন/সাইন আপ অপশন দেখাবে */}
              {!session?.user && (
                <>
                  <li>
                    <Link
                      href="/sign-in"
                      className="py-2.5 text-base font-medium"
                    >
                      🔑 সাইন ইন
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sign-up"
                      className="py-2.5 text-base font-medium"
                    >
                      📝 সাইন আপ
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Logo & Date */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="bg-green-700 p-2 sm:p-3 rounded-2xl shrink-0">
              <img
                className="w-7 h-7 sm:w-10 sm:h-10"
                src="/logo-icon.png"
                alt="বাজার দর Logo"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-3xl leading-tight whitespace-nowrap">
                বাজার দর
              </span>
              <span className="text-[11px] sm:text-sm text-gray-600 whitespace-nowrap">
                {date}
              </span>
            </div>
          </Link>
        </div>

        {/* Navbar End: User Profile or Auth Buttons */}
        <div className="navbar-end">
          {session?.user ? (
            <div className="dropdown dropdown-end">
              {/* User Avatar */}
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 cursor-pointer py-1 px-1.5 sm:px-3 rounded-full hover:bg-gray-100 transition select-none"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-gray-200 shrink-0">
                  <img
                    src={
                      session.user.image ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    alt={session.user.name || "User Profile"}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="font-semibold text-gray-800 text-base hidden sm:inline">
                  {session.user.name}
                </span>

                <span className="text-sm text-gray-500">▾</span>
              </div>

              {/* Profile Dropdown Menu */}
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white rounded-2xl z-[100] mt-3 w-64 md:w-72 p-3.5 shadow-xl border border-gray-100 space-y-1.5"
              >
                <li className="px-3 py-2 border-b border-gray-100 mb-1 pointer-events-none">
                  <p className="font-bold text-gray-900 text-base m-0 p-0">
                    {session.user.name}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 truncate m-0 p-0 mt-0.5">
                    {session.user.email}
                  </p>
                </li>

                <li>
                  <Link
                    href="/profile"
                    className="py-2.5 px-3.5 text-gray-700 font-medium hover:bg-gray-50 rounded-xl flex items-center gap-2.5 text-base"
                  >
                    👤 আমার প্রোফাইল
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleSignOut}
                    className="py-2.5 px-3.5 text-red-600 font-medium hover:bg-red-50 rounded-xl w-full text-left cursor-pointer flex items-center gap-2.5 text-base"
                  >
                    ↩ সাইন আউট
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition shadow-sm"
              >
                সাইন ইন
              </Link>

              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-semibold bg-[#00873E] text-white rounded-xl hover:bg-[#007233] transition shadow-sm"
              >
                সাইন আপ
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Category Navigation */}
      <NavLinks />
    </header>
  );
};

export default Header;
