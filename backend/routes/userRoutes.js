// routes/userRoutes.js
import express from "express";
import multer from "multer";
import auth from "../middleware/auth.js"; // your existing auth middleware
import { updateUser } from "../controllers/userController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// PATCH /api/users/update  (authenticated)
router.patch("/update", auth, upload.single("profileImage"), updateUser);

export default router;
