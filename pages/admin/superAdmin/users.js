import React from 'react'

export default function Users() {
  return (
    <>
    <div className=' bg-IjoRumput w-screen h-screen px-8 py-4 flex items-start'>
      <img src='/nav-logo.png' className='w-[90px] '/>
      <div className='flex justify-center items-center w-2/3 ml-16'>
        <div className='w-full'>
        <h1 className='my-2 text-white font-bold text-xl py-2 px-2 text-center rounded-lg'>Create Account User</h1>
        <form class="max-w-sm mx-auto">
          <div className=''>
            <label for="name" class="block text-sm font-medium text-gray-900 dark:text-white">Nama</label>
            <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
          </div>
          <div className=''>
            <label for="nim" class="block text-sm font-medium text-gray-900 dark:text-white">Jurusan</label>
            <input type=""  id="nim"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
           </div>
          <div class="">
            <label for="name" class="block text-sm font-medium text-gray-900 dark:text-white">Fakultas</label>
            <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
          </div>
          <div class="">
            <label for="name" class="block text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="name" id="name" placeholder="name@flowbite.com" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
          </div>
          <div class="">
            <label for="name" class="block text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
          </div>
          <div class="">
            <label for="name" class="block text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
            <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 text-base focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
            </div>
            <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
          </div>
          <div className='flex justify-center items-center'>
            <button type="submit" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 grid justify-center items-center">Register new account</button>
          </div>
        </form>
        </div> 
      </div>      
    </div>
    </>
  )
}
