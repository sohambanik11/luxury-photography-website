import { pool } from "../config/db.js";

export const createBooking = async (req, res) => {
  const { name, email, phone, service, event_date, message } = req.body;
  await pool.query(
    "INSERT INTO bookings(name,email,phone,service,event_date,message) VALUES($1,$2,$3,$4,$5,$6)",
    [name, email, phone, service, event_date, message]
  );
  res.json({ message: "Booking submitted" });
};
