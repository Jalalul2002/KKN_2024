import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  const mahasiswaMenus = [
    {
      id: 1,
      link: "/mahasiswa/dashboard",
      menu: "Dashboard",
      icon: "Ini Icon",
    },
    {
      id: 2,
      link: "/mahasiswa/dashboard",
      menu: "Upload Persayaratan",
      icon: "Ini Icon",
    },
    {
      id: 3,
      link: "/mahasiswa/dashboard",
      menu: "Pendaftaran",
      icon: "Ini Icon",
    },
    {
      id: 4,
      link: "/mahasiswa/dashboard",
      menu: "KKN",
      icon: "Ini Icon",
    },
    {
      id: 5,
      link: "/mahasiswa/dashboard",
      menu: "Laporan KKN",
      icon: "Ini Icon",
    },
    {
      id: 6,
      link: "/mahasiswa/dashboard",
      menu: "FAQ",
      icon: "Ini Icon",
    },
  ];

  return (
    <>
      <div className="h-[600px] w-56 bg-AbuIjo rounded-e-xl shadow-md text-sm py-3 fixed z-50 mt-10">
        <div className="px-8 py-6 text-center">
          <img src="/nav-logo2.png" alt="Logo Uin" className="w-20 h-20 m-auto" />
          <div className="pt-5 px-2">
            <h1 className="font-black text-lg leading-3">KKN UIN</h1>
            <h1 className="font-bold text-base italic">Mahasiswa</h1>
          </div>
        </div>
        <ul>
          {mahasiswaMenus.map((menus, i) => (
            <Link key={i} id={menus.id} href={menus.link}>
              <li className="px-8 py-3 my-1 font-bold hover:bg-gray-100">
                {menus.menu}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
