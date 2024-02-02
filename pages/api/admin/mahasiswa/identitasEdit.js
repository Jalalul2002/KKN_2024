import condb from "@/pages/lib/connectDatabase";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { nim, nama, jurusan, fakultas, telpon, gender, jenis_kkn } = req.body;

    // Validate input
    if (!nim || !nama || !gender) {
      console.error("Validation Error: NIM, Name, and Gender fields are required.");
      return res.status(400).json({ success: false, message: "NIM, Name, and Gender fields are required." });
    }

    try {
      // Update the data in the database
      const [result] = await condb
        .promise()
        .query("UPDATE mahasiswa SET name = ?, jurusan = ?, fakultas = ?, telpon = ?, gender = ?, jenis_kkn = ? WHERE nim = ?", [
          nama,
          jurusan || null,
          fakultas || null,
          telpon || null,
          gender,
          jenis_kkn || null,
          nim
        ]);

      if (result.affectedRows === 0) {
        console.log("Data not found for NIM:", nim);
        return res.status(404).json({ success: false, message: "Data not found." });
      }

      console.log("Data updated successfully for NIM:", nim);
      res.status(200).json({ success: true, message: "Data updated successfully." });
    } catch (error) {
      console.error("Error updating data in MySQL:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } else {
    console.error("Method Not Allowed: Only PUT requests are allowed.");
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
