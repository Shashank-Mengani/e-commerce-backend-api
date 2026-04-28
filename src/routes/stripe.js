import express from "express";
import { createPayment } from "../controllers/stripeController.js";

const router = express.Router();

router.post("/payment", createPayment);

export default router;