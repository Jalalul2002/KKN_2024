import { useRouter } from 'next/router';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useState } from 'react';
import useSWR from 'swr';


export default function DetailLogbook() {
  const router = useRouter();
  const { id } = router.query; // Mengakses nilai dari query parameter 'id'

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data : data = [], error } = useSWR(id? `/api/admin/mahasiswa/logbookDetail?id=${id}`:null, fetcher);
  const { data : data2 = [], error2 } = useSWR(id?`/api/admin/mahasiswa/logbookDetailkelompok?id=${id}`:null, fetcher); 

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = Array.isArray(data) ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (error || error2) {
    return <div>Error loading group details</div>;
  }

  if (!data || !data2) {
    return <div>{!data1 ? 'No data available' : 'Loading...'}</div>;
  }
  return (
    

    <>
    <div className='absolute bg-IjoRumput h-60 w-full'>
      <div className='absolute mx-2 mt-4 bg-white p-2 rounded-full drop-shadow-xl'>
        <Link href='/admin/mahasiswa/logbook' className="text-xl"><IoChevronBackOutline /></Link>
      </div>
      <h1 className='flex justify-center items-center text-white text-4xl font-bold mt-8'>Detail Logbook Mahasiswa</h1>
      <div class="absolute px-5 md:left-8 md:right-8 md:top-24 rounded-xl bg-iceGray">
      {data2.map((items) => ( 
        <div className=' flex justify-between items-center rounded-lg py-3 px-3 my-4'>
          <div className='font-bold text-3xl flex items-center justify-center my-4'>
            <img src="/nav-logo2.png" alt="Logo UIN" className="md:w-[90px]"/>
          </div>
          <div>
            <h1 className='font-bold text-4xl flex items-center justify-center mb-3 text-center'>{items.kelompok || '-'}</h1>
          </div>
          <div>
            <h2 className='text-xl font-semibold flex items-center justify-center text-center'>Jenis KKN</h2>
            <p className='text-lg flex items-center justify-center text-center'>{items.jenis || '-'}</p>
          </div>
          <div>
            <h2 className='text-xl font-semibold flex items-center justify-center text-center'>Lokasi KKN</h2>
            <p className='text-lg flex items-center justify-center text-center'>{items.lokasi || '-'}</p>
          </div>
          <div>
            <h2 className='text-xl font-semibold flex items-center justify-center text-center'>Dosen Pembimbing:</h2>
            <p className='text-lg flex items-center justify-center text-center'>{items.nama || '-'}</p>
          </div>
          <div>
            <h2 className='text-xl font-semibold flex items-center justify-center text-center'>No Telepon:</h2>
            <p className='text-lg flex items-center justify-center text-center'>{items.telpon_dosen || '-'}</p>
          </div>
        </div>
              ))}

        <div className="box-border md:py-3 md:px-2 mb-3 lg:text-base text-xs md:text-sm overflow-x-auto rounded-lg font-medium">
                <table className="w-full rounded-xl bg-white">
                  <thead className="bg-gray-50">
                    <tr className="">
                      <th className="rounded-tl-lg p-1 lg:p-4">No</th>
                      <th className="px-6 p-2 lg:p-4">Hari, Tanggal</th>
                      <th className="px-6 p-2 lg:p-4">Nama</th>
                      <th className="px-6 p-2 lg:p-4">Lokasi</th>
                      <th className="px-6 p-3 lg:p-4">Target</th>
                      <th className="px-6 p-3 lg:p-4">Link</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {currentItem.length > 0 && currentItem.map((item, i) => (
                      <tr key={i} className="border-y border-slate-300">
                        <td className="py-1 px-0 lg:p-3">{i + 1}</td>
                        <td className="py-1 px-1 lg:p-3">{item.hari || "-"}</td>
                        <td className="py-1 px-1 lg:p-3">{item.mahasiswa || "-"}</td>
                        <td className="py-1 px-2 lg:p-3">{item.lokasi || "-"}</td>
                        <td className="py-1 px-2 lg:p-3">{item.target || "-"}</td>
                        <td className="py-1 px-2 lg:p-3">{item.link || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-end mt-4">
                  <nav className="block">
                    <ul className="flex pl-0 rounded list-none flex-wrap">
                      {Array.from({
                        length: Math.ceil(data.length / itemsPerPage),
                      }).map((item, index) => (
                        <li key={index}>
                          <a
                            onClick={() => paginate(index + 1)}
                            className={
                              "cursor-pointer px-3 py-1 border rounded text-sm leading-tight focus:outline-none focus:shadow-outline-blue transition duration-300 " +
                              (currentPage === index + 1
                                ? "bg-IjoRumput text-white"
                                : "bg-white text-IjoRumput border-IjoRumput hover:bg-IjoRumput hover:text-white")
                            }
                          >
                            {index + 1}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
          
      </div>
    </div>
    </>
  );
}
