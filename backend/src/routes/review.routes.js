import express from "express";
import { addReview } from "../controllers/review.controller.js";

const router = express.Router();

// Public: add review
router.post("/", addReview);

// Later you can add:
// router.get("/", getAllReviews);

export default router;
