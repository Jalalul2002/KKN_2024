import SidebarAdmin from '@/components/sidebarAdmin'
import React from 'react'
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import Modal from '@/components/admin/modal';
import useSWR from 'swr';

export default function DosenPembimbing() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: tables = [], error } = useSWR('/api/admin/setting/dosenQuery', fetcher);

  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "Gray",
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
    const { nip, nama, jurusan_dosen, fakultas_dosen, telpon_dosen } = item;
    const searchText = searchTerm.toLowerCase();
    return (
      (typeof nip === 'string' && nip.toLowerCase().includes(searchText)) ||
      nama.toLowerCase().includes(searchText) ||
      jurusan_dosen.toLowerCase().includes(searchText) ||
      fakultas_dosen.toLowerCase().includes(searchText) ||
      (typeof telpon_dosen === 'string' && telpon_dosen.toLowerCase().includes(searchText))
    );
  };

   // modal
   const [ showModal, setShowModal ] = useState(false);
   const [ showModal2, setShowModal2 ] = useState(false);
   const [ showModal3, setShowModal3 ] = useState(false);

   const [nip, setNip] = useState("");
   const [nama, setNama] = useState("");
   const [jurusanDosen, setJurusanDosen] = useState("");
   const [fakultasDosen, setFakultasDosen] = useState("");
   const [telponDosen, setTelponDosen] = useState("");

   const handleConfirmAdd = async () => {
    try {
      const response = await fetch("/api/admin/setting/dosenAdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nip: nip,
          nama: nama,
          jurusan_dosen: jurusanDosen,
          fakultas_dosen: fakultasDosen,
          telpon_dosen: telponDosen,
        }),
      });

      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        console.log("Data added successfully.");

        // Reset form fields
        setNama("");
        setNip("");
        setJurusanDosen("");
        setFakultasDosen("");
        setTelponDosen("");

        // Refresh the page
        window.location.reload();

        // Close the add modal
        setShowModal(false);
      } else {
        // Handle submission error
        console.error("Error adding data:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

   const handleEdit = async () => {
    try {
      const response = await fetch("/api/admin/setting/dosenEdit", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingData),
      });

      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        console.log("Data updated successfully.");
        // Reset the form fields
        setNama("");
        setNip("");
        setJurusanDosen("");
        setFakultasDosen("");
        setTelponDosen("");

        // Refresh the page
        window.location.reload();

        // Close the add modal
        setShowModal(false);
      } else {
        // Handle submission error
        console.error("Error updating data:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch("/api/admin/setting/dosenDelete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nip:editingData.nip }), // Assuming you have an 'id' state for the Dosen entry
      });

      if (response.ok) {
        // Handle successful deletion (e.g., show a success message)
        console.log("Data deleted successfully.");
        // Optionally, you may want to perform additional actions after successful deletion

        // Close the delete modal or perform any other actions
        setShowModal3(false);
      } else {
        // Handle deletion error
        console.error("Error deleting data:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  
   const [ editingData, setEditingData ] = useState(null)
  
  return (
    <>
    <SidebarAdmin />

    <div className="bg-IjoRumput h-72 md:w-full -z-20">
      <div className="absolute ml-32 px-6 md:px-0 md:top-8 md:left-36 md:ml-32 sm:ml-0 font-bold text-2xl md:text-5xl text-white">
        <h1>Daftar Dosen Pembimbing KKN</h1>
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
          setShowModal(true)}>Tambah Dosen</button>
        </div>

      </div>

      <div className=' mt-4 bg-white overflow-x-auto'>
        <table className=' text-lg text-gray-500 dark:text-gray-400 min-w-full'>
          <thead className=' text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center'>
            <tr className=''>
              <th scope='col' className='py-2 px-4'>No</th>
              <th scope='col' className='py-2 px-4'>Nama</th>
              <th scope='col' className='py-2 px-4'>NIP</th>
              <th scope='col' className='py-2 px-4'>Fakultas</th>
              <th scope='col' className='py-2 px-4'>Jurusan</th>
              <th scope='col' className='py-2 px-4'>No Telepon</th>
              <th scope='col' className='py-2 px-4'>Action</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {displayData().map((item, i) => (
              <tr key={item.nip}>
              <td scope='col' className='py-2 px-4'>{i+1}</td>
              <td scope='col' className='py-2 px-4'>{item.nama}</td>
              <td scope='col' className='py-2 px-4'>{item.nip}</td>
              <td scope='col' className='py-2 px-4'>{item.fakultas_dosen}</td>
              <td scope='col' className='py-2 px-4'>{item.jurusan_dosen}</td>
              <td scope='col' className='py-2 px-4'>{item.telpon_dosen}</td>
              <td scope='col' className='py-2 px-4'>
                <div className='space-x-2'>
                  <button 
                  className='font-medium text-blue-400 dark:text-blue-500 hover:underline'
                  onClick={() => {
                    setShowModal2(true);
                    setEditingData(item); //set data table
                    }}
                  >
                    edit
                  </button>
                  <button 
                  className='font-medium text-blue-400 dark:text-blue-500 hover:underline'
                  onClick={() => {
                    setShowModal3(true)
                    setEditingData(item) // set data to be deleted
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

         {/* Tambah dosen */}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
      <div class="px-6 pb-2 lg:px-8 text-left">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
          Tambah Data Dosen Pembimbing
        </h3>
        <form class="space-y-4" action="#">
          <div className=''>
            <label for="nip" class="block text-lg font-medium text-gray-900 dark:text-white">NIP</label>
            <input 
              type="text" 
              id="nip"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          </div>
          <div className=''>
            <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Nama</label>
            <input 
              type="text" 
              id="name"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          </div>
          <div>
            <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">Fakultas</label>
            <input 
              type="text" 
              id="nim"  
              value={fakultasDosen}
              onChange={(e) => setFakultasDosen(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          </div>
          <div>
            <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">Jurusan</label>
            <input 
              type="text" 
              id="nim"  
              value={jurusanDosen}
              onChange={(e) => setJurusanDosen(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          </div>
          <div>
            <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">No Telepon</label>
            <input 
              type="text" 
              id="nim"  
              value={telponDosen}
              onChange={(e) => setTelponDosen(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          </div>

          <div className='flex justify-center space-x-5'>
            <button 
              type="submit" 
              onClick={handleConfirmAdd}
              class="w-[1/2] text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-lg px-5 py-1 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Tambah
            </button>
            <button
              onClick={() => setShowModal(false)}
              class="w-[1/2] font-medium text-lg px-5 py-1 text-center bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </Modal>

      {/* Edit dosen */}
    <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
      <div class="px-6 pb-2 text-left">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
          Edit Data Dosen Pembimbing
        </h3>
        {editingData && (
          <form className='space-y-4'>
              <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Nama</label>
                <input
                  type="text"
                  id="name"
                  value={editingData.nama}
                  onChange={(e) => setEditingData({ ...editingData, nama: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">NIP</label>
                <input
                  type="string"
                  id="nim"
                  value={editingData.nip}
                  onChange={(e) => setEditingData({ ...editingData, nip: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            
            <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Fakultas</label>
                <input
                  type="text"
                  id="lokasi"
                  value={editingData.fakultas_dosen}
                  onChange={(e) => setEditingData({ ...editingData, fakultas_dosen: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Jurusan</label>
                <input
                  type="text"
                  id="lokasi"
                  value={editingData.jurusan_dosen}
                  onChange={(e) => setEditingData({ ...editingData, jurusan_dosen: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">No Telepon</label>
                <input
                  type="text"
                  id="lokasi"
                  value={editingData.telpon_dosen}
                  onChange={(e) => setEditingData({ ...editingData, telpon_dosen: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

            <div className=' flex justify-center space-x-5'>
              <button
                type="button"
                onClick={handleEdit}
                className="w-[1/2] mt-4 place-self-end text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-1 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Simpan
              </button>
              <button
                onClick={() => setShowModal3(false)}
                class="w[1/2] mt-4 px-5 py-1 font-medium text-lg  text-center bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
                >
                Batal
              </button>
            </div>
          </form>
        )}
      </div>
    </Modal>

      {/* Hapus dosen */}
      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
      <div class="px-6 pb-2 lg:px-8 text-left">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
          Hapus Data Dosen Pembimbing
        </h3>
        {/* {editingData && ( */}
          <div class="space-y-4">
            <p class="text-gray-700 dark:text-gray-300">
              Apakah Anda yakin ingin menghapus data dosen pembimbing ini?
            </p>
            <div class="flex justify-end space-x-4">
              <button
                onClick={handleDelete}
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
