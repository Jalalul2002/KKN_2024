import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@/pages/component/navbar";
import Link from 'next/link';
import { IoChevronBackOutline } from "react-icons/io5";


export default function DetailKelompok() {

    const router = useRouter();
    const { id, namakelompok, ketua, anggota, telp} = router.query;
  return (
    <>
      <Head>
        <title>Detail Nilai</title>
        <meta property="og:title" content="Dashboard" key="title" />
      </Head>

      <div className="flex flex-row bg-IjoRumput justify-start">
        <div className="h-screen w-screen overflow-auto grow">
            <div className='absolute my-2 mx-4 md:my-6 md:mx-6 bg-white p-2 rounded-full drop-shadow-xl z-40'>
                <Link href='/dosen/nilai' className="text-xl"><IoChevronBackOutline /></Link>
            </div>
            {/* <Navbar /> */}
            <div className="mt-8 mb-2 ml-6 md:ml-10 md:mt-6 md:mb-4 font-bold text-2xl md:text-5xl text-white flex justify-center">
              <h1>Nilai Kelompok</h1>
            </div>
            <div className="md:flex md:justify-center md:items-center">
                <div className="p-3 mx-4 md:mt-4 md:px-8 md:py-4 bg-iceGray rounded-xl md:w-2/3">
                    <h1 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex justify-center items-center">
                        {namakelompok}
                    </h1>
                    <div class=" pb-2 text-left">
                        <div className="mb-2 text-sm font-semibold md:text-lg md:font-semibold">
                            <h3>Ketua : {ketua}</h3>
                            <h3>Kontak Ketua : {telp}</h3>
                            <h3>Lokasi : Desa Cipaku, Kecamatan Paseh, Kabupaten Bandung, Jawa Barat</h3>
                            <h3>Anggota :</h3>
                        </div>
                        <div className='mx-1 md:ml-4 rounded-xl  md:w-auto'>
                            <div className='relative overflow-x-auto overflow-y-auto bg-white max-h-80'>
                                <table className=' text-sm md:text-lg text-gray-500 min-w-full w-full text-left rtl:text-right '>
                                <thead className=' text-gray-700  bg-gray-50 text-left md:text-center'>
                                    <tr className=''>
                                    <th scope='col' className='py-1 px-2 md:py-2 md:px-4'>No</th>
                                    <th scope='col' className='py-1 px-2 md:py-2 md:px-4'>Nama</th>
                                    <th scope='col' className='py-1 px-2 md:py-2 md:px-4'>NIM</th>
                                    <th scope='col' className='py-1 px-2 md:py-2 md:px-4'>Jurusan</th>
                                    <th scope='col' className='py-1 px-2 md:py-2 md:px-4'>Fakultas</th>
                                    <th scope='col' className='py-1 px-2 md:py-2 md:px-4'>Nilai KKN</th>
                                    </tr>
                                </thead>
                                <tbody className='text-left md:text-center'>
                                <tr>
                                    <td scope='col' className='px-2 md:px-4'>1</td>
                                    <td scope='col' className='px-2 md:px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-2 md:px-4'>1207050179</td>
                                    <td scope='col' className='px-2 md:px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-2 md:px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-2 md:px-4'>90</td>
                                </tr>
                                <tr>
                                    <td scope='col' className='px-2 md:px-4'>1</td>
                                    <td scope='col' className='px-2 md:px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-2 md:px-4'>1207050179</td>
                                    <td scope='col' className='px-2 md:px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-2 md:px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-2 md:px-4'>90</td>
                                </tr>
                                <tr>
                                    <td scope='col' className='px-2 md:px-4'>1</td>
                                    <td scope='col' className='px-2 md:px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-2 md:px-4'>1207050179</td>
                                    <td scope='col' className='px-2 md:px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-2 md:px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-2 md:px-4'>90</td>
                                </tr>
                                <tr>
                                    <td scope='col' className='px-2 md:px-4'>1</td>
                                    <td scope='col' className='px-2 md:px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-2 md:px-4'>1207050179</td>
                                    <td scope='col' className='px-2 md:px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-2 md:px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-2 md:px-4'>90</td>
                                </tr>
                                <tr>
                                    <td scope='col' className='px-2 md:px-4'>1</td>
                                    <td scope='col' className='px-2 md:px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-2 md:px-4'>1207050179</td>
                                    <td scope='col' className='px-2 md:px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-2 md:px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-2 md:px-4'>90</td>
                                </tr>
                                <tr>
                                    <td scope='col' className='px-2 md:px-4'>1</td>
                                    <td scope='col' className='px-2 md:px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-2 md:px-4'>1207050179</td>
                                    <td scope='col' className='px-2 md:px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-2 md:px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-2 md:px-4'>90</td>
                                </tr>
                                <tr>
                                    <td scope='col' className='px-2 md:px-4'>1</td>
                                    <td scope='col' className='px-2 md:px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-2 md:px-4'>1207050179</td>
                                    <td scope='col' className='px-2 md:px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-2 md:px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-2 md:px-4'>90</td>
                                </tr>
                                <tr>
                                    <td scope='col' className='px-2 md:px-4'>1</td>
                                    <td scope='col' className='px-2 md:px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-2 md:px-4'>1207050179</td>
                                    <td scope='col' className='px-2 md:px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-2 md:px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-2 md:px-4'>90</td>
                                </tr>
                                <tr>
                                    <td scope='col' className='px-2 md:px-4'>1</td>
                                    <td scope='col' className='px-2 md:px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-2 md:px-4'>1207050179</td>
                                    <td scope='col' className='px-2 md:px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-2 md:px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-2 md:px-4'>90</td>
                                </tr>
                                <tr>
                                    <td scope='col' className='px-2 md:px-4'>1</td>
                                    <td scope='col' className='px-2 md:px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-2 md:px-4'>1207050179</td>
                                    <td scope='col' className='px-2 md:px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-2 md:px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-2 md:px-4'>90</td>
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
    </>
  );
}
