import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@/pages/component/navbar";
import Link from 'next/link';
import { IoChevronBackOutline } from "react-icons/io5";


export default function DetailLaporan() {

    const router = useRouter();
    const { id, namakelompok, ketua, anggota, telp} = router.query;
  return (
    <>
      <Head>
        <title>Detail Laporan</title>
        <meta property="og:title" content="Dashboard" key="title" />
      </Head>

      <div className="flex flex-row bg-IjoRumput justify-start">
        <div className="h-screen w-screen overflow-auto grow">
            <div className='absolute my-2 mx-4 md:my-6 md:mx-6 bg-white p-2 rounded-full drop-shadow-xl z-40'>
                <Link href='/dosen/laporan' className="text-xl"><IoChevronBackOutline /></Link>
            </div>
            {/* <Navbar /> */}
            <div className="mt-12 mb-6 ml-6 md:ml-10 md:mt-10 md:mb-4 font-bold text-3xl md:text-5xl text-white flex justify-center">
              <h1>Laporan Kelompok</h1>
            </div>
            <div className="flex justify-center items-center">
            <div className="p-3 mx-6 md:mt-4 md:mx-20 md:p-4 bg-iceGray rounded-xl md:w-1/2">
                <h1 class="text-lg md:text-2xl font-bold text-gray-900 dark:text-white flex justify-center items-center">
                    {namakelompok}
                </h1>
                <div className="md:flex md:justify-center md:items-center">
                    <div class=" pb-2 text-left">
                        <div className="mb-2 text-sm font-semibold md:font-semibold md:text-lg">
                            <h3>Ketua : {ketua}</h3>
                            <h3>Kontak Ketua : {telp}</h3>
                            <h3>Lokasi : Desa Cipaku, Kecamatan Paseh, Kabupaten Bandung, Jawa Barat</h3>
                            <h3>Anggota :</h3>
                        </div>
                        <div className=' mx-2 md:mx-4 md:w-auto'>
                            <div className='relative overflow-x-auto overflow-y-auto bg-white md:w-full max-h-80'>
                                <table className=' text-sm md:text-lg text-gray-500 min-w-full w-full text-left rtl:text-right '>
                                <thead className=' text-gray-700 bg-gray-50 text-left md:text-center'>
                                    <tr className=''>
                                    <th scope='col' className='py-2 px-4'>No</th>
                                    <th scope='col' className='py-2 px-4'>Jenis Laporan</th>
                                    <th scope='col' className='py-2 px-4'>URL</th>
                                    <th scope='col' className='py-2 px-4'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='text-left md:text-center'>
                                    <tr>
                                        <td scope='col' className='px-4'>1</td>
                                        <td scope='col' className='px-4'>Logbook</td>
                                        <td scope='col' className='px-4'>https:\\</td>
                                        <td scope='col' className='px-4'>
                                            <div className='space-x-2'>
                                                <button 
                                                className='font-medium text-blue-400 dark:text-blue-500 hover:underline'
                                                onClick={'/'}
                                                >
                                                    Download
                                                </button>
                                                <button 
                                                className='font-medium text-blue-400 dark:text-blue-500 hover:underline'
                                                onClick={'/'}
                                                >
                                                    View
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope='col' className='px-4'>1</td>
                                        <td scope='col' className='px-4'>Artikel</td>
                                        <td scope='col' className='px-4'>https:\\</td>
                                        <td scope='col' className='px-4'>
                                            <div className='space-x-2'>
                                                <button 
                                                className='font-medium text-blue-400 dark:text-blue-500 hover:underline'
                                                onClick={'/'}
                                                >
                                                    Download
                                                </button>
                                                <button 
                                                className='font-medium text-blue-400 dark:text-blue-500 hover:underline'
                                                onClick={'/'}
                                                >
                                                    View
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
