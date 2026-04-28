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

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateUser);

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

// GET USER
router.get("/find/:id", verifyTokenAndAdmin, getUser);

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, getAllUsers);

// GET STATS
router.get("/stats", verifyTokenAndAdmin, getUserStats);

export default router;