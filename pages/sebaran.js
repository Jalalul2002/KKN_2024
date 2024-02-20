import React from "react";
import Header from "../components/header";
import Copyright from "../components/copyright";
import Map from "../components/Map/Map";
import Head from "next/head";

export default function Sebaran() {
  return (
    <>
      <Head>
        <title>KKN UIN SUNAN GUNUNG DJATI BANDUNG</title>
      </Head>
      <Header />
      <div className="w-full h-[320px] bg-gradient-to-b from-IjoRumput absolute to-transparent z-30"></div>
      <div
        style={{ backgroundImage: "url(/images/2.jpg)" }}
        className="w-full h-[360px] bg-center bg-cover duration-300 blur-sm relative"
      ></div>
      <div className="absolute z-20 w-full top-44">
        <div className="text-center">
          <h1 className="font-bold md:font-extrabold text-6xl md:text-8xl text-white">
            Sebaran Lokasi
          </h1>
        </div>
      </div>
      <section>
        <div>
          <Map />
        </div>
        <div className="px-10 py-7">
          <div class="overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-base text-left rtl:text-right text-gray-500">
              <thead class="text-base text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Jenis KKN
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Alamat
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Deskripsi
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Peserta
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    KKN Nusantara Moderasi Beragama
                  </th>
                  <td class="px-6 py-4">Tana Toraja, Sulawesi Sulatan</td>
                  <td class="px-6 py-4">
                    KKN kolaborasi PTKIN Seluruh Indonesia
                  </td>
                  <td class="px-6 py-4">6 Orang Perwakilan UIN Bandung</td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    KKN Kolaborasi Nusantara Mandiri
                  </th>
                  <td class="px-6 py-4">Banten, Cirebon, Semarang, Yogyakarta, Mataram, Medan, Jambi</td>
                  <td class="px-6 py-4">
                    KKN kolaborasi PTKIN
                  </td>
                  <td class="px-6 py-4">50 Orang Perwakilan UIN Bandung</td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    KKN Kolaborasi Luar Negeri Mandiri
                  </th>
                  <td class="px-6 py-4">Malaysia, Jepang</td>
                  <td class="px-6 py-4">
                    KKN kolaborasi PTKIN
                  </td>
                  <td class="px-6 py-4">30 Orang Perwakilan UIN Bandung</td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Copyright />
    </>
  );
}
