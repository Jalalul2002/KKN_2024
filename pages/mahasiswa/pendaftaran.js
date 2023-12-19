import React, { useState } from "react";
import SidebarMahasiswa from "../component/sidebarMahasiswa";
import Navbar from "../component/navbar";
import Link from "next/link";

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
        {
          id: "k13",
          kelompok: "Kelompok 13",
          Kecamatan: "Semarang",
          kota: "Semarang",
          peserta: 0,
        },
        {
          id: "k14",
          kelompok: "Kelompok 14",
          Kecamatan: "",
          kota: "Yogyakarta",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
        {
          id: "k15",
          kelompok: "Kelompok 15",
          Kecamatan: "",
          kota: "Lombok",
          peserta: 0,
        },
      ],
    },
  ];

  const [selectedJenisKKN, setSelectedJenisKKN] = useState(null);

  const handleRadioChange = (val) => {
    setSelectedJenisKKN(val);
  };

  const selectedJenisKKNDetails =
    selectedJenisKKN &&
    pilihJenisKKN.find((jenis) => jenis.value === selectedJenisKKN);

  // State untuk paginasi
  const [currentPage, setCurrentPage] = useState(1);
  const kelompokPerPage = 3;

  // Hitung indeks awal dan akhir untuk setiap halaman
  const indexOfLastKelompok = currentPage * kelompokPerPage;
  const indexOfFirstKelompok = indexOfLastKelompok - kelompokPerPage;
  const currentKelompok = selectedJenisKKNDetails?.kelompok.slice(
    indexOfFirstKelompok,
    indexOfLastKelompok
  );

  // Fungsi untuk mengganti halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Place your form submission logic here
    // For example, you can send data to the server or perform other actions
    console.log("Form submitted!");
  };

  return (
    <>
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="w-auto h-screen">
          <SidebarMahasiswa />
        </div>
        <div className="overflow-y-auto h-screen w-screen">
          <Navbar />
          <div className="px-6 pb-5 w-auto">
            <div className="mt-20 mb-5 md:mt-28 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1>Pendaftaran KKN</h1>
            </div>
            <div className="p-3 md:p-6 bg-iceGray rounded-xl">
              <div>
                <h1 className="text-sm md:text-2xl font-semibold pb-1">
                  Data Pendaftar
                </h1>
                <div className="mt-2">
                  <dl>
                    <div className="md:px-4 md:py-2 grid grid-cols-6 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Nama Pendaftar
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 font-medium">
                        {nama}
                      </dd>
                    </div>
                    <div className="md:px-4 md:py-2 grid grid-cols-6 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Jenis Kelamin
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 font-medium">
                        {gender}
                      </dd>
                    </div>
                    <div className="md:px-4 md:py-2 grid grid-cols-6 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Program Studi
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 font-medium">
                        {prodi}
                      </dd>
                    </div>
                    <div className="md:px-4 md:py-2 grid grid-cols-6 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Fakultas
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 font-medium">
                        {fakultas}
                      </dd>
                    </div>
                    <div className="md:px-4 md:py-2 grid grid-cols-6 px-0">
                      <dt className="font-semibold leading-6 text-gray-900">
                        Status
                      </dt>
                      <dd className="mt-1 leading-6 font-bold text-green-600">
                        Terdaftar | Memenuhi Syarat
                      </dd>
                      <dd className="mt-1 leading-6 font-bold text-red-600 col-span-2">
                        Belum Terdaftar | Tidak Memenuhi Syarat
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <section className="p-2">
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
                    <legend className="text-sm md:text-2xl font-semibold py-2 ">
                      Pilih Jenis KKN
                    </legend>
                    <ul>
                      {pilihJenisKKN.map((jenis, i) => (
                        <li key={i}>
                          <div className="flex items-center border-y border-gray-200 space-x-2 justify-around">
                            <label
                              htmlFor={jenis.id}
                              className=" w-1/3 py-4 mx-2 text-base font-medium text-gray-900 cursor-pointer"
                            >
                              {jenis.value}. {jenis.namaKKN}
                            </label>
                            <input
                              id={jenis.id}
                              type="radio"
                              value={jenis.value}
                              name="jenisKKN"
                              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-900 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                              onChange={() => handleRadioChange(jenis.value)}
                            />
                            <div className="w-1/2 text-right">
                              <Link
                                href={jenis.detail}
                                className="px-3 py-1 mr-4 bg-blue-700 hover:bg-blue-900 rounded-md text-white font-medium text-base"
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
                        <legend className="text-sm md:text-2xl font-semibold py-2 ">
                          Pilih Kelompok KKN
                        </legend>
                        <div className="flex flex-row">
                          <div className="w-3/4">
                            <h2>
                              Data Tabel untuk Kelompok{" "}
                              {selectedJenisKKNDetails.namaKKN}
                            </h2>
                            <div className="flex flex-col overflow-x-auto">
                              <div className="overflow-x-auto">
                                <table className="min-w-full border bg-white">
                                  <thead>
                                    <tr>
                                      <th className="border p-2">No</th>
                                      <th className="border p-2">Kelompok</th>
                                      <th className="border p-2">Kecamatan</th>
                                      <th className="border p-2">Kota</th>
                                      <th className="border p-2">Peserta</th>
                                      <th className="border p-2">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody className="text-center">
                                    {currentKelompok.map((item, i) => (
                                      <tr key={i}>
                                        <td className="border p-2">
                                          {indexOfFirstKelompok + i + 1}
                                        </td>
                                        <td className="border p-2">
                                          {item.kelompok}
                                        </td>
                                        <td className="border p-2">
                                          {item.Kecamatan}
                                        </td>
                                        <td className="border p-2">
                                          {item.kota}
                                        </td>
                                        <td className="border p-2">
                                          {item.peserta}
                                        </td>
                                        <td className="border p-2">
                                          <input
                                            id={item.id}
                                            type="radio"
                                            value={i}
                                            name="kelompokKKN"
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-900 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                                          />
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                              <div className="flex flex-row justify-end mt-4">
                                <nav className="overflow-x-scroll">
                                  <ul className="pagination flex">
                                    {[
                                      ...Array(
                                        Math.ceil(
                                          selectedJenisKKNDetails.kelompok
                                            .length / kelompokPerPage
                                        )
                                      ).keys(),
                                    ].map((number) => (
                                      <li key={number + 1} className="mx-1">
                                        <button
                                          type="button"
                                          className={`${
                                            number + 1 === currentPage
                                              ? "bg-blue-500 text-white"
                                              : "bg-white border border-gray-300 text-gray-700"
                                          } px-3 py-1 rounded`}
                                          onClick={() => paginate(number + 1)}
                                        >
                                          {number + 1}
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h1>
                              Total Kelompok :{" "}
                              {selectedJenisKKNDetails.kelompok.length}
                            </h1>
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
    </>
  );
}
