import React from "react";
import Navbar from "../component/navbar";
import Link from "next/link";
import SidebarMahasiswa from "../component/sidebarMahasiswa";

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
<<<<<<< HEAD
      <Navbar />
      <SidebarMahasiswa/>
      <div className="top-0 left-0 m-0 p-0 w-full h-full">
        <div className="bg-IjoRumput w-full h-72 relative -z-10"></div>
        <div className="md:left-32 md:right-12 top-40 absolute">
          <div className="p-6 bg-iceGray rounded-xl">
            <h1 className="font-bold py-1 text-2xl text-center">FAQ</h1>
            <ul role="list" className="divide-y divide-white">
              {questionsFaq.map((question) => (
              <li key={questionsFaq.id} className="flex justify-between py-2">
                <div>
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-lg font-semibold text-gray-900">{question.qe}</p>
=======
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="md:w-auto h-screen">
          <SidebarMahasiswa />
        </div>
        <div className="overflow-auto h-screen w-screen">
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
>>>>>>> a56e240e18791b44711ab986d132bcae75d345ca
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
