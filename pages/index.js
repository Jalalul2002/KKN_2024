import Map from "./component/Map";
import React, {useState} from "react";
import Header from "./component/header";
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/solid"
import Image from "next/image";

export default function Home() {

  const imageSlides = [
    {
      url: "/images/uin.svg"
    },
    {
      url: "/images/1.png"
    },
    {
      url: "/images/2.png"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = ()=> {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = ()=> {
    const isLastSlide = currentIndex === imageSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }


  return (
    <>
      <Header/>

      <main className="py-12 px-4">
        {/* Atas */}
        <section className="mt-[-50px] mx-[-16px]">
          <div className="h-[160px] w-full bg-gradient-to-b from-IjoRumput to-transparent absolute z-10"></div>
          <div style={{ backgroundImage: `url(${imageSlides[currentIndex].url})` }} className="text-left p-4 md:text-right pt-32 md:pt-[360px] w-full bg-center bg-cover duration-300 relative">
            <div className="absolute w-[320px] h-[220px]  bg-[#80B156]/40 blur-3xl md:w-[860px] md:h-[320px] md:ml-auto md:right-0 rounded-[10%]"></div>
            <div className="relative md:-mr-4 md:pr-12 md:py-10 md:w-[920px] md:ml-auto">
              <h1 className="font-bold md:font-extrabold text-6xl md:text-8xl text-white">Kuliah Kerja Nyata</h1>
              <h3 className="font-medium text-white flex flex-col text-base md:text-3xl leading-4 md:leading-9 mt-4 md:mt-9 pb-12 md:pb-4">
                <span>Assalamu&apos;alaikum</span>
                <span>Selamat Datang di Situs Resmi Kuliah Kerja Nyata (KKN)</span>
                <span>Universitas Islam Negeri Sunan Gunung Djati Bandung</span>
              </h3>
            </div>
          </div>
          <ArrowLeftCircleIcon className="w-5 md:w-10 absolute top-[45%] opacity-10 hover:opacity-20 cursor-pointer left-5" onClick={prevSlide}/>
          <ArrowRightCircleIcon className="w-5 md:w-10 absolute top-[45%] opacity-10 hover:opacity-20 cursor-pointer right-5" onClick={prevSlide}/>
        </section>

        {/* Tengah */}
        <section className="mt-4 md:mt-1">
          <div className="text-left md:px-28 md:py-16">
            <div className="flex flex-row space-x-[2px] md:space-x-4 ml-1 md:ml-6">
              <div className="w-1 h-1 md:w-4 md:h-4 bg-[#80B156] rounded-full"></div>
              <div className="w-1 h-1 md:w-4 md:h-4 bg-[#C1D95F] rounded-full"></div>
              <div className="w-1 h-1 md:w-4 md:h-4 bg-[#80B156] rounded-full"></div>
              <div className="w-1 h-1 md:w-4 md:h-4 bg-[#C1D95F] rounded-full"></div>
            </div>
            <h1 className="font-bold text-2xl ml-2 -mt-2 md:mt-5 md:ml-10 md:text-[64px]">Lokasi</h1>
          </div>
          <div className=" mt-3 md:mt-1">
            <Map />
          </div>
        </section>


        {/* Bawah */}
        <section className="mt-5">
          <div className="flex flex-row flex-wrap justify-center items-center text-justify">
            <div className="bg-[url('/images/help.png')] w-[240px] md:w-1/3 h-[240px] md:h-[500px] bg-no-repeat bg-contain"></div>
            <div className="w-screen md:w-2/3">
              <div className="flex flex-row space-x-[2px] md:space-x-4 ml-1 md:ml-0">
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#80B156] rounded-full"></div>
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#C1D95F] rounded-full"></div>
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#80B156] rounded-full"></div>
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#C1D95F] rounded-full"></div>
              </div>
              <div className="font-medium text-lg md:text-2xl">
                <h2 className="font-extrabold text-3xl md:text-5xl mb-3 md:mb-7">Apa itu KKN?</h2>
                <p> KKN merupakan kepanjangan dari Kuliah Kerja Nyata. Ini merupakan program mahasiswa untuk mengabdi kepada masyarakat dengan pendekatan lintas keilmuan dan sektoral dalam kurun waktu tertentu. Biasanya KKN dilakukan selama 1 atau 2 bulan di sebuah desa atau wilayah setingkat desa.</p>
                <p>Program ini dilakukan oleh mahasiswa semester akhir seperti semester 5 atau 6. Mereka akan menjalankan kegiatan belajar, mengabdi, mengajar, dan berbaur dengan masyarakat dimana mereka melakukan KKN. Untuk panduan KKN bisa lihat</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 w">
        <div>
          <h3 className="font-medium text-[8px] md:text-xs text-white text-center py-3 md:py-5">KKN UIN SUNAN GUNUNG DJATI BANDUNG 2024</h3>
        </div>
      </footer>
    </>
  )
}
