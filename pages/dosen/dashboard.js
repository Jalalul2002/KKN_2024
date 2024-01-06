import React from "react";
import SidebarDosen from "../component/sidebarDosen";
import Navbar from "../component/navbar";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Head from "next/head";

export default function Dashboard() {
  const downloadMenu = [
    {
      item: "Unduh Juknis KKN",
      link: "/",
      color: "bg-[#C70039]",
    },
    {
      item: "Unduh Timeline KKN",
      link: "/",
      color: "bg-[#F39F5A]",
    },
    {
      item: "Unduh Juknis Pelaporan KKN",
      link: "/",
      color: "bg-[#26577C]",
    },
  ];

  const dataKelompok = [
    {
      id: "K1",
      namakelompok: "Kelompok 1",
      ketua: "Ucup Slankie",
      telp: "081356765432",
      anggota: "15",
    },
    {
      id: "K2",
      namakelompok: "Kelompok 2",
      ketua: "Ucup Slankie",
      telp: "081356765432",
      anggota: "15",
    },
    {
      id: "K3",
      namakelompok: "Kelompok 3",
      ketua: "Ucup Slankie",
      telp: "081356765432",
      anggota: "15",
    },
    {
      id: "K4",
      namakelompok: "Kelompok 4",
      ketua: "Ucup Slankie",
      telp: "081356765432",
      anggota: "15",
    },
    {
      id: "K4",
      namakelompok: "Kelompok 4",
      ketua: "Ucup Slankie",
      telp: "081356765432",
      anggota: "15",
    },
    {
      id: "K4",
      namakelompok: "Kelompok 4",
      ketua: "Ucup Slankie",
      telp: "081356765432",
      anggota: "15",
    },
  ];

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta property="og:title" content="Dashboard" key="title" />
      </Head>
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="md:w-auto h-screen">
          <SidebarDosen />
        </div>
        <div className="h-screen w-screen overflow-auto grow">
          <Navbar />
          <div className="px-6 pb-5 w-auto">
            <div className="mt-20 mb-5 md:mt-28 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1>Dashboard</h1>
            </div>
            <div className="p-3 md:p-6 bg-iceGray rounded-xl w-full">
              <div>
                <h1 className="text-sm md:text-3xl font-semibold pb-1 md:pb-3">
                  Informasi Kelompok
                </h1>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 font-medium px-4 gap-4">
                  {dataKelompok.map((item, i) => (
                    <div className="bg-gray-50 rounded-xl shadow-md" key={i}>
                      <div className="flex flex-row justify-between px-6 pt-4 pb-4">
                        <div>
                          <h1 className="text-2xl font-bold">
                            {item.namakelompok}
                          </h1>
                          <h2>
                            Ketua:{" "}
                            <span className="font-semibold">{item.ketua}</span>
                          </h2>
                          <h2>
                            Jumlah Anggota:{" "}
                            <span className="font-semibold">
                              {item.anggota}
                            </span>
                          </h2>
                        </div>
                        <div className="bg-IjoRumput text-center flex justify-center items-center font-extrabold text-white rounded-full text-3xl py-4 px-6">
                          <h1>{item.id}</h1>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between border-t">
                        <div className="w-2/3 text-center py-2">
                          <p>Telp. {item.telp}</p>
                        </div>
                        <div className="w-1/3 text-center bg-IjoRumput py-2 rounded-ee-lg text-white hover:bg-IjoRumput/80">
                          <Link
                            href={`/dosen/detailKelompok?${item.id}`}
                            className="font-bold px-6 py-2"
                          >
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="w-full">
                  <h1 className="text-3xl font-semibold mb-2">
                    Timeline
                  </h1>
                  <div className="px-4">
                    <img src="/images/timeline.jpeg" className="w-full" />
                  </div>
                </div>
                <div className="text-justify mt-3 lg:mt-0">
                  <h2 className="font-semibold text-sm md:text-3xl mb-1 md:mb-2">
                    Dokumen KKN
                  </h2>
                  <ul className="flex flex-row justify-center py-2 flex-wrap space-x-2 text-sm md:text-base">
                    {downloadMenu.map((menus, i) => (
                      <Link key={i} href={menus.link}>
                        <li
                          className={`flex flex-row content-center mb-2 px-2 py-2 items-center ${menus.color} hover:bg-opacity-80 text-white rounded-sm font-semibold`}
                        >
                          <ArrowDownIcon className="w-4 h-4 mr-2 " />
                          {menus.item}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
