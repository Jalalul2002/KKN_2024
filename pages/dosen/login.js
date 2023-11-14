
import Header from "../component/header";
import Link from "next/link";

export default function Login (){
    
    return(

        <>
        <Header/>

          <div className="h-[160px] w-full bg-gradient-to-b from-IjoRumput to-transparent absolute z-10"></div>
          <div style={{ backgroundImage: `url(/images/bg-mahasiswa.png)` }} className=" md:pt-[380px] w-full bg-center bg-cover duration-300 relative">
            <div className="flex justify-center">
                <img src="/images/user-logo.png" />

                <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
     <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">Logo</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link
            href="/forget"
            className="text-xs text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-IjoRumput rounded-md hover:bg-lime-500 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>


            </div>
          </div>
          <div className="w-full bg-[#85997D] h-[128px]"></div>

    </>
  );
}

