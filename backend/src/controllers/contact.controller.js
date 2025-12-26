import { pool } from "../config/db.js";
import { transporter } from "../config/mail.js";

export const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  await pool.query(
    "INSERT INTO contacts(name,email,message) VALUES($1,$2,$3)",
    [name, email, message]
  );

  await transporter.sendMail({
    to: process.env.EMAIL_USER,
    subject: "New Contact Message",
    text: message
  });

  res.json({ message: "Message sent" });
};
