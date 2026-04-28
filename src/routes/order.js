import express from "express";
import {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrders,
  getAllOrders,
  getMonthlyIncome,
} from "../controllers/orderController.js";

import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE
router.post("/", verifyToken, createOrder);

// UPDATE (ADMIN)
router.put("/:id", verifyTokenAndAdmin, updateOrder);

// DELETE (ADMIN)
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

// GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrders);

// GET ALL (ADMIN)
router.get("/", verifyTokenAndAdmin, getAllOrders);

// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

export default router;