import React from "react";
import SidebarDosen from "@/components/sidebarDosen";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";


export default function Laporan() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: tables = [], error } = useSWR(`/api/dosen/laporanData?nip=197611212009121004`, fetcher, {
    initialData: [],
  });  // const { data: tables2 = [], error: error2 } = useSWR(mahasiswaId ? `/api/mahasiswa/logbookQuery?mahasiswaId=${mahasiswaId}` : null, fetcher);

  if (error ) {
    return <div>Error loading group details</div>;
  }

  if (!tables ) {
    return <div>Loading... Data Error</div>;
  }

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Laporan Kelompok</title>
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
              <h1>Laporan Kelompok</h1>
            </div>
            <div className="p-3 md:p-6 bg-iceGray rounded-xl w-full">
              <div>
                <h3 className="text-sm md:text-xl font-semibold pb-1 md:pb-3 flex justify-end">
                  Lokasi: Kabupaten Bandung, Jawa Barat
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-medium px-4 gap-6">
                  {tables.map((item, i) => (
                    <div className="bg-gray-50 rounded-xl shadow-md flex flex-col justify-between" key={i}>
                      <div className="flex flex-row justify-between px-6 pt-4 pb-4">
                        <div>
                          <h1 className="text-2xl font-bold">
                            {item.kelompok}
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
                              {item.lokasi}
                            </span>
                          </h2>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="bg-[#9d892f] text-center flex justify-center items-center font-extrabold text-white rounded-full text-3xl py-6 px-6">
                            <h1>{item.id}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between border-t">
                        <div className="w-2/3 text-center py-2">
                          <p>Telp. {item.telpon}</p>
                        </div>
                        <div className="w-1/3 text-center bg-[#9d892f] py-2 rounded-ee-lg text-white hover:bg-[#bea63a]/80">
                            <button
                                onClick={() => {
                                    router.push({
                                    pathname: `/dosen/detailLaporan/${item.id}`,
                                    query: {
                                        namakelompok: item.kelompok,
                                        ketua: item.ketua,
                                        anggota: item.anggota,
                                        id: item.id,
                                        telp: item.telpon,
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
