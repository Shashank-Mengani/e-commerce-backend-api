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

router.post("/", verifyToken, createCart);

router.put("/:userId", verifyTokenAndAuthorization, updateCart);

router.delete("/:userId", verifyTokenAndAuthorization, deleteCart);

router.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);

router.get("/", verifyTokenAndAdmin, getAllCarts);

export default router;
