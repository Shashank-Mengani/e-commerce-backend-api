import express from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from "../controllers/productController.js";

import {
  verifyTokenAndAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE
router.post("/", verifyTokenAndAdmin, createProduct);

// UPDATE
router.put("/:id", verifyTokenAndAdmin, updateProduct);

// DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

// GET ONE
router.get("/find/:id", getProduct);

// GET ALL
router.get("/", getProducts);

export default router;