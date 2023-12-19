import Link from "next/link";
import MyImage from "../../public/images/Group 9.png"
import Image from "next/image";
import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


export default function Login (){

    const [ open, setOpen ] = useState(false)
    // handle toggle
    const FaToggle = () =>{
      setOpen(!open)
    }

    return(
        <>
        <div className="h-full w-full flex">
          <div className="h-screen relative z-0 w-full bg-IjoRumput ">
              <div className="pl-9 pt-8">
               <img
                  src="/nav-logo.png" 
                  alt="Logo UIN"
                  className="w-[55px] h-[65px]"
                />
              </div>
              <div className="pl-9 pt-8 font-darkerGrotesque font-medium text-xl">
                <p>Silahkan Login</p>
                <p>Dengan menggunakan</p>
                <p>Akun Admin</p>
              </div>
          </div>

          <div className="h-[680px] rounded-bl-md w-3/4 right-0 absolute z-10 bg-[#EBEBEB]">

            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-2">Login</h1>
            <h2 className="text-xl">Admin</h2>

              
              <form className="mt-6 w-1/5 " >
                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Username
                      </label>
                      <div className="relative">
                       <div className="w-full">
                         <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#D9D9D9] border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                        </div>
                        <div className="text-sm absolute top-3 right-2">
                          <FaUser />
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 mx-auto relative">
                      <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-gray-800"
                      >
                      Password
                      </label>
                      <div className="relative">
                        <div className="w-full">
                          <input
                            type={(open === true)? 'password' : 'text'}
                            placeholder="Enter Your Password"
                            name="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#D9D9D9] border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                        </div>
                      
                        <div className="text-sm absolute top-3 right-2">
                          {
                            (open === false)? <FaEyeSlash onClick={FaToggle}/>:
                            <FaEye onClick={FaToggle}/>
                          }
                        </div>
                      </div>
                    </div>
                                        
                    <div className="mt-6 flex justify-center">
                      <button className="w-[40%] py-2 tracking-wide text-[#000000] font-bold transition-colors duration-200 transform bg-IjoRumput rounded-md hover:bg-[#8FBB63] focus:outline-none focus:bg-[#8FBB63]">
                      Login
                      </button>
                    </div>
                </form>
            </div>
          </div>

          <div className="absolute z-20 translate-y-[300px] translate-x-32">
            <Image src={MyImage} alt="" className="w-[530px] h-[394px]" />
          </div>
        </div>     
              
    </>
  );
}
