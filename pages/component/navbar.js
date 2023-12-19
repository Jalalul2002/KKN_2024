import {
  AdjustmentsHorizontalIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [profileNav, setProfileNav] = useState(false);

  const handleProfilNav = () => {
    setProfileNav(!profileNav);
  };

  const nama = "Jalalul Mu'ti";
  const image = "/images/1.jpeg";

  return (
    <>
      <div className="absolute bg-IjoRumput w-full shadow-md md:shadow-none md:w-auto md:static md:inline-block float-right px-5 py-2 md:px-10 xl:px-20 md:py-10 z-30">
        <button onClick={handleProfilNav} className="float-right md:float-none">
          <div className="flex flex-row items-center space-x-2 md:space-x-4">
            <span className="font-bold text-base md:text-lg">{nama}</span>
            <div
              className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-cover border-2 border-white"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        </button>
        <div
          className={
            profileNav
              ? "bg-white shadow-md text-sm md:text-lg mt-2 font-medium absolute z-20 w-24 md:w-40 right-6 top-16 md:top-28 md:right-11 xl:right-24 rounded-lg"
              : "hidden"
          }
        >
          <ul>
            <Link href={"/mahasiswa/profil"}>
              <li className="px-4 py-3 hover:bg-slate-200 inline-flex items-center w-full hover:rounded-lg">
                <UserCircleIcon className="w-5 h-5 mr-3" />
                <span className="leading-3">Profil</span>
              </li>
            </Link>
            <Link href={"/"}>
              <li className="px-4 py-3 hover:bg-slate-200 inline-flex items-center w-full hover:rounded-lg">
                <AdjustmentsHorizontalIcon className="w-5 h-5 mr-3" />
                <span className="leading-3">Logout</span> 
              </li>
            </Link>
          </ul>
        </div>
        <div
          className={
            profileNav
              ? "w-screen h-screen absolute z-10 right-0 top-0"
              : "hidden"
          }
          onClick={handleProfilNav}
        ></div>
      </div>
    </>
  );
}
