import Map from "./component/Map";
import React, {useState} from "react";
import Header from "./component/header";
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/solid"

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
          <div style={{ backgroundImage: `url(${imageSlides[currentIndex].url})` }} className="text-left p-4 md:text-right pt-32 md:pt-[380px] w-full bg-center bg-cover duration-300 relative">
            <div>
              <h1 className="font-extrabold text-4xl md:text-8xl text-white ">Kuliah Kerja Nyata</h1>
              <h3 className="font-medium text-white flex flex-col text-[10px] md:text-3xl leading-4 md:leading-7 mt-4 md:mt-9 pb-4 md:pb-24">
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
        <section className="mt-4 md:mt-10">
          <div className="text-left md:text-center">
            <h1 className="font-medium text-base md:text-5xl">Peta Sebaran Lokasi</h1>
            <div className=" mt-2 md:mt-7">
              <Map />
            </div>
          </div>
        </section>


        {/* Bawah */}
        <section>
          <div className="flex flex-row">
            <div>
              
            </div>
            <div>
              <h2>Apa itu KKN?</h2>
              <p> KKN merupakan kepanjangan dari Kuliah Kerja Nyata. Ini merupakan program mahasiswa untuk mengabdi kepada masyarakat dengan pendekatan lintas keilmuan dan sektoral dalam kurun waktu tertentu. Biasanya KKN dilakukan selama 1 atau 2 bulan di sebuah desa atau wilayah setingkat desa.</p>
              <p>Program ini dilakukan oleh mahasiswa semester akhir seperti semester 5 atau 6. Mereka akan menjalankan kegiatan belajar, mengabdi, mengajar, dan berbaur dengan masyarakat dimana mereka melakukan KKN. Untuk panduan KKN bisa lihat</p>
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
