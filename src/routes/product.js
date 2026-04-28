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

router.post("/", verifyTokenAndAdmin, createProduct);

router.put("/:id", verifyTokenAndAdmin, updateProduct);

router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

router.get("/find/:id", getProduct);

router.get("/", getProducts);

export default router;
