import React from "react";
import Navbar from "../../components/navbar";
import SidebarMahasiswa from "../../components/sidebarMahasiswa";
import Head from "next/head";
import useSWR from "swr";
import { useState } from "react";

const mahasiswaId = 1203010100;
export default function LaporanKKN() {
  const [nim, setNim] = useState("");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: tables = [], error } = useSWR(`/api/mahasiswa/logbookData?nim=${mahasiswaId}`,fetcher);
  

  if (error ) {
    return <div>Error loading group details</div>;
  }

  if (!tables) {
    return <div>Loading... Data Error</div>;
  }

  const [judul, setJudul] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Pilih file laporan terlebih dahulu.');
      return;
    }

    const formData = new FormData();
    formData.append('mahasiswa_id', tables[0].nim);
    formData.append('judul', judul);
    formData.append('file', file);

    try {
      const response = await fetch("/api/mahasiswa/laporan", {
        method: "POST",
        body: formData, // Gunakan formData untuk upload file
      });
        
      if (response.ok) {
        const data = await response.json();
        alert(`File ${tables[0].fileName} berhasil diunggah.`);
        // Tambahkan logika lain yang diperlukan setelah unggah berhasil
      } else {
        alert('Gagal mengunggah file laporan.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <>
      <Head>
        <title>Laporan Mahasiswa</title>
        <meta property="og:title" content="Laporan Mahasiswa" key="title" />
      </Head>
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="h-screen">
          <SidebarMahasiswa />
        </div>
        <div className="overflow-auto h-screen grow">
          <Navbar />
          <div className="px-6 pb-5 w-auto">
            <div className="mt-20 mb-5 md:mt-28 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1>Laporan KKN</h1>
            </div>
            <div className="p-3 md:p-6 bg-iceGray rounded-xl">
              <div className="mt-3 ml-4 md:ml-5 flex flex-row">
                <div className="box-border mb-3">{tables.map((items, i) => (
                <div key={i}>
                  <h1 className="text-lg md:text-3xl font-bold">KKN {items.jenis_kkn}</h1>
                  <h2 className="md:text-xl font-semibold">{items.kelompok}</h2>
                  </div>
              ))}
                </div>
              </div>
              <div className="w-full font-medium text-sm md:text-lg px-4 md:px-0">
                <form className="max-w-lg mx-auto my-3" onSubmit={handleSubmit} >
                {tables.map((items, i) => ( 
                <div key={i}>
                <div className="my-2">
                    <label htmlFor="laporan">
                      Judul Artikel
                    </label>
                    <input
                      className="block w-full text-gray-900 border border-gray-300 bg-gray-50 rounded-md"
                      id="judul"
                      type="text"
                      value={judul}
                      onChange={(e) => setJudul(e.target.value)}
                    />
                    <input
                      type="hidden"
                      id="mahasiswa_id"
                      className="disabled w-full rounded-md text-xs md:text-base"
                      value={items.nim}
                ></input>
                  </div>
                  <div className="my-2 hidden">
                    <label htmlFor="laporan">Link Google Drive</label>
                    <input
                      type="text"
                      className="block w-full text-gray-900 border border-gray-300 bg-gray-50 rounded-md"
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="laporan">
                      Laporan Berupa Artikel Pengabdian atau Artikel Penelitian
                    </label>
                    <input
                      className="block w-full text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 rounded-md"
                      id="file"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </div>
                  </div>
              ))}
                  <div className="text-center mt-5">
                    <button
                      type="submit"
                      className="px-8 py-2 bg-green-600 hover:bg-green-800 text-white font-bold rounded-lg"
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
