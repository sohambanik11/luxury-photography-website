import { pool } from "../config/db.js";

export const addReview = async (req, res) => {
  const { name, rating, comment } = req.body;
  await pool.query(
    "INSERT INTO reviews(name,rating,comment) VALUES($1,$2,$3)",
    [name, rating, comment]
  );
  res.json({ message: "Review added" });
};
