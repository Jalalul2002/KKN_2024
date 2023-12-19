import React from "react";
import SidebarMahasiswa from "../component/sidebarMahasiswa";
import Navbar from "../component/navbar";

export default function PendaftaranKKN() {
  return (
    <>
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="md:w-56 h-screen">
          <SidebarMahasiswa />
        </div>
        <div className="overflow-y-scroll h-screen">
          <Navbar />
          <div className="px-6 pb-5 w-auto">
            <div className="mt-20 mb-5 md:mt-28 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1>Pendaftaran KKN</h1>
            </div>
            <div className="p-3 md:p-6 bg-iceGray rounded-xl">
              <div>
                <h1 className="text-sm md:text-3xl font-semibold pb-1 md:pb-3">
                  Assalmu&apos;alaikum,
                </h1>
              </div>
              <div className="mt-3 flex flex-row flex-wrap justify-around">
                <div className="lg:w-6/12">
                  <img
                    src="/images/timeline.jpeg"
                    alt="Timeline KKN Image"
                    className=" xl:max-w-screen"
                  />
                </div>
                <div className="lg:w-5/12 text-justify mt-3 lg:mt-0">
                  <h2 className="font-extrabold text-sm md:text-4xl mb-1 md:mb-7">
                    Apa itu KKN?
                  </h2>
                  <p className="text-sm md:text-lg font-medium mb-3">
                    KKN merupakan kepanjangan dari Kuliah Kerja Nyata. Ini
                    merupakan program mahasiswa untuk mengabdi kepada masyarakat
                    dengan pendekatan lintas keilmuan dan sektoral dalam kurun
                    waktu tertentu. Biasanya KKN dilakukan selama 1 atau 2 bulan
                    di sebuah desa atau wilayah setingkat desa.
                  </p>
                  <p className="text-sm md:text-lg font-medium">
                    Program ini dilakukan oleh mahasiswa semester akhir seperti
                    semester 5 atau 6. Mereka akan menjalankan kegiatan belajar,
                    mengabdi, mengajar, dan berbaur dengan masyarakat dimana
                    mereka melakukan KKN. Untuk panduan KKN bisa lihat pada link
                    berikut:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
