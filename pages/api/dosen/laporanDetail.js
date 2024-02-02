import db from "../../lib/connectDatabase";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const [data] = await db.promise().query(`
      SELECT
        k.id AS id,
        m.telpon AS telpon_ketua,
        k.name AS kelompok,
        k.id_ketua AS ketua,
        d.nip AS nip_dosen,
        d.nama AS nama_dosen,
        CONCAT_WS(', ',
          lo.kelurahan,
          lo.kecamatan,
          lo.kota,
          lo.provinsi
        ) AS lokasi,
        COUNT(m.nim) AS anggota
      FROM
        kelompok k
      JOIN
        dosen d ON k.id_dosen = d.nip
      JOIN
        lokasi lo ON k.id_lokasi = lo.id
      LEFT JOIN
        kelompok_mahasiswa km ON k.id = km.kelompok_id
      LEFT JOIN
        mahasiswa m ON km.mahasiswa_id = m.nim
      WHERE
        k.id = ?
      GROUP BY
        k.id;
    `, [id]);

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'Data tidak ditemukan' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Kesalahan Server Internal' });
  }
}