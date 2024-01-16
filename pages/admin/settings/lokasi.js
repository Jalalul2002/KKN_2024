import SidebarAdmin from '@/pages/component/sidebarAdmin'
import React from 'react'
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import Modal from '@/pages/component/admin/modal';
import useSWR from 'swr';

export default function LokasiKkn() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR('/api/admin/setting/lokasiQuery', fetcher);

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
    const filteredData = data.filter(searchFilter)

    const startIndex = (active - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const next = () => {
    if (active < Math.ceil(data.length / itemsPerPage)) {
      setActive(active + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  const searchFilter = (item) => {
    const { id, kelurahan, kecamatan, kota, provinsi } = item || {};
    const searchText = searchTerm.toLowerCase();
    return (
      (typeof id === 'string' && id.toLowerCase().includes(searchText)) ||
      kelurahan?.toLowerCase().includes(searchText) ||
      kecamatan?.toLowerCase().includes(searchText) ||
      kota?.toLowerCase().includes(searchText) ||
      provinsi?.toLowerCase().includes(searchText) 
    );
  };

   // modal
   const [ showModal, setShowModal ] = useState(false);
   const [ showModal2, setShowModal2 ] = useState(false);
   const [ showModal3, setShowModal3 ] = useState(false);

   const [kelurahan, setKelurahan] = useState("");
   const [kecamatan, setKecamatan] = useState("");
   const [kota, setKota] = useState("");
   const [provinsi, setProvinsi] = useState("");
 
   const [ editingData, setEditingData ] = useState(null);

   const handleConfirmAdd = async () => {
    try {
      const response = await fetch("/api/admin/setting/lokasiAdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kelurahan: kelurahan,
          kecamatan: kecamatan,
          kota: kota,
          provinsi: provinsi,
        }),
      });
  
      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        console.log("Data added successfully.");

        // Reset form fields
        setKelurahan("");
        setKecamatan("");
        setKota("");
        setProvinsi("");

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

   const handleConfirmEdit = async () => {
    try {
      const response = await fetch("/api/admin/setting/lokasiEdit ", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingData),
      });
      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        console.log("Data updated successfully.");
        // Close the edit modal on success
        setShowModal2(false);
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
      const response = await fetch("/api/admin/setting/lokasiDelete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: editingData.id }),
      });

      if (response.ok) {
        // Handle successful deletion (e.g., show a success message)
        console.log("Data deleted successfully.");
        setShowModal3(false);
      } else {
        // Handle deletion error
        console.error("Error deleting data:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
   }

   // Render loading state
  if (!data && !error) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  
  return (
    <>
    <SidebarAdmin />

    <div className="bg-IjoRumput h-72 md:w-full -z-20">
      <div className="absolute ml-32 px-6 md:px-0 md:top-8 md:left-36 md:ml-32 sm:ml-0 font-bold text-2xl md:text-5xl text-white">
        <h1>Daftar Lokasi KKN</h1>
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
            value={searchTerm}
            onChange={(e) => setSearchTerm (e.target.value)} />
          </div>
        </div>

        <div className='mt-6 pr-3'>
          <button 
          className='bg-IjoRumput p-2 rounded-md font-semibold hover:bg-darkGreenHerb' 
          onClick={() =>
          setShowModal(true)}>Tambah Lokasi</button>
        </div>

      </div>

      <div className=' mt-4 bg-white overflow-x-auto'>
        <table className=' text-lg text-gray-500 dark:text-gray-400 min-w-full'>
          <thead className=' text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center'>
            <tr className=''>
              <th scope='col' className='py-2 px-4'>No</th>
              <th scope='col' className='py-2 px-4'>ID Lokasi</th>
              <th scope='col' className='py-2 px-4'>Desa/Kelurahan</th>
              <th scope='col' className='py-2 px-4'>Kecamatan</th>
              <th scope='col' className='py-2 px-4'>Kabupaten/Kota</th>
              <th scope='col' className='py-2 px-4'>Provinsi</th>
              <th scope='col' className='py-2 px-4'>Action</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {displayData().map((item, i) => (
              <tr key={item.id}>
              <td scope='col' className='py-2 px-4'>{i + 1}</td>
              <td scope='col' className='py-2 px-4'>{item.id}</td>
              <td scope='col' className='py-2 px-4'>{item.kelurahan}</td>
              <td scope='col' className='py-2 px-4'>{item.kecamatan}</td>
              <td scope='col' className='py-2 px-4'>{item.kota}</td>
              <td scope='col' className='py-2 px-4'>{item.provinsi}</td>
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
          {Array.from({ length: Math.min(Math.ceil(data.length / itemsPerPage), 5) }).map((_, index) => {
            const pageNumber = active - 2 + index; // Hitung nomor halaman yang akan ditampilkan
            return pageNumber > 0 && pageNumber <= Math.ceil(data.length / itemsPerPage) ? (
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
          disabled={active === Math.ceil(data.length / itemsPerPage)}>
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>

    </div>

         {/* Tambah kelompok */}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
      <div class="px-6 pb-2 lg:px-8 text-left">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
          Tambah Data Lokasi
        </h3>
        <form class="space-y-4" action="#">
          
          <div className=''>
            <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Desa/Kelurahan</label>
            <input 
              type="text" 
              id="kelurahan"
              value={kelurahan}
              onChange={(e) => setKelurahan(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          </div>
          <div className=''>
            <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">Kecamatan</label>
            <input 
              type="text" 
              id="kecamatan"
              value={kecamatan}
              onChange={(e) => setKecamatan(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          </div>
          <div>
            <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">Kabupaten/Kota</label>
            <input 
              type="text" 
              id="kota"
              value={kota}
              onChange={(e) => setKota(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          </div>
          <div>
            <label for="nim" class="block text-lg font-medium text-gray-900 dark:text-white">Provinsi</label>
            <input 
              type="text" 
              id="provinsi"
              value={provinsi}
              onChange={(e) => setProvinsi(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
          </div>

          <div className='flex justify-center space-x-5'>
            <button 
            type="submit" 
            onClick={handleConfirmAdd}
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

      {/* Edit kelompok */}
    <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
      <div class="px-6 pb-2 text-left">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
          Edit Data Lokasi
        </h3>
        {editingData && (
          <form className='space-y-4'>
              <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Kelurahan</label>
                <input
                  type="text"
                  id="name"
                  value={editingData.kelurahan}
                  onChange={(e) => setEditingData({ ...editingData, kelurahan: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Kecamatan</label>
                <input
                  type="string"
                  id="nim"
                  value={editingData.kecamatan}
                  onChange={(e) => setEditingData({ ...editingData, kecamatan: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            
            <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Kabupaten/Kota</label>
                <input
                  type="text"
                  id="lokasi"
                  value={editingData.kota}
                  onChange={(e) => setEditingData({ ...editingData, kota: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              <div className=''>
                <label for="name" class="block text-lg font-medium text-gray-900 dark:text-white">Provinsi</label>
                <input
                  type="text"
                  id="lokasi"
                  value={editingData.provinsi}
                  onChange={(e) => setEditingData({ ...editingData, provinsi: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

            <div className=' flex justify-center space-x-5'>
              <button
                type="button"
                onClick={handleConfirmEdit}
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

      {/* Hapus kelompok */}
      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
      <div class="px-6 pb-2 lg:px-8 text-left">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
          Hapus Data Lokasi
        </h3>
        {/* {editingData && ( */}
          <div class="space-y-4">
            <p class="text-gray-700 dark:text-gray-300">
              Apakah Anda yakin ingin menghapus data lokasi ini?
            </p>
            <div class="flex justify-end space-x-4">
              <button onClick={handleDelete}
                // onClick={() => {
                //   // Lakukan aksi penghapusan data di sini
                //   // Misalnya, panggil fungsi untuk menghapus data dari server atau mengubah state lainnya
                //   // Setelah itu, tutup modal
                //   setShowModal3(false);
                // }}
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
