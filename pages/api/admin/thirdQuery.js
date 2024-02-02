import condb from "@/pages/lib/connectDatabase";

export default async function handler(req, res) {
  try {
    const [result] = await condb.promise().query(`
    SELECT
        jenis_kkn,
        COUNT(*) AS jenis_kkn_count
    FROM
        mahasiswa
    GROUP BY
        jenis_kkn;
    `);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data from MySQL:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
