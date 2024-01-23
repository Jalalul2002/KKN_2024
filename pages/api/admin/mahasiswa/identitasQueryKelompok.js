// pages/api/lokasi.js
import condb from "../../../lib/connectDatabase";

export default async function handler(req, res) {
  try {
    const [dataRows] = await condb.promise().query('SELECT * FROM kelompok_mahasiswa');
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
