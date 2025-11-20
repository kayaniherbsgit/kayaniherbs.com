// routes/adminRoutes.js
import express from "express";
import {
  getAllUsers,
  approveUser,
  rejectUser,
} from "../controllers/adminController.js";

const router = express.Router();

// GET all users
router.get("/users", getAllUsers);

// APPROVE user
router.patch("/approve/:id", approveUser);

// REJECT user
router.patch("/reject/:id", rejectUser);

export default router;
