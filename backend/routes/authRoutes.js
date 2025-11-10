import express from "express";
import multer from "multer";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

// USING DISK STORAGE (Cloudinary will read the file)
const upload = multer({ dest: "uploads/" });

// Signup → includes profile pic
router.post("/signup", upload.single("profileImage"), signup);

// Login
router.post("/login", login);

export default router;
