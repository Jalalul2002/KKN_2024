import condb from '../../lib/connectDatabase';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const mahasiswaId = req.query.mahasiswaId;

    try {
      // Gunakan connection.query langsung tanpa menggunakan promise()
      const [result] = await condb.promise().query("SELECT * FROM logbook WHERE mahasiswa_id = ?", [mahasiswaId]);

      // Log tambahan setelah query berhasil dieksekusi
      
      if (result !== undefined && result !== null) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ success: false, message: 'Logbook not found' });
      }
    } catch (error) {
      console.error('Error fetching logbook data:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
