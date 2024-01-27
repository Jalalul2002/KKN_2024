import React, { useState } from "react";
import Navbar from "../../components/navbar";
import SidebarMahasiswa from "../component/sidebarMahasiswa";
import ReactModal from "react-modal";
import Head from "next/head";

export default function KelompokKKN() {
  const nama = "Jalalul Mu'ti";
  const fakultas = "Sains dan Teknologi";
  const nomor = "081357630782";
  const jenisKKN = "KKN Sisdamas";
  const kelompok = "Kelompok 01";
  const dpl = {
    nama: "Edward Elrick, Ph.D.",
    nip: "19720902389029",
    hp: "081456789098",
  };
  const peserta = [
    {
      nim: 1207050055,
      foto: "/images/3.jpg",
      nama: "Nita",
      jurusan: "Ilmu Hukum",
      fakultas: "Syariah dan Hukum",
      hp: "085765234523",
    },
    {
      nim: 1207050056,
      foto: "/images/3.jpg",
      nama: "Asep",
      jurusan: "Ilmu Hukum",
      fakultas: "Syariah dan Hukum",
      hp: "085765234523",
    },
    {
      nim: 1207050057,
      foto: "/images/3.jpg",
      nama: "Epul",
      jurusan: "Ilmu Hukum",
      fakultas: "Syariah dan Hukum",
      hp: "085765234523",
    },
    {
      nim: 1207050057,
      foto: "/images/3.jpg",
      nama: "Epul",
      jurusan: "Ilmu Hukum",
      fakultas: "Syariah dan Hukum",
      hp: "085765234523",
    },
    {
      nim: 1207050057,
      foto: "/images/3.jpg",
      nama: "Epul",
      jurusan: "Ilmu Hukum",
      fakultas: "Syariah dan Hukum",
      hp: "085765234523",
    },
    {
      nim: 1207050057,
      foto: "/images/3.jpg",
      nama: "Epul",
      jurusan: "Ilmu Hukum",
      fakultas: "Syariah dan Hukum",
      hp: "085765234523",
    },
    {
      nim: 1207050057,
      foto: "/images/3.jpg",
      nama: "Epul",
      jurusan: "Ilmu Hukum",
      fakultas: "Syariah dan Hukum",
      hp: "085765234523",
    },
    {
      nim: 1207050057,
      foto: "/images/3.jpg",
      nama: "Epul",
      jurusan: "Ilmu Hukum",
      fakultas: "Syariah dan Hukum",
      hp: "085765234523",
    },
    {
      nim: 1207050057,
      foto: "/images/3.jpg",
      nama: "Epul",
      jurusan: "Ilmu Hukum",
      fakultas: "Syariah dan Hukum",
      hp: "085765234523",
    },
  ];

  const [isChooseModal, setChooseModal] = useState(false);

  const openChooseModal = () => {
    setChooseModal(true);
  };
  const closeChooseModal = () => {
    setChooseModal(false);
  };
  const handleOpenModal = () => {
    openChooseModal();
  };

  return (
    <>
      <Head>
        <title>Kelompok Mahasiswa</title>
        <meta property="og:title" content="Kelompok Mahasiswa" key="title" />
      </Head>
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="w-auto h-screen">
          <SidebarMahasiswa />
        </div>
        <div className="overflow-auto h-screen grow">
          <Navbar />
          <div className="px-6 pb-5 w-auto font-medium">
            <div className="mt-20 mb-5 md:mt-28 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1>Kelompok KKN</h1>
            </div>
            <div className="md:flex flex-row space-y-3 md:space-y-0 md:space-x-2 lg:space-x-4 box-border">
              <div className="md:hidden p-2 bg-iceGray rounded-xl">
                <div className="flex flex-col justify-evenly w-full space-y-2">
                  <div className="border border-slate-500 rounded-lg text-center p-1">
                    <h1 className="font-bold text-base border-b-[1px] border-slate-400 mb-1">
                      Ketua Kelompok
                    </h1>
                    <p className="font-semibold text-sm">
                      {peserta[1].nama} - {peserta[1].jurusan} - {peserta[1].hp}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleOpenModal}
                    className="px-5 py-2 bg-sky-800 hover:bg-sky-900 font-bold text-white rounded-md text-base"
                  >
                    Ajukan Ketua Kelompok
                  </button>
                  <div className="border border-slate-500 rounded-lg text-center font-semibold p-1">
                    <h1 className="font-bold text-base border-b-[1px] border-slate-400 mb-1">
                      Dosen Pembimbing
                    </h1>
                    <p className="text-sm">{dpl.nama}</p>
                    <p className="text-sm">Kontak: {dpl.hp}</p>
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-6 bg-iceGray rounded-xl md:w-4/5">
                <div className="box-border mb-3">
                  <h1 className="text-lg md:text-3xl font-bold">{jenisKKN}</h1>
                  <h2 className="md:text-xl font-semibold">{kelompok}</h2>
                </div>
                <div className="box-border md:py-3 mb-3 lg:text-base text-sm overflow-x-auto">
                  <table className="w-full rounded-xl">
                    <thead>
                      <tr className="bg-IjoRumput">
                        <th className="rounded-tl-lg p-2 lg:p-4">No</th>
                        <th className="px-6 p-2 lg:p-4">Profil</th>
                        <th className="px-6 p-2 lg:p-4">Nama</th>
                        <th className="px-6 p-3 lg:p-4">Program Studi</th>
                        <th className="px-6 p-3 lg:p-4">Fakultas</th>
                        <th className="rounded-tr-lg p-3 lg:p-4">Nomor HP</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {peserta.map((item, i) => (
                        <tr key={i} className="border-y border-slate-300">
                          <td className="py-1 px-1 lg:p-3">{i + 1}</td>
                          <td className="py-2 lg:p-3 flex justify-center">
                            <img
                              src={item.foto}
                              className="w-9 h-9 rounded-full"
                            />
                          </td>
                          <td className="py-1 px-3 lg:p-3">{item.nama}</td>
                          <td className="py-1 px-3 lg:p-3">{item.jurusan}</td>
                          <td className="py-1 px-3 lg:p-3">{item.fakultas}</td>
                          <td className="py-1 px-3 lg:p-3">{item.hp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="hidden p-4 lg:p-5 bg-iceGray md:w-1/5 lg:2/5 rounded-xl md:flex flex-col items-center">
                <div className="mt-5 lg:mt-10 flex flex-col justify-center w-full">
                  <button
                    type="button"
                    onClick={handleOpenModal}
                    className="px-5 py-2 bg-sky-800 hover:bg-sky-900 font-bold text-white rounded-md md:text-base lg:text-xl"
                  >
                    Ajukan Ketua Kelompok
                  </button>
                  <div className="border border-slate-500 mt-3 rounded-lg text-center text-base lg:text-xl p-3">
                    <h1 className="font-bold mb-2 border-b-[1px] border-slate-400">
                      Ketua Kelompok
                    </h1>
                    <p className="font-semibold text-sm">{peserta[1].nama}</p>
                    <p className="font-semibold text-sm">
                      {peserta[1].jurusan}
                    </p>
                    <p className="font-semibold text-sm">
                      Kontak: {peserta[1].hp}
                    </p>
                  </div>
                  <div className="border border-slate-500 mt-3 rounded-lg text-center text-base lg:text-xl font-semibold p-3">
                    <h1 className="font-bold mb-2 border-b-[1px] border-slate-400">
                      Dosen Pembimbing
                    </h1>
                    <p className="text-sm">{dpl.nama}</p>
                    <p className="text-sm">Kontak: {dpl.hp}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactModal
        isOpen={isChooseModal}
        onRequestClose={closeChooseModal}
        contentLabel="Konfirmasi Pengajuan"
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            width: "auto",
            height: "auto",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <div className="flex flex-col justify-center items-center font-medium text-lg mt-6">
          <h1 className="font-bold">Ketua Kelompok</h1>
          <form>
            <div className="p-3 mb-5">
              {/* <select className="w-52 rounded-md">
                <option value="">-- Pilih Ketua --</option>
                {peserta.map((item, i) => (
                  <option key={i} value={item.nim}>
                    {item.nama}
                  </option>
                ))}
              </select> */}
              <div>
                <label
                  htmlFor="nama"
                  className="block mb-1 font-semibold text-sm md:text-base"
                >
                  Nama Ketua Kelompok
                </label>
                <input
                  id="nama"
                  className="disabled w-full rounded-md text-xs md:text-base"
                  value={nama}
                ></input>
                <div>
                  <label
                    htmlFor="fakultas"
                    className="block mb-1 font-semibold text-sm md:text-base"
                  >
                    Fakultas
                  </label>
                  <input
                    id="fakultas"
                    className="disabled w-full rounded-md text-xs md:text-base"
                    value={fakultas}
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor="kontak"
                    className="block mb-1 font-semibold text-sm md:text-base"
                  >
                    Kontak
                  </label>
                  <input
                    id="kontak"
                    className="disabled w-full rounded-md text-xs md:text-base"
                    value={nomor}
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-3 justify-center mb-3">
              <button
                type="button"
                onClick={closeChooseModal}
                className="bg-red-600 hover:bg-red-700 px-5 py-1 text-white rounded-lg text-sm md:text-lg"
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-5 py-1 text-white rounded-lg text-sm md:text-lg"
              >
                Input
              </button>
            </div>
          </form>
        </div>
      </ReactModal>
    </>
  );
}
