import SidebarAdmin from '@/components/sidebarAdmin'
import React from 'react'
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import Modal from '@/components/admin/modal';
import useSWR from 'swr';

export default function Faq() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data : tables =[], error } = useSWR('/api/admin/mahasiswa/faqQuery', fetcher);

  if (error ) {
    return <div>Error loading group details</div>;
  }

  if (!tables ) {
    return <div>Loading... Data Error</div>;
  }

  //modal
  const [ showModal, setShowModal ] = useState(false);
  const [ showModal2, setShowModal2 ] = useState(false);
  const [ showModal3, setShowModal3 ] = useState(false);

  const [ editingData, setEditingData ] = useState(null);

  // Add a new state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Add a new state for search query
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTables = tables.filter((table) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      table.pertanyaan.toLowerCase().includes(searchTerm) ||
      table.jawaban.toLowerCase().includes(searchTerm)
    );
  });

  // Event handler for search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(tables.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for the current page
  const currentItems = tables.slice(startIndex, endIndex);

  // Event handler for page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const [formData, setFormData] = useState({
    pertanyaan: '',
    jawaban: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  
    try {
      // Call your API to submit the form data
      const response = await fetch('/api/admin/mahasiswa/faqAdd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Reset the form after successful submission
        setFormData({
          pertanyaan: '',
          jawaban: '',
        });
  
        // Close the modal (assuming setShowModal is a state variable)
        setShowModal(false);
      } else {
        // Handle error
        console.error('Error adding FAQ:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding FAQ:', error.message);
    }
  };

  const handleEditSubmit = async () => {
  try {
    // Call your API to edit FAQ
    const response = await fetch('/api/admin/mahasiswa/faqEdit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editingData),
    });

    if (response.ok) {      
      // Reset the editing data
      setEditingData(null);

      // Close the modal (assuming setShowModal2 is a state variable)
      setShowModal2(false);
    } else {
      // Handle error
      console.error('Error editing FAQ:', response.statusText);
    }
  } catch (error) {
    console.error('Error editing FAQ:', error.message);
  }
};

const handleDelete = async () => {
  try {
    const response = await fetch('/api/admin/mahasiswa/faqDelete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ faq_id: editingData.faq_id }),
    });

    if (response.ok) {
      // Trigger a re-fetch of the data and update the cache
      mutate('/api/admin/mahasiswa/faqQuery');
      
      // Close the modal
      setShowModal3(false);
    } else {
      // Handle error
      console.error('Error deleting FAQ:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting FAQ:', error.message);
  }
};
  
  return (
    <>
    <SidebarAdmin />

    <div className="bg-IjoRumput h-72 md:w-full -z-20">
      <div className="absolute ml-32 px-6 md:px-0 md:top-8 md:left-36 md:ml-32 sm:ml-0 font-bold text-2xl md:text-5xl text-white">
        <h1>Daftar Pertanyaan Mahasiswa</h1>
      </div>
    </div>

    <div className="absolute ml-32 px-3 md:left-32 md:right-12  md:top-24 pb-5 rounded-xl bg-iceGray">
      <div className='flex justify-between'>

      <div className='static'>
        <div className='relative mt-6'>
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type='text'
            id='table-search'
            className='block pt-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50'
            placeholder="Search for items"
            value={searchQuery}
            onChange={handleSearchChange}
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
        <table className=' text-lg text-gray-500 min-w-full'>
          <thead className=' text-gray-700 uppercase bg-gray-50 text-left'>
            <tr className=''>
              <th scope='col' className='py-2 px-4'>No</th>
              <th scope='col' className='py-2 px-4'>Pertanyaan</th>
              <th scope='col' className='py-2 px-4'>Jawaban</th>
              <th scope='col' className='py-2 px-4'>Action</th>
            </tr>
          </thead>
          <tbody className='text-left'>
            {currentItems.map((table, i) => (
              <tr key={i}>
              <td scope='col' className='py-2 px-4'>{table.faq_id}</td>
              <td scope='col' className='py-2 px-4'>{table.pertanyaan}</td>
              <td scope='col' className='py-2 px-4'>{table.jawaban}</td>
              <td scope='col' className='py-2 px-4'>
                <div className='space-x-2'>
                    <button 
                    className='font-medium text-blue-400 hover:underline '
                    onClick={() => {
                      setShowModal2(true);
                      setEditingData(table); //set data table
                    }}
                    >
                      edit
                    </button>
                    <button 
                    className='font-medium text-blue-400 hover:underline '
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
        {/* Pagination controls */}
        <div className="flex justify-end mt-4">
          <Button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            color="black" // Set button color to black
          >
          </Button>
          <div className="mx-2 text-lg">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            color="black" // Set button color to black
          >
          </Button>
        </div>
    </div>

    <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
      <div className="px-6 py-6 lg:px-8 text-left">
        <h3 className="text-xl font-semibold text-gray-900 flex justify-center items-center">
          Tambah Pertanyaan
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pertanyaan" className="block mb-2 text-sm font-medium text-gray-900">
              Pertanyaan
            </label>
            <input
              type="text"
              id="pertanyaan"
              value={formData.pertanyaan}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div>
            <label htmlFor="jawaban" className="block mb-2 text-sm font-medium text-gray-900">
              Jawaban
            </label>
            <input
              type="text"
              id="jawaban"
              value={formData.jawaban}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="w-[1/2] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Tambah
          </button>
        </form>
      </div>
    </Modal>

    {/* Edit Mahasiswa */}
    <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
      <div className="px-6 pb-2 text-left">
        <h3 className="text-xl font-semibold text-gray-900 flex justify-center items-center mb-4">
          Edit Pertanyaan
        </h3>
        {editingData && (
          <form>
              <div className=''>
                <label for="name" className="block text-lg font-medium text-gray-900">Pertanyaan</label>
                <input
                  type="text"
                  id="name"
                  value={editingData.pertanyaan}
                  onChange={(e) => setEditingData({ ...editingData, pertanyaan: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                />
              </div>
              <div className=''>
                <label for="name" className="block text-lg font-medium text-gray-900">Jawaban</label>
                <input
                  type="string"
                  id="nim"
                  value={editingData.jawaban}
                  onChange={(e) => setEditingData({ ...editingData, jawaban: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                />
              </div>

            <button
              type="button"
              onClick={handleEditSubmit}
              className="w-[1/2] mt-4 place-self-end text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-1 text-center"
            >
              Simpan
            </button>
          </form>
        )}
      </div>
    </Modal>


      {/* Hapus Mahasiswa */}
      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
        <div className="px-6 pb-2 lg:px-8 text-left">
          <h3 className="text-xl font-semibold text-gray-900 flex justify-center items-center mb-4">
            Hapus Pertanyaan
          </h3>
          {editingData && (
            <div className="space-y-4">
              <p className="text-gray-700">
                Apakah Anda yakin ingin menghapus pertanyaan ini?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                >
                  Hapus
                </button>
                <button
                  onClick={() => setShowModal3(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200"
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
