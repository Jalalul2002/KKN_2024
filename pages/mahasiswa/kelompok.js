import React, { useState } from "react";
import Navbar from "../component/navbar";
import SidebarMahasiswa from "../component/sidebarMahasiswa";
import ReactModal from "react-modal";

export default function KelompokKKN() {
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
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="w-auto h-screen">
          <SidebarMahasiswa />
        </div>
        <div className="overflow-y-scroll h-screen grow">
          <Navbar />
          <div className="px-6 pb-5 w-auto font-medium">
            <div className="mt-20 mb-5 md:mt-28 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1>Kelompok KKN</h1>
            </div>
            <div className="flex flex-row space-x-4 box-border">
              <div className="p-3 md:p-6 bg-iceGray rounded-xl w-4/5">
                <div className="box-border mb-3">
                  <h1 className="text-sm md:text-3xl font-bold">{jenisKKN}</h1>
                  <h2 className="text-xl font-semibold">{kelompok}</h2>
                </div>
                <div className="box-border py-3 mb-3">
                  <table className="w-full rounded-xl">
                    <thead>
                      <tr>
                        <th className="bg-IjoRumput rounded-tl-lg p-2 md:p-4">
                          No
                        </th>
                        <th className="bg-IjoRumput p-2 md:p-4">Profil</th>
                        <th className="bg-IjoRumput p-2 md:p-4">Nama</th>
                        <th className="bg-IjoRumput p-3 md:p-4">Jurusan</th>
                        <th className="bg-IjoRumput p-3 md:p-4">Fakultas</th>
                        <th className="bg-IjoRumput rounded-tr-lg p-3 md:p-4">
                          Nomor HP
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {peserta.map((item, i) => (
                        <tr key={i} className="border-y border-slate-300">
                          <td className="mx-2 py-1 md:p-3">{i + 1}</td>
                          <td className="mx-2 py-1 md:p-3 flex justify-center">
                            <img
                              src={item.foto}
                              className="w-9 h-9 rounded-full "
                            />
                          </td>
                          <td className="mx-2 py-1 md:p-3">{item.nama}</td>
                          <td className="mx-2 py-1 md:p-3">{item.jurusan}</td>
                          <td className="mx-2 py-1 md:p-3">{item.fakultas}</td>
                          <td className="mx-2 py-1 md:p-3">{item.hp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="p-5 bg-iceGray w-1/5 rounded-xl flex flex-col items-center">
                <div className="mt-10 flex flex-col justify-center w-full">
                  <button
                    type="button"
                    onClick={handleOpenModal}
                    className="px-5 py-2 bg-IjoRumput hover:bg-darkGreenHerb font-bold text-white rounded-md"
                  >
                    Pilih Ketua Kelompok
                  </button>
                  <div className="border border-slate-500 mt-3 w-auto h-24 rounded-lg text-center flex flex-col justify-center text-xl p-3 max-w-md">
                    <h1 className="font-bold">Ketua Kelompok</h1>
                    <p className="font-semibold text-lg">{peserta[1].nama}</p>
                  </div>
                  <div className="border border-slate-500 mt-3 w-auto h-24 rounded-lg text-center flex flex-col justify-center text-xl font-semibold p-3">
                    <h1 className="font-bold">Dosen Pembimbing</h1>
                    <h2 className="text-lg">{dpl.nama}</h2>
                    <h2 className="text-lg">Nomor HP:{dpl.hp}</h2>
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
        contentLabel="Konfirmasi Pendaftaran"
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            width: "50%",
            height: "50%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <div className="flex flex-col justify-center items-center font-medium text-lg">
          <h1 className="font-bold">Pilih Ketua Kelompok</h1>
          <form>
            <div className="p-3 mb-5">
              <select className="w-52 rounded-md">
                <option value="">-- Pilih Ketua --</option>
                {peserta.map((item, i) => (
                  <option key={i} value={item.nim}>
                    {item.nama}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-row space-x-3 justify-center">
              <button
                type="button"
                onClick={closeChooseModal}
                className="bg-red-600 hover:bg-red-700 px-5 py-1 text-white rounded-lg"
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-5 py-1 text-white rounded-lg"
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
