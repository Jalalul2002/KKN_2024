import Image from "next/image";
import Link from "next/link";
import React from "react";
import dashboardIcon from "./svgs/dashboard";
import docIcon from "./svgs/doc";
import profilIcon from "./svgs/profil";
import homeIcon from "./svgs/home";
import libIcon from "./svgs/lib";
import faqIcon from "./svgs/faq";

export default function Sidebar() {
  const mahasiswaMenus = [
    {
      id: 1,
      link: "/mahasiswa/dashboard",
      menu: "Dashboard",
      icon: dashboardIcon,
    },
    {
      id: 2,
      link: "/mahasiswa/uploadPersyaratan",
      menu: "Upload Persayaratan",
      icon: docIcon,
    },
    {
      id: 3,
      link: "/mahasiswa/pendaftaranKKN",
      menu: "Pendaftaran",
      icon: profilIcon,
    },
    {
      id: 4,
      link: "/mahasiswa/KKN",
      menu: "KKN",
      icon: homeIcon,
    },
    {
      id: 5,
      link: "/mahasiswa/laporan",
      menu: "Laporan KKN",
      icon: libIcon,
    },
    {
      id: 6,
      link: "/mahasiswa/faq",
      menu: "FAQ",
      icon: faqIcon,
    },
  ];

  return (
    <>
      <div className="md:h-[540px] xl:h-[600px] w-56 bg-iceGray rounded-e-xl shadow-md text-sm py-3 fixed z-50 mt-10">
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
              <li className="px-8 py-3 my-1 font-medium hover:font-bold hover:bg-hoverGray flex flex-row items-center">
                <menus.icon className="w-4 h-4 mr-2" />
                {menus.menu}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
