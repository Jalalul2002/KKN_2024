import React from "react";
import SidebarDosen from "../../components/sidebarDosen";
import Navbar from "../../components/navbar";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Kelompok() {
  const router = useRouter();
  const id = "197611212009121004"; 

  const fetcher = (url) => fetch(url).then((res) => res.json());

  // First API (item)
  const { data : tables = [], firstApiError } = useSWR(id ? `/api/admin/dosen/kelompokQueryDetail?id=${id}`: null, fetcher);

  // Second API call (item2)
  const { data : tablesList = [], thirdApiError } = useSWR(id ? `/api/admin/dosen/kelompokListQuery?id=${id}`: null, fetcher);

  // Third API call (item3)
  const { data: mahasiswaData, error: secondApiError } = useSWR(
    id && id
      ? `/api/admin/dosen/kelompokMahasiswaQuery?id=${id}&id${id}`
      : null,
    fetcher
  );

  if (firstApiError || secondApiError || thirdApiError) {
    console.error('Error fetching data:', firstApiError || secondApiError);
    return <div>Error loading group details</div>;
  }  

  return (
    <>
      <Head>
        <title>Nilai Kelompok</title>
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
              <h1>Nilai Kelompok</h1>
            </div>
            <div className="p-3 md:p-6 bg-iceGray rounded-xl w-full">
              <div>
              {tables && tables.length>0 ? (tables.map((item2, i) => (
                <h3 className="text-sm md:text-xl font-semibold pb-1 md:pb-3 md:flex justify-end hidden ">
                  Lokasi Provinsi : {item2.lokasi_provinsi}
                </h3>
              ))):(
                <h3 className="text-sm md:text-xl font-semibold pb-1 md:pb-3 md:flex justify-end hidden ">
                  Lokasi Provinsi : Tidak Mempunyai Kelompok
                </h3>
              )}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-medium px-4 gap-6">
                {tablesList && tablesList.length>0 ? (tablesList.map((item, i) => (
                    <div className="bg-gray-50 rounded-xl shadow-md flex flex-col justify-between" key={item.kelompok_ids}>
                      <div className="flex flex-row justify-between px-6 pt-4 pb-4">
                        <div>
                          <h1 className="text-2xl font-bold">
                            {item.kelompok_name}
                          </h1>
                          <h2>
                            Ketua:{" "}
                            <span className="font-semibold">{item.ketua_name||"-"}</span>
                          </h2>
                          <h2>
                            Jumlah Anggota:{" "}
                            <span className="font-semibold">
                              {item.jumlah_anggota || "-"}
                            </span>
                          </h2>
                          <h2>
                            Lokasi Kota:{" "}
                            <span className="font-semibold">
                              {item.lokasi_kota ? item.lokasi_kota : item.lokasi_negara ? item.lokasi_negara : "-"}
                            </span>
                          </h2>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="bg-[#26577C] text-center flex justify-center items-center font-extrabold text-white rounded-full text-3xl py-6 px-6">
                            <h1>{item.kelompok_id}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between border-t">
                        <div className="w-2/3 text-center py-2">
                          <p>Telp. {item.ketua_telpon || "-"}</p>
                        </div>
                        <div className="w-1/3 text-center bg-[#26577C] py-2 rounded-ee-lg text-white hover:bg-[#26577C]/80">
                            <button>
                              <Link href={`/dosen/detailNilai/${item.kelompok_id}`}>
                                <span className='font-bold px-6 py-2'>detail</span>
                              </Link>
                            </button>
                        </div>
                      </div>
                    </div>
                  ))):(
                    <div className="bg-gray-50 rounded-xl shadow-md">
                      <div className="flex flex-row justify-between px-6 pt-4 pb-4">
                        <div>
                          <h1 className="text-2xl font-bold">
                            -
                          </h1>
                          <h2>
                            Ketua:{" "}
                            <span className="font-semibold">-</span>
                          </h2>
                          <h2>
                            Jumlah Anggota:{" "}
                            <span className="font-semibold">
                              -
                            </span>
                          </h2>
                          <h2>
                            Lokasi:{" "}
                            <span className="font-semibold">
                              -
                            </span>
                          </h2>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="bg-[#26577C] text-center flex justify-center items-center font-extrabold text-white rounded-full text-3xl py-6 px-6">
                            <h1>-</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between border-t">
                        <div className="w-2/3 text-center py-2">
                          <p>Telp. -</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
