import SidebarAdmin from '@/components/sidebarAdmin'
import React from 'react'

export default function AjuanSurat() {
  return (
    <>
    <SidebarAdmin/>

    <div className="bg-IjoRumput h-72 md:w-full -z-20">
      <div className="absolute ml-32 px-6 md:px-0 md:top-8 md:left-36 md:ml-32 sm:ml-0 font-bold text-2xl md:text-5xl text-white">
        <h1>Nilai Kelompok KKN</h1>
      </div>
    </div>

    <div class="absolute ml-32 px-3 md:left-32 md:right-12  md:top-24 pb-5 rounded-xl bg-iceGray">
    <div className='relative mt-4 overflow-x-auto'>
        <table className=' text-lg text-gray-500 dark:text-gray-400 w-full '>
          <thead className=' text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-left'>
            <tr className=''>
              <th scope='col' className='py-2 px-2'>No</th>
              <th scope='col' className='py-2 px-2'>Hari/Tanggal</th>
              <th scope='col' className='py-2 px-2'>Perihal</th>
              <th scope='col' className='py-2 px-2'>Lokasi</th>
            </tr>
          </thead>
          <tbody className='text-left bg-white'>
              <tr>
              <td scope='col' className='py-1 px-2'>1</td>
              <td scope='col' className='py-1 px-2'>Senin/22 Agustus 2024</td>
              <td scope='col' className='py-1 px-2'>Ijin KKN kepada Kecamatan dan Desa</td>
              <td scope='col' className='py-1 px-2'>Desa Cibuah, Kecamatan Ibun, Kabupaten Bandung, Jawa Barat</td>
            </tr>
          </tbody>
        </table>


        <form className='mt-8 grid justify-center items-center'>
            <label className='text-center text-xl font-semibold m-3'>Balasan Surat Ajuan</label>
            <div className=''>
                <input type='file'/>
                <button type='submit' className='bg-green-600 hover:bg-green-700 px-5 py-1 rounded-sm text-white font-bold'>Submit</button>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}
