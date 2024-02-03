// File: pages/api/download.js
import db from "@/pages/lib/connectDatabase";
import fs from 'fs';
import path from 'path';


export default async (req, res) => {
  if (req.method === 'GET') {
    const { laporan } = req.query;

    try {
      // Ambil path file dari database berdasarkan file_patch
      const selectSql = 'SELECT laporan FROM file WHERE laporan = ?';
      const [result] = await db.promise().query(selectSql, [laporan]);

      if (result.length > 0) {
        const filePath = result[0].laporan;
        
        // Set header untuk pengaturan unduhan
        res.setHeader('Content-Disposition', `attachment; filename=${encodeURIComponent(filePath)}`);
        res.setHeader('Content-Type', 'application/pdf');

        // Baca file dari sistem file dan kirimkan sebagai respons
        const fileStream = fs.createReadStream(path.join(process.cwd(),'uploads', 'pdf', 'laporan', filePath));
        fileStream.pipe(res);

      } else {
        return res.status(404).json({ error: 'File tidak ditemukan' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Gagal mengambil file', details: error.message });
    }
  } else {
    return res.status(405).end();
  }
};