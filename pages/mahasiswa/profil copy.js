import React from "react";
import Navbar from "../../components/navbar";
import SidebarMahasiswa from "../../components/sidebarMahasiswa";
import Link from "next/link";
import Head from "next/head";
import useSWR from "swr";

export default function Profil() {

  const image = "/images/1.jpeg";
  const nama = "Jalalul Mu'ti";
  
  const nim = "1207050055";
  const email = "jalalul2000@gmail.com";
  const prodi = "Teknik Informatika";
  const fakultas = "Sains dan Teknologi";
  const gender = "Laki-laki";
  const alamat =
    "Perum Griya Karangtengah Asri 06/08 Ciheulang Tonggoh, Kecamatan Cibadak, Kab. Sukabumi";
  const telp = "081357630782";
  const angkatan = "2020";
  const jenis = "KKN SISDAMAS";
  const kelompok = "409";
  const lokasi = "Pangalengan, Kab. Bandung";

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
                <div className="px-6 py-3 text-center md:text-left">
                  <h1 className="text-3xl md:text-5xl font-bold">{nama}</h1>
                  <h2 className="px-1 text-sm md:text-lg font-medium">
                    {nim} | {prodi}
                  </h2>
                </div>
              </div>
              <Link
                href={"/mahasiswa/editProfil"}
                className="pr-4 font-semibold hover:text-IjoRumput"
              >
                Edit Profil
              </Link>
            </div>
            <div className="flex flex-wrap space-y-3 md:space-y-0 md:space-x-2 justify-around py-3 md:py-5">
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
                        {prodi}
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
                        {fakultas}
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
                        {email}
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
                        {telp}
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
                        {gender}
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
                        {alamat}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="md:w-[49%] text-base md:text-lg font-medium">
                <div className="bg-iceGray rounded-3xl shadow-sm p-6 mb-4">
                  <h1 className="text-xl  md:text-2xl font-bold mb-3">
                    Nilai KKN
                  </h1>
                  <div className="flex justify-center space-x-2 flex-wrap">
                    <div className="p-5 border-white border rounded-md text-center">
                      <h1 className="font-semibold">Nilai Angka :</h1>
                      <h2 className="text-3xl font-light">92</h2>
                    </div>
                    <div className="p-5 border-white border rounded-md text-center">
                      <h1 className="font-semibold">Nilai Huruf :</h1>
                      <h2 className="text-3xl font-light">A</h2>
                    </div>
                  </div>
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
                          {kelompok}
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
                          {jenis}
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
                          {lokasi}
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
