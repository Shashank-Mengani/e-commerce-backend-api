import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats,
} from "../controllers/userController.js";

import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);

router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

router.get("/find/:id", verifyTokenAndAdmin, getUser);

router.get("/", verifyTokenAndAdmin, getAllUsers);

router.get("/stats", verifyTokenAndAdmin, getUserStats);

export default router;
