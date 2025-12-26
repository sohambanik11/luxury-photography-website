import express from "express";
import { sendMessage } from "../controllers/contact.controller.js";

const router = express.Router();

// Public contact form
router.post("/", sendMessage);

export default router;
