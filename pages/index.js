import Map from "./component/Map";
import React, { useState, useEffect } from "react";
import Header from "./component/header";
import Image from "next/image";
import Link from "next/link";
import instagramIcon from "./component/svgs/instagram";
import youtubeIcon from "./component/svgs/youtube";
import websiteIcon from "./component/svgs/website";

export default function Home() {
  const imageSlides = [
    {
      url: "/images/Kampus2Depan.jpeg",
    },
    {
      url: "/images/1.jpeg",
    },
    {
      url: "/images/2.jpg",
    },
    {
      url: "/images/3.jpg",
    },
    {
      url: "/images/4.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSLideInterval, setAutoSlideInterval] = useState(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === imageSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    setAutoSlideInterval(interval);

    return () => {
      clearInterval(autoSLideInterval);
    };
  }, [currentIndex]);

  const icons = [
    {
      href: "/",
      icon: instagramIcon,
    },
    {
      href: "/",
      icon: youtubeIcon,
    },
    {
      href: "/",
      icon: websiteIcon,
    }
  ];

  return (
    <>
      <Header />

      <main>
        {/* Atas */}
        <section>
          <div className="h-[240px] w-full bg-gradient-to-b from-IjoRumput to-transparent absolute z-10"></div>
          <div
            style={{ backgroundImage: `url(${imageSlides[currentIndex].url})` }}
            className="text-left p-4 md:text-right pt-32 md:pt-[360px] w-full bg-center bg-cover duration-300 relative"
          >
            <div className="absolute w-[300px] h-[220px]  bg-[#80B156]/30 blur-3xl md:w-[860px] md:h-[320px] md:ml-auto md:right-0 rounded-[10%]"></div>
            <div className="relative md:-mr-4 md:pr-12 md:py-10 xl:w-[920px] md:ml-auto">
              <h1 className="font-bold md:font-extrabold text-6xl md:text-8xl text-white">
                Kuliah Kerja Nyata
              </h1>
              <h3 className="font-medium text-white flex flex-col text-base md:text-3xl leading-4 md:leading-9 mt-4 md:mt-9 pb-12 md:pb-4">
                <span>Assalamu&apos;alaikum</span>
                <span>
                  Selamat Datang di Situs Resmi Kuliah Kerja Nyata (KKN)
                </span>
                <span>Universitas Islam Negeri Sunan Gunung Djati Bandung</span>
              </h3>
            </div>
          </div>
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
            <h1 className="font-bold text-2xl ml-2 -mt-2 md:mt-5 md:ml-10 md:text-[64px]">
              Lokasi
            </h1>
          </div>
          <div className=" mt-3 md:mt-1">
            <Map />
          </div>
        </section>

        {/* Bawah */}
        <section className="py-12 px-4">
          <div className="flex flex-row flex-wrap justify-center items-center text-justify space-x-4">
            <div className="bg-[url('/images/help.png')] w-[240px] md:w-1/3 h-[240px] md:h-[500px] bg-no-repeat bg-contain"></div>
            <div className="w-screen md:w-[55%]">
              <div className="flex flex-row space-x-[2px] md:space-x-4 ml-1 md:ml-0">
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#80B156] rounded-full"></div>
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#C1D95F] rounded-full"></div>
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#80B156] rounded-full"></div>
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#C1D95F] rounded-full"></div>
              </div>
              <div className="font-medium text-lg md:text-2xl">
                <h2 className="font-extrabold text-3xl md:text-5xl mb-3 md:mb-7">
                  Apa itu KKN?
                </h2>
                <p>
                  {" "}
                  KKN merupakan kepanjangan dari Kuliah Kerja Nyata. Ini
                  merupakan program mahasiswa untuk mengabdi kepada masyarakat
                  dengan pendekatan lintas keilmuan dan sektoral dalam kurun
                  waktu tertentu. Biasanya KKN dilakukan selama 1 atau 2 bulan
                  di sebuah desa atau wilayah setingkat desa.
                </p>
                <p>
                  Program ini dilakukan oleh mahasiswa semester akhir seperti
                  semester 5 atau 6. Mereka akan menjalankan kegiatan belajar,
                  mengabdi, mengajar, dan berbaur dengan masyarakat dimana
                  mereka melakukan KKN. Untuk panduan KKN bisa lihat
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-5">
        <div className="bg-IjoRumput flex flex-row flex-wrap px-4 py-10 space-y-6 md:space-y-0 xl:space-y-2 md:px-20 xl:px-32 xl:py-12 justify-between ">
          <div className="w-1/7">
            <Image
              src="/logo-uin.png"
              width="153"
              height="232"
              alt="Logo UIN SGD BDG"
            />
          </div>
          <div className="md:w-1/3 xl:w-1/2 md:pl-3 space-y-2 xl:space-y-5">
            <div>
              <h1>KAMPUS 1</h1>
              <p>
                Jalan A.H. Nasution No. 105, Cipadung, Cibiru, Kota Bandung,
                Jawa Barat 40614
              </p>
            </div>
            <div>
              <h1>KAMPUS 2</h1>
              <p>
                Jalan Cimencrang, Panyileukan, Cimencrang, Gedebage, Kota
                Bandung, Jawa Barat 40292
              </p>
            </div>
            <div>
              <h1>KAMPUS 3</h1>
              <p>Jalan Cileunyi Kabupaten Bandung, Jawa Barat 40292</p>
            </div>
          </div>
          <div className="w-1/3">
            <h1>Media Sosial</h1>
            <p>Ikuti sosial media kami untuk medapatkan informasi terbaru</p>
            <div>
              {icons.map((icon, index) => (
                <Link key={index} href={icon.href}><icon.icon/></Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-900">
          <h3 className="font-medium text-[8px] md:text-xs text-white text-center py-3 md:py-5">
            KKN UIN SUNAN GUNUNG DJATI BANDUNG 2024
          </h3>
        </div>
      </footer>
    </>
  );
}
