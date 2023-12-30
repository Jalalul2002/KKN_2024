import React from "react";
import Navbar from "../component/navbar";
import SidebarMahasiswa from "../component/sidebarMahasiswa";

export default function LogbookKKN() {
  return (
    <>
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
              <div>
                <h1 className="text-sm md:text-3xl font-semibold pb-1 md:pb-3">
                  Assalmu&apos;alaikum,
                </h1>
              </div>
              <div className="mt-3 flex flex-row flex-wrap justify-around">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
