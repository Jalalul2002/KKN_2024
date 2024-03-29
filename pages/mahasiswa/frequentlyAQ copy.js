import React from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";
import SidebarMahasiswa from "../../components/sidebarMahasiswa";
import Head from "next/head";

export default function FrequentlyAQ() {
  const questionsFaq = [
    {
      id: 1,
      qe: "Logbook KKN ?",
      ans: "Tidak tau ya, cari sendiri",
    },
    {
      id: 2,
      qe: "Dari mana saya bisa mendapatkan informasi mengenai KKN UIN Bandung ?",
      ans: "Tidak tau ya, cari sendiri",
    },
    {
      id: 3,
      qe: "Bagaimana saya dapat menghubungi call center LP2M ?",
      ans: "Tidak tau ya, cari sendiri",
    },
    {
      id: 4,
      qe: "Bagaimana timeline kegiatan KKN UIN Bandung ?",
      ans: "Tidak tau ya, cari sendiri",
    },
    {
      id: 5,
      qe: "Ada berapa jenis Kuliah Kerja Nyata (KKN) UIN Bandung ?",
      ans: "Tidak tau ya, cari sendiri",
    },
  ];

  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta property="og:title" content="FAQ" key="title" />
      </Head>
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="md:w-auto h-screen">
          <SidebarMahasiswa />
        </div>
        <div className="overflow-auto h-screen w-screen grow">
          <Navbar />
          <div className="px-6 pb-5 w-auto">
            <div className="mt-20 mb-5 md:mt-28 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1>Frequently Ask Question (FAQ)</h1>
            </div>
            <div className="p-3 md:p-6 bg-iceGray rounded-xl">
              <ul role="list" className="divide-y divide-white">
                {questionsFaq.map((question) => (
                  <li
                    key={questionsFaq.id}
                    className="flex justify-between py-2"
                  >
                    <div>
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                          <p className="text-lg font-semibold text-gray-900">
                            {question.qe}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-lg text-gray-900">{question.ans}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
