import db from "@/pages/lib/connectDatabase"; 

export default async function handler(req, res) {
  try {
    // Ambil data logbook dari database
    const [logbookData] = await db.promise()
      .query('SELECT kelompok.id, kelompok.name AS kelompok, dosen.nama AS dosen, CONCAT(lokasi.kelurahan, ", ", lokasi.kecamatan, ", ", lokasi.kota, ", ", lokasi.provinsi) AS lokasi FROM kelompok JOIN dosen ON kelompok.id_dosen = dosen.nip JOIN lokasi ON kelompok.id_lokasi = lokasi.id');

    res.status(200).json(logbookData);
  } catch (error) {
    console.error('Error fetching logbook data:', error);
    res.status(500).json({ error: 'Error fetching logbook data', details: error.message });
  }
}