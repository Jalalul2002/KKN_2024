import SidebarAdmin from '@/components/sidebarAdmin'
import React from 'react'
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import Modal from '@/components/admin/modal';

export default function Faq() {
  const tables =
    [
      {
        id: "1",
        pertanyaan: "Dimana saya bisa mendapatkan informasi mengenai tata cara pendaftaran KKN ?",
        jawaban: "Di akun KKN ",
      },
      {
        id: "2",
        pertanyaan: "Daerah mana saja lokasi KKN mahasiswa jenis KKN Reguler Sisdamas ?",
        jawaban: "Kabupaten Bandung, Kabupaten Bandung Barat, dan Subang",
      },
  ];

  //modal
  const [ showModal, setShowModal ] = useState(false);
  const [ showModal2, setShowModal2 ] = useState(false);
  const [ showModal3, setShowModal3 ] = useState(false);

  const [ editingData, setEditingData ] = useState(null)

  
  return (
    <>
    <SidebarAdmin />

    <div className="bg-IjoRumput h-72 md:w-full -z-20">
      <div className="absolute ml-32 px-6 md:px-0 md:top-8 md:left-36 md:ml-32 sm:ml-0 font-bold text-2xl md:text-5xl text-white">
        <h1>Daftar Pertanyaan Mahasiswa</h1>
      </div>
    </div>

    <div class="absolute ml-32 px-3 md:left-32 md:right-12  md:top-24 pb-5 rounded-xl bg-iceGray">
      <div className='flex justify-between'>

        <div className='static'>
          <div className='relative mt-6'>
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
            type='text' 
            id='table-search' 
            className='block pt-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50  "' 
            placeholder="Search for items"
            />
          </div>
        </div>

        <div className='mt-6 pr-3'>
          <button 
          className='bg-IjoRumput p-2 rounded-md font-semibold hover:bg-darkGreenHerb' 
          onClick={() => setShowModal(true)}>Tambah Pertanyaan</button>
        </div>

      </div>

      <div className=' mt-4 bg-white overflow-x-auto'>
        <table className=' text-lg text-gray-500 dark:text-gray-400 min-w-full'>
          <thead className=' text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-left'>
            <tr className=''>
              <th scope='col' className='py-2 px-4'>No</th>
              <th scope='col' className='py-2 px-4'>Pertanyaan</th>
              <th scope='col' className='py-2 px-4'>Jawaban</th>
              <th scope='col' className='py-2 px-4'>Action</th>
            </tr>
          </thead>
          <tbody className='text-left'>
            {tables.map((table, i) => (
              <tr key={i}>
              <td scope='col' className='py-2 px-4'>{table.id}</td>
              <td scope='col' className='py-2 px-4'>{table.pertanyaan}</td>
              <td scope='col' className='py-2 px-4'>{table.jawaban}</td>
              <td scope='col' className='py-2 px-4'>
                <div className='space-x-2'>
                    <button 
                    className='font-medium text-blue-400 dark:text-blue-500 hover:underline '
                    onClick={() => {
                      setShowModal2(true);
                      setEditingData(table); //set data table
                    }}
                    >
                      edit
                    </button>
                    <button 
                    className='font-medium text-blue-400 dark:text-blue-500 hover:underline '
                    onClick={() => {
                      setShowModal3(true);
                      setEditingData(table); //set data table
                    }}
                    >
                      delete
                    </button>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>

    <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
      <div class="px-6 py-6 lg:px-8 text-left">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center">
          Tambah Pertanyaan
        </h3>
        <form class="space-y-4" action="#">
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pertanyaan</label>
            <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"   />
          </div>
          <div>
            <label for="nim" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jawaban</label>
            <input type=""  id="nim"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
          </div>
          <button type="submit" class="w-[1/2] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tambah</button>          
        </form>
      </div>
    </Modal>

    {/* Edit Mahasiswa */}
    <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
      <div class="px-6 pb-2 text-left">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
          Edit Pertanyaan
        </h3>
        {editingData && (
          <form>
              <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Pertanyaan</label>
                <input
                  type="text"
                  id="name"
                  value={editingData.pertanyaan}
                  onChange={(e) => setEditingData({ ...editingData, pertanyaan: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Jawaban</label>
                <input
                  type="string"
                  id="nim"
                  value={editingData.jawaban}
                  onChange={(e) => setEditingData({ ...editingData, jawaban: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

            <button
              type="button"
              onClick={() => {
                // aksi yang diperlukan saat tombol Simpan ditekan
                // Misalnya, menyimpan data yang diedit ke server atau mengubah state lainnya
                // Kemudian tutup modal
                setShowModal2(false);
              }}
              className="w-[1/2] mt-4 place-self-end text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-1 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Simpan
            </button>
          </form>
        )}
      </div>
    </Modal>


      {/* Hapus Mahasiswa */}
      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
        <div class="px-6 pb-2 lg:px-8 text-left">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
            Hapus Pertanyaan
          </h3>
          {editingData && (
            <div class="space-y-4">
              <p class="text-gray-700 dark:text-gray-300">
                Apakah Anda yakin ingin menghapus pertanyaan ini?
              </p>
              <div class="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    // Lakukan aksi penghapusan data di sini
                    // Misalnya, panggil fungsi untuk menghapus data dari server atau mengubah state lainnya
                    // Setelah itu, tutup modal
                    setShowModal3(false);
                  }}
                  class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                >
                  Hapus
                </button>
                <button
                  onClick={() => setShowModal3(false)}
                  class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200"
                >
                  Batal
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>

    </>
  )
}
