import condb from "@/pages/lib/connectDatabase";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const [result] = await condb
      .promise()
      .query(
        `SELECT
          k.id AS kelompok_id,
          k.name AS kelompok_name,
          l.kota AS lokasi_kota,
          l.negara AS lokasi_negara,
          m.name AS ketua_name,
          m.telpon AS ketua_telpon
        FROM
          dosen d
        JOIN
          kelompok k ON d.nip = k.id_dosen
        JOIN
          lokasi l ON k.id_lokasi = l.id
        JOIN
          mahasiswa m ON k.id_ketua = m.nim
        WHERE
          d.nip = ?;`,
        [id]
      );

    if (result.length === 0) {
      res.status(404).json({ error: 'No group found for the given parameters' });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error('Error fetching group details from MySQL:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
