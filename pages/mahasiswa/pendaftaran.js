import React from "react";
import SidebarMahasiswa from "../component/sidebarMahasiswa";
import Navbar from "../component/navbar";

export default function PendaftaranKKN() {
  return (
    <>
      <Navbar />
      <SidebarMahasiswa />
      <div className="top-0 left-0 m-0 p-0">
        <div className="bg-IjoRumput w-full h-72 relative -z-20">
          <div className="absolute top-24 px-6 md:px-0 md:top-20 md:left-36 font-bold text-2xl md:text-5xl text-white">
            <h1>Pendaftaran KKN</h1>
          </div>
        </div>
        <div className="absolute px-3 md:left-32 md:right-12 top-36 md:top-40 pb-5">
          <div className="p-3 md:p-6 bg-iceGray rounded-xl">
            <div className="mt-3 flex flex-row flex-wrap justify-around">
              <div className="lg:w-1/3 px-2">
                <h1 className="text-lg font-bold">Pilih Jenis KKN</h1>
                <div></div>
              </div>
              <div className="lg:w-1/4 px-2">
                <h1 className="text-lg font-bold">Informasi KKN</h1>
              </div>
              <div className="lg:w-1/4 px-2">
                <h1 className="text-lg font-bold">Infromasi Kelompok</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
