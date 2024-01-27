import Modal from '@/components/admin/modal';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import Link from 'next/link'



export default function DetailLaporan() {
  const router = useRouter();
  const { id, kelompok, jenis, lokasi, peserta, nama, notlp } = router.query; // Mengakses nilai dari query parameter 'id'

  // Gunakan nilai 'id' untuk mendapatkan data terkait dari tabel atau sumber data lainnya

  // Pastikan peserta yang diterima merupakan array
  const participants = Array.isArray(peserta) ? peserta : [peserta];

  const [ showModal, setShowModal ] = useState(false);

  return (
    // <div>
    //   <h1>Detail Kelompok Mahasiswa {id} </h1>
    //   <p>kelompok: {kelompok}</p>
    //   <p>jenis: {jenis}</p>
    //   <p>lokasi: {lokasi}</p>
    //   <h2>Peserta:</h2>
    //   <ul>
    //     {participants.map((participant, i) => (
    //       <li key={i}>
    //         Nama: {participant.nama}, Kelamin: {participant.kelamin}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <>
      <div className='bg-IjoRumput w-screen h-screen flex justify-center'>
        <div className="absolute px-5  w-full ">
          <div className='absolute mx-2 mt-4 bg-white p-2 rounded-full drop-shadow-xl'>
            <Link href='/admin/dosen/laporan' className="text-xl"><IoChevronBackOutline /></Link>
          </div>
          <h1 className='flex justify-center items-center text-white text-4xl font-bold mt-8'>Detail Laporan</h1> 
            <div className='bg-white h-auto w-auto flex justify-between items-center rounded-lg px-8 my-4'>
                <div className='font-bold text-3xl flex items-center justify-center my-4'>
                    <img src="/nav-logo2.png" alt="Logo UIN" className="md:w-[90px]"/>
                </div>
                <div>
                    <h2 className='text-xl font-semibold flex items-center justify-center text-center'>Dosen Pembimbing:</h2>
                    <p className='text-lg flex items-center justify-center text-center'>{nama}</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold flex items-center justify-center text-center'>Kelompok Binaan</h2>
                    <p className='text-lg flex items-center justify-center text-center'>{kelompok}</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold flex items-center justify-center text-center'>Jenis KKN</h2>
                    <p className='text-lg flex items-center justify-center text-center'>{jenis}</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold flex items-center justify-center text-center'>No Telepon:</h2>
                    <p className='text-lg flex items-center justify-center text-center'>{notlp}</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold flex items-center justify-center text-center'>Lokasi KKN</h2>
                    <p className='text-lg flex items-center justify-center text-center'>Jawa Barat, {lokasi}, Kecamatan Margahayu, Desa Cibuah</p>
                </div> 
            </div>


            <div className=' grid justify-center items-center grid-cols-4 font-medium px-4 gap-6 mt-8'>
                <div className='bg-white grid justify-center items-center py-8 mt-4 rounded-xl'>
                    <h1 className='font-bold text-4xl mb-3 text-center'>Kelompok 1</h1>
                    <button 
                className='font-semibold text-blue-400 dark:text-blue-500 hover:underline' 
                onClick={() =>
                setShowModal(true)}>
                Detail
                </button>
                </div>

                <div className='bg-white  grid justify-center items-center py-8 mt-4 rounded-xl'>
                    <h1 className='font-bold text-4xl mb-3 text-center'>Kelompok 2</h1>
                    <button 
                className='font-semibold text-blue-400 dark:text-blue-500 hover:underline' 
                onClick={() =>
                setShowModal(true)}>
                Detail
                </button>
                </div>

                <div className='bg-white  grid justify-center items-center py-8 mt-4 rounded-xl'>
                    <h1 className='font-bold text-4xl mb-3 text-center'>Kelompok 3</h1>
                    <button 
                className='font-semibold text-blue-400 dark:text-blue-500 hover:underline' 
                onClick={() =>
                setShowModal(true)}>
                Detail
                </button>
                </div>

                <div className='bg-white grid justify-center items-center py-8 mt-4 rounded-xl'>
                    <h1 className='font-bold text-4xl mb-3 text-center'>Kelompok 4</h1>
                    <button 
                className='font-semibold text-blue-400 dark:text-blue-500 hover:underline' 
                onClick={() =>
                setShowModal(true)}>
                Detail
                </button>
                </div>
            </div>
        </div>
      </div>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
      <div className="px-6 pb-2 lg:px-8 text-left">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center mb-4">
          Detail Laporan
        </h1>
        <div>
          <h3>Kelompok  </h3>
          <h3>Ketua:</h3>
          <h3>Kontak Ketua:</h3>
          <h3>Laporan:</h3>
        </div>
        <div className='relative overflow-x-auto mt-4 bg-white '>
          <table className='text-lg text-gray-500 dark:text-gray-400 w-full'>
            <thead className=' text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center'>
              <tr className=''>
                <th scope='col' className='py-2 px-2'>No</th>
                <th scope='col' className='py-2 px-2'>Judul Laporan</th>
                <th scope='col' className='py-2 px-2'>URL</th>
                <th scope='col' className='py-2 px-2'>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
                <tr>
                    <td scope='col' className='py-1 px-2'>1</td>
                    <td scope='col' className='py-1 px-2'>Pemberdayaan Masyarakat Terhadap Kelestarian Tanaman Melalui Program Penanaman Cengkih</td>
                    <td scope='col' className='py-1 px-2'>http://</td>
                    <td scope='col' className='py-1 px-2'>
                        <div className='space-x-1'>
                            <button 
                            className='font-medium text-blue-400 dark:text-blue-500 hover:underline'
                            onClick={'/'}
                            >
                                Download
                            </button>
                            <button 
                            className='font-medium text-blue-400 dark:text-blue-500 hover:underline'
                            onClick={'/'}
                            >
                                View
                            </button>
                        </div>
                    </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Modal>

    </>
  );
}
