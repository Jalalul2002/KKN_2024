import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import useSWR from "swr";


export default function LogbookKKN() {

    // const router = useRouter();
    // const { id, namakelompok, ketua, anggota, telp} = router.query;

  // const jenisKKN = "KKN Sisdamas";
  // const kelompok = "Kelompok 1";
  // const lokasi = "Desa Cibiru Hilir, Kec. Cileunyi, Kab. Bandung";
  // const dosen = "Dr. Sriyanti, S.T., M.Kom.";
  // const logbook = [
  //   {
  //     hari: "Senin, 1/1/2024",
  //     nama: "Ahmad",
  //     lokasi: "Desa Cibiru Hilir, Kec. Cileunyi, Kab. Bandung",
  //     judul: "Pembukaan KKN",
  //     target: "Masysarakat Desa",
  //     link: "https://",
  //     anggotahadir: "Opet, Saritem, Mandala, Sahira",
  //     dok: "/images/1.jpeg",
  //   },
  //   {
  //     hari: "Senin, 1/1/2024",
  //     nama: "Ahmad",
  //     lokasi: "Desa Cibiru Hilir, Kec. Cileunyi, Kab. Bandung",
  //     judul: "Pembukaan KKN",
  //     target: "Masysarakat Desa",
  //     link: "https://",
  //     anggotahadir: "Opet, Saritem, Mandala, Sahira",
  //     dok: "/images/1.jpeg",
  //   },
  //   {
  //     hari: "Senin, 1/1/2024",
  //     nama: "Ahmad",
  //     lokasi: "Desa Cibiru Hilir, Kec. Cileunyi, Kab. Bandung",
  //     judul: "Pembukaan KKN",
  //     target: "Masysarakat Desa",
  //     link: "https://",
  //     anggotahadir: "Opet, Saritem, Mandala, Sahira",
  //     dok: "/images/1.jpeg",
  //   },
  //   {
  //     hari: "Senin, 1/1/2024",
  //     nama: "Ahmad",
  //     lokasi: "Desa Cibiru Hilir, Kec. Cileunyi, Kab. Bandung",
  //     judul: "Pembukaan KKN",
  //     target: "Masysarakat Desa",
  //     link: "https://",
  //     anggotahadir: "Opet, Saritem, Mandala, Sahira",
  //     dok: "/images/1.jpeg",
  //   },
  // ];
  const router = useRouter();
  const { id } = router.query; // Mengakses nilai dari query parameter 'id'

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data : data = [], error } = useSWR(id? `/api/dosen/logbookDetail?id=${id}`:null, fetcher);
  const { data : data2 = [], error2 } = useSWR(id?`/api/dosen/logbookDetailkelompok?id=${id}`:null, fetcher);

  if (error || error2 ) {
    return <div>Error loading group details</div>;
  }

  if (!data || !data2 ) {
    return <div>{data === null ? 'No data available' : 'Loading...'}</div>;
  }
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = Array.isArray(data) ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }; 

// Nomor Halaman
let index = (currentPage - 1) * itemsPerPage;

  return (
    <>
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="overflow-auto h-screen grow">
            <div className='absolute my-2 mx-4 md:my-4 md:mx-6 bg-white p-2 rounded-full drop-shadow-xl z-40'>
                <Link href='/dosen/logbook' className="text-xl"><IoChevronBackOutline /></Link>
            </div>
          <div className="px-6 pb-5 w-auto">
            <div className="mt-8 text-center mb-5 md:mt-8 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1 className="md:text-center">Logbook KKN</h1>
            </div>
            <div className="p-3 md:p-6 bg-iceGray rounded-xl">
            {data2.map((items) => (
              <div className="mt-3 ml-4 md:ml-5 flex flex-row justify-center items-center md:flex md:justify-center md:items-center">
                <div className="box-border mb-3">
                  <h1 className="text-lg md:text-3xl font-bold grid justify-center md:grid md:justify-center md:items-center">{items.jenis}</h1>
                  <h2 className="md:text-xl font-semibold grid justify-center items-center md:grid md:justify-center md:items-center">{items.kelompok}</h2>
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
                      <th className="px-6 p-3 lg:p-4">Kegiatan</th>
                      <th className="px-6 p-3 lg:p-4">Target</th>
                      <th className="px-6 p-3 lg:p-4">Link</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {currentItem.map((item, i) => (
                      <tr key={i} className="border-y border-slate-300">
                        <td className="py-1 px-0 lg:p-3">{index + i + 1}</td>
                        <td className="py-1 px-1 lg:p-3">{item.hari}</td>
                        <td className="py-1 px-1 lg:p-3">{item.mahasiswa}</td>
                        <td className="py-1 px-2 lg:p-3">{item.lokasi}</td>
                        <td className="py-1 px-2 lg:p-3">{item.kegiatan}</td>
                        <td className="py-1 px-2 lg:p-3">{item.target}</td>
                        <td className="py-1 px-2 lg:p-3 text-blue-500 hover:text-blue-800 hover:underline"> <Link href={item.link} target="_blank"> {item.link} </Link></td>
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
        </div>
      </div>
    </>
  );
}
