import Head from "next/head";
import React from "react";
import SidebarMahasiswa from "../component/sidebarMahasiswa";
import Navbar from "../component/navbar";
import Link from "next/link";

export default function EditProfil() {
  const nama = "Jalalul Mu'ti";
  const image = "/images/1.jpeg";
  const nim = "1207050055";
  const agama = "Islam";
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
        <title>Edit Profil Mahasiswa</title>
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
              <h1>Edit Profil Mahasiswa</h1>
            </div>
            <div className="p-4 md:p-9 bg-iceGray rounded-3xl shadow-sm flex flex-col justify-between">
              <form>
                <div className="flex flex-col items-center md:px-4 md:flex-row md:flex-wrap md:place-items-end">
                  <div
                    className="w-32 h-32 rounded-full border-IjoRumput border-4 bg-cover text-right \"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                  <div className="px-5">
                    <label
                      className="block mb-2 text-base font-medium text-gray-900"
                      htmlFor="uploadFoto"
                    >
                      Upload Foto Profil
                    </label>
                    <input
                      id="uploadFoto"
                      className="w-full mb-5 text-lg text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50"
                      type="file"
                    />
                  </div>
                </div>
                <div className="py-5">
                  <h1 className="text-lg font-bold">Detail Biodata</h1>
                </div>
                <div class="mb-1 flex items-center text-base">
                  <label HTMLfor="nim" class="w-40 font-medium text-gray-900">
                    NIM
                  </label>
                  <input
                    type="text"
                    id="nim"
                    className="w-full text-sm shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={nim}
                  />
                </div>
                <div class="mb-1 flex items-center text-base">
                  <label
                    HTMLfor="nama"
                    className="w-40 font-medium text-gray-900"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="nama"
                    className="w-full text-sm shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={nama}
                  />
                </div>
                <div class="mb-1 flex items-center text-base">
                  <label
                    HTMLfor="gender"
                    className="w-40 font-medium text-gray-900"
                  >
                    Jenis Kelamin
                  </label>
                  <input
                    type="text"
                    id="gender"
                    className="w-full text-sm shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={gender}
                  />
                </div>
                <div class="mb-1 flex items-center text-base">
                  <label
                    HTMLfor="agama"
                    className="w-40 font-medium text-gray-900"
                  >
                    Agama
                  </label>
                  <input
                    type="text"
                    id="agama"
                    className="w-full text-sm shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={agama}
                  />
                </div>
                <div class="mb-1 flex items-center text-base">
                  <label
                    HTMLfor="jurusan"
                    className="w-40 font-medium text-gray-900"
                  >
                    Program Studi
                  </label>
                  <input
                    type="text"
                    id="jurusan"
                    className="w-full text-sm shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={prodi}
                  />
                </div>
                <div class="mb-1 flex items-center text-base">
                  <label
                    HTMLfor="fakultas   "
                    className="w-40 font-medium text-gray-900"
                  >
                    Fakultas
                  </label>
                  <input
                    type="text"
                    id="fakultas"
                    className="w-full text-sm shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={fakultas}
                  />
                </div>
                <div class="mb-2 flex items-center text-base">
                  <label
                    HTMLfor="angkatan"
                    className="w-40 font-medium text-gray-900"
                  >
                    Angkatan
                  </label>
                  <input
                    type="text"
                    id="angkatan"
                    className="w-full text-sm shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={angkatan}
                  />
                </div>
                <div class="mb-2 flex items-center text-base">
                  <label
                    HTMLfor="email"
                    className="w-40 font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full text-sm shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={email}
                  />
                </div>
                <div class="mb-2 flex items-center text-base">
                  <label
                    HTMLfor="telp"
                    className="w-40 font-medium text-gray-900"
                  >
                    Nomor Telpon
                  </label>
                  <input
                    type="text"
                    id="telp"
                    className="w-full text-sm shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={telp}
                  />
                </div>
                <div class="mb-2 flex items-center text-base">
                  <label
                    HTMLfor="alamat"
                    className="w-40 font-medium text-gray-900"
                  >
                    Alamat
                  </label>
                  <input
                    type="text"
                    id="alamat"
                    className="w-full text-sm shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={alamat}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
