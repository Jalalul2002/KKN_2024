import { useRouter } from 'next/router';
import Link from 'next/link';
import { IoPlayBack } from 'react-icons/io5';


export default function DetailLogbook() {
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
      <div className='mx-2 mt-4'>
        <Link href='/admin/mahasiswa/logbook' className="text-xl"><IoPlayBack /></Link>
      </div>
      <h1 className='flex justify-center items-center text-white text-4xl font-bold'>Detail Logbook Mahasiswa</h1>
      <div class="absolute px-5 md:left-24 md:right-24 md:top-24 py-5 rounded-xl bg-iceGray flex justify-between h-auto w-auto">

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

        <div className='bg-white w-2/3 grid justify-center items-center ml-8 py-8 my-8 rounded-xl'>
          <div className='relative overflow-x-auto overflow-y-auto bg-white max-h-80'>
            <table className=' text-lg text-gray-500 dark:text-gray-400 min-w-full w-full text-left rtl:text-right '>
              <thead className=' text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center'>
                <tr className=''>
                  <th scope='col' className='py-2 px-2'>No</th>
                  <th scope='col' className='py-2 px-2'>Hari/Tanggal</th>
                  <th scope='col' className='py-2 px-2'>Kegiatan</th>
                  <th scope='col' className='py-2 px-2'>Documentasi</th>
                  <th scope='col' className='py-2 px-2'>Deskripsi</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr>
                  <td scope='col' className='px-2'>1</td>
                  <td scope='col' className='px-2'>Senin, 28-112-2023</td>
                  <td scope='col' className='px-2'>Mengajar Ngaji</td>
                  <td scope='col' className='px-2'><img src='/images/kampus2Depan.jjpeg' className='w-[50px]'/></td>
                  <td scope='col' className='px-2'>Mengajar ngaji anak sd, dari mulai iqra, alqur'an, dan lainnya.</td>
                </tr>
                <tr>
                  <td scope='col' className='px-2'>1</td>
                  <td scope='col' className='px-2'>Senin, 28-112-2023</td>
                  <td scope='col' className='px-2'>Mengajar Ngaji</td>
                  <td scope='col' className='px-2'><img src='/images/kampus2Depan.jjpeg' className='w-[50px]'/></td>
                  <td scope='col' className='px-2'>Mengajar ngaji anak sd, dari mulai iqra, alqur'an, dan lainnya. </td>
                </tr>
                <tr>
                  <td scope='col' className='px-2'>1</td>
                  <td scope='col' className='px-2'>Senin, 28-112-2023</td>
                  <td scope='col' className='px-2'>Mengajar Ngaji</td>
                  <td scope='col' className='px-2'><img src='/images/kampus2Depan.jjpeg' className='w-[50px]'/></td>
                  <td scope='col' className='px-2'>Mengajar ngaji anak sd, dari mulai iqra, alqur'an, dan lainnya. </td>
                </tr>
                <tr>
                  <td scope='col' className='px-2'>1</td>
                  <td scope='col' className='px-2'>Senin, 28-112-2023</td>
                  <td scope='col' className='px-2'>Mengajar Ngaji</td>
                  <td scope='col' className='px-2'><img src='/images/kampus2Depan.jjpeg' className='w-[50px]'/></td>
                  <td scope='col' className='px-2'>Mengajar ngaji anak sd, dari mulai iqra, alqur'an, dan lainnya. </td>
                </tr>
                <tr>
                  <td scope='col' className='px-2'>1</td>
                  <td scope='col' className='px-2'>Senin, 28-112-2023</td>
                  <td scope='col' className='px-2'>Mengajar Ngaji</td>
                  <td scope='col' className='px-2'><img src='/images/kampus2Depan.jjpeg' className='w-[50px]'/></td>
                  <td scope='col' className='px-2'>Mengajar ngaji anak sd, dari mulai iqra, alqur'an, dan lainnya. </td>
                </tr>
                <tr>
                  <td scope='col' className='px-2'>1</td>
                  <td scope='col' className='px-2'>Senin, 28-112-2023</td>
                  <td scope='col' className='px-2'>Mengajar Ngaji</td>
                  <td scope='col' className='px-2'><img src='/images/kampus2Depan.jjpeg' className='w-[50px]'/></td>
                  <td scope='col' className='px-2'>Mengajar ngaji anak sd, dari mulai iqra, alqur'an, dan lainnya. </td>
                </tr>
                <tr>
                  <td scope='col' className='px-2'>1</td>
                  <td scope='col' className='px-2'>Senin, 28-112-2023</td>
                  <td scope='col' className='px-2'>Mengajar Ngaji</td>
                  <td scope='col' className='px-2'><img src='/images/kampus2Depan.jjpeg' className='w-[50px]'/></td>
                  <td scope='col' className='px-2'>Mengajar ngaji anak sd, dari mulai iqra, alqur'an, dan lainnya. </td>
                </tr>
                <tr>
                  <td scope='col' className='px-2'>1</td>
                  <td scope='col' className='px-2'>Senin, 28-112-2023</td>
                  <td scope='col' className='px-2'>Mengajar Ngaji</td>
                  <td scope='col' className='px-2'><img src='/images/kampus2Depan.jjpeg' className='w-[50px]'/></td>
                  <td scope='col' className='px-2'>Mengajar ngaji anak sd, dari mulai iqra, alqur'an, dan lainnya. </td>
                </tr>
                <tr>
                  <td scope='col' className='px-2'>1</td>
                  <td scope='col' className='px-2'>Senin, 28-112-2023</td>
                  <td scope='col' className='px-2'>Mengajar Ngaji</td>
                  <td scope='col' className='px-2'><img src='/images/kampus2Depan.jjpeg' className='w-[50px]'/></td>
                  <td scope='col' className='px-2'>Mengajar ngaji anak sd, dari mulai iqra, alqur'an, dan lainnya. </td>
                </tr>
                <tr>
                  <td scope='col' className='px-2'>1</td>
                  <td scope='col' className='px-2'>Senin, 28-112-2023</td>
                  <td scope='col' className='px-2'>Mengajar Ngaji</td>
                  <td scope='col' className='px-2'><img src='/images/kampus2Depan.jjpeg' className='w-[50px]'/></td>
                  <td scope='col' className='px-2'>Mengajar ngaji anak sd, dari mulai iqra, alqur'an, dan lainnya. </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
