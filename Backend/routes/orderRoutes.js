import express from "express";
import auth from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";
import {
  placeOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
  stripePayment
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", auth, placeOrder);
router.get("/my", auth, getUserOrders);
router.get("/admin", auth, admin, getAllOrders);
router.put("/:id", auth, admin, updateOrderStatus);
router.post("/payment", auth, stripePayment);
router.put("/:id/status", auth, admin, updateOrderStatus);

export default router;
