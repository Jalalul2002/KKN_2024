import { useRouter } from 'next/router';
import Link from 'next/link';
import { IoPlayBack } from 'react-icons/io5';

export default function detailLaporan() {
  const router = useRouter();
  const { id, kelompok, jenis, lokasi, peserta, dosen } = router.query; // Mengakses nilai dari query parameter 'id'

  // Gunakan nilai 'id' untuk mendapatkan data terkait dari tabel atau sumber data lainnya

  // Pastikan peserta yang diterima merupakan array
  const participants = Array.isArray(peserta) ? peserta : [peserta];

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
    <div className='absolute bg-IjoRumput h-screen w-screen'>
      <div className='mt-4 ml-2'>
        <Link href='/admin/mahasiswa/laporan' className="text-xl"><IoPlayBack /></Link>
        <h1 className='flex justify-center text-white text-4xl font-bold '>Detail Laporan Mahasiswa</h1>
      </div>
        
      <div class="absolute px-5 md:left-24 md:right-24 md:top-20 bg-iceGray rounded-xl flex justify-center space-x-8 h-auto w-auto">
        <div className='bg-white h-full w-1/3 grid justify-center items-center rounded-lg py-3 px-3 my-8'>
          <div className='font-bold text-3xl flex items-center justify-center my-4'>
            <img src="/nav-logo2.png" alt="Logo UIN" className="md:w-[90px]"/>
          </div>
          <div>
            <h1 className='font-bold text-4xl flex items-center justify-center mb-3 text-center'>{kelompok}</h1>
          </div>
          <div className='space-y-4'>
            <div>
              <h2 className='text-xl font-semibold flex items-center justify-center text-center'>Jenis KKN</h2>
              <p className='text-lg flex items-center justify-center text-center'>{jenis}</p>
            </div>
            <div>
              <h2 className='text-xl font-semibold flex items-center justify-center text-center'>Lokasi KKN</h2>
              <p className='text-lg flex items-center justify-center text-center'>{lokasi}</p>
            </div>
            <div>
              <h2 className='text-xl font-semibold flex items-center justify-center text-center'>Dosen Pembimbing:</h2>
              <p className='text-lg flex items-center justify-center text-center'>{dosen}</p>
              <h2 className='text-xl font-semibold flex items-center justify-center text-center'>No Telepon:</h2>
              <p className='text-lg flex items-center justify-center text-center'>089645272874</p>
            </div>
          </div>
        </div>

          <div className='flex justify-center items-center w-2/3 rounded-lg'>
            <table className='bg-white text-lg text-gray-500 dark:text-gray-400 text-center w-full h-auto '>
              <thead className=' text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center'>
                <tr className=''>
                  <th scope='col' className='py-4 px-2'>No</th>
                  <th scope='col' className='py-4 px-2'>Jenis Laporan</th>
                  <th scope='col' className='py-4 px-2'>URL</th>
                  <th scope='col' className='py-4 px-2'>Action</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr>
                  <td scope='col' className='py-2 px-2'>1</td>
                  <td scope='col' className='py-2 px-2'>Logbook</td>
                  <td scope='col' className='py-2 px-2'>https://</td>
                  <td scope='col' className='py-2 px-2'>
                    <div className='space-x-2'>
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
                <tr>
                  <td scope='col' className='px-2'>2</td>
                  <td scope='col' className='px-2'>Artikel</td>
                  <td scope='col' className='px-2'>https://</td>
                  <td scope='col' className='px-2'>
                    <div className='space-x-2'>
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
    </div>
    </>
  );
}