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
        <title>Detail Kelompok</title>
        <meta property="og:title" content="Dashboard" key="title" />
      </Head>

      <div className="flex flex-row bg-IjoRumput justify-start">
        <div className="h-screen w-screen overflow-auto grow">
            <div className='absolute my-2 mx-4 md:my-6 md:mx-6 bg-white p-2 rounded-full drop-shadow-xl z-40'>
                <Link href='/dosen/kelompok' className="text-xl"><IoChevronBackOutline /></Link>
            </div>
            <Navbar />
            <div className="mt-14 mb-2 ml-6 md:ml-10 md:mt-6 md:mb-10 font-bold text-2xl md:text-5xl text-white flex justify-center">
              <h1>Kelompok Binaan</h1>
            </div>
            <div className="p-3 mx-4 md:mt-8 md:mx-20 md:p-6 bg-iceGray rounded-xl md:w-2/3">
                <h1 class="text-xl font-bold text-gray-900 dark:text-white flex justify-center items-center">
                    {namakelompok}
                </h1>
                <div className="md:flex md:justify-center md:items-center">
                    <div class=" pb-2 text-left">
                        <div className="mb-2">
                            <h3>Ketua : {ketua}</h3>
                            <h3>Kontak Ketua : {telp}</h3>
                            <h3>Lokasi : Desa Cipaku, Kecamatan Paseh, Kabupaten Bandung, Jawa Barat</h3>
                            <h3>Anggota :</h3>
                        </div>
                        <div className='bg-white grid justify-center items-center rounded-xl md:mx-9 md:w-auto'>
                            <div className='relative overflow-x-auto overflow-y-auto bg-white max-h-80'>
                                <table className=' text-lg text-gray-500 min-w-full w-full text-left rtl:text-right '>
                                <thead className=' text-gray-700  bg-gray-50 text-center'>
                                    <tr className=''>
                                    <th scope='col' className='py-2 px-4'>No</th>
                                    <th scope='col' className='py-2 px-4'>Nama</th>
                                    <th scope='col' className='py-2 px-4'>NIM</th>
                                    <th scope='col' className='py-2 px-4'>Jurusan</th>
                                    <th scope='col' className='py-2 px-4'>Fakultas</th>
                                    <th scope='col' className='py-2 px-4'>No Telepon</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
                                    </tr>
                                    <tr>
                                    <td scope='col' className='px-4'>1</td>
                                    <td scope='col' className='px-4'>Muhamad Ramdan</td>
                                    <td scope='col' className='px-4'>1207050179</td>
                                    <td scope='col' className='px-4'>Teknik Informatika</td>
                                    <td scope='col' className='px-4'>Sains dan Teknologi</td>
                                    <td scope='col' className='px-4'>089647264291</td>
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
