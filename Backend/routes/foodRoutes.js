import express from "express";
import { addFood, getFoods } from "../controllers/foodController.js";
import auth from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/", getFoods);
router.post("/", auth, admin, addFood);

export default router;
