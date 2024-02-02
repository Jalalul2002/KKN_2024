import React from "react";
import Navbar from "../../components/navbar";
import SidebarMahasiswa from "../../components/sidebarMahasiswa";
import Link from "next/link";
import Head from "next/head";
import useSWR from "swr";
import { tab } from "@material-tailwind/react";
import { useSession } from "next-auth/react";

export default function Profil() {
  const { data : Session, status } = useSession();

  const id = Session?.user?.username;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data : tables = [], error } = useSWR(`/api/mahasiswa/profilQuery?nim=${id}`, fetcher);

  const image = "/images/1.jpeg";

  const mapNumericToAlphabet = (numericGrade) => {
    if (numericGrade === null) {
      return '-';
    } else if (numericGrade >= 85 && numericGrade <= 100) {
      return 'A';
    } else if (numericGrade >= 75 && numericGrade <= 84) {
      return 'B';
    } else if (numericGrade >= 60 && numericGrade <= 74) {
      return 'C';
    } else if (numericGrade >= 50 && numericGrade <= 59) {
      return 'D';
    } else {
      return 'E';
    }
  };
  

  return (
    <>
      <Head>
        <title>Profil Mahasiswa</title>
        <meta property="og:title" content="Profil Mahasiswa" key="title" />
      </Head>
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="md:w-auto h-screen">
          <SidebarMahasiswa />
        </div>
        <div className="h-screen w-screen overflow-auto grow">
          <Navbar />
          <div className="px-6 pb-5 w-auto">
            <div className="mt-20 mb-5 md:mt-28 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1>Profil Mahasiswa</h1>
            </div>
            <div className="p-4 md:p-9 bg-iceGray rounded-3xl shadow-sm flex justify-between">
              <div className="flex flex-col items-center md:px-4 md:flex-row md:flex-wrap md:place-items-end">
                <div
                  className="w-32 h-32 rounded-full border-IjoRumput border-4 bg-cover text-right \"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                {tables.map((table) => (
                <div className="px-6 py-3 text-center md:text-left">
                  <h1 className="text-3xl md:text-5xl font-bold">{table.name}</h1>
                  <h2 className="px-1 text-sm md:text-lg font-medium">
                    {table.nim} | {table.jurusan}
                  </h2>
                </div>
                ))}
              </div>
              {/* <Link
                href={"/mahasiswa/editProfil"}
                className="pr-4 font-semibold hover:text-IjoRumput"
              >
                Edit Profil
              </Link> */}
            </div>

            <div className="flex flex-wrap space-y-3 md:space-y-0 md:space-x-2 justify-around py-3 md:py-5">
              
            {tables.map((table) => (
              <div className="md:w-[49%] bg-iceGray rounded-3xl shadow-sm text-base md:text-lg font-medium p-6">
                <h1 className="text-xl md:text-2xl font-bold mb-3">
                  Biodata Diri
                </h1>
                <div className="border-t border-gray-100 mt-4">
                  <dl className="divide-y divide-gray-100">
                    <div className="md:px-4 md:py-3 grid grid-cols-3 gap-4 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Program Studi
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {table.jurusan}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="md:px-4 md:py-3 grid grid-cols-3 gap-4 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Fakultas
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {table.fakultas}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="md:px-4 md:py-3 grid grid-cols-3 gap-4 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Email
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        -
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="md:px-4 md:py-3 grid grid-cols-3 gap-4 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Nomor Telepon
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {table.telpon}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="md:px-4 md:py-3 grid grid-cols-3 gap-4 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Jenis Kelamin
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {table.gender === 'male' ? 'Laki-laki' : table.gender === 'female' ? 'Perempuan' : "-"}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="md:px-4 md:py-3 grid grid-cols-3 gap-4 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Alamat
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        -
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              ))}

              <div className="md:w-[49%] text-base md:text-lg font-medium">
                <div className="bg-iceGray rounded-3xl shadow-sm p-6 mb-4">
                  <h1 className="text-xl  md:text-2xl font-bold mb-3">
                    Nilai KKN
                  </h1>
                  {tables.map((table) => (
                  <div className="flex justify-center space-x-2 flex-wrap">
                    <div className="p-5 border-white border rounded-md text-center">
                      <h1 className="font-semibold">Nilai Angka :</h1>
                      <h2 className="text-3xl font-light">{table.nilai}</h2>
                    </div>
                    <div className="p-5 border-white border rounded-md text-center">
                      <h1 className="font-semibold">Nilai Huruf :</h1>
                      <h2 className="text-3xl font-light"> {mapNumericToAlphabet(table.nilai)}</h2>
                    </div>
                  </div>
                  ))}
                </div>
                <div className="bg-iceGray rounded-3xl shadow-sm p-6">
                  <h1 className="text-xl md:text-2xl font-bold mb-3">
                    Informasi KKN
                  </h1>
                  <div className="border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                      <div className="md:px-4 md:py-3 grid grid-cols-3 gap-4 px-0">
                        <dt className="font-semibold leading-6 text-gray-900">
                          Kelompok
                        </dt>
                        <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {/* {kelompok} */}-
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                      <div className="md:px-4 md:py-3 grid grid-cols-3 gap-4 px-0">
                        <dt className="font-semibold leading-6 text-gray-900">
                          Jenis KKN
                        </dt>
                        <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {/* {jenis} */}
                          -
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* <div className="border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                      <div className="md:px-4 md:py-3 grid grid-cols-3 gap-4 px-0">
                        <dt className="font-semibold leading-6 text-gray-900">
                          Angkatan
                        </dt>
                        <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {angkatan}
                        </dd>
                      </div>
                    </dl>
                  </div> */}
                  <div className="border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                      <div className="md:px-4 md:py-3 grid grid-cols-3 gap-4 px-0">
                        <dt className="font-semibold leading-6 text-gray-900">
                          Lokasi KKN
                        </dt>
                        <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {/* {lokasi} */}
                          -
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="border-t border-gray-100">
                    <dl className="divide-y divide-gray-100 text-right py-4">
                      <Link
                        href={"/mahasiswa/kelompok"}
                        className="px-5 py-2 bg-IjoRumput rounded-md text-white hover:bg-IjoRumput/80"
                      >
                        Lihat Detail Kelompok
                      </Link>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
