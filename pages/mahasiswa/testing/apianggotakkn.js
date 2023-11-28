// pages/api/getAnggotakkn.js
import db from '../../lib/db';

export default async function handler(req, res) {
  try {
    const result = await db.query(
      'SELECT ang.id_anggotakkn, m.mahasiswa_nim, m.mahasiswa_nama, ang.jeniskkn FROM anggotakkn ang JOIN mahasiswa m ON ang.idmahasiswa = m.id_mahasiswa'
    );

    res.status(200).json(result);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
