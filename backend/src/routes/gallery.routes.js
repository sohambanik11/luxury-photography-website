import express from "express";
import { uploadPhoto } from "../controllers/gallery.controller.js";
import { upload } from "../middleware/upload.middleware.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// Admin-only: upload photo
router.post(
  "/upload",
  verifyToken,
  upload.single("image"),
  uploadPhoto
);

export default router;
