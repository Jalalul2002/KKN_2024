import React, { useState } from "react";
import Navbar from "../../components/navbar";
import SidebarMahasiswa from "../../components/sidebarMahasiswa";
import ReactModal from "react-modal";
import Head from "next/head";
import useSWR from "swr";

export default function KelompokKKN() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data : peserta = [], error } = useSWR(`/api/admin/mahasiswa/kelompokMahasiswaDetailQuery?id=1`, fetcher);
  const { data: data2 = [], error: error2 } = useSWR(`/api/admin/setting/kelompokDetailQuery?id=1`, fetcher);

  if (error || error2 ) {
    return <div>Error loading group details</div>;
  }

  if (!peserta || !data2 ) {
    return <div>Loading... Data Error</div>;
  }

  const nama = "Jalalul Mu'ti";
  const fakultas = "Sains dan Teknologi";
  const nomor = "081357630782";

  const [isChooseModal, setChooseModal] = useState(false);

  const openChooseModal = () => {
    setChooseModal(true);
  };
  const closeChooseModal = () => {
    setChooseModal(false);
  };
  const handleOpenModal = () => {
    openChooseModal();
  };

    // Destructure specific properties from data2
  const { jenis_kelompok, kelompok_name, ketua_name, ketua_jurusan, ketua_telpon, dosen_name, telpon_dosen } = data2;

  return (
    <>
      <Head>
        <title>Kelompok Mahasiswa</title>
        <meta property="og:title" content="Kelompok Mahasiswa" key="title" />
      </Head>
      <div className="absolute bg-IjoRumput w-full h-72 -z-20"></div>
      <div className="flex flex-row justify-start">
        <div className="w-auto h-screen">
          <SidebarMahasiswa />
        </div>
        <div className="overflow-auto h-screen grow">
          <Navbar />
          <div className="px-6 pb-5 w-auto font-medium">
            <div className="mt-20 mb-5 md:mt-28 md:mb-10 font-bold text-2xl md:text-5xl text-white">
              <h1>Kelompok KKN</h1>
            </div>
            <div className="md:flex flex-row space-y-3 md:space-y-0 md:space-x-2 lg:space-x-4 box-border">
              <div className="md:hidden p-2 bg-iceGray rounded-xl">
                <div className="flex flex-col justify-evenly w-full space-y-2">
                  <div className="border border-slate-500 rounded-lg text-center p-1">
                    <h1 className="font-bold text-base border-b-[1px] border-slate-400 mb-1">
                      Ketua Kelompok
                    </h1>
                    {data2 && data2.length > 0 ? (data2.map((data2, i) => (
                      <div key={i}>
                        <p className="font-semibold text-sm">
                          {data2.ketua_name||"-"} - {data2.ketua_jurusan||"-"} - {data2.ketua_telpon||"-"}
                        </p>
                      </div>
                    ))):(
                      <p className="font-semibold text-sm">Nama Ketua:- / Jurusan:- / Telpon:-</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleOpenModal}
                    className="px-5 py-2 bg-sky-800 hover:bg-sky-900 font-bold text-white rounded-md text-base"
                  >
                    Ajukan Ketua Kelompok
                  </button>
                  <div className="border border-slate-500 rounded-lg text-center font-semibold p-1">
                    <h1 className="font-bold text-base border-b-[1px] border-slate-400 mb-1">
                      Dosen Pembimbing
                    </h1>
                    {data2 && data2.length > 0 ? (data2.map((data2, i) => (
                      <div key={i}>
                    <p className="text-sm">{data2.dosen_name || "-"}</p>
                    <p className="text-sm">Kontak: {data2.telpon_dosen || "-"}</p>
                    </div>
                    ))):(
                      <div>
                        <p className="text-sm">Dosen Pembimbing: -</p>
                        <p className="text-sm">Kontak: - </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-6 bg-iceGray rounded-xl md:w-4/5">
                <div className="box-border mb-3">
                {data2 && data2.length>0 ? (data2.map((data2, i) => (
                      <div key={i}>
                  <h1 className="text-lg md:text-3xl font-bold">{data2.jenis_kelompok || "-"}</h1>
                  <h2 className="md:text-xl font-semibold">{data2.kelompok_name|| "-"}</h2>
                  </div>
                    ))):(
                      <div>
                        <h1 className="text-lg md:text-3xl font-bold">Jenis Kelompok : -</h1>
                        <h2 className="md:text-xl font-semibold">Kelompok : -</h2>
                      </div>
                    )}
                </div>
                <div className="box-border md:py-3 mb-3 lg:text-base text-sm overflow-x-auto">
                  <table className="w-full rounded-xl">
                    <thead>
                      <tr className="bg-IjoRumput">
                        <th className="rounded-tl-lg p-2 lg:p-4">No</th>
                        <th className="px-6 p-2 lg:p-4">Profil</th>
                        <th className="px-6 p-2 lg:p-4">Nama</th>
                        <th className="px-6 p-3 lg:p-4">Program Studi</th>
                        <th className="px-6 p-3 lg:p-4">Fakultas</th>
                        <th className="rounded-tr-lg p-3 lg:p-4">Nomor HP</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {peserta && peserta.length>0 ? (peserta.map((item, i) => (
                        <tr key={i} className="border-y border-slate-300">
                          <td className="py-1 px-1 lg:p-3">{i + 1}</td>
                          <td className="py-2 lg:p-3 flex justify-center">
                            <img
                              src={item.foto}
                              className="w-9 h-9 rounded-full"
                            />
                          </td>
                          <td className="py-1 px-3 lg:p-3">{item.name}</td>
                          <td className="py-1 px-3 lg:p-3">{item.jurusan}</td>
                          <td className="py-1 px-3 lg:p-3">{item.fakultas}</td>
                          <td className="py-1 px-3 lg:p-3">{item.telpon || "-"}</td>
                        </tr>
                      ))):(
                        <tr className="border-y border-slate-300">
                          <td className="py-1 px-1 lg:p-3">-</td>
                          <td className="py-2 lg:p-3 flex justify-center">
                            <img
                              className="w-9 h-9 rounded-full"
                            />
                          </td>
                          <td className="py-1 px-3 lg:p-3">-</td>
                          <td className="py-1 px-3 lg:p-3">-</td>
                          <td className="py-1 px-3 lg:p-3">-</td>
                          <td className="py-1 px-3 lg:p-3">-</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="hidden p-4 lg:p-5 bg-iceGray md:w-1/5 lg:2/5 rounded-xl md:flex flex-col items-center">
                <div className="mt-5 lg:mt-10 flex flex-col justify-center w-full">
                  {data2&&data2.length>0? (data2.map((data2, i) => (
                    <div key={i}>
                      <button
                        type="button"
                        onClick={handleOpenModal}
                        className="px-5 py-2 bg-sky-800 hover:bg-sky-900 font-bold text-white rounded-md md:text-base lg:text-xl"
                      >
                        Ajukan Ketua Kelompok
                      </button>
                      
                      <div className="border border-slate-500 mt-3 rounded-lg text-center text-base lg:text-xl p-3">
                        <h1 className="font-bold mb-2 border-b-[1px] border-slate-400">
                          Ketua Kelompok
                        </h1>
                        <p className="font-semibold text-sm">{data2.ketua_name}</p>
                        <p className="font-semibold text-sm">
                          {data2.ketua_jurusan}
                        </p>
                        <p className="font-semibold text-sm">
                          Kontak: {data2.ketua_telpon}
                        </p>
                      </div>
                      <div className="border border-slate-500 mt-3 rounded-lg text-center text-base lg:text-xl font-semibold p-3">
                        <h1 className="font-bold mb-2 border-b-[1px] border-slate-400">
                          Dosen Pembimbing
                        </h1>
                        <p className="text-sm">{data2.dosen_name}</p>
                        <p className="text-sm">Kontak: {data2.telpon_dosen}</p>
                      </div>
                      </div>
                    ))):(
                      <div>                        
                        <div className="border border-slate-500 mt-3 rounded-lg text-center text-base lg:text-xl p-3">
                          <h1 className="font-bold mb-2 border-b-[1px] border-slate-400">
                            Ketua Kelompok
                          </h1>
                          <p className="font-semibold text-sm">Nama: -</p>
                          <p className="font-semibold text-sm">
                            Jurusan: -
                          </p>
                          <p className="font-semibold text-sm">
                            Kontak: -
                          </p>
                        </div>
                        <div className="border border-slate-500 mt-3 rounded-lg text-center text-base lg:text-xl font-semibold p-3">
                          <h1 className="font-bold mb-2 border-b-[1px] border-slate-400">
                            Dosen Pembimbing
                          </h1>
                          <p className="text-sm">-</p>
                          <p className="text-sm">Kontak: -</p>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactModal
        isOpen={isChooseModal}
        onRequestClose={closeChooseModal}
        contentLabel="Konfirmasi Pengajuan"
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            width: "auto",
            height: "auto",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <div className="flex flex-col justify-center items-center font-medium text-lg mt-6">
          <h1 className="font-bold">Ketua Kelompok</h1>
          <form>
            <div className="p-3 mb-5">
              {/* <select className="w-52 rounded-md">
                <option value="">-- Pilih Ketua --</option>
                {peserta.map((item, i) => (
                  <option key={i} value={item.nim}>
                    {item.nama}
                  </option>
                ))}
              </select> */}
              <div>
                {/* {data2.map((data2, i) => (
                <div key={i}> */}

                  <label
                    htmlFor="nama"
                    className="block mb-1 font-semibold text-sm md:text-base"
                  >
                    Nama Ketua Kelompok
                  </label>
                  <input
                    id="nama"
                    className="disabled w-full rounded-md text-xs md:text-base"
                    value={nama}
                  ></input>
                  <div>
                    <label
                      htmlFor="fakultas"
                      className="block mb-1 font-semibold text-sm md:text-base"
                    >
                      Fakultas
                    </label>
                    <input
                      id="fakultas"
                      className="disabled w-full rounded-md text-xs md:text-base"
                      value={fakultas}
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor="kontak"
                      className="block mb-1 font-semibold text-sm md:text-base"
                    >
                      Kontak
                    </label>
                    <input
                      id="kontak"
                      className="disabled w-full rounded-md text-xs md:text-base"
                      value={nomor}
                    ></input>
                  </div>
                
                {/* </div>
                ))} */}
              </div>
            </div>
            <div className="flex flex-row space-x-3 justify-center mb-3">
              <button
                type="button"
                onClick={closeChooseModal}
                className="bg-red-600 hover:bg-red-700 px-5 py-1 text-white rounded-lg text-sm md:text-lg"
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-5 py-1 text-white rounded-lg text-sm md:text-lg"
              >
                Input
              </button>
            </div>
          </form>
        </div>
      </ReactModal>
    </>
  );
}
