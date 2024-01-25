import SidebarAdmin from '@/components/sidebarAdmin'
import React, { Fragment } from 'react'
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import Modal from '@/components/admin/modal';
import kelompok from '../settings/kelompok';
import useSWR from 'swr';

export default function Identitas() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data : tables =[], error } = useSWR('/api/admin/mahasiswa/mahasiswaQuery', fetcher);

  if (error ) {
    return <div>Error loading group details</div>;
  }

  if (!tables ) {
    return <div>Loading... Data Error</div>;
  }

  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    });

  const [active, setActive] = useState(1);
  const [itemsPerPage] = useState(10); // Jumlah item per halaman

  // Fungsi untuk memotong data sesuai halaman aktif
  const displayData = () => {
    const filteredData = tables.filter(searchFilter)

    const startIndex = (active - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const [searchTerm, setSearchTerm] = useState("");


  const next = () => {
    if (active < Math.ceil(tables.length / itemsPerPage)) {
      setActive(active + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  const searchFilter = (item) => {
    const { nim, name, gender, fakultas, jurusan, telpon, nilai, syarat, jenis_kkn } = item;
    const searchText = searchTerm.toLowerCase();

    return (
        (typeof name === 'string' && name.toLowerCase().includes(searchText)) ||
        (nim && typeof nim === 'string' && nim.toLowerCase().includes(searchText)) ||
        (gender && typeof gender === 'string' && gender.toLowerCase().includes(searchText)) ||
        (jurusan && typeof jurusan === 'string' && jurusan.toLowerCase().includes(searchText)) ||
        (fakultas && typeof fakultas === 'string' && fakultas.toLowerCase().includes(searchText)) ||
        (telpon && typeof telpon === 'string' && telpon.toLowerCase().includes(searchText)) ||
        (nilai && typeof nilai === 'string' && nilai.toLowerCase().includes(searchText)) ||
        (syarat && typeof syarat === 'string' && syarat.toLowerCase().includes(searchText)) ||
        (jenis_kkn && typeof jenis_kkn === 'string' && jenis_kkn.toLowerCase().includes(searchText))
    );
};

  
  // modal
  const [ showModal, setShowModal ] = useState(false);
  const [ showModal2, setShowModal2 ] = useState(false);
  const [ showModal3, setShowModal3 ] = useState(false);

  const [ editingData, setEditingData ] = useState(null)
  
  return (
    <>
    <SidebarAdmin />
    <div className="bg-IjoRumput h-72 md:w-full -z-20">
      <div className="absolute ml-32 px-6 md:px-0 md:top-8 md:left-36 md:ml-32 sm:ml-0 font-bold text-2xl md:text-5xl text-white">
        <h1>Daftar Mahasiswa</h1>
      </div>
    </div>

    <div className="absolute ml-32 px-3 md:left-32 md:right-12  md:top-24 pb-5 rounded-xl bg-iceGray">
      <div className='flex justify-between'>

        <div className='static'>
          <div className='relative mt-6'>
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
            type='text' 
            id='table-search' 
            className='block pt-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50  "' 
            placeholder="Search for items"
            value={searchTerm}
            onChange={(e) => setSearchTerm (e.target.value)} />
          </div>
        </div>

        <div className='mt-6 pr-3'>
          <button 
          className='bg-IjoRumput p-2 rounded-md font-semibold hover:bg-darkGreenHerb' 
          onClick={() =>
          setShowModal(true)}>Tambah Mahasiswa</button>
        </div>

      </div>

      <div className='relative overflow-x-auto mt-4 bg-white '>
        <table className='text-lg text-gray-500 dark:text-gray-400 w-full'>
          <thead className=' text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center'>
            <tr className=''>
              <th scope='col' className='py-2 px-2'>No</th>
              <th scope='col' className='py-2 px-2'>Nama</th>
              <th scope='col' className='py-2 px-2'>Kelamin</th>
              <th scope='col' className='py-2 px-2'>Jurusan</th>
              <th scope='col' className='py-2 px-2'>Fakultas</th>              
              <th scope='col' className='py-2 px-2'>Telpon</th>
              <th scope='col' className='py-2 px-2'>Nilai</th>
              <th scope='col' className='py-2 px-2'>Syarat</th>
              <th scope='col' className='py-2 px-2'>Jenis KKN </th>
              <th scope='col' className='py-2 px-2'>Action</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {displayData().map((table, i) => (
              <tr key={i}>
              <td scope='col' className='py-1 px-2'>{table.nim}</td>
              <td scope='col' className='py-1 px-2'>{table.name}</td>
              <td scope='col' className='py-1 px-2'>{table.gender}</td>
              <td scope='col' className='py-1 px-2'>{table.jurusan}</td>
              <td scope='col' className='py-1 px-2'>{table.fakultas}</td>
              <td scope='col' className='py-1 px-2'>{table.telpon}</td>
              <td scope='col' className='py-1 px-2'>{table.nilai || 'Belum' }</td>
              <td scope='col' className='py-1 px-2'>{table.syarat || 'Belum' }</td>
              <td scope='col' className='py-1 px-2'>{table.jenis_kkn || 'Belum' }</td>
              <td scope='col' className='py-1 px-2'>
                <div className='space-x-1'>
                    <button 
                    className='font-medium text-blue-400 dark:text-blue-500 hover:underline'
                    onClick={() => {
                      setShowModal2(true);
                      setEditingData(table); //set data table
                    }}
                    >
                      edit
                    </button>
                    <button 
                    className='font-medium text-blue-400 dark:text-blue-500 hover:underline'
                    onClick={() =>
                    setShowModal3(true)}
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

      <div type='pagination' className="flex justify-center gap-4 ">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: Math.min(Math.ceil(tables.length / itemsPerPage), 5) }).map((_, index) => {
            const pageNumber = active - 2 + index; // Hitung nomor halaman yang akan ditampilkan
            return pageNumber > 0 && pageNumber <= Math.ceil(tables.length / itemsPerPage) ? (
              <IconButton
                key={index}
                {...getItemProps(pageNumber)}
                disabled={active === pageNumber}
              >
                {pageNumber}
              </IconButton>
            ) : null;
          })}
        </div>

        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === Math.ceil(tables.length / itemsPerPage)}>
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>

    </div>
      
      {/* Tambah Mahasiswa */}
    <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
      <div class="px-6 pb-2 lg:px-8 text-left">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
          Tambah Mahasiswa
        </h3>
        <form class="space-y-4" action="#">
          <div className='flex justify-between space-x-2'>
            <div className='w-1/2'>
              <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Nama</label>
              <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
            </div>
            <div className='w-1/2'>
              <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">No Telepon</label>
              <input type=""  id="nim"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
            </div>
          </div>
                  
          <div className='flex justify-between space-x-2'>
            <div className='w-1/2'>
              <label for="name" class="block  text-lg font-medium text-gray-900 dark:text-white">Fakultas</label>
              <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
            </div>
            <div className='w-1/2'>
              <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">Jurusan</label>
              <input type=""  id="nim"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
            </div>
          </div>
                  
          <div className='flex justify-between space-x-2'>
            <div>
              <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">Jenis</label>
              <input type=""  id="nim"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
            </div>
            <div>
              <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">Kelompok</label>
              <input type=""  id="nim"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
            </div>
            <div>
              <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">Angkatan</label>
              <input type=""  id="nim"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
            </div>
          </div>
                    
          <div>
            <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">Lokasi</label>
            <input type=""  id="nim"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          </div>

          <div className='flex justify-center space-x-5'>
            <button 
            type="submit" 
            class="w-[1/2]  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-lg px-5 py-1 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Tambah
            </button>
            <button
            onClick={() => setShowModal(false)}
            class="w[1/2] font-medium text-lg px-5 py-1 text-center bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Batal
            </button>
          </div>
                    
        </form>
      </div>
    </Modal>

      {/* Edit Mahasiswa */}
    <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
      <div class="px-6 pb-2 text-left">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
          Edit Mahasiswa
        </h3>
        {editingData && (
          <form>
            <div className='flex justify-between space-x-2'>
              <div className='w-1/2'>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Nama</label>
                <input
                  type="text"
                  id="name"
                  value={editingData.name}
                  onChange={(e) => setEditingData({ ...editingData, name: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className='w-1/2'>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">No Telepon</label>
                <input
                  type="string"
                  id="nim"
                  value={editingData.notlp}
                  onChange={(e) => setEditingData({ ...editingData, notlp: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>

            <div className='flex justify-between space-x-2'>
              <div className='w-1/2'>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Fakultas</label>
                <input
                  type="text"
                  id="fakultas"
                  value={editingData.fakultas}
                  onChange={(e) => setEditingData({ ...editingData, fakultas: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className='w-1/2'>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Jurusan</label>
                <input
                  type="text"
                  id="jurusan"
                  value={editingData.jurusan}
                  onChange={(e) => setEditingData({ ...editingData, jurusan: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>

            <div className='flex justify-between space-x-2'>
              <div className='w-1/2'>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Jenis</label>
                <input
                  type="text"
                  id="jenis"
                  value={editingData.jenis}
                  onChange={(e) => setEditingData({ ...editingData, jenis: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className='w-1/2'>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Kelompok</label>
                <input
                  type="text"
                  id="kelompok"
                  value={editingData.kelompok}
                  onChange={(e) => setEditingData({ ...editingData, kelompok: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className='w-1/2'>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Angkatan</label>
                <input
                  type="text"
                  id="angkatan"
                  value={editingData.angkatan}
                  onChange={(e) => setEditingData({ ...editingData, angkatan: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>
            
            <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Lokasi</label>
                <input
                  type="text"
                  id="lokasi"
                  value={editingData.lokasi}
                  onChange={(e) => setEditingData({ ...editingData, lokasi: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

            <div className='flex justify-center space-x-5'>
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
              <button
                onClick={() => setShowModal2(false)}
                class="w[1/2] mt-4 px-5 py-1 font-medium text-lg  text-center bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
              >
                Batal
              </button>
            </div>
          </form>
        )}
      </div>
    </Modal>

      {/* Hapus Mahasiswa */}
    <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
      <div class="px-6 pb-2 lg:px-8 text-left">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
          Hapus Mahasiswa
        </h3>
        {/* {editingData && ( */}
          <div class="space-y-4">
            <p class="text-gray-700 dark:text-gray-300">
              Apakah Anda yakin ingin menghapus data mahasiswa ini?
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
                class="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
              >
                Batal
              </button>
            </div>
          </div>
        {/* )} */}
      </div>
    </Modal>


  </>
  )
}
