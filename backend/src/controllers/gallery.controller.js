import { pool } from "../config/db.js";

export const uploadPhoto = async (req, res) => {
  const { gallery_id } = req.body;
  const image_url = req.file.filename;

  await pool.query(
    "INSERT INTO photos(gallery_id,image_url) VALUES($1,$2)",
    [gallery_id, image_url]
  );

  res.json({ message: "Photo uploaded" });
};
