import React from "react";
import SidebarDosen from "../../components/sidebarDosen";
import Navbar from "../../components/navbar";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { useRouter } from "next/router";


export default function Kelompok() {
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
    }
  ];

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Kelompok Binaan</title>
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
              <h1>Kelompok Binaan</h1>
            </div>
            <div className="px-3 py-8 md:p-6 bg-iceGray rounded-xl w-full">
              <div>
                <h3 className="text-sm md:text-xl font-semibold pb-1 md:pb-3 md:flex justify-end hidden ">
                  Lokasi: Kabupaten Bandung, Jawa Barat
                </h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 font-medium px-4 gap-6">
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
                          <h2>
                            Lokasi:{" "}
                            <span className="font-semibold">
                              Desa Cibodas, Kecamatan Ibun
                            </span>
                          </h2>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="bg-[#26577C] text-center flex justify-center items-center font-extrabold text-white rounded-full text-3xl py-6 px-6">
                            <h1>{item.id}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between border-t">
                        <div className="w-2/3 text-center py-2">
                          <p>Telp. {item.telp}</p>
                        </div>
                        <div className="w-1/3 text-center bg-[#26577C] py-2 rounded-ee-lg text-white hover:bg-[#26577C]/80">
                            <button
                                onClick={() => {
                                    router.push({
                                    pathname: `/dosen/detailKelompok/${item.id}`,
                                    query: {
                                        namakelompok: item.namakelompok,
                                        ketua: item.ketua,
                                        anggota: item.anggota,
                                        id: item.id,
                                        telp: item.telp,
                                    },
                                    });
                                }}
                                >
                                <span className='font-bold px-6 py-2'>detail</span>
                            </button>
                          {/* <Link
                            href={`/dosen/detailKelompok?${item.id}`}
                            className="font-bold px-6 py-2"
                          >
                            Detail
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
