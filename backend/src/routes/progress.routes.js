import express from "express";
import {
  markTaskDone,
  getUserProgress
} from "../controllers/progress.controller.js";

const router = express.Router();
router.post("/complete", markTaskDone);
router.get("/:userId", getUserProgress);
export default router;