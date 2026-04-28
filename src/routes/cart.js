import express from "express";
import {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAllCarts,
} from "../controllers/cartController.js";

import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE
router.post("/", verifyToken, createCart);

// UPDATE (by userId)
router.put("/:userId", verifyTokenAndAuthorization, updateCart);

// DELETE (by userId)
router.delete("/:userId", verifyTokenAndAuthorization, deleteCart);

// GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);

// GET ALL (ADMIN)
router.get("/", verifyTokenAndAdmin, getAllCarts);

export default router;