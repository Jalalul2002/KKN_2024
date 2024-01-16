// pages/api/admin/mahasiswa/nilaiDetailQuery.js
import condb from "@/pages/lib/connectDatabase";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const [result] = await condb
      .promise()
      .query(
        `
        SELECT
          kelompok.id,
          kelompok.name,
          jenis_kkn.name AS jenis,
          lokasi.kelurahan,
          lokasi.kecamatan,
          lokasi.kota,
          lokasi.provinsi,
          dosen.nama AS dosen
        FROM
          kelompok
        JOIN
          lokasi ON kelompok.id_lokasi = lokasi.id
        JOIN
          dosen ON kelompok.id_dosen = dosen.id_dosen
        JOIN
          jenis_kkn ON kelompok.id_jenis_kkn = jenis_kkn.id
        WHERE
          kelompok.id = ?
      `,
        [id]
      );

    if (result.length === 0) {
      res.status(404).json({ error: 'Group not found' });
    } else {
      res.status(200).json(result[0]);
    }
  } catch (error) {
    console.error('Error fetching group details from MySQL:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
