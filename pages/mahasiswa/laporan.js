import React from "react";
import Navbar from "../component/navbar";
import SidebarMahasiswa from "../component/sidebarMahasiswa";

export default function LaporanKKN() {
  const jenisKKN = "KKN Sisdamas";
  const kelompok = "Kelompok 1";

  return (
    <>
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
                <div className="box-border mb-3">
                  <h1 className="text-lg md:text-3xl font-bold">{jenisKKN}</h1>
                  <h2 className="md:text-xl font-semibold">{kelompok}</h2>
                </div>
              </div>
              <div className="w-full font-medium text-sm md:text-lg px-4 md:px-0">
                <form className="max-w-lg mx-auto my-3">
                  <div className="my-2">
                    <label htmlFor="laporan">
                      Laporan Berupa Artikel Pengabdian atau Artikel Penelitian
                    </label>
                    <input
                      className="block w-full text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 rounded-sm"
                      id="laporan"
                      type="file"
                      accept=".pdf"
                    />
                  </div>

                  <div className="my-2">
                    <label htmlFor="laporan">Link Google Drive</label>
                    <input
                      type="text"
                      className="block w-full text-gray-900 border border-gray-300 bg-gray-50 rounded-md"
                    />
                  </div>
                  <div className="text-center mt-5">
                    <button type="submit" className="px-8 py-2 bg-green-600 hover:bg-green-800 text-white font-bold rounded-lg">
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
