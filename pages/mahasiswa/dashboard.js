import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="top-0 left-0 m-0 p-0 w-full h-full">
        <div className="bg-IjoRumput w-full h-72"></div>
        <div className="w- translate-x-[280px] bg-black">
          <h1>Dashboard</h1>
          <div>

          </div>
        </div>
      </div>
    </>
  );
}
