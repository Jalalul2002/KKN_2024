import React from "react";
import SidebarMahasiswa from "../component/sidebarMahasiswa";
import Navbar from "../component/navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <SidebarMahasiswa />
      <div className="top-0 left-0 m-0 p-0 w-full h-full">
        <div className="bg-IjoRumput w-full h-72 relative -z-10">
          <div className="absolute top-20 left-64 font-bold text-5xl text-white">
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className="md:left-64 md:right-12 top-40 absolute">
          <div className="p-6 bg-iceGray rounded-xl">
            <h1 className="text-lg font-bold py-2">Timeline KKN</h1>
            <img
              src="/images/timeline.jpeg"
              alt="Timeline KKN Image"
              className=" xl:max-w-screen"
            />
          </div>
        </div>
      </div>
    </>
  );
}
