// pages/api/mahasiswa/profilSave.js
import condb from "@/pages/lib/connectDatabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const {
    nim,
    nama,
    jk,
    nama_jur,
    fakultas,
    telepon_seluler,
    // Add other fields as needed
  } = req.body;

  try {
    // Assuming "mahasiswa" is the table name in your database
    await condb
      .promise()
      .query(
        `INSERT INTO mahasiswa (nim, name, gender, jurusan, fakultas, telpon)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [nim, nama, jk, nama_jur, fakultas, telepon_seluler]
      );

    res.status(200).json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
