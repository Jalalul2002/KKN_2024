import React, { useState } from "react";
import SidebarMahasiswa from "../component/sidebarMahasiswa";
import Navbar from "../component/navbar";
import Link from "next/link";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import Modal from "react-modal";
import Head from "next/head";

export default function PendaftaranKKN() {
  const nim = "1207050055";
  const nama = "Jalalul Mu'ti";
  const prodi = "Teknik Informatika";
  const fakultas = "Sains dan Teknologi";
  const gender = "Laki-laki";
  const pilihJenisKKN = [
    {
      value: 1,
      id: "kkn1",
      namaKKN: "KKN Nusantara Moderasi Beragama",
      detail: "http://www.google.com",
      kelompok: [
        {
          id: "k1",
          kelompok: "Kelompok 1",
          Kecamatan: "",
          kota: "Tana Toraja",
          peserta: 0,
        },
      ],
    },
    {
      value: 2,
      id: "kkn2",
      namaKKN: "KKN Luar Negeri Mandiri",
      detail: "http://www.google.com",
      kelompok: [
        {
          id: "k1",
          kelompok: "Kelompok 1",
          Kecamatan: "",
          kota: "Kinabalu Malaysia",
          peserta: 0,
        },
        {
          id: "k2",
          kelompok: "Kelompok 2",
          Kecamatan: "",
          kota: "Kuala Lumpur Malaysia",
          peserta: 0,
        },
        {
          id: "k3",
          kelompok: "Kelompok 3",
          Kecamatan: "",
          kota: "KJRI Jepang",
          peserta: 0,
        },
      ],
    },
    {
      value: 3,
      id: "kkn3",
      namaKKN: "KKN Nusantara Kolaboratif Mandiri",
      detail: "http://www.google.com",
      kelompok: [
        {
          id: "k1",
          kelompok: "Kelompok 1",
          Kecamatan: "",
          kota: "Medan",
          peserta: 0,
        },
        {
          id: "k2",
          kelompok: "Kelompok 2",
          Kecamatan: "",
          kota: "Jambi",
          peserta: 0,
        },
        {
          id: "k3",
          kelompok: "Kelompok 3",
          Kecamatan: "",
          kota: "Banten",
          peserta: 0,
        },
        {
          id: "k4",
          kelompok: "Kelompok 4",
          Kecamatan: "",
          kota: "Cirebon",
          peserta: 0,
        },
        {
          id: "k5",
          kelompok: "Kelompok 5",
          Kecamatan: "",
          kota: "Semarang",
          peserta: 0,
        },
        {
          id: "k6",
          kelompok: "Kelompok 6",
          Kecamatan: "",
          kota: "Yogyakarta",
          peserta: 0,
        },
        {
          id: "k7",
          kelompok: "Kelompok 7",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
      ],
    },
    {
      value: 4,
      id: "kkn4",
      namaKKN: "KKN Terpadu",
      detail: "http://www.google.com",
      kelompok: [
        {
          id: "k1",
          kelompok: "Kelompok 1",
          Kecamatan: "",
          kota: "Bandung",
          peserta: 0,
        },
      ],
    },
    {
      value: 5,
      id: "kkn5",
      namaKKN: "KKN Tematik",
      detail: "http://www.google.com",
      kelompok: [
        {
          id: "k1",
          kelompok: "Kelompok 1",
          Kecamatan: "",
          kota: "Bandung",
          peserta: 0,
        },
      ],
    },
    {
      value: 6,
      id: "kkn6",
      namaKKN: "KKN Reguler Sisdamas Moderasi Beragama",
      detail: "http://www.google.com",
      kelompok: [
        {
          id: "k1",
          kelompok: "Kelompok 1",
          Kecamatan: "Ciwidey",
          kota: "Kabupaten Bandung",
          peserta: 0,
        },
        {
          id: "k2",
          kelompok: "Kelompok 2",
          Kecamatan: "Ciwidey",
          kota: "Kabupaten Bandung",
          peserta: 0,
        },
        {
          id: "k3",
          kelompok: "Kelompok 3",
          Kecamatan: "Ciwidey",
          kota: "Kabupaten Bandung",
          peserta: 0,
        },
        {
          id: "k4",
          kelompok: "Kelompok 4",
          Kecamatan: "Ciwidey",
          kota: "Kabupaten Bandung",
          peserta: 0,
        },
        {
          id: "k5",
          kelompok: "Kelompok 5",
          Kecamatan: "Lembang",
          kota: "Bandung Barat",
          peserta: 0,
        },
        {
          id: "k6",
          kelompok: "Kelompok 6",
          Kecamatan: "Lembang",
          kota: "Bandung Barat",
          peserta: 0,
        },
        {
          id: "k7",
          kelompok: "Kelompok 7",
          Kecamatan: "Lembang",
          kota: "Bandung Barat",
          peserta: 0,
        },
        {
          id: "k8",
          kelompok: "Kelompok 8",
          Kecamatan: "Lembang",
          kota: "Bandung Barat",
          peserta: 0,
        },
        {
          id: "k9",
          kelompok: "Kelompok 9",
          Kecamatan: "Lembang",
          kota: "Bandung Barat",
          peserta: 0,
        },
        {
          id: "k10",
          kelompok: "Kelompok 10",
          Kecamatan: "Lembang",
          kota: "Bandung Barat",
          peserta: 0,
        },
        {
          id: "k11",
          kelompok: "Kelompok 11",
          Kecamatan: "subang",
          kota: "Subang",
          peserta: 0,
        },
        {
          id: "k12",
          kelompok: "Kelompok 12",
          Kecamatan: "Cirebon",
          kota: "Cirebon",
          peserta: 0,
        },
      ],
    },
  ];

  const [selectedJenisKKN, setSelectedJenisKKN] = useState(null);
  const [selectedKelompokKKN, setSelectedKelompokKKN] = useState(null);
  const [selectedKelompokIndex, setSelectedKelompokIndex] = useState(null);

  const handleRadioChange = (val) => {
    setSelectedJenisKKN(val);
    setSelectedKelompokIndex(null);
  };

  const selectedJenisKKNDetails =
    selectedJenisKKN &&
    pilihJenisKKN.find((jenis) => jenis.value === selectedJenisKKN);

  // State untuk paginasi
  const [currentPage, setCurrentPage] = useState(1);
  const kelompokPerPage = 10;

  // Hitung indeks awal dan akhir untuk setiap halaman
  const indexOfLastKelompok = currentPage * kelompokPerPage;
  const indexOfFirstKelompok = indexOfLastKelompok - kelompokPerPage;
  const currentKelompok = selectedJenisKKNDetails?.kelompok.slice(
    indexOfFirstKelompok,
    indexOfLastKelompok
  );

  // Fungsi untuk mengganti halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Pagination
  const totalKelompok = selectedJenisKKNDetails?.kelompok.length;
  const totalPages = Math.ceil(totalKelompok / kelompokPerPage);
  const hasNextPage = currentPage < totalPages;
  const hasLastPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;
  const hasFirstPage = currentPage > 1;

  // Render tombol pagination
  const renderPaginationButtons = () => {
    const pageButtons = [];
    const maxButtons = 4; // Jumlah tombol pagination yang ingin ditampilkan

    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let number = startPage; number <= endPage; number++) {
      pageButtons.push(
        <li key={number} className="mx-1">
          <button
            type="button"
            className={`${
              number === currentPage
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-slate-100 border border-gray-300 text-gray-700"
            } px-3 py-2 md:px-3 md:py-1 rounded`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </li>
      );
    }

    return pageButtons;
  };
  // Render tombol "Previous" dan "First"
  const renderPreviousAndFirstButtons = () => {
    return (
      <>
        <li>
          <button
            type="button"
            className={`${
              hasFirstPage ? "bg-white hover:bg-slate-100" : "bg-gray-300"
            } border border-gray-300 text-gray-700 px-3 py-1 rounded mx-1`}
            onClick={() => paginate(1)}
            disabled={!hasFirstPage}
          >
            <ChevronDoubleLeftIcon className="w-4 h-7" />
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`${
              hasPreviousPage ? "bg-white hover:bg-slate-100" : "bg-gray-300"
            } border border-gray-300 text-gray-700 px-3 py-1 rounded`}
            onClick={() => paginate(currentPage - 1)}
            disabled={!hasPreviousPage}
          >
            <ChevronLeftIcon className="w-4 h-7" />
          </button>
        </li>
      </>
    );
  };

  // Render tombol "Next" dan "Last"
  const renderNextAndLastButtons = () => {
    return (
      <>
        <li>
          <button
            type="button"
            className={`${
              hasNextPage ? "bg-white hover:bg-slate-100" : "bg-gray-300"
            } border border-gray-300 text-gray-700 px-3 py-1 rounded`}
            onClick={() => paginate(currentPage + 1)}
            disabled={!hasNextPage}
          >
            <ChevronRightIcon className="w-4 h-7" />
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`${
              hasLastPage
                ? "bg-white hover:bg-slate-100"
                : "bg-gray-300 cursor-not-allowed"
            } border border-gray-300 text-gray-700 px-3 py-1 rounded mx-1`}
            onClick={() => paginate(totalPages)}
            disabled={!hasLastPage}
          >
            <ChevronDoubleRightIcon className="w-4 h-7" />
          </button>
        </li>
      </>
    );
  };

  // Render pagination
  const renderPagination = () => {
    return (
      <nav>
        <ul className="pagination flex">
          {renderPreviousAndFirstButtons()}
          {renderPaginationButtons()}
          {renderNextAndLastButtons()}
        </ul>
      </nav>
    );
  };

  // State untuk modal konfirmasi
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);

  // Fungsi untuk membuka modal konfirmasi
  const openConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const openErrorModal = () => {
    setErrorModalOpen(true);
  };

  // Fungsi untuk menutup modal konfirmasi
  const closeConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };

  const closeErrorModal = () => {
    setErrorModalOpen(false);
  };

  // Fungsi untuk menangani submit form dan membuka modal konfirmasi
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Memastikan jenis KKN dan kelompok KKN dipilih
    if (selectedJenisKKN && selectedKelompokKKN !== null) {
      openConfirmationModal();
      setSelectedKelompokIndex(selectedKelompokKKN);
    } else {
      // Tampilkan pesan kesalahan jika jenis KKN atau kelompok KKN belum dipilih
      openErrorModal();
    }
  };

  return (
    <>
      <Head>
        <title>Pendaftaran KKN</title>
        <meta property="og:title" content="Pendaftaran KKN" key="title" />
      </Head>
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="w-auto h-screen">
          <SidebarMahasiswa />
        </div>
        <div className="overflow-y-auto h-screen w-screen grow">
          <Navbar />
          <div className="px-6 pb-5 w-auto">
            <div className="mt-20 mb-5 md:mt-28 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1>Pendaftaran KKN</h1>
            </div>
            <div className="py-3 md:py-8 px-4 md:px-10 bg-iceGray rounded-xl">
              <div>
                <h1 className="text-base md:text-3xl font-semibold pb-1">
                  Data Pendaftar
                </h1>
                <div className="mt-2 text-sm md:text-lg px-3 md:px-7">
                  <dl>
                    <div className="px-0 md:px-4 md:py-2 grid grid-cols-3 md:grid-cols-6">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Nama Pendaftar
                      </dt>
                      <dd className="leading-6 text-gray-700 font-medium col-span-2">
                        {nama}
                      </dd>
                    </div>
                    <div className="md:px-4 md:py-2 grid grid-cols-3 md:grid-cols-6 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Jenis Kelamin
                      </dt>
                      <dd className="leading-6 text-gray-700 font-medium col-span-2">
                        {gender}
                      </dd>
                    </div>
                    <div className="md:px-4 md:py-2 grid grid-cols-3 md:grid-cols-6 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Program Studi
                      </dt>
                      <dd className="leading-6 text-gray-700 font-medium col-span-2">
                        {prodi}
                      </dd>
                    </div>
                    <div className="md:px-4 md:py-2 grid grid-cols-3 md:grid-cols-6 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Fakultas
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 font-medium col-span-2">
                        {fakultas}
                      </dd>
                    </div>
                    <div className="md:px-4 md:py-2 grid grid-cols-3 md:grid-cols-6 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Status
                      </dt>
                      <dd className="mt-1 leading-6 font-bold text-green-600 col-span-2">
                        Terdaftar | Memenuhi Syarat
                      </dd>
                      <dd className="mt-1 leading-6 font-bold text-red-600 col-span-2">
                        Belum Terdaftar | Tidak Memenuhi Syarat
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Jika tidak memenuhi syarat */}
              <div className="w-full text-center mt-24 mb-12">
                <Link
                  href={"/mahasiswa/uploadSyarat"}
                  className="px-10 py-2 bg-IjoRumput hover:bg-IjoRumput/80 text-xl text-white font-bold"
                >
                  Upload Persyaratan
                </Link>
              </div>

              <section className="py-2 md:mt-2">
                <form
                  method="post"
                  action="submitDaftar"
                  onSubmit={handleFormSubmit}
                >
                  <input
                    id="id_mahasiswa"
                    className="hidden"
                    defaultValue={nim}
                  />
                  <fieldset>
                    <legend className="text-base md:text-3xl font-semibold py-2">
                      Pilih Jenis KKN
                    </legend>
                    <ul>
                      {pilihJenisKKN.map((jenis, i) => (
                        <li key={i}>
                          <div className="flex flex-wrap md:flex-nowrap items-center border-y border-gray-200 space-x-5 md:space-x-2 md:justify-around">
                            <label
                              htmlFor={jenis.id}
                              className="w-4/5 md:w-1/3 py-1 md:py-4 mx-2 text-sm md:text-lg font-medium text-gray-900 cursor-pointer"
                            >
                              <p>
                                <span className="mr-1 md:mr-3">
                                  {jenis.value}.
                                </span>{" "}
                                {jenis.namaKKN}
                              </p>
                            </label>
                            <input
                              id={jenis.id}
                              type="radio"
                              value={jenis.value}
                              name="jenisKKN"
                              className="md:w-5 md:h-5 text-blue-600 bg-gray-100 border-gray-900 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                              onChange={() => handleRadioChange(jenis.value)}
                            />
                            <div className="w-1/2 mb-2 md:text-right">
                              <Link
                                href={jenis.detail}
                                className="px-2 md:px-3 py-1 md:mr-4 bg-blue-700 hover:bg-blue-900 rounded-md text-white font-light md:font-semibold text-sm md:text-lg"
                              >
                                Lihat Detail
                              </Link>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </fieldset>
                  {selectedJenisKKNDetails && (
                    <fieldset>
                      <div className="mt-4 text-base font-medium">
                        <legend className="text-base md:text-3xl font-semibold py-2">
                          Pilih Kelompok KKN
                        </legend>
                        <div className="flex flex-col md:flex-row px-1 md:px-4 text-sm md:text-lg">
                          <div className="w-5/6 md:w-3/4">
                            <h2 className="md:text-xl mb-3">
                              Data Tabel untuk Kelompok{" "}
                              <span className="font-semibold">
                                {selectedJenisKKNDetails.namaKKN}
                              </span>
                            </h2>
                            <div className="flex flex-col overflow-x-auto">
                              <div className="overflow-x-auto">
                                <table className="min-w-full rounded-xl">
                                  <thead>
                                    <tr>
                                      <th className="bg-IjoRumput rounded-tl-lg p-2 md:p-4">
                                        No
                                      </th>
                                      <th className="bg-IjoRumput p-2 md:p-4">
                                        Act
                                      </th>
                                      <th className="bg-IjoRumput p-3 md:p-4">
                                        Kelompok
                                      </th>
                                      <th className="bg-IjoRumput p-3 md:p-4">
                                        Kecamatan
                                      </th>
                                      <th className="bg-IjoRumput p-3 md:p-4">
                                        Kota
                                      </th>
                                      <th className="bg-IjoRumput p-3 md:p-4 rounded-tr-lg">
                                        Peserta
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="text-center">
                                    {currentKelompok.map((item, i) => (
                                      <tr key={i}>
                                        <td className="border-y py-1 md:p-3 border-slate-300">
                                          {indexOfFirstKelompok + i + 1}
                                        </td>
                                        <td className="border-y py-1 md:p-3 border-slate-300">
                                          <input
                                            id={item.id}
                                            type="radio"
                                            value={i}
                                            name="kelompokKKN"
                                            className="md:w-5 md:h-5 text-blue-600 bg-gray-100 border-gray-900 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                                            onChange={() =>
                                              setSelectedKelompokKKN(i)
                                            }
                                          />
                                        </td>
                                        <td className="border-y mx-2 py-1 md:p-3 border-slate-300">
                                          {item.kelompok}
                                        </td>
                                        <td className="border-y mx-2 py-1 md:p-3 border-slate-300">
                                          {item.Kecamatan}
                                        </td>
                                        <td className="border-y mx-2 py-1 md:p-3 border-slate-300">
                                          {item.kota}
                                        </td>
                                        <td className="border-y mx-2 py-1 md:p-3 border-slate-300">
                                          P{item.peserta}/L{item.peserta}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                              <div className="flex md:flex-row justify-center md:justify-end mt-4">
                                {renderPagination()}
                              </div>
                            </div>
                          </div>
                          <div className="md:w-1/4 flex flex-col justify-center items-baseline md:items-center">
                            <div className="bg-IjoRumput w-[85%] mt-5 md:mt-0 px-4 py-2 md:px-10 md:py-4 rounded-lg text-center md:text-right text-white">
                              <h1 className="text-base md:text-xl font-base">
                                Jumlah Kelompok
                              </h1>
                              <h2 className="text-3xl md:text-5xl font-semibold">
                                {selectedJenisKKNDetails.kelompok.length}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  )}

                  <div className="w-full p-4 text-center">
                    <button
                      type="submit"
                      className="px-10 py-2 rounded-md bg-green-700 hover:bg-green-800 text-white font-semibold text-lg mt-5"
                    >
                      Daftar
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Konfirmasi */}
      <Modal
        isOpen={isConfirmationModalOpen}
        onRequestClose={closeConfirmationModal}
        contentLabel="Konfirmasi Pendaftaran"
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            width: "50%",
            height: "50%",
            margin: "auto",
          },
        }}
      >
        <div className="h-full text-center justify-center flex flex-col text-sm md:text-lg font-medium">
          <div className="md:p-6">
            <p className="text-base md:text-xl font-medium">
              Apakah Anda yakin ingin mendaftar Jenis KKN:{" "}
              <span className="font-bold">
                {selectedJenisKKNDetails?.namaKKN}{" "}
              </span>
              dan Kelompok KKN:{" "}
              <span className="font-bold">
                {
                  selectedJenisKKNDetails?.kelompok[selectedKelompokIndex]
                    ?.kelompok
                }
              </span>{" "}
              di Daerah:{" "}
              <span className="font-bold">
                {
                  selectedJenisKKNDetails?.kelompok[selectedKelompokIndex]
                    ?.Kecamatan
                }
                ,{" "}
                {selectedJenisKKNDetails?.kelompok[selectedKelompokIndex]?.kota}
              </span>
              ?
            </p>
          </div>
          <div>
            <button
              onClick={closeConfirmationModal}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md m-2"
            >
              Batal
            </button>
            <button
              onClick={() => {
                // Tambahkan logika pendaftaran atau tindakan lain di sini
                console.log("Pendaftaran berhasil");
                // Tutup modal dan lakukan tindakan sesuai kebutuhan
                closeConfirmationModal();
              }}
              className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md m-2"
            >
              Ya, Saya Yakin
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal Error */}
      <Modal
        isOpen={isErrorModalOpen}
        onRequestClose={closeErrorModal}
        contentLabel="Error Pendaftaran"
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            width: "50%",
            height: "50%",
            margin: "auto",
          },
        }}
      >
        <div className="h-full text-center justify-center flex flex-col text-sm md:text-lg font-medium">
          <div className="md:p-6">
            <p className="text-base md:text-xl font-medium">
              Anda Harus Memilih Jenis KKN dan Kelompok Terlebih Dahulu!!
            </p>
          </div>
          <div>
            <button
              onClick={closeErrorModal}
              className="px-4 py-2 bg-green-700 hover:bg-green-800 rounded-md m-2 text-white"
            >
              Tutup
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
