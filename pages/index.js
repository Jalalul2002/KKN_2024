import Map from "../components/Map";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Link from "next/link";
import instagramIcon from "../components/svgs/instagram";
import youtubeIcon from "../components/svgs/youtube";
import websiteIcon from "../components/svgs/website";
import Copyright from "../components/copyright";
import Head from "next/head";

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

  const nextSlide = () => {
    const isLastSlide = currentIndex === imageSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    setAutoSlideInterval(interval);

    return () => {
      clearInterval(autoSLideInterval);
    };
  }, [currentIndex]);

  const icons = [
    {
      href: "https://www.instagram.com/lp2m.sgdofficial/",
      icon: instagramIcon,
    },
    {
      href: "https://www.youtube.com/@lp2muinsgdbandung791",
      icon: youtubeIcon,
    },
    {
      href: "https://lp2m.uinsgd.ac.id/",
      icon: websiteIcon,
    },
  ];

  const kampuss = [
    {
      kampus: "KAMPUS 1",
      jalan:
        "Jalan A.H. Nasution No. 105, Cipadung, Cibiru, Kota Bandung, Jawa Barat 40614",
    },
    {
      kampus: "KAMPUS 2",
      jalan:
        "Jalan Cimencrang, Panyileukan, Cimencrang, Gedebage, Kota Bandung, Jawa Barat 40292",
    },
    {
      kampus: "KAMPUS 3",
      jalan: "Jalan Cileunyi Kabupaten Bandung, Jawa Barat 40292",
    },
  ];

  return (
    <>
      <Head>
        <title>KKN UIN SUNAN GUNUNG DJATI BANDUNG</title>
      </Head>
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
                <span className="font-bold md:text-4xl">
                  Assalamu&apos;alaikum
                </span>
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
            <div className="bg-[url('/images/help.png')] w-[240px] md:w-1/3 h-[240px] md:h-[420px] bg-no-repeat bg-contain"></div>
            <div className="w-screen md:w-[55%]">
              <div className="flex flex-row space-x-[2px] md:space-x-4 ml-1 md:ml-0">
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#80B156] rounded-full"></div>
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#C1D95F] rounded-full"></div>
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#80B156] rounded-full"></div>
                <div className="w-1 h-1 md:w-4 md:h-4 bg-[#C1D95F] rounded-full"></div>
              </div>
              <div className="font-medium text-lg md:text-2xl">
                <h2 className="font-extrabold text-3xl md:text-4xl mb-3 md:mb-7">
                  Apa itu KKN?
                </h2>
                <p>
                  KKN merupakan kepanjangan dari Kuliah Kerja Nyata. Ini
                  merupakan program mahasiswa untuk mengabdi kepada masyarakat
                  dengan pendekatan lintas keilmuan dan sektoral dalam kurun
                  waktu tertentu. Biasanya KKN dilakukan selama 1 atau 2 bulan
                  di sebuah desa atau wilayah setingkat desa.
                </p>
                <br></br>
                <p>
                  Program ini dilakukan oleh mahasiswa semester akhir seperti
                  semester 5 atau 6. Mereka akan menjalankan kegiatan belajar,
                  mengabdi, mengajar, dan berbaur dengan masyarakat dimana
                  mereka melakukan KKN. Untuk panduan KKN bisa lihat pada
                  <Link href="/" className="underline">
                    {" "}
                    halaman berikut.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-5 text-base md:text-lg font-medium">
        <div className="bg-IjoRumput flex flex-row flex-wrap px-6 py-10 space-y-6 md:space-y-0 xl:space-y-4 md:px-20 xl:px-32 xl:py-16 justify-between ">
          <div className="w-1/7 flex justify-start">
            <div>
              <img
                src="/logo-uin.png"
                alt="Logo Uin Bandung"
                className="w-24 md:w-40 "
              />
            </div>
          </div>
          <div className="md:w-1/3 xl:w-1/2 md:pl-10 space-y-2 xl:space-y-4">
            {kampuss.map((kampus, index) => (
              <div key={index}>
                <h1 className="font-bold text-base md:text-lg">
                  {kampus.kampus}
                </h1>
                <p className="text-sm md:text-base">{kampus.jalan}</p>
              </div>
            ))}
          </div>
          <div className="1/2 md:w-1/3">
            <h1 className="font-bold text-lg md:text-xl">MEDIA SOSIAL</h1>
            <p className="text-base md:text-lg">
              Ikuti sosial media kami untuk medapatkan informasi terbaru
            </p>
            <div className="flex flex-row space-x-1 md:space-x-0 items-center py-1">
              {icons.map((icon, index) => (
                <Link key={index} href={icon.href} target="blank">
                  <icon.icon className="w-7 md:w-12" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  );
}
