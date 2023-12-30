// tables.js
import React, { useState } from 'react';

const Tables = () => {
    const [tables] = useState(
        [
          {
            id: 1,
            kelompok: "Kelompok 1",
            jenis: "Sisdamas",
            lokasi: "Kabupaten Bandung",
            peserta: [
              {
                id: 1,
                nama: "Muhamad ",
                kelamin: "laki-laki"
              },
              {
                id: 2,
                nama: "iqbal ",
                kelamin: "laki-laki"
              },
              {
                id: 3,
                nama: "silva",
                kelamin: "perempuan"
              },
              {
                id: 4,
                nama: "diana ",
                kelamin: "perempuan"
              },
            ]
          },
          {
            id: 2,
            kelompok: "Kelompok 2",
            jenis: "Sisdamas",
            lokasi: "Kabupaten Bandung",
            peserta: [
              {
                id: 1,
                nama: "Muhamad ",
                kelamin: "laki-laki"
              },
              {
                id: 2,
                nama: "iqbal ",
                kelamin: "laki-laki"
              },
              {
                id: 3,
                nama: "hanna",
                kelamin: "perempuan"
              },
              {
                id: 4,
                nama: "nadia",
                kelamin: "perempuan"
              },
            ]
          },
      ]);

  // ... (kode lainnya)

  return (
    <>
    </>
    // ... (tampilan komponen tables)
  );
};

export default Tables;
