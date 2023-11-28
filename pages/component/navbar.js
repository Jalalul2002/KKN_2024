import Link from "next/link";
import React, { useState } from "react";

export default function Navbar(props) {
  const [profileNav, setProfileNav] = useState(false);

  const handleProfilNav = () => {
    setProfileNav(!profileNav);
  };

  return (
    <>
      <div
        className={profileNav ? "w-screen h-screen absolute z-40 " : "hidden"}
        onClick={handleProfilNav}
      ></div>
      <div className="absolute right-0 px-5 py-6 md:px-10 xl:px-20 md:py-10 z-50">
        {/* {mahasiswaLogin.map((mahasiswa, i) => (
          <button key={i} onClick={handleProfilNav}>
            <div className="flex flex-row items-center space-x-2 md:space-x-4">
              <span className="font-bold text-base md:text-lg">{mahasiswa.nama}</span>
              <div
                className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-cover border-2 border-white"
                style={{ backgroundImage: `url(${mahasiswa.image})` }}
              ></div>
            </div>
          </button>
        ))} */}
        <button onClick={handleProfilNav}>
          <div className="flex flex-row items-center space-x-2 md:space-x-4">
            <span className="font-bold text-base md:text-lg">
              {props.nama}
            </span>
            <div
              className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-cover border-2 border-white"
              style={{ backgroundImage: `url(${props.img})` }}
            ></div>
          </div>
        </button>
        <div
          className={
            profileNav
              ? "bg-white shadow-md text-lg mt-2 font-medium"
              : "hidden"
          }
        >
          <ul>
            <Link href={"/mahasiswa/setting"}>
              <li className="px-3 py-1 my-1 hover:bg-slate-200">Setting</li>
            </Link>
            <Link href={"/"}>
              <li className="px-3 py-1 my-1 hover:bg-slate-200">Logout</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
