import React, { useState } from 'react'
import SidebarAdmin from '../../components/sidebarAdmin'
import Navbar from '../../components/navbar'
import BarChart from '../../components/barchart'
import PieChart from '../../components/piechart'
import { FaLocationDot } from "react-icons/fa6";
import useSWR from 'swr';
 
export default function Admin() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data : tables =[], error } = useSWR('/api/admin/firstQuery', fetcher);
  const { data : tables2 =[], error2 } = useSWR('/api/admin/secondQuery', fetcher);

  if (error || error2 ) {
    return <div>Error loading group details</div>;
  }

  if (!tables ) {
    return <div>Loading... First Data Error</div>;
  }

  if (!tables2 ) {
    return <div>Loading... Second Data Error</div>;
  }

  const [selectedLocation, setSelectedLocation] = useState(null);

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
      lokasi: "Malaysia",
      titik: "2 Titik "
    },
    {
      id: 2,
      lokasi: "Jepang",
      titik: "1 Titik "
    },
    {
      id: 3,
      lokasi: "Medan ",
      titik: "4 Titik "
    },
    {
      id: 4,
      lokasi: "Jambi",
      titik: "3 Titik "
    },
    {
      id: 5,
      lokasi: "Banten",
      titik: "3 Titik "
    },
    {
      id: 6,
      lokasi: "Cirebon",
      titik: "6 Titik "
    },
    {
      id: 7,
      lokasi: "Semarang",
      titik: "4 Titik "
    },
    {
      id: 8,
      lokasi: "Yogjakarta",
      titik: "8 Titik "
    },
    {
      id: 9,
      lokasi: "Lombok",
      titik: "2 Titik "
    },
    {
      id: 10,
      lokasi: "Tana Toraja",
      titik: "2 Titik "
    },
    {
      id: 11,
      lokasi: "Kabupaten Bandung",
      titik: "30 Titik "
    },
    {
      id: 12,
      lokasi: "Kabupaten Bandung Barat",
      titik: "23 Titik "
    },
    {
      id: 13,
      lokasi: "Subang",
      titik: "18 Titik "
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

    <div className=" absolute ml-32 px-3 md:left-32 md:right-12 md:top-40 pb-5 rounded-xl bg-iceGray">

    {tables && tables.length > 0 ? (tables.map((item) =>(
      <div className="grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 px-8">

        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  h-[70%] mt-8 ">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
          <img 
            src='/images/sum.png'
            alt=''
            className='w-1/2 h-1/2' />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Dosen Pembimbing</p>
            <h4 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900">{item.dosen_count}</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
          </div>
        </div>

        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  h-[70%] mt-8">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
          <img 
            src='/images/summation.png'
            alt=''
            className='w-1/2 h-1/2' />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Mahasiswa</p>
            <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900">{item.mahasiswa_count}</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div className="border-t border-blue-gray-50 p-4">         
          </div>
        </div>

        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  h-[70%] mt-8">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <img 
            src='/images/user1.svg'
            alt=''
            className='w-1/2 h-1/2 bg-slate-300 rounded-full' />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Mahasiswa Wanita</p>
            <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900 pr-4 ">{item.female_mahasiswa_count}</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
          </div>
        </div>

        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-[70%] mt-8">
        <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
           <img 
           src="/images/user2.svg"
           alt=" "
           className="w-1/2 h-1/2 " /> 
        </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Mahasiswa Pria</p>
            <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900 pr-4">{item.male_mahasiswa_count}</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
          </div>
        </div>


      </div>
    ))):(
      <div className="grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 px-8">

        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  h-[70%] mt-8 ">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
          <img 
            src='/images/sum.png'
            alt=''
            className='w-1/2 h-1/2' />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Dosen Pembimbing</p>
            <h4 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900">-</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
          </div>
        </div>

        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  h-[70%] mt-8">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
          <img 
            src='/images/summation.png'
            alt=''
            className='w-1/2 h-1/2' />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Mahasiswa</p>
            <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900">-</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div className="border-t border-blue-gray-50 p-4">         
          </div>
        </div>

        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  h-[70%] mt-8">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <img 
            src='/images/user1.svg'
            alt=''
            className='w-1/2 h-1/2 bg-slate-300 rounded-full' />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Mahaiswa Wanita</p>
            <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900 pr-4 ">-</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
          </div>
        </div>

        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-[70%] mt-8">
        <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
           <img 
           src="/images/user2.svg"
           alt=" "
           className="w-1/2 h-1/2 " /> 
        </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Mahasiswa Pria</p>
            <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900 pr-4">-</h4>
            <div className='flex justify-start ml-6'>
              <div className='bg-green-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-pink-600 rounded-full w-3 h-3 mx-1'></div>
              <div className='bg-blue-600 rounded-full w-3 h-3  mx-1'></div>
              <div className='bg-orange-600 rounded-full w-3 h-3  mx-1'></div>
            </div>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
          </div>
        </div>
      </div>
    )}

      <div className='bg-white py-8 px-8 rounded-xl mx-8 '>
        <div className='flex '>
          <div>  
            <PieChart />
          </div>
          <div className=' ml-24'>
            <h className="font-bold" >Lokasi KKN 2024 UIN SGD Bandung</h>
            <div className='mt-2'>
              {tables2.map((item2) =>(
                <div key={item2.lokasi_id} className='flex items-center space-x-2 py-2'>
                  <FaLocationDot className='text-blue-500' />
                  <div className="flex justify-center">
                  <h3 className='font-medium pr-1'>{item2.lokasi_kecamatan + ", " + item2.lokasi_provinsi || item2.lokasi_negara || "-"}: </h3>
                  <p>{item2.jumlah_kelompok} Kelompok</p>
                  </div>
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
