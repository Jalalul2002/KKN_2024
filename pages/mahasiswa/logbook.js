import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import SidebarMahasiswa from "../../components/sidebarMahasiswa";
import Link from "next/link";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import ReactModal from "react-modal";
import Head from "next/head";

export default function LogbookKKN() {
  const jenisKKN = "KKN Sisdamas";
  const kelompok = "Kelompok 1";
  const nama = "Ahmad";
  const lokasi = "Desa Cibiru Hilir, Kec. Cileunyi, Kab. Bandung";
  const ketua = "Ubed";
  const dosen = "Dr. Sriyanti, S.T., M.Kom.";
  const logbook = [
    {
      hari: "Senin, 1/1/2024",
      nama: "Ahmad",
      lokasi: "Desa Cibiru Hilir, Kec. Cileunyi, Kab. Bandung",
      judul: "Pembukaan KKN",
      target: "Masysarakat Desa",
      link: "https://",
      anggotahadir: "Opet, Saritem, Mandala, Sahira",
      dok: "/images/1.jpeg",
    },
    {
      hari: "Senin, 1/1/2024",
      nama: "Ahmad",
      lokasi: "Desa Cibiru Hilir, Kec. Cileunyi, Kab. Bandung",
      judul: "Pembukaan KKN",
      target: "Masysarakat Desa",
      link: "https://",
      anggotahadir: "Opet, Saritem, Mandala, Sahira",
      dok: "/images/1.jpeg",
    },
    {
      hari: "Senin, 1/1/2024",
      nama: "Ahmad",
      lokasi: "Desa Cibiru Hilir, Kec. Cileunyi, Kab. Bandung",
      judul: "Pembukaan KKN",
      target: "Masysarakat Desa",
      link: "https://",
      anggotahadir: "Opet, Saritem, Mandala, Sahira",
      dok: "/images/1.jpeg",
    },
    {
      hari: "Senin, 1/1/2024",
      nama: "Ahmad",
      lokasi: "Desa Cibiru Hilir, Kec. Cileunyi, Kab. Bandung",
      judul: "Pembukaan KKN",
      target: "Masysarakat Desa",
      link: "https://",
      anggotahadir: "Opet, Saritem, Mandala, Sahira",
      dok: "/images/1.jpeg",
    },
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = logbook.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [isInputModal, setInputModal] = useState(false);

  const openInputModal = () => {
    setInputModal(true);
  };
  const closeInputModal = () => {
    setInputModal(false);
  };
  const handleOpenModal = () => {
    openInputModal();
  };

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Mengatur interval untuk memperbarui waktu setiap detik
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Membersihkan interval setelah komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <>
      <Head>
        <title>Logbook Mahasiswa</title>
        <meta property="og:title" content="Logbook Mahasiswa" key="title" />
      </Head>
      <ReactModal
        isOpen={isInputModal}
        onRequestClose={closeInputModal}
        contentLabel="Konfirmasi Pendaftaran"
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            width: "auto",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <div className="text-xs md:font-medium md:text-base overflow-auto w-full mt-5 md:mt-16 pt-14">
          <div className="w-full text-center mb-2 md:mb-5 md:mt-10 border-b-2 pb-2 md:pb-4">
            <h1 className="font-bold text-lg md:text-3xl">Tambah Logbook</h1>
          </div>
          <form className="mx-auto">
            <div className="flex justify-center space-x-2 mb-3 md:px-5">
              <div className="max-w-xs w-full">
                <label htmlFor="tanggal" className="block mb-1 font-semibold">
                  Hari, Tanggal
                </label>
                <input
                  id="tanggal"
                  className="disabled w-full rounded-md text-xs md:text-base"
                  value={formattedDateTime}
                ></input>
              </div>
              <div>
                <label htmlFor="jenis" className="block mb-1 font-semibold">
                  Jenis KKN
                </label>
                <input
                  id="jenis"
                  className="disabled w-full rounded-md text-xs md:text-base"
                  value={jenisKKN}
                ></input>
              </div>
            </div>
            <div className="flex justify-center space-x-2 mb-3 md:px-5">
              <div>
                <label htmlFor="nama" className="block mb-1 font-semibold">
                  Nama Kelompok
                </label>
                <input
                  id="nama"
                  className="disabled w-full rounded-md text-xs md:text-base"
                  value={kelompok}
                ></input>
              </div>
              <div className="max-w-xs w-full">
                <label htmlFor="dosen" className="block mb-1 font-semibold">
                  Dosen Pembimbing
                </label>
                <input
                  id="dosen"
                  className="disabled w-full rounded-md text-xs md:text-base"
                  value={dosen}
                ></input>
              </div>
            </div>
            <div className="max-w-lg mx-auto mb-3">
              <label htmlFor="name" className="block mb-1 font-semibold">
                Nama
              </label>
              <input
                id="name"
                className="disabled w-full rounded-md text-xs md:text-base"
                value={nama}
              ></input>
            </div>
            <div className="max-w-lg mx-auto mb-3">
              <label htmlFor="lokasi" className="block mb-1 font-semibold">
                Lokasi KKN
              </label>
              <input
                id="lokasi"
                className="disabled w-full rounded-md text-xs md:text-base"
                value={lokasi}
              ></input>
            </div>
            <div className="flex justify-center space-x-2 mb-3 md:px-5">
              <div className="max-w-xs w-full">
                <label htmlFor="Kegiatan" className="block mb-1 font-semibold">
                  Nama Kegiatan
                </label>
                <input
                  id="tanggal"
                  className="w-full rounded-md text-xs md:text-base"
                ></input>
              </div>
              <div>
                <label htmlFor="target" className="block mb-1 font-semibold">
                  Target KKN
                </label>
                <input
                  id="target"
                  className="w-full rounded-md text-xs md:text-base"
                ></input>
              </div>
            </div>
            <div className="max-w-lg mx-auto mb-3">
              <label htmlFor="kegiatan" className="block mb-1 font-semibold">
                Link Logbook
              </label>
              <textarea
                id="link"
                className=" w-full rounded-md text-xs md:text-base"
              ></textarea>
            </div>
            <div className="max-w-lg mx-auto mb-3">
              <label htmlFor="hadir" className="block mb-1 font-semibold">
                Anggota Hadir
              </label>
              <textarea
                id="hadir"
                className="w-full rounded-md text-xs md:text-base"
              ></textarea>
            </div>
            <div className="flex flex-row space-x-3 justify-center mt-6">
              <button
                type="button"
                onClick={closeInputModal}
                className="bg-red-600 hover:bg-red-700 px-8 py-2 text-white rounded-sm"
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-8 py-2 text-white rounded-sm"
              >
                Tambah
              </button>
            </div>
          </form>
        </div>
      </ReactModal>
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="w-auto h-screen">
          <SidebarMahasiswa />
        </div>
        <div className="overflow-auto h-screen grow">
          <Navbar />
          <div className="px-6 pb-5 w-auto">
            <div className="mt-20 mb-5 md:mt-28 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1>Logbook KKN</h1>
            </div>
            <div className="p-3 md:p-6 bg-iceGray rounded-xl">
              <div className="mt-3 ml-4 md:ml-5 flex flex-row justify-between">
                <div className="box-border mb-3">
                  <h1 className="text-lg md:text-3xl font-bold">{jenisKKN}</h1>
                  <h2 className="md:text-xl font-semibold">{kelompok}</h2>
                </div>
                <div className="flex flex-col justify-center md:justify-end px-2 py-1">
                  <button
                    type="button"
                    className="text-xs md:text-base bg-sky-600 hover:bg-sky-700 py-2 px-2 md:px-4 font-bold text-white flex flex-row justify-center items-center space-x-1 md:space-x-2 rounded-sm"
                    onClick={handleOpenModal}
                  >
                    <PlusIcon
                      className="h-4 W-4 md:w-5 md:h-5"
                      style={{ strokeWidth: 2 }}
                    />{" "}
                    <span>Tambah Logbook</span>
                  </button>
                </div>
              </div>
              <div className="box-border md:py-3 md:px-2 mb-3 lg:text-base text-xs md:text-sm overflow-x-auto font-medium">
                <table className="w-full rounded-xl">
                  <thead>
                    <tr className="bg-IjoRumput">
                      <th className="rounded-tl-lg p-1 lg:p-4">No</th>
                      <th className="px-6 p-2 lg:p-4">Hari, Tanggal</th>
                      <th className="px-6 p-2 lg:p-4">Lokasi</th>
                      <th className="px-6 p-3 lg:p-4">Kegiatan</th>
                      <th className="px-6 p-3 lg:p-4">Target</th>
                      <th className="px-6 p-3 lg:p-4">Link</th>
                      <th className="px-6 p-3 lg:p-4">Anggota Hadir</th>
                      <th className="rounded-tr-lg p-3 lg:p-4">Act</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {currentItem.map((item, i) => (
                      <tr key={i} className="border-y border-slate-300">
                        <td className="py-1 px-0 lg:p-3">{i + 1}</td>
                        <td className="py-1 px-1 lg:p-3">{item.hari}</td>
                        <td className="py-1 px-2 lg:p-3">{item.lokasi}</td>
                        <td className="py-1 px-2 lg:p-3">{item.judul}</td>
                        <td className="py-1 px-2 lg:p-3">{item.target}</td>
                        <td className="py-1 px-2 lg:p-3">{item.link}</td>
                        <td className="py-1 px-2 lg:p-3">{item.anggotahadir}</td>
                        <td className="py-1 px-3 lg:p-3">
                          <Link href={"/hapus"}>
                            <div className="bg-red-600 hover:bg-red-700 flex items-center p-2 text-white cursor-pointer rounded-lg">
                              <TrashIcon
                                className="w-3 h-3 md:w-5 md:h-5"
                                style={{ strokeWidth: 2 }}
                              />
                            </div>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-end mt-4">
                  <nav className="block">
                    <ul className="flex pl-0 rounded list-none flex-wrap">
                      {Array.from({
                        length: Math.ceil(logbook.length / itemsPerPage),
                      }).map((item, index) => (
                        <li key={index}>
                          <a
                            onClick={() => paginate(index + 1)}
                            className={
                              "cursor-pointer px-3 py-1 border rounded text-sm leading-tight focus:outline-none focus:shadow-outline-blue transition duration-300 " +
                              (currentPage === index + 1
                                ? "bg-IjoRumput text-white"
                                : "bg-white text-IjoRumput border-IjoRumput hover:bg-IjoRumput hover:text-white")
                            }
                          >
                            {index + 1}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
