import Link from "next/link";
import React, { useState } from "react";
import dashboardIcon from "./svgs/dashboard";
import docIcon from "./svgs/doc";
import profilIcon from "./svgs/profil";
import homeIcon from "./svgs/home";
import libIcon from "./svgs/lib";
import faqIcon from "./svgs/faq";
import { useRouter } from "next/router";
import {
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function SidebarMahasiswa() {

  // FrontEnd Function
  const mahasiswaMenus = [
    {
      id: 1,
      link: "/mahasiswa/dashboard",
      menu: "Dashboard",
      icon: dashboardIcon,
    },
    {
      id: 2,
      link: "/mahasiswa/pendaftaran",
      menu: "Pendaftaran",
      icon: docIcon,
    },
    {
      id: 3,
      link: "/mahasiswa/kelompok",
      menu: "Kelompok",
      icon: profilIcon,
    },
    {
      id: 4,
      link: "/mahasiswa/logbook",
      menu: "Logbook",
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
      link: "/mahasiswa/frequentlyAQ",
      menu: "FAQ",
      icon: faqIcon,
    },
  ];

  const router = useRouter();
  const [mobileNav, setMobileNav] = useState(true);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <button
        className="lg:hidden absolute px-5 py-4 cursor-pointer z-40"
        onClick={handleMobileNav}
      >
        <Bars3Icon className="w-6 h-6" />
      </button>
      <div
        className={
          mobileNav ? "w-full h-full absolute z-40 lg:hidden" : "hidden"
        }
        onClick={handleMobileNav}
      ></div>
      <button
        className={
          mobileNav
            ? "absolute -left-16 top-36 hover:top-32 lg:left-52 z-50 lg:bg-iceGray px-0 hover:px-1 hover:pl-2 py-3 hover:py-7 rounded-r-xl hover:rounded-r-lg ease-in-out duration-200"
            : "absolute -left-16 lg:fixed top-36 hover:top-32 lg:left-16 z-50 lg:bg-iceGray py-3 px-0 rounded-r-2xl hover:px-1 hover:pl-3 hover:py-7 hover:rounded-r-lg ease-in-out duration-200"
        }
        onClick={handleMobileNav}
      >
        {mobileNav ? (
          <ChevronLeftIcon className="w-6 h-6" />
        ) : (
          <ChevronRightIcon className="w-6 h-6" />
        )}
      </button>
      <div
        className={
          mobileNav
            ? "fixed lg:relative z-50 lg:z-40 w-56 h-screen lg:h-auto bg-iceGray rounded-e-xl shadow-lg text-sm py-2 lg:py-3 lg:mt-10 ease-in-out duration-200 -left-96  lg:left-0 lg:overflow-visible overflow-y-scroll"
            : "fixed lg:relative z-50 lg:z-40 w-56 lg:w-20 h-screen lg:h-auto bg-iceGray rounded-e-xl shadow-lg text-sm py-2 lg:py-3 lg:mt-10 ease-in-out left-0 duration-200 lg:left-0"
        }
      >
        <div className="px-3">
          <button
            className="lg:hidden p-2 cursor-pointer"
            onClick={handleMobileNav}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <div
          className={
            mobileNav
              ? "px-2 py-3 lg:px-8 lg:py-6 text-center cursor-pointer"
              : "px-2 py-3 lg:px-2 lg:py-5 text-center cursor-pointer"
          }
          onClick={handleMobileNav}
        >
          <img
            src="/nav-logo2.png"
            alt="Logo Uin"
            className={
              mobileNav
                ? "w-20 h-20 m-auto ease-in-out duration-200"
                : "w-20 h-20 lg:w-12 lg:h-12 m-auto ease-in-out duration-200"
            }
          />
          <div className="pt-5 px-2">
            <h1
              className={
                mobileNav
                  ? "font-black text-lg leading-3"
                  : "font-black text-lg lg:text-base leading-3"
              }
            >
              KKN UIN
            </h1>
            <h1
              className={
                mobileNav
                  ? "font-bold text-base italic"
                  : "font-bold text-base lg:text-[10px] italic"
              }
            >
              Mahasiswa
            </h1>
          </div>
        </div>
        <ul>
          {mahasiswaMenus.map((menus, i) => (
            <Link key={i} id={menus.id} href={menus.link}>
              <li
                className={`px-8 py-3 my-1 hover:font-bold hover:bg-hoverGray flex flex-row items-center ${
                  router.pathname === menus.link ? "bg-hoverGray font-bold" : ""
                }`}
              >
                <menus.icon
                  className={
                    mobileNav
                      ? "w-4 h-4 mr-2 ease-in-out duration-200"
                      : "w-4 h-4 mr-2 lg:mr-0 ease-in-out duration-200"
                  }
                />
                <span
                  className={
                    mobileNav
                      ? "text-base ease-in-out duration-200"
                      : "text-base lg:text-[0px] ease-in-out duration-200 hover:text-xs"
                  }
                >
                  {menus.menu}
                </span>
              </li>
            </Link>
          ))}
        </ul>

        <div className="text-center mt-10 px-2">
          <h3>&copy; Made with KKN 2024</h3>
        </div>
      </div>
    </>
  );
}
