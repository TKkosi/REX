import express from "express";
import { getAnalytics } from "../controllers/analyticsController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware, getAnalytics);

export default router;
