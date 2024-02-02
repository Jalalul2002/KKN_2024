import condb from "@/pages/lib/connectDatabase";

export default async function handler(req, res) {
  try {
    const [result] = await condb.promise().query(`
    SELECT
        COUNT(DISTINCT d.nip) AS dosen_count,
        COUNT(DISTINCT m.nim) AS mahasiswa_count,
        COUNT(DISTINCT CASE WHEN m.gender = 'Male' THEN m.nim END) AS male_mahasiswa_count,
        COUNT(DISTINCT CASE WHEN m.gender = 'Female' THEN m.nim END) AS female_mahasiswa_count
    FROM
        dosen d
    LEFT JOIN
        kelompok k ON d.nip = k.id_dosen
    LEFT JOIN
        kelompok_mahasiswa km ON k.id = km.kelompok_id
    LEFT JOIN
        mahasiswa m ON km.mahasiswa_id = m.nim;
    `);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data from MySQL:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
