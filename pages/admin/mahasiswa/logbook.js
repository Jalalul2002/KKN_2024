import SidebarAdmin from '@/components/sidebarAdmin'
import React from 'react'
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';

export default function Logbook() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data : tables = [], error } = useSWR('/api/admin/mahasiswa/logbookQuery', fetcher);

  if (error ) {
    return <div>Error loading group details</div>;
  }

  if (!tables ) {
    return <div>Loading... Data Error</div>;
  }

  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "Gray",
      onClick: () => setActive(index),
    });

  const router = useRouter();
  const [active, setActive] = useState(1);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = Array.isArray(tables) ? tables.slice(indexOfFirstItem, indexOfLastItem) : [];

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
    const { kelompok, jenis, dosen, lokasi} = item;
    const searchText = searchTerm.toLowerCase();

    return (
        (kelompok && kelompok.toLowerCase().includes(searchText)) ||
        (jenis && jenis.toLowerCase().includes(searchText)) ||
        (dosen && dosen.toLowerCase().includes(searchText)) ||
        (lokasi && lokasi.toLowerCase().includes(searchText))
    );
};

  
  return (
    <>
    <SidebarAdmin />

    <div className="bg-IjoRumput h-72 md:w-full -z-20">
      <div className="absolute ml-32 px-6 md:px-0 md:top-8 md:left-36 md:ml-32 sm:ml-0 font-bold text-2xl md:text-5xl text-white">
        <h1>Logbook Mahasiswa</h1>
      </div>
    </div>

    <div class="absolute ml-32 px-3 md:left-32 md:right-12  md:top-24 pb-5 rounded-xl bg-iceGray">
      <div className='flex justify-between'>

        <div className='static'>
          <div className='relative mt-6'>
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
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

      </div>

      <div className=' mt-4 bg-white overflow-x-auto'>
        <table className=' text-lg text-gray-500 min-w-full'>
          <thead className=' text-gray-700 uppercase bg-gray-50 text-left'>
            <tr className=''>
              <th scope='col' className='py-2 px-4'>No</th>
              <th scope='col' className='py-2 px-4'>Kelompok</th>
              <th scope='col' className='py-2 px-4'>Jenis KKN</th>
              <th scope='col' className='py-2 px-4'>Dosen Pembimbing</th>
              <th scope='col' className='py-2 px-4'>Lokasi KKN</th>
              <th scope='col' className='py-2 px-4'>Action</th>

            </tr>
          </thead>
          <tbody className='text-left'>
            {currentItem.length > 0 && currentItem.map((table, i) => (
              <tr key={i}>
                <td scope='col' className='py-2 px-4'>{i+1}</td>
                <td scope='col' className='py-2 px-4'>{table.kelompok}</td>
                <td scope='col' className='py-2 px-4'>{table.jenis}</td>
                <td scope='col' className='py-2 px-4'>{table.dosen}</td>
                <td scope='col' className='py-2 px-4'>{table.lokasi}</td>
                <td scope='col' className='py-2 px-4'>
                <button>
                    <Link href={`/admin/mahasiswa/detailLogbook/${table.id}`}>
                    <span className='font-medium text-blue-400 hover:underline'>detail</span>
                    </Link>
                  </button>            
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

    </>
  )
}
