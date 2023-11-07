import Header from "../component/header";
import Link from "next/link";
import MyImage from "../../public/images/Group 9.png"
import Image from "next/image";

export default function Login (){
    
    return(

        <>
        <div className="h-full w-full flex">
          <div className="h-screen relative z-0 w-full bg-IjoRumput ">
            
              <div className="pl-6 pt-8">
               <img
                  src="/nav-logo.png" 
                  alt="Logo UIN"
                  className="w-[55px] h-[65px]"
                />
              </div>
              <div className="pl-6 pt-8 font-darkerGrotesque">
                <p>Silahkan Login</p>
                <p>Mahasiswa menggunakan NIM</p>
                <p>Dosen menggunakan NIP</p>
              </div>

          </div>

          <div className="h-[680px] rounded-bl-md w-3/4 right-0 absolute z-10 bg-[#D9D9D9]">

            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
              {/* <div className="w-full p-6 bg-[#D9D9D9] rounded-md shadow-md lg:max-w-xl"> */}
              <div>
              <h1 className="text-3xl font-bold text-center text-gray-700">Login</h1>
                <Link href="" className="px-1">MAHASISWA</Link>
                <Link href="" className="px-1">DOSEN</Link>                
              </div>
                
                <form className="mt-6 w-1/5">
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#D9D9D9] border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                     className="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#D9D9D9] border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <Link
                    href="/forget"
                    className="text-xs text-blue-600 hover:underline"
                  >
                  Forget Password?
                  </Link>
                  <div className="mt-2">
                    <button className="w-full px-4 py-2 tracking-wide text-[#000000] font-bold transition-colors duration-200 transform bg-IjoRumput rounded-md hover:bg-[#8FBB63] focus:outline-none focus:bg-[#8FBB63]">
                    Login
                    </button>
                  </div>
                </form>

                {/* <p className="mt-4 text-sm text-center text-gray-700">
                  Don't have an account?{" "}
                  <Link
                  href="/signup"
                  className="font-medium text-blue-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p> */}
              {/* </div> */}
            </div>

          </div>

          <div className="absolute z-20 translate-y-[300px] translate-x-32">
            <Image src={MyImage} alt="" className="w-[530px] h-[394px]" />
          </div>

        </div>

                


           

    </>
  );
}

