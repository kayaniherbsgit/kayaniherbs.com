// routes/authRoutes.js
import express from "express";
import multer from "multer";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

// Use disk storage for Render + Cloudinary
const upload = multer({ dest: "uploads/" });

// Signup route with image
router.post("/signup", upload.single("profileImage"), signup);

// Login route
router.post("/login", login);

export default router;
