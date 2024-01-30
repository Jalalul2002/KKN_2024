import condb from "@/pages/lib/connectDatabase";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { nim } = req.body;

    // Validate input
    if (!nim) {
      console.error("Validation Error: NIM is required for deletion.");
      return res.status(400).json({ success: false, message: "NIM is required for deletion." });
    }

    try {
      // Delete the data from the database
      const [result] = await condb
        .promise()
        .query("DELETE FROM mahasiswa WHERE nim = ?", [nim]);

      // Check if a record was deleted
      if (result.affectedRows === 0) {
        console.log(`Mahasiswa not found for NIM: ${nim}`);
        return res.status(404).json({ success: false, message: "Mahasiswa not found." });
      }

      console.log(`Mahasiswa deleted successfully for NIM: ${nim}`);
      res.status(200).json({ success: true, message: "Mahasiswa deleted successfully." });
    } catch (error) {
      console.error("Error deleting data from MySQL:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } else {
    console.error("Method Not Allowed: Only DELETE requests are allowed.");
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
