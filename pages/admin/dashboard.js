import React from 'react'
import SidebarAdmin from '../component/sidebarAdmin'
import Navbar from '../component/navbar'
import BarChart from '../component/barchart'
import PieChart from '../component/piechart'
import { FaLocationDot } from "react-icons/fa6";
 
export default function Admin() {

  const totDosen = " Total Dosen Pembimbing"
  const totmahasiswa = " Total Jumlah Mahasiswa"
  const mahasiswaPria = " Mahasiswa Laki-Laki"
  const mahasiswaWanita = " Mahasiswa Perempuan"

  const jmlDosen = 800
  const jmlMahasiswa = 6000
  const jmlPria = 2500
  const jmlWanita = 3500

  const lokasiKkn=[
    {
      id: 1,
      lokasi: "Malaysia"
    },
    {
      id: 2,
      lokasi: "Jepang"
    },
    {
      id: 3,
      lokasi: "Medan "
    },
    {
      id: 4,
      lokasi: "Jambi"
    },
    {
      id: 5,
      lokasi: "Banten"
    },
    {
      id: 6,
      lokasi: "Cirebon"
    },
    {
      id: 7,
      lokasi: "Semarang"
    },
    {
      id: 8,
      lokasi: "Yogjakarta"
    },
    {
      id: 9,
      lokasi: "Lombok"
    },
    {
      id: 10,
      lokasi: "Tana Toraja"
    },
    {
      id: 11,
      lokasi: "Kabupaten Bandung"
    },
    {
      id: 12,
      lokasi: "Kabupaten Bandung Barat"
    },
    {
      id: 13,
      lokasi: "Subang"
    },
  ]

  return (
    <> 
    <Navbar />
    <SidebarAdmin />

    <div className="bg-IjoRumput w-full h-72 -z-20 ">
      <div className="absolute top-24 ml-32 px-6 md:px-0 md:top-20s md:left-36 md:ml-32 sm:ml-0 font-bold text-2xl md:text-5xl text-white">
        <h1>Dashboard</h1>
      </div>
    </div>

    <div class=" absolute ml-32 px-3 md:left-32 md:right-12 md:top-40 pb-5 rounded-xl bg-iceGray">

      <div class="grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 px-8">

        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  h-[70%] mt-8 ">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
          <img 
            src='/images/sum.png'
            alt=''
            className='w-1/2 h-1/2' />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{totDosen}</p>
            <h4 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900">{jmlDosen}</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
          </div>
        </div>

        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  h-[70%] mt-8">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
          <img 
            src='/images/summation.png'
            alt=''
            className='w-1/2 h-1/2' />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{totmahasiswa}</p>
            <h4 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900">{jmlMahasiswa}</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div class="border-t border-blue-gray-50 p-4">         
          </div>
        </div>

        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  h-[70%] mt-8">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <img 
            src='/images/user1.svg'
            alt=''
            className='w-1/2 h-1/2 bg-slate-300 rounded-full' />
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{mahasiswaWanita}</p>
            <h4 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900 pr-4 ">{jmlWanita}</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
          </div>
        </div>

        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-[70%] mt-8">
        <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
           <img 
           src="/images/user2.svg"
           alt=" "
           className="w-1/2 h-1/2 " /> 
        </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{mahasiswaPria}</p>
            <h4 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900 pr-4">{jmlPria}</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
          </div>
        </div>


      </div>

      <div className='bg-white py-8 px-8 rounded-xl mx-8 '>
        <div className='flex '>
          <div>
            <div className="">
              <BarChart />
            </div>
            <div className="mt-8">
              <PieChart />
            </div>
          </div>
          <div className='font-bold ml-24'>
            Lokasi KKN 2024 UIN SGD Bandung
            <div className='mt-2'>
              {lokasiKkn.map((lokasi) =>(
                <div key={lokasi.id} className='flex items-center space-x-2 py-2'>
                  <FaLocationDot className='text-blue-500' />
                  <h3 key={lokasi}>{lokasi.lokasi}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>

    </>
  )
}
