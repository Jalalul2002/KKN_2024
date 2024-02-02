import React, { useEffect, useState } from "react";
import Navbar from "../component/navbar";
import SidebarMahasiswa from "../component/sidebarMahasiswa";
import Link from "next/link";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import ReactModal from "react-modal";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { mutate } from "swr";

const mahasiswaId = 7;
export default function LogbookKKN() {  
  const [mahasiswaData, setMahasiswaData] = useState({});
  const [nim, setNim] = useState("");
  const [name, setName] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [jenis_kkn, setJenis] = useState("");
  const [kelompok, setKelompok] = useState("");
  const [dosen, setDosen] = useState(""); 
  const [items, setItems] = useState("");
  const [lokasi, setLokasi] = useState("");
 
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: tables = [], error } = useSWR(`/api/mahasiswa/logbookData?nim=${mahasiswaId}`,fetcher);
  const { data: tables2 = [], error: error2 } = useSWR(mahasiswaId ? `/api/mahasiswa/logbookQuery?mahasiswaId=${mahasiswaId}` : null, fetcher);

  if (error || error2 ) {
    return <div>Error loading group details</div>;
  }

  if (!tables || !tables2) {
    return <div>Loading... Data Error</div>;
  }
  
  

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this data?");
  
    if (confirmed) {
      try {
        const response = await fetch("/api/mahasiswa/logbookDelete", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mahasiswaId, id}), // Mengirim ID Dosen ke API penghapusan
        });
  
        if (response.ok) {
          console.log("Data deleted successfully.");
          console.log('Before mutate:', tables);
          mutate('/mahasiswa/logbookQuery');
          console.log('After mutate:', tables);
        } else {
          console.error("Error deleting data:", response.statusText);
        }
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const router = useRouter();
  const [active, setActive] = useState(1);
  const [itemsPerPage] = useState(10); // Jumlah item per halaman

  const displayData = () => {
    const filteredData = tables2.filter(searchFilter)

    const startIndex = (active - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

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
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
};
const [formData, setFormData] = useState({
  hari: "", // pastikan untuk mengganti ini sesuai kebutuhan
  jenis: "",
  kelompok: "",
  dosen: "",
  lokasi: "",
  kegiatan: "",
  target: "",
  link: "",
  mahasiswa: "",
  mahasiswa_id: "",
});
const handleAddSubmit = async (e) => {
  e.preventDefault();
  setNim(mahasiswaId);

  try {
    // Menggunakan fetch untuk mengirim data ke API
    const response = await fetch("/api/mahasiswa/logbookAdd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hari: formattedDateTime,
        jenis: tables[0].jenis_kkn,  // Ganti ke tables[0] karena Anda mengambil data dari tables
        kelompok: tables[0].kelompok,
        dosen: tables[0].nip,
        lokasi: tables[0].lokasi,
        kegiatan: formData.kegiatan,  // Ganti ke formData
        target: formData.target,      // Ganti ke formData
        link: formData.link,          // Ganti ke formData
        mahasiswa: tables[0].name,
        mahasiswa_id: tables[0].nim,
      }),
    });

    if (response.ok) {
      // Handle sukses pengiriman ke API
      console.log("Data berhasil dikirim ke API");
      window.location.href = '/mahasiswa/logbook';
    } else {
      // Handle kesalahan dari API
      console.error("Gagal mengirim data ke API ");
    }
  } catch (error) {
    // Handle kesalahan umum
    console.error("Terjadi kesalahan:", error);
  }
};

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
          <form className="mx-auto"
          onSubmit={handleAddSubmit}>
            {tables.map((items, i) => ( 
            <div key={i}>
            <div className="flex justify-center space-x-2 mb-3 md:px-5">
              <div className="max-w-xs w-full">
                <label htmlFor="tanggal" className="block mb-1 font-semibold">
                  Hari, Tanggal
                </label>
                <input
                  id="tanggal"
                  className="disabled w-full rounded-md text-xs md:text-base"
                  value={formattedDateTime}
                  readOnly
                ></input>
              </div>
              <div>
                <label htmlFor="jenis" className="block mb-1 font-semibold">
                  Jenis KKN
                </label>
                <input
                  id="jenis"
                  className="disabled w-full rounded-md text-xs md:text-base"
                  value={items.jenis_kkn}
                  readOnly
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
                  value={items.kelompok}
                  readOnly
                ></input>
              </div>
              <div className="max-w-xs w-full">
                <label htmlFor="dosen" className="block mb-1 font-semibold">
                  Dosen Pembimbing
                </label>
                <input
                  id="dosen"
                  className="disabled w-full rounded-md text-xs md:text-base"
                  value={items.dosen}
                  readOnly
                ></input>
              </div>
            </div>
            <div className="max-w-lg mx-auto mb-3">
              <label htmlFor="name" className="block mb-1 font-semibold">
                Nama
              </label>
              <input
                id="mahasiswa"
                className="disabled w-full rounded-md text-xs md:text-base"
                value={items.name}
                readOnly
              ></input>
            </div>
            <div className="max-w-lg mx-auto mb-3">
              <label htmlFor="lokasi" className="block mb-1 font-semibold">
                Lokasi KKN
              </label>
              <input
                id="lokasi"
                className="disabled w-full rounded-md text-xs md:text-base"
                value={items.lokasi}
                readOnly
              ></input>
            </div>
            <div className="flex justify-center space-x-2 mb-3 md:px-5">
              <div className="max-w-xs w-full">
                <label htmlFor="Kegiatan" className="block mb-1 font-semibold">
                  Nama Kegiatan
                </label>
                <input
                  id="kegiatan"
                  className="w-full rounded-md text-xs md:text-base"
                  value={formData.kegiatan}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label htmlFor="target" className="block mb-1 font-semibold">
                  Target KKN
                </label>
                <input
                  id="target"
                  className="w-full rounded-md text-xs md:text-base"
                  value={formData.target}
                  onChange={handleChange}
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
                value={formData.link}
                onChange={handleChange}
              ></textarea>
              <input
                type="hidden"
                  id="mahasiswa_id"
                  className="disabled w-full rounded-md text-xs md:text-base"
                  value={items.nim}
                ></input>
              <input
                type="hidden"
                  id="dosen"
                  className="disabled w-full rounded-md text-xs md:text-base"
                  value={items.nip}
                ></input>
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
            </div>
              ))}
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
                <div className="box-border mb-3">{tables.map((itemm, i) => (
                <div key={i}>
                  <h1 className="text-lg md:text-3xl font-bold">KKN {itemm.jenis_kkn}</h1>
                  <h2 className="md:text-xl font-semibold">{itemm.kelompok}</h2>
                  </div>
              ))}
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
                      {/* <th className="px-6 p-3 lg:p-4">Anggota Hadir</th> */}
                      <th className="rounded-tr-lg p-3 lg:p-4">Act</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {tables2.map((item, i) => (
                      <tr key={i} className="border-y border-slate-300">
                        <td className="py-1 px-0 lg:p-3">{i + 1}</td>
                        <td className="py-1 px-1 lg:p-3">{item.hari}</td>
                        <td className="py-1 px-2 lg:p-3">{item.lokasi}</td>
                        <td className="py-1 px-2 lg:p-3">{item.kegiatan}</td>
                        <td className="py-1 px-2 lg:p-3">{item.target}</td>
                        <td className="py-1 px-2 lg:p-3">{item.link}</td>
                        <td className="py-1 px-3 lg:p-3">
                          <div
                            className="bg-red-600 hover:bg-red-700 flex items-center p-2 text-white cursor-pointer rounded-lg"
                            onClick={() => handleDelete(item.id)} // Tampilkan dialog konfirmasi saat tombol diklik
                          >
                            <TrashIcon
                              className="w-3 h-3 md:w-5 md:h-5"
                              style={{ strokeWidth: 2 }}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-end mt-4">
                  <nav className="block">
                    <ul className="flex pl-0 rounded list-none flex-wrap">
                      {Array.from({
                        length: Math.ceil(displayData.length / itemsPerPage),
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
